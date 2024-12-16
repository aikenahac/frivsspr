FROM node:18-alpine AS builder

# Install necessary dependencies for Prisma and OpenSSL
RUN apk add --no-cache openssl

WORKDIR /app

# Copy only package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install global and project dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the project files
COPY . .

# Generate Prisma client
RUN pnpx prisma generate

# Build the project
RUN pnpm build

# Prune production dependencies
RUN pnpm prune --production

# Final stage
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["node","build/index.js"]

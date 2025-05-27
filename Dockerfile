FROM node:18-alpine

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
RUN pnpm dlx prisma generate

# Build the project
RUN pnpm build

# Prune production dependencies
RUN pnpm prune --production

# Use the correct entry point for your built application
CMD ["node", "build/index.js"]

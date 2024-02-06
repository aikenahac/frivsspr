FROM node:16-alpine AS build

RUN npm i -g pnpm

# Fetch dependencies
COPY pnpm-lock.yaml ./
RUN pnpm fetch

# Copy all files
ADD . .

# Install dependencies from local store
RUN pnpm install --offline

# Generate prisma client
# RUN sed -i '4,6d' prisma/schema.prisma
RUN pnpx prisma generate

# Set default environment variables
ENV DATABASE_URL=""

# Build app
RUN pnpm build

# Remove development dependencies
RUN pnpm prune --production

FROM node:16-alpine as app

WORKDIR /app

RUN npm i -g prisma

COPY --from=build ./package.json ./package.json
COPY --from=build ./node_modules ./node_modules
COPY --from=build ./build .
COPY --from=build ./prisma ./prisma
COPY --from=build ./src/init.ts ./src/init.ts
COPY --from=build ./src/content.ts ./src/content.ts

CMD [ "node", "index.js" ]
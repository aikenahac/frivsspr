FROM node:18-alpine AS frivsspr

WORKDIR /app

COPY . .

RUN npm install -g pnpm prisma

RUN pnpx prisma generate

ENV DATABASE_URL=""
ENV ADMIN_PASSWORD=""

RUN pnpm build
RUN pnpm prune --production

# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["node","build/index.js"]

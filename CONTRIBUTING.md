# Contributing guide for FRIVSSPr

## Project setup

### Prerequisites
- NodeJS
- pnpm
- npx

### Install dependencies

```
pnpm install
```

### Run development environment

```
docker compose -f docker-compose.dev.yaml up

pnpm dev
```

## Formatting

If you're using VSCode the [prettier extension]() should handle all the formatting.

If not you can use the following command to format the code before commiting.

```
pnpm format
```

## MRs

When you're ready to create a merge request, the merge request should contain an explanation of what you did, how and why. If needed link to messages on the Discord serverl

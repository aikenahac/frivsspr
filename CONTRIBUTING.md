# Contributing guide for FRIVSSPr

## Project setup

### Prerequisites
- NodeJS
- pnpm
- npx

### Install dependencies

```zsh
pnpm install
```

### Set up database

```zsh
# Start the database
pnpm docker:dev

# Run the inital migration
pnpm db:init

# Seed the database
pnpm db:seed
```

### Run development environment

```zsh
pnpm dev
```

## Formatting

[Prettier](https://prettier.io/) is used for formatting and should handle all the formatting.

If your editor does not support the prettier extension, run the following command to format the code before submitting a PR:
```
pnpm format
```

## PRs

When you're ready to create a pull request, it should contain an explanation of what you did, how and why.
If applicable:
- link the issue that you're solving,
- link to messages on the FRI Discord server.

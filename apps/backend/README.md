# Task Sync - Backend

This is the backend for the Task Sync app.

## Table Of Contents

- [Developer Section](#developer-section)
  - [Requirements](#requirements)
  - [Dependencies](#dependencies)
  - [Setup](#setup)

## Developer Section

### Requirements

- [Node.js](https://nodejs.org/) v20.18.0 or higher.
- [PostgreSQL](https://www.postgresql.org/) v15.8 or higher.

### Dependencies

Packages that build this backend.

[nestjs]: https://docs.nestjs.com/
[objectionjs]: https://vincit.github.io/objection.js/

- [NestJS][nestjs] -- Node.js framework.
- [ObjectionJS][objectionjs] -- ORM library

### Setup

Open terminal on `apps/backend` then run the following command.

1. Setup `.env` file. Use [`.env.example`](.env.example) as environment
   values reference.

2. Run database migration

   ```sh
   npm run migrate
   ```

3. Now you can run the backend

   ```sh
   npm run start

   # Reload server on file changes
   npm run start:dev
   ```

To create new migration, do `migrate:make`.

```sh
npm run migrate:make <migrate_file_name>
```

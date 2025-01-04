# Task Sync

Simple Project Management app where users can create, update, and manage
tasks, assign them to team members, track progress, and set deadlines.

## Table Of Contents

- [Developer Section](#developer-section)
  - [Requirements](#requirements)
  - [Dependencies](#dependencies)
  - [Folder Structures](#folder-structures)
  - [Setup](#setup)
  - [Git Conventions](#git-conventions)

## Developer Section

### Requirements

- [Node.js](https://nodejs.org/) v20.18.0 or higher.
- [PostgreSQL](https://www.postgresql.org/) v15.8 or higher.

### Dependencies

[fe-md]: apps/frontend/README.md
[be-md]: apps/backend/README.md

Main dependencies that build this project.

#### Frontend

[remixjs]: https://remix.run/docs

- [RemixJS][remixjs] -- React routing framework

Visit frontend [README.md][fe-md] for more information.

#### Backend

[nestjs]: https://docs.nestjs.com/

- [NestJS][nestjs] -- Node.js framework with built-in
  controller abstraction and dependency injection.

Visit backend [README.md][be-md] for more information.

### Folder Structures

#### Main Directories

[shared-deps]: packages/shared/package.json

- [`packages/shared`][shared-deps] -- shared utilities used by apps.
- [`apps/backend`][be-md] -- backend directory
- [`apps/frontend`][fe-md] -- frontend directory

#### Folder Structure

[clean-arch]: https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/

This project is follow the [Clean Architecture][clean-arch] principles.

- `src/` -- source code
  - `domain/` -- domain layer (entities and services abstractions)
  - `infrastructures/` -- infrastructure layer (services implementations)
  - `use_cases/` -- application logic layer
  - `interfaces/` -- interfaces layer (routes, states, etc)

- `**/libs/` -- contain constants, enums, or other utilities for that
  directory.

### Setup

#### Environment Setup

On the project **root directory**, run the following commands.

1. Install dependencies

   ```sh
   npm install
   ```

2. Initialize git hooks

   ```sh
   npx simple-git-hooks
   ```

3. Build shared package. Do this everytime you make changes on
   [shared][shared-deps] package.

   ```sh
   npm run build:shared
   ```

4. Setup `.env` file on each apps. Use `.env.example` as environment values
   reference.

   - [apps/backend/.env.example](apps/backend/.env.example)

5. Now you can run the app.

   ```sh
   # intial backend run
   npm run migrate -w backend
   npm run start:be
   ```

Check each [frontend][fe-md] and [backend][be-md]
README.md for more setup/run command.

### Git Conventions

[conventional-commits]: https://www.conventionalcommits.org

We use [Conventional Commits][conventional-commits] to handle Git commit
messages, and Github PR titles.

For more details about the supported commit types/scopes, refer to
[`gitlint.config.ts`](gitlint.config.ts) file.

#### Issue Title

```sh
<type>(<scopes(optional)>): <content>
```

Examples:

- `bug: invalid user orm`
- `feat(frontend): authentication pages`
- `test(frontend/backend): need test for auth use cases`

##### Commit Message / PR Title

```sh
<type>(<scopes(optional)>): <content> ts-<issue-number>
```

Examples:

- `feat: authentication pages ts-25`
- `fix(backend): fix invalid user orm ts-502`
- `test(frontend/backend): add test for auth use cases ts-250`

##### Branch Name

```sh
<type>-<content>-ts-<issue-number>
```

Examples:

- `feat-authentication-pages-ts-25`
- `fix-invalid-user-orm-ts-502`

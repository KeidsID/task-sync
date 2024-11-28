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

Main dependencies that build this project.

#### Frontend

[remixjs]: https://remix.run/docs

- [RemixJS][remixjs] -- React routing framework

Visit frontend [README.md](apps/frontend/README.md) for more information.

#### Backend

[nestjs]: https://docs.nestjs.com/

- [NestJS][nestjs] -- Node.js framework with built-in
  controller abstraction and dependency injection.

Visit backend [README.md](apps/backend/README.md) for more information.

### Folder Structures

#### Main Directories

[shared-dir]: packages/shared/package.json
[be-dir]: apps/backend/package.json
[fe-dir]: apps/frontend/package.json

- [`packages/shared`][shared-dir] -- shared utilities used by apps.
- [`apps/backend`][be-dir] -- backend directory
- [`apps/frontend`][fe-dir] -- frontend directory

#### Folder Structure

[clean-arch]: https://www.geeksforgeeks.org/complete-guide-to-clean-architecture/

This project is follow the [Clean Architecture][clean-arch] principles.

- `src/` -- source code
  - `domain/` -- domain layer (entities and services abstractions)
  - `infrastructures/` -- infrastructure layer (services implementations)
  - `use_cases/` -- application logic layer
  - `interfaces/` -- interfaces layer (routes, states, etc)
  - `libs/` -- contain constants, enums, utilities, etc.

### Setup

#### Environment Setup

On the project **root directory**, run the following commands.

1. Install dependencies

   ```sh
   npm install
   ```

2. Inittialize git hooks

   ```sh
   npx simple-git-hooks
   ```

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

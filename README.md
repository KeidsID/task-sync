# Task Sync

Simple Project Management app where users can create, update, and manage
tasks, assign them to team members, track progress, and set deadlines.

## Table Of Contents

- [Developer Section](#developer-section)
  - [Requirements](#requirements)
  - [Dependencies](#dependencies)
  - [Project Structures](#project-structures)
  - [How To Run](#how-to-run)
  - [Git Conventions](#git-conventions)

## Developer Section

### Requirements

- [Node.js](https://nodejs.org/) v20.18.0 or higher.
- [PostgreSQL](https://www.postgresql.org/) v15.8 or higher.

### Dependencies

3rd-party dependencies that you need to know before working on this project.

#### Frontend

...

#### Backend

[nestjs]: https://docs.nestjs.com/

- [NestJS][nestjs] -- Node.js framework with built-in
  controller abstraction and dependency injection.

### Project Structures

...

### How To Run

...

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

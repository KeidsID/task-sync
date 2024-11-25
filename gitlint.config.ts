export const GitlintConfig = {
  TYPES: [
    "build",
    "chore",
    "docs",
    "feat",
    "fix",
    "refactor",
    "revert",
    "style",
    "test",
  ],
  SCOPES: ["frontend", "backend", "shared", "root"],
  ISSUE_PREFIXES: ["ts", "release"],
} as const;

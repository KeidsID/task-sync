import { danger, fail, type GitHubPRDSL } from "danger";

import { GitlintConfig } from "./gitlint.config";

type GithubPRRef = GitHubPRDSL & {
  labels: unknown[];
  milestone: Record<string, unknown> | null;
};

type PRLintConfig = {
  BRANCH: { PATTERN: RegExp | null };
  TITLE: { PATTERN: RegExp | null };
  ASSIGNEES: { IS_REQUIRED: boolean };
  LABELS: { IS_REQUIRED: boolean };
};

const pr = danger.github.pr as GithubPRRef;

const types = GitlintConfig.TYPES;
const scopes = GitlintConfig.SCOPES;
const config: PRLintConfig = {
  BRANCH: {
    PATTERN: new RegExp(`^(main)$|\\d{1,6}-${types.join("|")}-[a-zA-Z\\d-]+$`),
  },
  TITLE: {
    PATTERN: new RegExp(
      `^(${types.join("|")})` +
        `(\\((${scopes.join("|")})(\\/(${scopes.join("|")}))*\\))?` +
        ": (.*\\S )?" +
        `(${GitlintConfig.ISSUE_PREFIXES.join("|")})-` +
        "\\d{1,6}((\\.\\d+){1,2})?$"
    ),
  },
  ASSIGNEES: { IS_REQUIRED: true },
  LABELS: { IS_REQUIRED: true },
};

const bootstrap = (): void => {
  const {
    BRANCH: { PATTERN: branchPattern },
    TITLE: { PATTERN: titlePattern },
    ASSIGNEES: { IS_REQUIRED: isAssigneesRequired },
    LABELS: { IS_REQUIRED: isLabelsRequired },
  } = config;

  if (branchPattern) {
    const isBranchValid = branchPattern.test(pr.head.ref);

    if (!isBranchValid) {
      fail(
        `The pull request branch should match the following pattern: ${String(
          branchPattern
        )}.`
      );
    }
  }

  if (titlePattern) {
    const isTitleValid = titlePattern.test(pr.title);

    if (!isTitleValid) {
      fail(
        `The pull request title should match the following pattern: ${String(
          titlePattern
        )}`
      );
    }
  }

  if (isAssigneesRequired) {
    const hasAssignees = Boolean(pr.assignee);

    if (!hasAssignees) {
      fail("This pull request should have at least one assignee.");
    }
  }

  if (isLabelsRequired) {
    const hasLabels = pr.labels.length > 0;

    if (!hasLabels) {
      fail("This pull request should have at least one label.");
    }
  }
};

bootstrap();

# Issue Seed Files

Add Markdown files here to create GitHub issues automatically.

Workflow:
- .github/workflows/create-issues-from-seed.yml

Current behavior:
- If this folder only contains this README, no issues are created.
- Issues are only created from .md files other than README.md.

Seed file format:

```yaml
---
id: unique-issue-id
title: Issue title
labels: feature, backend
milestone: Phase 0 - Foundation Completion
---
```

Then add the issue body in Markdown below the front matter.

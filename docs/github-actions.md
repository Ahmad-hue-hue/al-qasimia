## GitHub Actions — CI/CD

This repo uses a single workflow: [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml).

### Triggers

| Event | Branch | Jobs |
|-------|--------|------|
| `pull_request` | `main` | Lint & Build only |
| `push` | `main` | Lint & Build → Deploy (if quality passes) |

According to [GitHub Actions workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax), the deploy job uses `if: github.event_name == 'push'` so PRs never deploy.

### Required secrets

Add these under **Settings → Secrets and variables → Actions**:

| Secret | Purpose |
|--------|---------|
| `VERCEL_TOKEN` | Vercel API token |
| `VERCEL_ORG_ID` | Vercel team/org ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |

Docs: [Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)

If these secrets are **not** set, the deploy job skips the Vercel action step and succeeds — production still deploys through the [Vercel GitHub integration](https://vercel.com/docs/deployments/git) already linked to this repo.

### Production environment

The deploy job references a `production` environment (see [deployment environments](https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments)). Optional: add required reviewers or branch protection on that environment in **Settings → Environments**.

### Concurrency

- Workflow-level: cancels in-progress runs on the same ref when a new push arrives.
- Deploy job: `production-deploy` group ensures one production deployment at a time ([control concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-concurrency)).

### Local parity

```bash
bun install --frozen-lockfile
bun run lint
bun run build
```

Same commands as the `quality` job — [Building and testing Node.js](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs).

# CI/CD Pipeline

## Overview

The application uses GitHub Actions for continuous integration and continuous deployment. The pipeline automatically tests, builds, and deploys the application to GitHub Pages on every push to the main branch.

## Workflow Configuration

### File Location
`.github/workflows/ci.yml`

### Trigger Events
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

**Triggers:**
- Push to `main` branch - Full pipeline including deployment
- Pull request to `main` - Test and build only (no deployment)

### Permissions
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

**Required for:**
- Reading repository contents
- Writing to GitHub Pages
- OIDC token for deployment

### Concurrency Control
```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false
```

Ensures only one deployment runs at a time, preventing conflicts.

## Pipeline Jobs

### Job 1: Test

**Purpose:** Validate code quality and correctness

**Runs on:** `ubuntu-latest`

**Steps:**
1. **Checkout** - Clone repository with `actions/checkout@v4`
2. **Setup Node.js** - Install Node.js 20 with npm cache
3. **Install dependencies** - Run `npm ci` for clean install
4. **Run linter** - Execute `npm run lint` to check code quality
5. **Run tests** - Execute `npm run test` to verify functionality

**Exit conditions:**
- Linter errors block the pipeline
- Test failures block the pipeline
- All checks must pass to proceed

### Job 2: Build

**Purpose:** Create production build artifacts

**Runs on:** `ubuntu-latest`

**Dependencies:** Requires `test` job to complete successfully

**Steps:**
1. **Checkout** - Clone repository
2. **Setup Node.js** - Install Node.js 20 with npm cache
3. **Install dependencies** - Run `npm ci`
4. **Build** - Execute `npm run build` (TypeScript + Vite)
5. **Upload artifact** - Upload `dist/` directory with `actions/upload-pages-artifact@v3`

**Build process:**
- TypeScript compilation (`tsc`)
- Vite bundling and optimization
- Asset hashing for cache busting
- Output to `dist/` directory

### Job 3: Deploy

**Purpose:** Deploy to GitHub Pages

**Runs on:** `ubuntu-latest`

**Dependencies:** Requires `build` job to complete successfully

**Conditions:**
```yaml
if: github.ref == 'refs/heads/main' && github.event_name == 'push'
```

Only runs when:
- Branch is `main`
- Event is a push (not a pull request)

**Environment:**
```yaml
environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}
```

**Steps:**
1. **Deploy to GitHub Pages** - Use `actions/deploy-pages@v4`

**Deployment target:**
- URL: `https://wwt-cwall.github.io/aine-forge-tester/`
- Source: Artifacts from build job
- Method: GitHub Pages deployment action

## Pipeline Flow

### Pull Request Flow
```
PR opened/updated → Test → Build → ✓ Success (no deployment)
```

1. Code pushed to PR branch
2. Test job runs (lint + tests)
3. Build job runs (if tests pass)
4. Pipeline completes without deployment
5. PR shows green checkmark if successful

### Main Branch Flow
```
Push to main → Test → Build → Deploy → ✓ Live
```

1. Code merged to main
2. Test job runs (lint + tests)
3. Build job runs (if tests pass)
4. Deploy job runs (if build succeeds)
5. Site updated at GitHub Pages URL

## Build Artifacts

### Artifact Upload
```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./dist
```

**Contents:**
- Compiled JavaScript bundles
- Optimized CSS files
- Static assets (images, fonts)
- `index.html` entry point
- Source maps (for debugging)

### Artifact Retention
- Artifacts stored temporarily for deployment
- Cleaned up after successful deployment
- Available for download from workflow run

## Environment Configuration

### Node.js Version
```yaml
node-version: '20'
```

Uses Node.js 20 LTS for stability and modern features.

### npm Cache
```yaml
cache: 'npm'
```

Caches npm dependencies between runs for faster installs.

### Clean Install
```bash
npm ci
```

Uses `npm ci` instead of `npm install` for:
- Reproducible builds
- Faster installation
- Strict dependency versions

## Quality Gates

### Linting
```bash
npm run lint
```

Checks for:
- TypeScript errors
- ESLint rule violations
- Unused variables and imports
- React Hooks violations
- Fast Refresh compatibility

**Configuration:** `.eslintrc.cjs`

### Testing
```bash
npm run test
```

Runs:
- All unit tests with Vitest
- Component tests with React Testing Library
- Assertion checks with jest-dom matchers

**Configuration:** `vite.config.ts` test section

### Build Verification
```bash
npm run build
```

Validates:
- TypeScript compilation succeeds
- Vite bundling completes
- No build errors or warnings
- Output files generated correctly

## Deployment Configuration

### GitHub Pages Setup

**Repository Settings:**
1. Navigate to Settings → Pages
2. Source: GitHub Actions
3. Branch: Deployed from workflow artifacts

**Base Path:**
- Application: `/aine-forge-tester/`
- Configured in `vite.config.ts` and `App.tsx`

### Deployment URL
```
https://wwt-cwall.github.io/aine-forge-tester/
```

**URL Structure:**
- Domain: `wwt-cwall.github.io`
- Path: `/aine-forge-tester/`
- Served from `gh-pages` branch (managed by action)

## Monitoring and Debugging

### Workflow Status
- Badge in README shows current status
- Green checkmark indicates passing pipeline
- Red X indicates failure

### Viewing Logs
1. Navigate to Actions tab in GitHub
2. Select workflow run
3. View logs for each job and step

### Common Failures

**Linting Errors:**
- Fix ESLint violations in code
- Run `npm run lint` locally first

**Test Failures:**
- Fix failing tests
- Run `npm run test` locally first

**Build Errors:**
- Fix TypeScript errors
- Ensure all imports are correct
- Run `npm run build` locally first

**Deployment Failures:**
- Check GitHub Pages settings
- Verify permissions are correct
- Check artifact upload succeeded

## Performance

### Typical Run Times
- Test job: ~2-3 minutes
- Build job: ~2-3 minutes
- Deploy job: ~30 seconds
- **Total:** ~5-7 minutes from push to live

### Optimization Strategies
- npm cache reduces install time
- Parallel job execution where possible
- Artifact reuse between jobs
- Incremental builds (Vite)

## Security

### Dependency Security
- `npm ci` ensures exact versions
- Dependabot can be enabled for updates
- No secrets required for public repo

### Deployment Security
- OIDC token authentication
- Scoped permissions
- No long-lived credentials

### Code Security
- Linting catches common issues
- TypeScript prevents type errors
- Tests verify expected behavior

## Future Enhancements

### Potential Additions
- **Code coverage reporting** - Upload coverage to Codecov
- **Performance budgets** - Fail if bundle size exceeds limit
- **Visual regression tests** - Catch unintended UI changes
- **Lighthouse CI** - Automated performance and accessibility audits
- **Dependency scanning** - Automated security vulnerability checks
- **Preview deployments** - Deploy PRs to preview URLs
- **Slack notifications** - Alert on deployment success/failure

### Workflow Improvements
- Matrix testing across Node versions
- Caching build artifacts
- Conditional job execution
- Manual approval for production

The current CI/CD pipeline provides automated quality checks and deployment while maintaining simplicity and reliability.

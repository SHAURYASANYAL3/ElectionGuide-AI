# ElectionGuide-AI (Vite + React)

## Install and run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Optional: internal npm registry setup

If your organization requires a private npm registry, configure it in your CI/project settings
instead of committing a repository-wide `.npmrc` with unresolved placeholders.

Example (set in CI environment variables):

- `NPM_CONFIG_REGISTRY=https://your-registry.example.com/`
- `NPM_TOKEN=...` (if required by your registry)
- `NPM_CONFIG_ALWAYS_AUTH=true` (if required)

This prevents deploy failures like `ERR_INVALID_URL` when registry variables are not defined.

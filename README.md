# ElectionGuide-AI (Vite + React)

## Install and run

1. Copy env template:
   ```bash
   cp .env.example .env
   ```
2. Update `.env` with your organization's internal npm registry values.
3. Export env vars before install (or inject via CI secret manager):
   ```bash
   export $(grep -v '^#' .env | xargs)
   npm install
   npm run dev
   ```

## Build

```bash
npm run build
npm run preview
```

## Why this setup

Some environments block direct access to public npm registries and return HTTP 403.
This project is configured to read registry/auth settings from environment variables so it can use internal registries in CI and production.

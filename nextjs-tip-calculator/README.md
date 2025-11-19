# Calculadora de Propinas — pnpm developer notes

This project uses a pnpm lockfile (`pnpm-lock.yaml`). To keep installs consistent and efficient, we recommend using pnpm locally and in CI.

## Why pnpm?
- Uses a global content-addressable store and hard links into projects → much less disk usage and faster installs.
- Strict node_modules layout → fewer accidental transitive dependency issues.
- Great monorepo/workspace support.

---

## Quick start (Windows / PowerShell)
1. Install pnpm globally (one-time):

```powershell
npm i -g pnpm
# or with corepack (Node 16.9+ / 18+):
corepack enable
corepack prepare pnpm@latest --activate
```

2. Install dependencies in this repo:

```powershell
cd 'd:\Documents\NextJS\Calculadora de Propinas'
pnpm install
```

3. Common commands:

```powershell
pnpm dev       # run dev server (maps to "npm run dev")
pnpm build     # build
pnpm lint      # run linter
pnpm add <pkg> # add dependency
pnpm add -D <pkg> # add dev dependency
```

---

## CI (GitHub Actions) example
Use `--frozen-lockfile` in CI to ensure deterministic installs and cache the pnpm store between runs.

```yaml
# Minimal example
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18]
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Cache pnpm store
        uses: actions/cache@v4
        with:
          path: ~/.local/share/pnpm/store/v3
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}-${{ matrix.node-version }}
      - name: Install
        run: pnpm install --frozen-lockfile
      - name: Build
        run: pnpm build
```

Adjust the store path for Windows runners when needed.

---

## Notes & troubleshooting
- If contributors prefer npm, they can still run `npm install`, but changes to `pnpm-lock.yaml` should be avoided. Prefer everyone to use pnpm to keep lockfile consistent.
- To check pnpm store path:

```powershell
pnpm store path
```

- If you run into permission or symlink issues on Windows, ensure Developer Mode is enabled or run PowerShell as administrator. pnpm works on Windows NTFS with typical dev setups.

- If you ever need to reproduce a fresh install exactly as CI, run:

```powershell
pnpm install --frozen-lockfile
```

---

## Rollback / revert to npm
If you need to revert to npm, remove `pnpm-lock.yaml` and run `npm install` to generate `package-lock.json`. Prefer keeping only one lockfile per repo.

---

If you want, I can add a short paragraph to the project README (not just this file) or create a `.npmrc` with project recommendations. Let me know which you'd prefer.
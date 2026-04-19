---
name: import-alias-enforcer
description: 'Use when: fixing import paths, replacing ../../ imports, enforcing @app aliases, import/no-relative-parent-imports, path alias refactor Angular.'
---

# Import Alias Enforcer

## Purpose

Enforce import aliases for this workspace and remove parent-directory relative imports.

## Rules

- For targets inside `src/app/**`, always use `@app/...`.
- For targets inside `src/assets/**`, always use `@assets/...`.
- For targets inside `src/environments/**`, always use `@env/...`.
- Do not use `../`, `../../`, `../../../` for imports that point to `src/app/**`.

## When this skill is triggered

Typical trigger phrases:

- fix imports alias
- replace relative imports
- remove ../../ imports
- import/no-relative-parent-imports
- convert imports to @app

## Execution checklist

1. Scan current file imports.
2. Detect parent-relative imports that resolve to `src/app/**`.
3. Replace with alias imports (`@app/...`).
4. Preserve existing import group ordering and formatting style.
5. Make minimal changes and avoid unrelated refactors.
6. Re-run lint/errors for edited files and confirm no new issues.

## Bulk auto-fix mode

Use this mode when the user asks to refactor a full folder or feature.

### Trigger phrases

- bulk fix imports
- auto-fix aliases in folder
- migrate all relative imports in module

### Bulk workflow

1. Scope first: only files under the requested directory.
2. Detect imports using `../` patterns that resolve to `src/app/**`.
3. Rewrite to `@app/...` aliases only.
4. Do not rewrite external package imports.
5. Keep ordering/groups intact in each file.
6. Validate edited files with lint/errors.
7. Report changed file list and any remaining unresolved imports.

### Safety limits

- Skip generated files and build output folders.
- Skip `node_modules`, `dist`, `.angular`.
- Prefer small batches if many files are affected.

## Examples

- `../../components_widgets/homeglobal/homeglobal.component`
  -> `@app/_pages/connect/dashbord/components_widgets/homeglobal/homeglobal.component`

- `../../../_core/features/_feature_models/_globals`
  -> `@app/_core/features/_feature_models/_globals`

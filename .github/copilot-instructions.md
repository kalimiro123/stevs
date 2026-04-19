# Copilot Instructions for Imports

## Import alias policy

- Use alias imports for all code under `src/app/**`.
- Prefer `@app/...` for components, services, models, helpers, stores, directives, and pipes.
- Prefer `@assets/...` for files under `src/assets/**`.
- Prefer `@env/...` for files under `src/environments/**`.

## Forbidden pattern

- Do not use parent-directory relative imports like `../` or `../../` when the target is inside `src/app/**`.

## Required refactor behavior

When editing a file, if you see imports such as:

- `../../components_widgets/...`
- `../../../_core/...`

replace them with alias imports:

- `@app/_pages/...`
- `@app/_core/...`

## Consistency

- Keep existing import grouping/order style in the file.
- Apply minimal changes: update only imports needed for the current task.


<!-- topmanagement-agent-kit:start -->
# Agent Workflow (Generated)

- Keep import aliases: `@app/*`, `@assets/*`, `@env/*`.
- Avoid parent relative imports for files under `src/app/**`.
<!-- topmanagement-agent-kit:end -->

## Skills

All project skills are located under `.github/skills/angular-patterns/`.

| Skill | Path | Trigger |
|-------|------|---------|
| Angular Components | `angular-patterns/angular-component` | standalone components, OnPush, signals inputs/outputs |
| Angular DI | `angular-patterns/angular-di` | inject(), tokens, providers |
| Angular Directives | `angular-patterns/angular-directives` | attribute/structural directives |
| Angular Forms | `angular-patterns/angular-forms` | signal forms, reactive patterns |
| Angular HTTP | `angular-patterns/angular-http` | httpResource, HttpClient, interceptors |
| Angular Routing | `angular-patterns/angular-routing` | lazy loading, guards, resolvers |
| Angular Signals | `angular-patterns/angular-signals` | signal, computed, effect, RxJS interop |
| Angular SSR | `angular-patterns/angular-ssr` | SSR, hydration, prerendering |
| Angular Testing | `angular-patterns/angular-testing` | TestBed, harnesses, signal testing |
| Angular Tooling | `angular-patterns/angular-tooling` | CLI, build config, workspace |
| Dashbord Logic Framework | `angular-patterns/dashbord-logic-framework` | apply dashbord architecture, clone feature pattern, helper/core/store/signal flow |
| Import Alias Enforcer | `angular-patterns/import-alias-enforcer` | fix imports alias, replace ../../ imports, enforce @app |
| Project Diagnostic | `angular-patterns/project-diagnostic-no-xrevoir` | diagnose project, exclude xrevoir_ |

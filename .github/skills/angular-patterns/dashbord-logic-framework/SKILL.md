---
name: dashbord-logic-framework
description: 'Use when: understanding or reproducing Boitify feature logic from _pages/connect/dashbord (component + helper service + models + ngrx state/core/store + signals). Triggers: apply dashbord architecture, replicate module pattern, create new feature like dashbord, standardize signals-store flow.'
---

# Dashbord Logic Framework

## Purpose

Capture the architecture and coding logic used in `src/app/_pages/connect/dashbord` so it can be reused in other project modules.

## Source of truth analyzed

- `components/home/home.component.ts`
- `components/view360/view360.component.ts`
- `helpers/helperdashbord/helperdashbord.service.ts`
- `features/dashbord.models.ts`
- `features/dashbord.const.ts`
- `stores/dashbordstates/*` (actions, effects, reducer, selectors)
- `stores/dashbordcore/dashbordcore.service.ts`
- `stores/dashbordstore/dashbordstore.service.ts`

## Architecture contract (must keep)

1. Feature folder split:

- `components/` for route pages
- `components_widgets/` for reusable feature widgets
- `features/` for models and constants
- `helpers/` for orchestration and mapping
- `stores/dashbordstates` for ngrx primitives
- `stores/dashbordcore` as facade over feature store service
- `stores/dashbordstore` as action/selector trigger layer

2. Components are thin and declarative:

- Use `OnPush`
- Keep only UI state and user interactions
- Use `signal()` and `computed()` for local reactive bindings
- Delegate all data fetching, mapping, SEO, navigation, role checks to helper service

3. Helper is the feature orchestrator:

- Owns feature signal state (WritableSignal + computed selectors)
- Runs role checks before requests
- Calls core/store observable APIs
- Maps backend output to typed feature models
- Updates account/profile side effects when needed
- Exposes reusable methods: `getInfoPage`, `getLinks`, `routerNavigate`, `setSEO`, loading helpers

4. Store layering pattern:

- `actions`: semantic load/response pairs
- `effects`: API request wiring via shared generic effect service
- `reducer`: response persistence + reset action
- `selectors`: feature response selectors
- `dashbordstore.service`: dispatch + select in one method
- `dashbordcore.service`: minimal wrapper for component/helper consumption

5. Models are rich:

- Feature class with defaults (`DEFAULT_VALUES`) and safe constructor mapping
- Typed interfaces for counters/quotas/state
- Constants for labels and empty placeholders

## Signal and state flow pattern

1. Component init:

- set SEO from key page
- trigger helper loading + fetch method

2. Helper fetch method:

- `loadingTimer()`
- role guard
- initialize memorized signal
- subscribe to core observable
- validate response identity
- map output to class instances
- patch signal (`home` or `view360`)
- handle errors with safe fallback arrays

3. Component render:

- read data through computed bindings only
- use helper links/actions for navigation

## Naming and API style

- Feature key names are explicit (`VIEWHOME`, `VIEW360`)
- Methods end with clear intent:
  - `get...Signal`, `set...`, `...Obs$`, `redirect...`, `mapping...`
- Keep `ObjectInfoPageType`/`ObjectInfoActionType` for navigation and action contracts

## Reuse recipe for another module

1. Create feature folders with same split (`components`, `components_widgets`, `features`, `helpers`, `stores/*`).
2. Build typed models class with defaults + constructor mapping.
3. Add constants for empty states and table labels.
4. Implement helper service as orchestration center:

- private writable signal state
- public computed getters
- role checks
- mapping + patch state
- SEO + navigation utilities

5. Implement ngrx state set:

- actions load/response/reset
- generic effects
- reducer and selectors
- store service + core service wrappers

6. In components:

- keep logic thin
- computed bindings only
- all HTTP/store side effects through helper

## Generator support

Use the scaffold generator to bootstrap the same architecture quickly:

- Command: `npm run gen:f <feature-name> [connect|noconnect]`
- Example: `npm run gen:f analytics connect`

Then adapt endpoints, store registration, guards, and widget internals.

## Mandatory rules when applying project-wide

- Use alias imports only (`@app/*`, `@assets/*`, `@env/*`).
- Avoid parent relative imports for app code.
- Preserve existing route guards and role checks.
- Do not bypass helper by calling store/core directly in templates/components.
- Keep response mapping defensive (null/empty-safe).

## Quality checklist before finalizing

1. Component has no heavy business logic.
2. Helper owns orchestration and signal patching.
3. Store actions/effects/reducer/selectors are complete and symmetric.
4. Model mapping uses typed constructors and default values.
5. Navigation uses feature page/action enums.
6. Loading and error states are always set on request lifecycle.

## Trigger phrases

- "apply dashbord logic"
- "clone this feature architecture"
- "create module with helper/core/store/signal pattern"
- "standardize component-service-state flow"
- "make this module like dashbord"

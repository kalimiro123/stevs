---
name: project-diagnostic-no-xrevoir
description: 'Use when diagnosing the Angular project while excluding xrevoir_* folders and generating a report in scripts/generators/reports.'
---

# Project Diagnostic (No xrevoir)

## Purpose

Run a focused project diagnosis while excluding legacy/review folders prefixed with xrevoir_.

## Command

`node scripts/dev-agent.js diagnose:project`

## Behavior

- Compiles TypeScript in app scope excluding `xrevoir_*`.
- Runs ESLint on `src` excluding `xrevoir_*`.
- Writes a markdown report in `scripts/generators/reports/`.

## Exclusion policy

Exclude any path matching one of:

- `src/app/xrevoir_*/**`
- `src/app/**/xrevoir_*/**`

## Output

A report file:

- `scripts/generators/reports/diagnostic-no-xrevoir-<timestamp>.md`

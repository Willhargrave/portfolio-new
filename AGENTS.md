<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project instructions

## Project overview

This is a software-engineering portfolio built with Next.js, React, and TypeScript using the App Router.

Its purpose is to present solo projects to recruiters, hiring managers, and engineering teams.

Before making changes:

* Read the relevant Next.js documentation in `node_modules/next/dist/docs/`.
* Inspect `package.json`.
* Inspect relevant configuration files.
* Inspect existing implementations of similar features.
* Inspect tests covering the affected area.
* Follow existing project patterns before introducing new ones.

## Package manager

Use the package manager indicated by the repository lockfile.

Do not replace or regenerate the lockfile using another package manager.

## Development commands

Run the following after changing application code:

```bash
npm run lint
npm run build
```

Do not report a command as passing unless it was run successfully.

If a command cannot be run, explain why in the final response.

## Next.js

* Use the App Router.
* Prefer Server Components by default.
* Add `"use client"` only when client-side state, browser APIs, lifecycle hooks, or event handlers require it.
* Use `next/image` for project screenshots and content images.
* Use `next/link` for internal navigation.
* Use the Next.js Metadata API for page metadata.
* Keep pages statically renderable where practical.
* Do not add route handlers, server actions, or other backend functionality unless required.
* Do not access browser APIs from Server Components.
* Follow the installed version's bundled documentation over prior assumptions.

## TypeScript

* Keep TypeScript strict.
* Do not introduce `any`.
* Prefer `interface` for object shapes.
* Use `type` for unions, intersections, and utility-derived types.
* Reuse existing domain types instead of declaring duplicate shapes.
* Narrow `unknown` before using it.
* Add explicit return types to exported functions.
* Do not suppress compiler errors without documenting the reason.

## React

* Use function components.
* Keep components focused and reusable.
* Prefer composition over large configurable components.
* Do not add state when a value can be derived from props or existing state.
* Keep business logic outside presentational components where practical.
* Avoid unnecessary `useEffect` calls.
* Preserve Server Component and Client Component boundaries.

## Content and project data

* Store portfolio project content locally in typed data.
* Do not introduce a database or CMS unless explicitly requested.
* Do not invent project descriptions, metrics, technologies, or technical achievements.
* Use clearly marked placeholders when real content has not yet been provided.
* Keep the project data structure reusable for future projects.

## Styling and accessibility

* Reuse the existing styling system and design tokens.
* Do not add another styling library without approval.
* Use semantic HTML.
* Ensure interactive elements are keyboard accessible.
* Preserve visible focus states.
* Associate form controls with labels.
* Check layouts at mobile and desktop widths.
* Respect reduced-motion preferences when adding animation.

## Dependencies

* Prefer existing dependencies over adding new ones.
* Check whether the repository already provides equivalent functionality.
* Avoid adding dependencies for small amounts of straightforward functionality.
* Explain any new production dependency in the final response.

## Testing

* Add or update tests for changed behaviour when a test setup exists.
* Prefer behaviour-focused tests.
* Include important edge cases.
* Add a regression test when fixing a bug.
* Do not delete or weaken tests merely to make them pass.

## Scope control

* Make the smallest coherent change that satisfies the task.
* Do not perform unrelated refactors.
* Do not rename or move unrelated files.
* Do not change public interfaces unless required.
* Do not modify generated files manually.
* Do not edit files containing real secrets.
* Preserve existing behaviour unless the task explicitly changes it.

## Git

* Do not discard existing uncommitted changes.
* Review the diff before completing the task.
* Do not commit, push, amend commits, or create branches unless explicitly requested.

## Final response

Include:

* A concise summary of the completed work
* Files changed
* Commands run and their results
* Checks that could not be run
* Remaining risks or follow-up work

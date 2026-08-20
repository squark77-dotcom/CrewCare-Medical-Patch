# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

- **medlink** (Expo, `/`) — MEDLINK Patch Checklist mobile app. Single-screen tappable form for in-flight medical events. Captures the form view via `react-native-view-shot` and shares via `expo-sharing` (iOS share sheet includes AirDrop).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Mobile**: Expo SDK 54, expo-router

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

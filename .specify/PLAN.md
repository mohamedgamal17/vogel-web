# SocialMedia App — Client Application Plan

> **Stack:** Angular · Tailwind CSS · Angular Material  
> **API:** Custom REST API (pre-built, owner-managed)  
> **Status:** Phase 0 — Foundation & Architecture

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Repository Structure](#2-repository-structure)
3. [Tech Stack & Rationale](#3-tech-stack--rationale)
4. [Design System & Base Tokens](#4-design-system--base-tokens)
5. [Angular Material Decoupling Strategy](#5-angular-material-decoupling-strategy)
6. [API Integration Layer](#6-api-integration-layer)
7. [Application Architecture](#7-application-architecture)
8. [State Management Strategy](#8-state-management-strategy)
9. [Routing Strategy](#9-routing-strategy)
10. [Authentication Strategy](#10-authentication-strategy)
11. [Feature Phases](#11-feature-phases)
12. [Development Conventions](#12-development-conventions)
13. [Tooling & Quality Gates](#13-tooling--quality-gates)

---

## 1. Project Overview

A modern, responsive **SocialMedia client application** built with Angular that consumes a privately-owned REST API. The client is designed to be **API-agnostic at the UI layer** — meaning the UI components and design tokens are fully decoupled from any third-party component library (including Angular Material), making future library swaps non-breaking.

| Property        | Detail                          |
| --------------- | ------------------------------- |
| App Type        | SPA (Single Page Application)   |
| Rendering       | Client-Side Rendering (CSR)     |
| Target Platforms| Web (Desktop + Mobile-first)    |
| API Protocol    | REST (JSON)                     |
| Auth Strategy   | JWT (access + refresh tokens)   |
| i18n            | Planned (future phase)          |

---

## 2. Repository Structure

```
social-media-client/
├── src/
│   ├── app/
│   │   ├── core/                   # Singleton services, guards, interceptors
│   │   │   ├── api/                # Raw HTTP service wrappers
│   │   │   ├── auth/               # Auth service, guards
│   │   │   └── interceptors/       # HTTP interceptors (auth, error)
│   │   ├── shared/                 # Dumb/presentational components & utilities
│   │   │   ├── components/         # Reusable UI components (design-system-aware)
│   │   │   ├── directives/
│   │   │   ├── pipes/
│   │   │   └── models/             # TypeScript interfaces & types
│   │   ├── features/               # Feature modules (lazy-loaded)
│   │   │   └── _placeholder_/      # Populated per phase
│   │   └── layout/                 # Shell, nav, sidebars
│   ├── design-system/
│   │   ├── tokens/                 # CSS custom properties (source of truth)
│   │   ├── themes/                 # Light / dark / brand themes
│   │   └── material-bridge/        # Angular Material theming override
│   ├── assets/
│   ├── environments/
│   └── styles/
│       ├── _reset.scss
│       ├── _typography.scss
│       ├── _utilities.scss
│       └── main.scss
├── tailwind.config.ts
├── angular.json
├── tsconfig.json
└── PLAN.md
```

---

## 3. Tech Stack & Rationale

| Layer              | Technology          | Role                                                      |
| ------------------ | ------------------- | --------------------------------------------------------- |
| Framework          | Angular 18+         | Component model, DI, routing, forms                       |
| Styling Utility    | Tailwind CSS v3     | Utility-first layout, spacing, responsive helpers         |
| Component Library  | Angular Material    | Accessible primitives (overlays, dialogs, a11y)           |
| Design Tokens      | CSS Custom Props    | Single source of truth for colors, spacing, type, radius  |
| HTTP               | Angular HttpClient  | API communication                                         |
| State              | Signals + Services  | Lightweight reactive state (NgRx optional later)          |
| Forms              | Reactive Forms      | Complex form handling with validation                     |
| Testing            | Jest + Playwright   | Unit + E2E                                                |
| Linting            | ESLint + Prettier   | Code quality                                              |

---

## 4. Design System & Base Tokens

All visual decisions originate from **CSS Custom Properties** defined in `src/design-system/tokens/`. These tokens are consumed by **both Tailwind CSS** (via `tailwind.config.ts`) and the **Angular Material theme bridge** — ensuring the entire visual system is controlled from one place.

### 4.1 Color Tokens

```css
/* src/design-system/tokens/_colors.css */

:root {
  /* ── Brand Palette ── */
  --color-brand-50:  #f0f4ff;
  --color-brand-100: #dce6ff;
  --color-brand-200: #b9ccff;
  --color-brand-300: #85a9ff;
  --color-brand-400: #507eff;
  --color-brand-500: #2952f5;   /* Primary */
  --color-brand-600: #1a3de0;
  --color-brand-700: #1530b8;
  --color-brand-800: #162890;
  --color-brand-900: #172671;

  /* ── Semantic Surface ── */
  --color-bg-base:        #ffffff;
  --color-bg-subtle:      #f8f9fb;
  --color-bg-muted:       #f0f2f5;
  --color-bg-elevated:    #ffffff;
  --color-bg-overlay:     rgba(0, 0, 0, 0.48);

  /* ── Semantic Text ── */
  --color-text-primary:   #0d0f14;
  --color-text-secondary: #4a5568;
  --color-text-muted:     #8a95a3;
  --color-text-disabled:  #c1c9d2;
  --color-text-inverse:   #ffffff;
  --color-text-link:      var(--color-brand-500);

  /* ── Semantic Border ── */
  --color-border-default: #e2e8f0;
  --color-border-strong:  #c1c9d2;
  --color-border-focus:   var(--color-brand-500);

  /* ── State / Feedback ── */
  --color-success-50:  #f0fdf4;
  --color-success-500: #22c55e;
  --color-success-700: #15803d;

  --color-warning-50:  #fffbeb;
  --color-warning-500: #f59e0b;
  --color-warning-700: #b45309;

  --color-error-50:  #fef2f2;
  --color-error-500: #ef4444;
  --color-error-700: #b91c1c;

  --color-info-50:  #eff6ff;
  --color-info-500: #3b82f6;
  --color-info-700: #1d4ed8;
}
```

### 4.2 Typography Tokens

```css
/* src/design-system/tokens/_typography.css */

:root {
  /* ── Font Families ── */
  --font-sans:  'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono:  'JetBrains Mono', ui-monospace, monospace;

  /* ── Font Sizes (fluid scale) ── */
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-3xl:  1.875rem;  /* 30px */
  --text-4xl:  2.25rem;   /* 36px */

  /* ── Font Weights ── */
  --font-regular:   400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;

  /* ── Line Heights ── */
  --leading-tight:  1.25;
  --leading-snug:   1.375;
  --leading-normal: 1.5;
  --leading-relaxed:1.625;

  /* ── Letter Spacing ── */
  --tracking-tight:  -0.02em;
  --tracking-normal:  0em;
  --tracking-wide:    0.04em;
}
```

### 4.3 Spacing Tokens

```css
/* src/design-system/tokens/_spacing.css */

:root {
  --space-0:   0;
  --space-1:   0.25rem;   /* 4px  */
  --space-2:   0.5rem;    /* 8px  */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
}
```

### 4.4 Shape & Elevation Tokens

```css
/* src/design-system/tokens/_shape.css */

:root {
  /* ── Border Radius ── */
  --radius-none:  0;
  --radius-xs:    0.125rem;   /* 2px  */
  --radius-sm:    0.25rem;    /* 4px  */
  --radius-md:    0.5rem;     /* 8px  */
  --radius-lg:    0.75rem;    /* 12px */
  --radius-xl:    1rem;       /* 16px */
  --radius-2xl:   1.5rem;     /* 24px */
  --radius-full:  9999px;

  /* ── Shadows (Elevation) ── */
  --shadow-xs:  0 1px 2px rgba(0,0,0,0.06);
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md:  0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-lg:  0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05);
  --shadow-xl:  0 20px 25px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.04);
}
```

### 4.5 Motion Tokens

```css
/* src/design-system/tokens/_motion.css */

:root {
  /* ── Duration ── */
  --duration-instant:  50ms;
  --duration-fast:     100ms;
  --duration-normal:   200ms;
  --duration-slow:     350ms;
  --duration-slower:   500ms;

  /* ── Easing ── */
  --ease-linear:      linear;
  --ease-in:          cubic-bezier(0.4, 0, 1, 1);
  --ease-out:         cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:      cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 4.6 Dark Mode Overrides

```css
/* src/design-system/themes/_dark.css */

[data-theme="dark"] {
  --color-bg-base:        #0d1017;
  --color-bg-subtle:      #151b27;
  --color-bg-muted:       #1c2437;
  --color-bg-elevated:    #1c2437;

  --color-text-primary:   #f0f4ff;
  --color-text-secondary: #a8b5c9;
  --color-text-muted:     #5c6f88;
  --color-text-disabled:  #334155;

  --color-border-default: #1e2d40;
  --color-border-strong:  #2d3f56;
}
```

---

## 5. Angular Material Decoupling Strategy

Angular Material is used **only for behavioral primitives** (dialogs, overlays, CDK utilities, a11y). All visual styles are overridden via the token bridge so that removing or replacing Material has zero impact on the visual design.

### 5.1 Material Theme Bridge

```scss
// src/design-system/material-bridge/_theme.scss

@use '@angular/material' as mat;

// Map brand tokens → Material palette
$brand-palette: (
  50:  #f0f4ff,
  100: #dce6ff,
  500: #2952f5,   // --color-brand-500
  700: #1530b8,   // --color-brand-700
  contrast: (
    50: #0d0f14,
    100: #0d0f14,
    500: #ffffff,
    700: #ffffff,
  )
);

$app-primary:   mat.define-palette($brand-palette, 500, 100, 700);
$app-accent:    mat.define-palette(mat.$gray-palette, 400);
$app-warn:      mat.define-palette(mat.$red-palette, 500);

$app-theme: mat.define-light-theme((
  color: (
    primary:   $app-primary,
    accent:    $app-accent,
    warn:      $app-warn,
  ),
  typography: mat.define-typography-config(
    $font-family: var(--font-sans)
  ),
  density: 0,
));

@include mat.all-component-themes($app-theme);
```

### 5.2 Rules of Engagement

- **DO** use Angular Material for: `MatDialog`, `MatSnackBar`, `MatTooltip`, `MatMenu`, `MatSelect`, `CdkVirtualScrollViewport`, `A11y` utilities.
- **DO NOT** use Material for layout, cards, buttons, inputs, badges, avatars, or tabs — build these as custom components driven purely by design tokens.
- All Material component typography, color, and border-radius values are overridden in `_theme.scss` to pull from CSS custom properties.

---

## 6. API Integration Layer

All HTTP communication is isolated in `src/app/core/api/`. Features never call `HttpClient` directly.

```
core/api/
├── api.service.ts          # Base HTTP wrapper (GET, POST, PUT, DELETE, PATCH)
├── endpoints.ts            # Centralized endpoint constants
└── interceptors/
    ├── auth.interceptor.ts    # Attaches Bearer token
    └── error.interceptor.ts   # Global error normalization
```

### 6.1 Base API Service Signature

```typescript
// Illustrative shape — implementation filled per phase

export abstract class ApiService {
  protected get<T>(path: string, params?: HttpParams): Observable<T>;
  protected post<T>(path: string, body: unknown): Observable<T>;
  protected put<T>(path: string, body: unknown): Observable<T>;
  protected patch<T>(path: string, body: unknown): Observable<T>;
  protected delete<T>(path: string): Observable<T>;
}
```

### 6.2 Environment Configuration

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiBaseUrl: 'https://api.your-domain.dev/v1',
};
```

---

## 7. Application Architecture

The app follows a **layered, feature-first architecture**:

```
┌─────────────────────────────────────────────┐
│                  UI Layer                   │
│   (Components · Templates · Design Tokens)  │
├─────────────────────────────────────────────┤
│               Feature Layer                 │
│   (Lazy-loaded modules · Smart components)  │
├─────────────────────────────────────────────┤
│                Core Layer                   │
│   (Services · Guards · Interceptors · Auth) │
├─────────────────────────────────────────────┤
│              Data / API Layer               │
│   (HTTP Wrappers · Models · Adapters)       │
└─────────────────────────────────────────────┘
```

- **Presentation components** (in `shared/`) receive data via `@Input()` and emit via `@Output()`. They have **no service dependencies**.
- **Smart (container) components** (in `features/`) own service injection and pass data down.
- **Signals** are used for local UI state; services expose `Signal`-based state for cross-component sharing.

---

## 8. State Management Strategy

| Scope                | Solution                        |
| -------------------- | ------------------------------- |
| Local UI state       | Angular Signals (`signal()`)    |
| Shared feature state | Singleton service + Signals     |
| Server cache         | Custom cache layer (Phase TBD)  |
| Global app state     | NgRx (considered for later phases if complexity grows) |

---

## 9. Routing Strategy

```typescript
// Illustrative top-level routing — routes populated per phase

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ShellComponent,   // Layout wrapper
    canActivate: [AuthGuard],
    children: [
      // Feature routes lazy-loaded here per phase
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes'),
  },
  { path: '**', redirectTo: '' },
];
```

- All feature routes are **lazy-loaded**.
- A `ShellComponent` wraps authenticated routes and provides the persistent layout (nav, sidebars).
- An `AuthGuard` protects all shell children.

---

## 10. Authentication Strategy

| Concern               | Approach                                           |
| --------------------- | -------------------------------------------------- |
| Token storage         | `localStorage` (access) + `HttpOnly cookie` (refresh, if API supports) |
| Token refresh         | HTTP interceptor catches 401 → silently refreshes  |
| Auth state            | `AuthService` exposes `currentUser` signal         |
| Logout                | Clears tokens, resets state, redirects to `/auth`  |
| Route protection      | `AuthGuard` + `NonAuthGuard` (redirect if logged in) |

---

## 11. Feature Phases

Features are intentionally left blank and will be defined in upcoming phases. This section acts as a **living index** of all delivery phases.

| Phase | Status      | Description                         |
| ----- | ----------- | ----------------------------------- |
| 0     | ✅ Current  | Foundation, design tokens, architecture, tooling |
| 1     | 🔲 Planned  | _(To be defined)_                   |
| 2     | 🔲 Planned  | _(To be defined)_                   |
| 3     | 🔲 Planned  | _(To be defined)_                   |
| N     | 🔲 Planned  | _(To be defined)_                   |

---

## 12. Development Conventions

### Naming

| Artifact            | Convention                          | Example                     |
| ------------------- | ----------------------------------- | --------------------------- |
| Component           | `kebab-case` folder, `PascalCase` class | `post-card/post-card.component.ts` |
| Service             | `camelCase` + `.service.ts`         | `authService`               |
| Interface / Type    | `PascalCase` + `I` prefix optional  | `User`, `IApiResponse<T>`   |
| CSS class (custom)  | `sm-` prefix (SocialMedia)          | `sm-card`, `sm-avatar`      |
| Signal              | noun, no `$` suffix                 | `currentUser`, `feedItems`  |
| Observable          | noun + `$` suffix                   | `user$`, `posts$`           |

### Styling Rules

1. Use **Tailwind utility classes** for layout, spacing, and responsiveness.
2. Use **CSS custom properties** (tokens) for all color, typography, and shape values — never hardcode hex values.
3. Use **`sm-`-prefixed custom classes** (in `styles/`) only for complex, reusable component-level patterns that can't be expressed cleanly with Tailwind alone.
4. **Never** style Angular Material internals directly — always go through the Material bridge theme.

### Git Branching

```
main              ← production-ready
develop           ← integration branch
feature/<name>    ← feature development
fix/<name>        ← bug fixes
chore/<name>      ← tooling, deps, refactors
```

---

## 13. Tooling & Quality Gates

| Tool             | Purpose                              |
| ---------------- | ------------------------------------ |
| Angular CLI      | Scaffolding, build, serve            |
| Tailwind CSS     | Utility styling, purged in prod      |
| ESLint           | TypeScript + Angular-specific rules  |
| Prettier         | Code formatting                      |
| Husky            | Pre-commit hooks                     |
| lint-staged      | Run linters only on staged files     |
| Jest             | Unit & integration tests             |
| Playwright       | End-to-end testing                   |
| Storybook        | Component development & documentation (future) |

### Scripts

```jsonc
// package.json (illustrative)
{
  "scripts": {
    "start":         "ng serve",
    "build":         "ng build --configuration=production",
    "test":          "jest",
    "test:e2e":      "playwright test",
    "lint":          "eslint . --ext .ts,.html",
    "format":        "prettier --write .",
    "storybook":     "storybook dev -p 6006"
  }
}
```

---

> **Next Step:** Define Phase 1 features and begin scaffolding the Angular project with the design token foundation.

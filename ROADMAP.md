# NextGameUp — Project Roadmap

## Overview

NextGameUp is a full-stack project I’m building to manage a personal game library and backlog. The plan is to use [RAWG](https://rawg.io/) for game metadata and store user-specific data—library ownership, backlog status, and play activity—in PostgreSQL.

---

## Current Stack

Right now the app is following a simple client-server setup.

- **Frontend:** React + TypeScript (Vite)
- **Backend:** Node.js + Express API
- **Database:** PostgreSQL with Prisma ORM
- **External Data Source:** RAWG API

The backend is meant to act as the layer between external game data and the app’s own stored user data.

---

## Table of Contents

- [NextGameUp — Project Roadmap](#nextgameup--project-roadmap)
  - [Overview](#overview)
  - [Current Stack](#current-stack)
  - [Table of Contents](#table-of-contents)
  - [Where It Stands Right Now](#where-it-stands-right-now)
    - [Done So Far](#done-so-far)
    - [In Progress](#in-progress)
  - [Milestone 1 — Project Foundation](#milestone-1--project-foundation)
    - [Scope](#scope)
    - [Deliverable](#deliverable)
  - [Milestone 1.5 — First Visible UI](#milestone-15--first-visible-ui)
    - [Scope](#scope-1)
    - [Deliverable](#deliverable-1)
  - [Milestone 2 — External API Integration](#milestone-2--external-api-integration)
    - [Scope](#scope-2)
    - [Deliverable](#deliverable-2)
  - [Milestone 2.5 — Search Experience](#milestone-25--search-experience)
    - [Scope](#scope-3)
    - [Deliverable](#deliverable-3)
  - [Milestone 3 — Database Infrastructure](#milestone-3--database-infrastructure)
    - [Scope](#scope-4)
    - [Deliverable](#deliverable-4)
  - [Milestone 4 — Core Data Models](#milestone-4--core-data-models)
    - [Models](#models)
    - [Constraints](#constraints)
    - [Deliverable](#deliverable-5)
  - [Milestone 5 — Library Management](#milestone-5--library-management)
    - [Library States](#library-states)
    - [Scope](#scope-5)
    - [Deliverable](#deliverable-6)
  - [Milestone 6 — Library Interface](#milestone-6--library-interface)
    - [Scope](#scope-6)
    - [Deliverable](#deliverable-7)
  - [Milestone 7 — Backlog Management](#milestone-7--backlog-management)
    - [Model](#model)
    - [Status States](#status-states)
    - [Scope](#scope-7)
    - [Deliverable](#deliverable-8)
  - [Milestone 8 — Event Logging](#milestone-8--event-logging)
    - [Model](#model-1)
    - [Event Types](#event-types)
    - [Deliverable](#deliverable-9)
  - [Milestone 9 — UI Experience](#milestone-9--ui-experience)
    - [Scope](#scope-8)
    - [Deliverable](#deliverable-10)
  - [Milestone 10 — Gameplay Tracking (Optional)](#milestone-10--gameplay-tracking-optional)
    - [Model](#model-2)
    - [Scope](#scope-9)
    - [Deliverable](#deliverable-11)
  - [Milestone 11 — Reporting and Analytics](#milestone-11--reporting-and-analytics)
    - [Metrics (examples)](#metrics-examples)
    - [Deliverable](#deliverable-12)
  - [Milestone 12 — Authentication](#milestone-12--authentication)
    - [Scope](#scope-10)
    - [Deliverable](#deliverable-13)
  - [Milestone 13 — Deployment](#milestone-13--deployment)
    - [Scope](#scope-11)
    - [Deliverable](#deliverable-14)
  - [MVP Scope](#mvp-scope)
  - [Backlog](#backlog)

---

## Where It Stands Right Now

**Last updated:** March 22, 2026

### Done So Far

- [x] Monorepo layout with separate `client` and `server` applications
- [x] React + TypeScript frontend scaffolded with Vite
- [x] TypeScript Express backend running with a health endpoint
- [x] First visible UI shipped with mock library/search cards and reusable frontend components
- [x] Frontend search flow wired up with typed state, loading state, error state, and backend fetch
- [x] RAWG-backed server search route is connected and normalizing API results for the frontend

### In Progress

- [~] Search results are flowing end-to-end with real RAWG data
- [~] UI styling and component structure are established, but polish and empty states still need work
- [~] Search result formatting and fallbacks still need cleanup for real-world API data

---

## Milestone 1 — Project Foundation

Get the repo structure in place and make sure both the frontend and backend run locally. Backend exposes a health check; frontend is ready for UI work.

**Status:** Mostly complete

### Scope

- [x] Repository and project layout (frontend + backend)
- [x] React + TypeScript frontend (Vite), Node.js + TypeScript backend (Express)
- [~] Health check endpoint, env configuration, base API routing
- [ ] Linting and formatting

### Deliverable

Local full-stack environment: frontend and backend run and are ready for the next milestone.

---

## Milestone 1.5 — First Visible UI

**Timing:** As soon as the backend health endpoint is available.

**Purpose:** Build a simple first screen that shows the direction of the app before persistence exists.

**Status:** Complete

### Scope

- [x] One frontend route: a library-style page
- [x] Hardcoded mock data (no API or database)
- [x] Basic layout and styling so the concept is readable

### Deliverable

A mock library page, served from the app, that shows what “my game library” will look like. No backend integration required yet.

---

## Milestone 2 — External API Integration

Bring in RAWG through the backend so the frontend stays decoupled from the external API.

**Status:** Complete

### Scope

- [x] RAWG client (env-configured API key)
- [x] Search endpoint and server-side fetch
- [x] Normalized response shape for consumers

### Deliverable

Backend endpoints that return game metadata from RAWG for search and display.

---

## Milestone 2.5 — Search Experience

Search is the main discovery flow for the app. This milestone adds the frontend search experience on top of the backend integration.

**Status:** In progress

### Scope

- [x] Search page and input component
- [x] Integration with backend search endpoint
- [~] Result list displaying game metadata (image, title, release year, rating where available)
- [x] Reusable game card component for result display

### Deliverable

Users can search for games through the application and view structured results retrieved from RAWG.

---

## Milestone 3 — Database Infrastructure

Set up PostgreSQL as the main store, add a migration workflow, and wire the backend to the database.

**Status:** Planned / intentionally paused

### Scope

- Local PostgreSQL (or equivalent) and Prisma ORM
- Migration workflow and initial schema
- Connectivity checks and seed data for development

### Deliverable

Backend talks to PostgreSQL; schema changes are managed via migrations.

---

## Milestone 4 — Core Data Models

Design the core schema for users, games, and user-game relationships.

**Status:** Planned / intentionally paused

### Models

| Model       | Role |
| ----------- | ---- |
| **User**    | Application user. |
| **Game**    | Canonical game record (external provider source). |
| **UserGame**| User’s library entry for a game (ownership/wishlist). |

### Constraints

- One canonical game per external id; one library entry per user per game
- Soft delete for library entries

### Deliverable

Normalized schema that supports user libraries and external game metadata.

---

## Milestone 5 — Library Management

Users can add games to a personal library, set a state (Wishlist / Owned), and remove entries with soft delete. No duplicates per user.

### Library States

- **Wishlist** · **Owned**

### Scope

- Add/update/remove library entry endpoints
- Upsert of game records from RAWG when adding to library
- Enforce single membership per user per game

### Deliverable

Users can search (via RAWG) and maintain a personal library with correct states and no duplicates.

---

## Milestone 6 — Library Interface

Once the library endpoints exist, replace mock data with API-driven content and make the library page feel real.

### Scope

- Library API (user’s games + metadata) for the frontend
- Library page wired to API; replace mock data with database-backed content
- Display library entries with ownership state (Wishlist / Owned)
- Filter by library state and basic sorting and browsing

### Deliverable

Library interface is fully backed by persistent data; users can browse and filter their collection.

---

## Milestone 7 — Backlog Management

Backlog is separate from ownership: users can mark library games as in-backlog and move them through play states.

### Model

| Model         | Role |
| ------------- | ---- |
| **UserBacklog** | One play-through lifecycle for a user–game pair. |

### Status States

**Backlog** → **Playing** → **Paused** | **Finished** | **Dropped**

### Scope

- Backlog model and add/update/remove endpoints
- Start and completion timestamps where applicable

### Deliverable

Users can manage a backlog and track status for games in their library.

---

## Milestone 8 — Event Logging

Keep an append-only log of important actions like library and backlog changes for traceability and future analytics.

### Model

| Model           | Role |
| --------------- | ---- |
| **UserGameEvent** | One event record (e.g. added to library, status change). |

### Event Types

Library add/state change, backlog add/status change, record deletion.

### Deliverable

Event store in place; key actions are logged without affecting main flows.

---

## Milestone 9 — UI Experience

Keep improving the UI so it feels consistent, readable, and presentable.

**Status:** Started

### Scope

- [~] Search and backlog views in the UI
- [~] Loading and empty states
- [~] Layout and styling pass; filter/sort controls where needed

### Deliverable

UI is coherent and demo-ready for search, library, and backlog.

---

## Milestone 10 — Gameplay Tracking (Optional)

Optional extension: record play sessions and derive playtime.

### Model

| Model         | Role |
| ------------- | ---- |
| **PlaySession** | One contiguous play session (e.g. start/end, optional duration). |

### Scope

- Session logging and total playtime (per game / overall)
- Basic history for activity views

### Deliverable

Users can see playtime and session history where this feature is enabled.

---

## Milestone 11 — Reporting and Analytics

Add backend endpoints that expose aggregate metrics for dashboards or future tooling.

### Metrics (examples)

- Library size and ownership breakdown
- Backlog status breakdown
- Total playtime and most-played games
- Recent activity

### Deliverable

Stable analytics endpoints used by the UI or other clients.

---

## Milestone 12 — Authentication

Add authentication so users have their own identity, session, and scoped data.

### Scope

- Registration and login
- Secured API (auth required where appropriate)
- All user data keyed by authenticated user

### Deliverable

Multi-tenant app: each user sees only their library and backlog.

---

## Milestone 13 — Deployment

Get the app and database running in a production environment and reachable end-to-end.

### Scope

- Hosting for frontend and backend
- Managed PostgreSQL (or equivalent)
- Production env configuration and smoke checks

### Deliverable

Live deployment; core flows work in production.

---

## MVP Scope

For me, the first real shipped version is done when:

- Users can search games (RAWG) and add them to a personal library (Wishlist / Owned)
- Users can view and manage that library (no duplicate entries; data in PostgreSQL)
- Backlog and play states are supported and visible in the UI
- Auth and deployment are in place so the app is multi-user and live

---

## Backlog

- Game recommendation engine
- Public profiles and social features with library / backlog visibility
- View-only access to shared libraries and backlogs
- Reviews and ratings
- Achievement-style tracking
- Import/export
- Richer statistics and visualizations

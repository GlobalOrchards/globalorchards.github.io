# Global Orchards Stack Ltd. - Marketing Website

## Overview

This repository contains a marketing website for Global Orchards Stack Ltd., a premium produce distribution company. The project is in a transition phase from a static HTML/CSS/JS website to a modern React-based application with a Node.js backend. The architecture follows a client-server model with a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern web application architecture with:

1. **Frontend**: React with TypeScript, utilizing the shadcn/ui component library (based on Radix UI primitives) and TailwindCSS for styling.
   
2. **Backend**: Node.js with Express, serving both the API endpoints and the static frontend build.
   
3. **Database**: PostgreSQL with Drizzle ORM for database interactions.
   
4. **Development**: Vite for frontend development and bundling.

The codebase appears to be transitioning from a static HTML site to a full-stack application, with both the old static files and new React components present in the repository.

## Key Components

### Frontend

1. **React Components**: 
   - UI components based on shadcn/ui library
   - Custom pages in `client/src/pages/`
   - Global state management using React's context API
   - React Query for data fetching and caching

2. **Styling**:
   - TailwindCSS for utility-based styling
   - CSS variables for theming
   - Responsive design with mobile-first approach

### Backend

1. **Express Server**:
   - API routes prefixed with `/api`
   - Middleware for request logging and error handling
   - Static file serving for the frontend build

2. **Database Layer**:
   - Drizzle ORM for type-safe database operations
   - Schema definitions in `shared/schema.ts`
   - Database connection via Neon Postgres (based on `@neondatabase/serverless` package)

3. **Authentication**:
   - Simple username/password authentication
   - Session management (planned)

## Data Flow

1. **Client Requests**: 
   - Frontend makes API requests to the backend using React Query
   - Requests are handled through the `apiRequest` helper in `client/src/lib/queryClient.ts`

2. **Server Processing**:
   - Express routes in `server/routes.ts` handle API requests
   - Business logic processes the request and interacts with the database
   - Database operations are performed via the storage interface in `server/storage.ts`

3. **Response Handling**:
   - Server sends JSON responses back to the client
   - React Query caches responses and updates the UI

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: TailwindCSS, class-variance-authority for component variants
- **Routing**: wouter (lightweight router)
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form with Zod validation

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Database Connection**: Neon Serverless Postgres
- **Session Management**: connect-pg-simple (planned)

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - `npm run build` command compiles both frontend and backend
   - Vite builds the frontend into static files
   - esbuild bundles the server code

2. **Runtime**:
   - Production server runs from the bundled output in the `dist` directory
   - Environment-specific configurations determined by `NODE_ENV`

3. **Database**:
   - PostgreSQL provided through Replit's built-in database
   - Connection string passed via environment variables

4. **Development Workflow**:
   - Development server with hot-reloading via `npm run dev`
   - Database schema management with Drizzle Kit
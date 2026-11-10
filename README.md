# Five and Six Technologies

Marketing site and dashboard for Five and Six Technologies, built with
[Next.js](https://nextjs.org/) (App Router) and TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

## Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server             |
| `npm run build`        | Create a production build                |
| `npm run start`        | Serve the production build               |
| `npm run lint`         | Run ESLint                               |
| `npm run check`        | Run the TypeScript compiler              |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run create-folder`| Scaffold a new page/component folder     |
| `npm run create-react-file` | Scaffold a new page/component file  |

## Project Structure

```text
app/                 Next.js App Router routes (one folder per URL)
  layout.tsx         Root layout: providers, header/footer shell, metadata
  page.tsx           Home page route
src/
  views/             Page components rendered by the routes in app/
  components/        Shared UI components
  contexts/          React contexts (auth, dashboard, loading, socket, ...)
  services/          Axios based API services
  apiSdks/           Generated API clients
  assets/            Images and fonts imported by components
  externals/         Third-party CSS (Bootstrap grid)
  App.css            Global styles
  hooks/             Custom hooks
middleware.ts        Route protection for dashboard/auth pages
```

## Environment Variables

Create a `.env.local` file when you need to point the frontend at a different
API instance:

```bash
# Base URL for the legacy API used by src/services
NEXT_PUBLIC_API_BASE_URL=https://api.example.com

# Public site URL used for metadata / Open Graph
NEXT_PUBLIC_SITE_URL=https://fiveandsixtechnologies.com
```

## Authentication

Public user auth is handled by `fst_backend` (Express). Next.js proxies `/api/*`
to it (see `rewrites` in `next.config.js`), so session cookies are first-party.

- **Signup** – first/last name, email, password → emailed 6-digit code → account
  activated and signed in (`POST /api/v1/user-auth/register`, `/verify-email`).
- **Login** – email + password → emailed 6-digit code → session
  (`POST /api/v1/user-auth/login`, `/otp`).
- **Password recovery** – email → emailed code → new password
  (`POST /api/v1/user-auth/forgot-password`, `/reset-password`).
  `/reset-password` redirects to `/forgot-password`; there are no token links.
- **Google** – Google Identity Services (`@react-oauth/google`) sends an ID token
  to `POST /api/v1/user-auth/google`, which verifies it with
  `google-auth-library`, links/creates the user and issues the session.

Sessions are httpOnly cookies (`fst_pa_access` / `fst_pa_refresh`) — no tokens
are stored in JavaScript. `middleware.ts` protects `/dashboard/*` and `/chat`
by checking the access cookie.

### Environment

| Variable | Purpose |
| --- | --- |
| `API_PROXY_TARGET` | Backend origin for the `/api` rewrite (default `http://localhost:5100`) |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Google OAuth client id — must match `GOOGLE_CLIENT_ID` in `fst_backend/.env` |

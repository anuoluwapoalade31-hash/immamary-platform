# IMMAMARY MINISTRIES INTERNATIONAL — Interactive Web Platform

A React + Vite starter platform for the parent organization and its three operational arms:

1. **Education:** Global Kingdom Harvest Institute
2. **Venture:** IMMAMARY MINISTRIES INTERNATIONAL (the confirmed venture-arm display name; consider a distinct public-facing sub-brand before launch)
3. **Missions:** Missions & Community Transformation

The project includes responsive public pages, arm-specific enquiry forms, navigation, and an administrator sign-in interface scaffold. Supabase is the planned backend for data, authentication, storage and role-based access.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## GitHub setup

1. Create a new **public or private** repository named `immamary-platform` in your GitHub account.
2. Extract this project ZIP on your computer.
3. Open the extracted folder in VS Code.
4. Open the VS Code terminal and run:

```bash
git init
git add .
git commit -m "Initial IMMAMARY interactive platform"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/immamary-platform.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Alternatively, create the repository on GitHub and use **Add file → Upload files** for the project contents.

## Hosting

Recommended: Netlify or Vercel for the React single-page app, with GitHub connected for automatic deployment. GitHub Pages is also possible, but requires a Vite `base` setting and SPA route fallback configuration. Configure your host to serve `index.html` for unknown routes.

## Supabase backend setup

1. Create a Supabase project.
2. Copy its Project URL and anon/publishable key into a local `.env.local` file based on `.env.example`.
3. Never put a Supabase `service_role` secret in frontend code or commit secrets to GitHub.
4. Create the tables and role policies using `supabase/schema.sql`.
5. Configure email authentication and test with separate administrator accounts.

Until Supabase is configured, public forms display a setup message and do not claim to have stored submissions. The admin page is a scaffold, not a production-secure dashboard yet.

## Proposed roles

- `super_admin`: manages the entire platform and assigns arm managers.
- `education_manager`: manages education-arm content and enquiries.
- `venture_manager`: manages venture-arm content and enquiries.
- `missions_manager`: manages missions-arm content and enquiries.

**Security requirement:** Enforce roles with Supabase Row Level Security (RLS) policies and server-side checks. Hiding UI elements is not access control. Do not issue administrator credentials until the policies have been reviewed and tested.

## Before public launch

- Confirm the venture arm's public-facing name; the currently confirmed name duplicates the parent organization's name.
- Add approved logo, real project photos, leadership biographies and verified contact details.
- Confirm the legal/registered organization name and approved public wording.
- Create and test Supabase tables, RLS policies, email notifications and admin roles.
- Add privacy notice, terms, consent wording and spam protection to public forms.
- Test all routes on mobile and desktop.
- Configure custom domain and HTTPS.


## Recent content updates

- Added a Founders & Leadership page at `/leadership` featuring Emmanuel Idowu Alade's supplied professional biography, academic formation, ministry experience, family note and guiding conviction.
- Added the supplied founders photograph at `public/founders-emmanuel-mary-alade.jpg`.
- Updated the Venture arm display name to **IMMAMARY VENTURES**.
- Added the official contact email: **Immamaryngo@gmail.com**.

The founder's wife's separate professional biography has not been supplied; the current page identifies her as Mary Odunola Alade in the family section and photo caption only.

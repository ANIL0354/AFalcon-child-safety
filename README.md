# A Falcon — Child Safety Standards Page

A tiny static site that publishes A Falcon's Child Sexual Abuse and
Exploitation (CSAE) policy and safety contact info, built to satisfy
Google Play Console's **Child Safety Standards** requirement (Policy >
App content > Child safety standards).

## 1. Before you deploy — edit the content

Open `index.html` and update:

- The contact name/role and email under **Designated point of contact**
  (currently placeholders `[Add contact name / role]` and
  `childsafety@example.com`).
- Any wording you want to adjust in the policy sections.

Google requires this page to be:
- Publicly viewable by anyone, with no login.
- Not a PDF.
- Not user-editable (e.g. not a shared Google Doc).

A static site like this satisfies all three.

## 2. Run it locally (optional)

```bash
npm install
npm run dev
```

Visit the local URL it prints to preview.

## 3. Build

```bash
npm run build
```

This outputs a production-ready static site to `dist/`.

## 4. Deploy (pick one)

### Option A — GitHub Pages (free, simple)
1. Push this repo to GitHub.
2. In `vite.config.js`, set `base: '/your-repo-name/'` if deploying to
   `username.github.io/your-repo-name` (skip this if using a custom
   domain or a `username.github.io` root repo).
3. Run `npm run build`, then deploy the `dist/` folder using the
   `gh-pages` package or GitHub's "Pages" settings (source: GitHub
   Actions, or a `gh-pages` branch).

### Option B — Netlify / Vercel (free, fastest)
1. Push this repo to GitHub.
2. Import the repo in Netlify or Vercel.
3. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — you'll get a live URL like `a-falcon-safety.netlify.app`.

## 5. Add the URL to Play Console

Once live, copy the page's public URL (e.g.
`https://a-falcon-safety.netlify.app`) and paste it into:

**Play Console > Policy > App content > Child safety standards >
Safety standards URL**

Then fill in the contact section on that same Play Console page and
click Save.
# AFalcon-child-safety

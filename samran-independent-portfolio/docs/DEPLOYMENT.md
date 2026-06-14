# Deployment Guide

This project is designed to avoid the Replit deployment lock-in. The easiest deployment path is Vercel because the project is a Next.js app with API routes.

## Option A — Deploy on Vercel

### 1. Create a GitHub repo

Create a new repository, for example:

```text
samran-portfolio
```

Upload all project files to it.

### 2. Import into Vercel

1. Open Vercel.
2. Click **Add New Project**.
3. Select your GitHub repository.
4. Framework preset should be **Next.js**.
5. Build command should be:

```bash
npm run build
```

6. Install command should be:

```bash
npm install
```

7. Deploy.

### 3. Add environment variables

In Vercel project settings, add these variables:

```env
SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_TO=samrantaimoor35@gmail.com
CONTACT_FROM="Samran Portfolio <your-email@gmail.com>"
```

After adding environment variables, redeploy the project.

### 4. Add custom domain

1. Go to your Vercel project.
2. Open **Settings → Domains**.
3. Add your domain, for example:

```text
samrantaimoor.com
```

4. Vercel will show required DNS records.
5. Open your domain registrar, such as GoDaddy, Namecheap, Hostinger, or Cloudflare.
6. Add the DNS records exactly as Vercel shows.
7. Wait for DNS propagation.

### 5. Test after deployment

Open these links:

```text
https://your-domain.com
https://your-domain.com/api/health
https://your-domain.com/sitemap.xml
```

Submit the contact form. If SMTP is configured correctly, the message should arrive in `CONTACT_TO` email.

## Option B — Deploy static-only version

If you do not need contact form backend, you can convert the site to static hosting. But the current project includes backend API routes, so Vercel is cleaner.

## Domain cost reality

This project removes Replit's monthly deployment dependency, but it cannot remove domain cost. A custom domain is bought from a registrar and must be renewed yearly. Hosting can be free/low-cost depending on the provider and usage.

## Troubleshooting

### Contact form says SMTP is not configured

You deployed without the email variables. Add SMTP variables in the hosting dashboard and redeploy.

### Gmail SMTP does not work

Use a Gmail App Password, not your normal Gmail password. Make sure two-factor authentication is enabled on the Gmail account.

### Domain does not open

DNS can take time. Re-check the exact A/CNAME records shown by Vercel.

### Build fails

Run locally:

```bash
npm install
npm run build
```

Then fix any error shown in the terminal before redeploying.

## Maintenance checklist

- Update `data/profile.ts` whenever you add new projects.
- Replace the resume PDF in `public/` after CV updates.
- Keep secrets only in `.env.local` or hosting dashboard variables.
- Never push `.env.local` to GitHub.
- Avoid adding `node_modules`, `.next`, `.vercel`, `.git`, cache folders, or platform-specific hidden files to ZIP uploads.

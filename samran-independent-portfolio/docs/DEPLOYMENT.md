# Deployment Guide

This portfolio is a Next.js app with API routes. The simplest path is GitHub plus Vercel.

## 1. Push changes to GitHub

After replacing the local project files, run these commands from your existing Git repository folder:

```bash
git status
git add .
git commit -m "Update portfolio content and email delivery"
git push origin main
```

GitHub documents the same basic flow for adding local code: add files, commit, add/verify a remote, and push to `main`.

## 2. Import or redeploy in Vercel

If the Vercel project already exists, every push to `main` should trigger a new deployment. If it does not exist yet:

1. Open Vercel.
2. Create a new project.
3. Import the GitHub repository.
4. Choose the Next.js framework preset.
5. Deploy.

If your GitHub repository still has the source code inside the inner folder `samran-independent-portfolio`, set Vercel **Root Directory** to:

```text
samran-independent-portfolio
```

## 3. Add environment variables

In Vercel project settings, add:

```env
SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=samrantaimoor35@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_TO=samrantaimoor35@gmail.com
CONTACT_FROM="Samran Portfolio <samrantaimoor35@gmail.com>"
```

Use a Gmail App Password, not the normal Gmail password. The form emails will be delivered to `samrantaimoor35@gmail.com` after these variables are configured.

## 4. Add custom domain

1. Open your Vercel project.
2. Go to **Settings → Domains**.
3. Add your domain, for example `samrantaimoor.com`.
4. Copy the DNS records Vercel shows.
5. Add those records in your domain registrar DNS panel.
6. Wait for verification/propagation.

## 5. Test after deployment

Open:

```text
https://your-domain.com
https://your-domain.com/api/health
```

Then submit:

- Quick contact form
- Project requirement form

Both should send email to `samrantaimoor35@gmail.com`.

## Troubleshooting

### Contact form says email service is not configured

Your SMTP variables are missing or incorrect. Add them in Vercel and redeploy.

### Gmail SMTP fails

Enable 2-Step Verification on the Gmail account and create a Gmail App Password. Do not use the normal account password.

### Domain does not open

Check the exact DNS records shown by Vercel. DNS changes can take time to propagate.

### Local build check

Run:

```bash
npm install
npm run build
```

Fix any terminal errors before redeploying.

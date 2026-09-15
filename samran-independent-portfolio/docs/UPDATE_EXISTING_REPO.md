# Update Existing GitHub Repository

You already pushed the first version to GitHub. Use these steps to replace it with this corrected version.

## Your current situation

Your local repository is likely here:

```text
C:\Users\HP\Desktop\samran-independent-portfolio
```

Inside it, the actual Next.js project is in the inner folder:

```text
C:\Users\HP\Desktop\samran-independent-portfolio\samran-independent-portfolio
```

Keep the outer folder because it contains your Git connection. Replace only the inner project folder with the updated inner folder from this ZIP.

## Steps

1. Stop the local server in VS Code terminal with `Ctrl + C`.
2. Extract this ZIP somewhere safe, for example Desktop.
3. Copy the updated inner folder named `samran-independent-portfolio` from this ZIP.
4. Paste/replace it inside your existing Git repo folder:

```text
C:\Users\HP\Desktop\samran-independent-portfolio
```

5. Open VS Code in the outer Git repo folder.
6. Run:

```bash
git status
git add .
git commit -m "Update portfolio content and email setup"
git push origin main
```

## Test locally

From the outer folder:

```bash
cd .\samran-independent-portfolio
npm install
npm run dev
```

Open:

```text
 https://samrantaimoor.com
```

## Vercel

If the project is already connected to Vercel, pushing to GitHub should trigger redeployment.

If Vercel asks for Root Directory, use:

```text
samran-independent-portfolio
```

## Email form

For real email delivery, add these variables in Vercel Project Settings → Environment Variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=samrantaimoor35@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_TO=samrantaimoor35@gmail.com
CONTACT_FROM="Samran Portfolio <samrantaimoor35@gmail.com>"
```

Then redeploy.

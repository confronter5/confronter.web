# 🚀 Deploy to Vercel

## Step-by-Step Guide

### 1. Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

### 2. Create GitHub Repo (Recommended)
1. Go to [github.com](https://github.com) and create a new repository
2. Upload all these files to the repo:
   - server.js
   - package.json
   - vercel.json
   - index.html
   - styles.css
   - app.js
   - admin.html
   - .gitignore

### 3. Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Node.js — no config needed!
5. Click **"Deploy"**
6. Your app will be live at: `https://your-project.vercel.app`

### 4. Access Your App
- **User Form**: `https://your-project.vercel.app`
- **Admin Panel**: `https://your-project.vercel.app/admin.html`
- **Admin Password**: `confronter1`

### 5. Update Domain (Optional)
In Vercel dashboard → Settings → Domains → Add your custom domain

---

## ⚠️ IMPORTANT: Vercel Limitations

Vercel uses **serverless functions** with **ephemeral filesystem**.
This means:
- ✅ Data works fine during a single request
- ⚠️ `data.json` resets on every new deployment
- ⚠️ Data may be lost between requests (Vercel spins down)

### Solutions:

#### Option A: Use Vercel KV (Recommended)
Vercel offers free KV storage:
1. Go to Vercel Dashboard → Storage → KV
2. Create a new KV database
3. Connect it to your project
4. Update `server.js` to use KV instead of file storage

#### Option B: Use External Database
Connect to MongoDB Atlas (free tier) or Supabase (free tier)

#### Option C: Use Railway/Render Instead
For persistent file storage, deploy on:
- **Railway** ([railway.app](https://railway.app)) — free, persistent storage
- **Render** ([render.com](https://render.com)) — free, persistent storage

---

## 🔧 Quick Deploy via CLI

```bash
# Login to Vercel
vercel login

# Deploy
cd your-project-folder
vercel

# Follow prompts
# Done! Your URL will be shown.
```

---

## 📁 Required Files for Vercel

| File | Required | Purpose |
|------|----------|---------|
| server.js | ✅ | Backend API |
| package.json | ✅ | Node.js config |
| vercel.json | ✅ | Vercel routing |
| index.html | ✅ | User form |
| styles.css | ✅ | Styles |
| app.js | ✅ | Frontend logic |
| admin.html | ✅ | Admin panel |
| .gitignore | ✅ | Ignore files |

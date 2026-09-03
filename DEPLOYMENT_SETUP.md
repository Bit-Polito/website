# Deployment Setup Guide

## 🚀 Environment Variables Configuration

### Local Development
1. **Copy environment file:**
   ```bash
   cp env.example .env
   ```
2. **The `.env` file contains:**
   ```
   NOTION_TOKEN=ntn_your_integration_token
   NOTION_DATABASE_ID=27cae3dac7c4817da038df21ae8482f7
   ```
3. **Start development server:**
   ```bash
   npm run dev
   ```

### Vercel Deployment

#### For Preview/Development Branches:
1. **Go to Vercel Dashboard** → Your Project
2. **Settings** → **Environment Variables**
3. **Add these variables:**
   ```
   NOTION_TOKEN = ntn_your_integration_token
   NOTION_DATABASE_ID = 27cae3dac7c4817da038df21ae8482f7
   ```
4. **Select environments:**
   - ✅ **Production** (for main branch)
   - ✅ **Preview** (for all other branches)
   - ✅ **Development** (for local)

#### Automatic Deploy:
- Push to any branch → Automatic preview deploy
- Push to main → Production deploy

### GitHub Secrets (Optional - for future GitHub Actions)

1. **Go to GitHub Repository**
2. **Settings** → **Secrets and variables** → **Actions**
3. **Add repository secrets:**
   ```
   NOTION_TOKEN = ntn_your_integration_token
   NOTION_DATABASE_ID = 27cae3dac7c4817da038df21ae8482f7
   ```

### Other Platforms

**Netlify:**
- Site settings → Environment variables
- Add the same variables

**Railway/Render:**
- Environment tab
- Add the same variables

## 🔧 Code Configuration

The code is already configured to:
- ✅ Use `process.env.NOTION_TOKEN` and `process.env.NOTION_DATABASE_ID`
- ✅ Check for missing credentials and return empty data
- ✅ Work with both local `.env` and deployment environment variables

## 📋 Deployment Checklist

Before pushing to any branch:
- [ ] Code uses environment variables (✅ Done)
- [ ] `.env` exists for local development (✅ Done)
- [ ] Environment variables set in deployment platform
- [ ] Test local development works
- [ ] Push to branch for preview deploy

## 🚨 Important Notes

- **Never commit `.env`** (already in `.gitignore`)
- **Set environment variables for ALL environments** (Production, Preview, Development)
- **Preview branches will have access to the same Notion data**
- **The site will show empty content if environment variables are missing**

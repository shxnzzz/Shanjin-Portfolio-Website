# GitHub Pages Troubleshooting Guide

## Common Issues When Deploying to GitHub Pages

### 1. **CSS Not Loading (Website Appears Huge/Unstyled)**

**Symptoms:**
- Website looks fine on localhost but huge/unstyled on GitHub Pages
- Text appears very large
- Layout is broken

**Solutions:**

#### A. Check Repository Settings
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Ensure **Source** is set to:
   - **Deploy from a branch** → **main** (or your default branch)
   - **Deploy from a branch** → **gh-pages** (if using gh-pages branch)

#### B. Check File Structure
Make sure your files are in the correct location:
```
your-repo/
├── index.html
├── style.css
├── script.js
└── profile-image.jpg (if you have one)
```

#### C. Check Branch Name
- If your repository is named `username.github.io`, deploy from `main` branch
- If your repository has any other name, deploy from `main` or `gh-pages` branch

#### D. Force Cache Refresh
1. Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac) to hard refresh
2. Or open in incognito/private browsing mode

### 2. **File Path Issues**

**Problem:** CSS/JS files not found

**Solution:** Update file paths in HTML:
```html
<!-- Instead of -->
<link rel="stylesheet" href="style.css" />

<!-- Use -->
<link rel="stylesheet" href="./style.css" />
```

### 3. **Repository Name vs URL**

**Problem:** If your repository is named differently from your GitHub Pages URL

**Solution:** 
- Repository: `my-portfolio`
- GitHub Pages URL: `username.github.io/my-portfolio`
- Make sure all relative paths work with the `/my-portfolio/` prefix

### 4. **Deployment Delay**

**Problem:** Changes not appearing immediately

**Solution:**
- GitHub Pages can take 5-10 minutes to update
- Check the **Actions** tab in your repository for deployment status
- Wait and refresh the page

### 5. **HTTPS vs HTTP**

**Problem:** Mixed content warnings

**Solution:** Always use HTTPS for external resources:
```html
<!-- Use HTTPS -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Quick Fixes Applied to Your Site

1. **Added fallback CSS** directly in HTML head
2. **Added multiple CSS link paths** for redundancy
3. **Added JavaScript CSS loading check**
4. **Added critical responsive styles** as fallback

## Testing Your Deployment

1. **Local Testing:**
   ```bash
   # Test locally first
   start index.html
   ```

2. **GitHub Pages Testing:**
   - Visit your GitHub Pages URL
   - Check browser console for errors (F12)
   - Test on different devices/browsers

3. **Common GitHub Pages URLs:**
   - `https://username.github.io/repository-name/`
   - `https://username.github.io/` (if repo is named `username.github.io`)

## Still Having Issues?

1. **Check browser console** for specific error messages
2. **Verify file permissions** - all files should be readable
3. **Check for typos** in file names and paths
4. **Ensure all files are committed** to the correct branch
5. **Wait for deployment** - changes can take 5-10 minutes

## Contact Support

If issues persist:
1. Check GitHub Pages documentation
2. Review GitHub Pages status page
3. Check your repository's Actions tab for deployment logs 
# 🚀 Quick Deployment Guide

## Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `your-portfolio` or `yourname.github.io`
   - Make it public
   - Click "Create repository"

2. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all your files (index.html, style.css, script.js, README.md)
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch
   - Click "Save"
   - Your site will be live at `https://yourname.github.io/your-portfolio`

## Option 2: Netlify (Free & Instant)

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Deploy**
   - Click "New site from Git"
   - Connect your GitHub repository
   - Select your portfolio repository
   - Click "Deploy site"
   - Your site is live instantly!

## Option 3: Vercel (Free & Fast)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live in seconds

## Option 4: Local Testing

To test locally before deploying:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📝 Before Deploying

1. **Update Personal Information**
   - Replace "Shanjin Kok" with your name
   - Update email addresses
   - Add your real projects
   - Update social media links

2. **Add Your Profile Picture**
   - Add your photo to the project folder
   - Update the hero section in index.html
   - Add the CSS for the image

3. **Customize Colors** (Optional)
   - Edit the color variables in style.css
   - Choose colors that match your brand

## 🔗 Custom Domain (Optional)

1. **Buy a Domain**
   - Purchase from Namecheap, GoDaddy, or Google Domains

2. **Configure DNS**
   - Point your domain to your hosting provider
   - Follow their specific instructions

3. **Update Your Site**
   - Add your custom domain to your hosting platform

## 📊 Performance Tips

- Compress images before uploading
- Test on mobile devices
- Check loading speed with Google PageSpeed Insights
- Validate your HTML at validator.w3.org

## 🎉 You're Live!

Once deployed, share your portfolio URL on:
- LinkedIn
- GitHub profile
- Resume
- Business cards
- Social media

---

**Need help?** Check the main README.md for detailed customization instructions! 
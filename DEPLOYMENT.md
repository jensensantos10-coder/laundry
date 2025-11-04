# Deployment Guide

This guide covers deploying the FreshPress Laundry website to various hosting platforms.

## 📦 Build the Project

Before deploying, build the production version:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

**Via CLI:**
```bash
npm install -g vercel
vercel
```

**Via Git:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure settings
5. Deploy!

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2. Netlify

**Via CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Via Git:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Deploy!

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

3. Update vite.config.ts:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create S3 bucket and enable static website hosting

3. Upload dist/ contents to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. Set up CloudFront distribution pointing to S3 bucket

5. Configure custom domain (optional)

### 5. Cloudflare Pages

**Via Git:**
1. Push code to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect your repository
4. Configure:
   - Build Command: `npm run build`
   - Build Output Directory: `dist`
5. Deploy!

### 6. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Configure firebase.json:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Deploy:
```bash
npm run build
firebase deploy
```

## 🔧 Environment Variables

If you need environment variables:

1. Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

3. Configure in hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - Others: Check platform documentation

## 🌐 Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### Cloudflare Pages
1. Go to Custom Domains
2. Add domain
3. DNS automatically configured if using Cloudflare DNS

## ✅ Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify navigation works
- [ ] Test contact form submission
- [ ] Check map functionality
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Test all CTAs and buttons
- [ ] Check social media links
- [ ] Verify SEO meta tags
- [ ] Test performance (Lighthouse)

## 🔍 Troubleshooting

**Issue: Routes return 404**
- Solution: Configure redirects to index.html (see platform-specific configs above)

**Issue: Assets not loading**
- Solution: Check base URL in vite.config.ts matches deployment path

**Issue: Environment variables not working**
- Solution: Ensure variables are prefixed with `VITE_` and configured in hosting platform

**Issue: Build fails**
- Solution: Check Node.js version (use 18+), clear node_modules and reinstall

## 📊 Performance Optimization

The build is already optimized with:
- Code splitting (vendor chunks)
- Minification
- Tree shaking
- Asset optimization

For further optimization:
1. Enable compression (gzip/brotli) on hosting platform
2. Configure CDN caching headers
3. Use image optimization services
4. Enable HTTP/2 or HTTP/3

## 🔒 Security Headers

Add these headers in your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📈 Analytics

To add analytics:

1. **Google Analytics:**
   - Add tracking code to index.html
   - Or use react-ga4 package

2. **Vercel Analytics:**
   - Enable in Vercel dashboard
   - Add @vercel/analytics package

3. **Plausible/Fathom:**
   - Add script tag to index.html

---

Need help? Check the hosting platform's documentation or contact support.

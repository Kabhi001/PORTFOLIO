# Setup Instructions for Resume and Favicon

## Resume File
To make the resume download functional, you need to add your resume PDF file:

1. Place your resume PDF file in the `public` folder
2. Name it `resume.pdf`
3. The download button will automatically work

**Path:** `abhishek-portfolio/public/resume.pdf`

## Favicon Files
To add a favicon to your portfolio, create the following files in the `public` folder:

1. **favicon.ico** - Standard favicon (16x16 or 32x32 pixels)
2. **icon.svg** - SVG icon for modern browsers
3. **apple-touch-icon.png** - Apple touch icon (180x180 pixels)

You can use online tools like:
- [Favicon.io](https://favicon.io/) - Generate favicons from text, image, or emoji
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive favicon generator

### Quick Favicon Creation:
1. Go to https://favicon.io/favicon-generator/
2. Create a favicon with your initials "AK"
3. Download the generated files
4. Place them in the `public` folder

## Manifest File (Optional)
Create `public/manifest.json` for PWA support:

```json
{
  "name": "Abhishek Kumar Portfolio",
  "short_name": "AK Portfolio",
  "description": "Full Stack Developer Portfolio",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#0a0a0a",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## SEO Customization
Update the following in `app/layout.jsx`:
- Replace `https://abhishek-kumar-portfolio.vercel.app` with your actual deployed URL
- Update Twitter handle `@abhishekkumar` with your actual Twitter username
- Add Google verification code if you have one

## Testing
After adding the files:
1. Restart your development server
2. Check the browser tab for the favicon
3. Test the resume download button in navigation and hero section
4. Verify meta tags using browser dev tools or online SEO checkers

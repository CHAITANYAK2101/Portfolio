# Portfolio Setup Guide

## Quick Start Commands

Run these commands in order to set up your portfolio:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

## Firebase Configuration

Before the contact form will work, you need to configure Firebase:

1. **Create Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Follow the setup wizard

2. **Enable Firestore:**
   - In your Firebase project, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" for development

3. **Get Configuration:**
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click "Web" icon to create a web app
   - Copy the configuration object

4. **Update Configuration:**
   - Open `src/firebase/config.js`
   - Replace the placeholder values with your actual Firebase config

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

## Customization

### 1. Personal Information
Update these files with your details:
- `src/components/sections/Hero.jsx` - Name, title, social links
- `src/components/sections/About.jsx` - About section content
- `src/components/sections/Experience.jsx` - Work experience
- `src/components/sections/Projects.jsx` - Your projects
- `src/components/sections/Achievements.jsx` - Awards and certifications

### 2. Social Links
Update social media links in:
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`
- `src/components/sections/Hero.jsx`

### 3. Resume
- Add your resume as `public/resume.pdf`

### 4. Images
- Add profile image as `public/profile-image.jpg`
- Add project images in `public/projects/`

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize hosting
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## Features Included

✅ **Responsive Design** - Works on all devices
✅ **Dark/Light Theme** - Auto-detects system preference
✅ **Smooth Animations** - Framer Motion powered
✅ **Contact Form** - Firebase integration
✅ **Project Showcase** - Filterable gallery
✅ **SEO Optimized** - Meta tags and semantic HTML
✅ **Performance Optimized** - Code splitting and lazy loading
✅ **Modern Stack** - React 18, Vite, Tailwind CSS

## Troubleshooting

### Common Issues

1. **Contact form not working:**
   - Check Firebase configuration
   - Ensure Firestore is enabled
   - Check browser console for errors

2. **Images not loading:**
   - Ensure images are in the `public` folder
   - Check file paths and names
   - Verify image file extensions

3. **Styling issues:**
   - Make sure Tailwind CSS is properly configured
   - Check if all CSS files are imported
   - Clear browser cache

### Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all dependencies are installed correctly
3. Make sure Firebase is properly configured
4. Ensure all file paths are correct

---

Your portfolio is now ready! 🚀

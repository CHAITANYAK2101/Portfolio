# Chaitanya Kulkarni - Portfolio Website

A modern, responsive portfolio website built with React.js and Firebase, showcasing my skills, projects, and professional experience as a Full Stack Developer.

## 🌟 Features

- **Modern Design**: Clean, professional UI with dark/light theme support
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive Animations**: Smooth animations using Framer Motion
- **Contact Form**: Firebase-powered contact form with real-time submissions
- **Project Showcase**: Filterable project gallery with detailed information
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **React Type Animation** - Typewriter effect animations

### Backend & Services
- **Firebase Firestore** - NoSQL database for contact form submissions
- **Firebase Analytics** - User analytics and insights
- **Firebase Hosting** - Static site hosting

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chaitanyakulkarni/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Enable Analytics (optional)
   - Get your Firebase configuration

4. **Environment Configuration**
   - Update `src/firebase/config.js` with your Firebase credentials
   - Replace the placeholder values with your actual Firebase config

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `src/components/sections/Hero.jsx` - Hero section content
- `src/components/sections/About.jsx` - About section
- `src/components/sections/Experience.jsx` - Work experience
- `src/components/sections/Projects.jsx` - Featured projects
- `src/components/sections/Achievements.jsx` - Achievements and certifications

### Styling
- Colors and themes: `tailwind.config.js`
- Global styles: `src/index.css`
- Component-specific styles: Individual component files

### Content
- Add your resume: Place `resume.pdf` in the `public` folder
- Project images: Add to `public/projects/` folder
- Profile images: Add to `public/` folder

## 📱 Components Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Navigation component
│   │   └── Footer.jsx          # Footer component
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Projects.jsx        # Featured projects
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Achievements.jsx    # Awards and certifications
│   │   ├── Contact.jsx         # Contact preview
│   │   ├── ContactForm.jsx     # Full contact form
│   │   ├── ProjectGrid.jsx     # Projects grid with filtering
│   │   └── AboutDetailed.jsx   # Detailed about page
│   └── ui/
│       ├── LoadingSpinner.jsx  # Loading component
│       ├── ScrollToTop.jsx     # Scroll to top button
│       └── ParticleBackground.jsx # Animated background
├── contexts/
│   └── ThemeContext.jsx        # Theme management
├── pages/
│   ├── Home.jsx               # Home page
│   ├── About.jsx              # About page
│   ├── Projects.jsx           # Projects page
│   └── Contact.jsx            # Contact page
└── firebase/
    └── config.js              # Firebase configuration
```

## 🎨 Design Features

- **Dark/Light Theme**: Automatic system preference detection with manual toggle
- **Smooth Animations**: Page transitions and scroll-triggered animations
- **Interactive Elements**: Hover effects and micro-interactions
- **Particle Background**: Animated particle system
- **Glass Morphism**: Modern glass effect UI elements
- **Gradient Accents**: Beautiful gradient text and background effects

## 📊 Analytics & Performance

- **Firebase Analytics**: Track user interactions and page views
- **Core Web Vitals**: Optimized for performance metrics
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Optimization**: Separate vendor and feature chunks

## 🚀 Deployment

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

### Other Platforms
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Chaitanya Kulkarni**
- Website: [chaitanyakulkarni.vercel.app](https://chaitanyakulkarni.vercel.app)
- Email: chaitanya@example.com
- LinkedIn: [linkedin.com/in/chaitanyakulkarni](https://linkedin.com/in/chaitanyakulkarni)
- GitHub: [github.com/chaitanyakulkarni](https://github.com/chaitanyakulkarni)

---

Built with ❤️ by Chaitanya Kulkarni

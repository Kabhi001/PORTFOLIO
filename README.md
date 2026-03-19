# 🚀 Abhishek Kumar - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **Modern Portfolio** built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion - showcasing my journey as a Full Stack Developer.

---

## 👨‍💻 About Me

**Abhishek Kumar** | Computer Science Student at Lovely Professional University

- 💻 **Full Stack Developer** - React, Node.js, MongoDB
- 🎯 **Problem Solver** - C++, DSA, Competitive Programming
- 🌐 **Web Developer** - Modern, Responsive Applications
- 📱 **Mobile-First** - User-Centric Design

---

## 🛠️ Tech Stack

### **Frontend**
React • Next.js • TypeScript • Tailwind CSS • Framer Motion • HTML5 • CSS3

### **Backend & Languages**
Node.js • JavaScript • C++ • Python • Java • PHP

### **Tools & Platforms**
Git • GitHub • MongoDB • Vercel • XAMPP • Bootstrap

---

## ⚡ Quick Start

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Installation**

```bash
# Clone repository
git clone https://github.com/Kabhi001/abhishek-portfolio.git
cd abhishek-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser 🎉

### **Build for Production**

```bash
# Create optimized production build
npm run build

# Preview production build
npm run start
```

---

## 📁 Project Structure

```
abhishek-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles with Tailwind
│
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with animated intro
│   │   ├── About.tsx       # About section with stats
│   │   ├── Skills.tsx      # Skills grid with icons
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── Education.tsx   # Education timeline
│   │   ├── Certificates.tsx # Certificates showcase
│   │   └── Contact.tsx     # Contact form
│   │
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   │
│   ├── Navigation.tsx      # Navigation bar
│   ├── Footer.tsx          # Footer with social links
│   └── BackgroundEffects.tsx # Animated background
│
├── data/
│   └── portfolio.ts        # Portfolio data (projects, skills, etc.)
│
├── lib/
│   └── utils.ts            # Utility functions
│
├── types/
│   └── index.ts            # TypeScript type definitions
│
├── public/                 # Static assets
│
├── next.config.cjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind theme customization
└── tsconfig.json           # TypeScript configuration
```

---

## 🌟 Features

### **✨ Modern Stack**
- ⚡ **Next.js 14** - App Router with Server Components
- 📘 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling
- ✨ **Framer Motion** - Smooth animations
- 🎯 **Font Awesome** - Professional icons
- 📱 **Fully Responsive** - Mobile-first design

### **🚀 Performance**
- ⚡ Static site generation
- 🖼️ Image optimization
- 🎯 Code splitting
- 📦 Bundle optimization
- 🔍 SEO optimized

### **🎨 UI/UX**
- 🌈 Gradient effects
- ✨ Scroll animations
- 🎭 Hover interactions
- 💫 Background particles
- 📱 Mobile navigation

---

## 🎯 Customization Guide

### **1. Update Personal Information**

Edit `data/portfolio.ts`:

```typescript
export const roles = [
  "Full Stack Developer",
  "React Developer",
  // Add your roles...
];
```

### **2. Add Your Projects**

```typescript
export const projects: Project[] = [
  {
    title: "Your Project Name",
    description: "Project description...",
    iconName: "gavel", // or "brain", "map"
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/username/repo",
    status: "live", // or "coming-soon"
  },
];
```

### **3. Update Skills**

```typescript
export const skills: Skill[] = [
  { name: "React", icon: "siReact", category: "framework" },
  // Add your skills...
];
```

### **4. Customize Theme Colors**

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#00d4ff',  // Your primary color
  },
  accent: {
    500: '#ff6b6b',  // Your accent color
  },
}
```

---

## 🌐 Deployment

### **Deploy to Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Deploy to Netlify**

```bash
npm run build
# Drag 'out' folder to Netlify
```

---

## 📊 Featured Projects

### **🎯 BidMaster – Auction & Bidding Web Application**
Real-time auction system with secure user access, competitive bidding, and automated winner selection.

**Tech:** React • Node.js • MongoDB • Vercel  
**Status:** Live

### **🧠 AI Tutor – Intelligent Learning Assistance Platform**
AI-powered learning platform with context-aware assistance and real-time query resolution.

**Tech:** HTML • CSS • JavaScript • Bootstrap • APIs  
**Status:** Live

### **🗺️ Path-Finder – Shortest Route & Navigation System**
Real-time navigation with geocoding, live tracking, and multi-mode routing.

**Tech:** HTML • CSS • JavaScript • Leaflet.js • OpenStreetMap  
**Status:** Live

---

## 📞 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek266/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Kabhi001)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kabhishek10266@gmail.com)

**Email:** kabhishek10266@gmail.com  
**Phone:** +91-7488930978  
**Location:** Punjab, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Font Awesome](https://fontawesome.com/) and [Simple Icons](https://simpleicons.org/)

---

⭐ **Star this repository** if you found it helpful!

**© 2025 Abhishek Kumar | Computer Science Student at LPU | Full Stack Developer**

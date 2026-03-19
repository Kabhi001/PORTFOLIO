import "./globals.css";

export const metadata = {
  title: "Abhishek Kumar - Full Stack Developer | React, Node.js, MongoDB",
  description: "Full Stack Developer specializing in React, Node.js, and MongoDB. Building modern web applications with clean code and best practices. Explore my portfolio of projects including BidMaster, AI Tutor, and Path-Finder.",
  keywords: [
    "Abhishek Kumar",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Web Developer",
    "JavaScript Developer",
    "MERN Stack",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Applications",
    "Software Engineer",
  ],
  authors: [{ name: "Abhishek Kumar" }],
  creator: "Abhishek Kumar",
  publisher: "Abhishek Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishek-kumar-portfolio.vercel.app",
    title: "Abhishek Kumar - Full Stack Developer | React, Node.js, MongoDB",
    description: "Full Stack Developer specializing in React, Node.js, and MongoDB. Building modern web applications with clean code and best practices.",
    siteName: "Abhishek Kumar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Kumar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Node.js, and MongoDB",
    images: ["/profile.jpg"],
    creator: "@abhishekkumar",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://abhishek-kumar-portfolio.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-8">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1729] to-[#0a0a0a]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6">
          {/* Copyright text on the left */}
          <div className="text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Abhishek Kumar. All rights reserved.</p>
          </div>

          {/* Circular social icons on the right */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Kabhi001"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-primary-500/50 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek266/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-primary-500/50 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/abhishek_kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-primary-500/50 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            </a>
            <a
              href="mailto:kabhishek10266@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-primary-500/50 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
            </a>
            <a
              href="/resume.pdf"
              download="Abhishek_Kumar_Resume.pdf"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-primary-500/50 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              aria-label="Download Resume"
            >
              <FontAwesomeIcon icon={faFileArrowDown} className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

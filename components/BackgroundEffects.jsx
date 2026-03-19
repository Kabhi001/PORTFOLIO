"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate random particles
const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));
};

export default function BackgroundEffects() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(80));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1729] to-[#0a0a0a] animate-gradient-shift" />
      
      {/* Large Moving Glow Layers */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary-500/30 via-primary-500/10 to-transparent rounded-full blur-3xl opacity-50"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-accent-500/30 via-accent-500/10 to-transparent rounded-full blur-3xl opacity-50"
      />

      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -120, 60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary-400/20 via-accent-400/10 to-transparent rounded-full blur-3xl opacity-40"
      />

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional smaller particles */}
      {particles.slice(0, 40).map((particle) => (
        <motion.div
          key={`small-${particle.id}`}
          className="absolute rounded-full bg-primary-400/30"
          style={{
            left: `${(particle.x + 50) % 100}%`,
            top: `${(particle.y + 50) % 100}%`,
            width: `${particle.size * 0.5}px`,
            height: `${particle.size * 0.5}px`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration * 1.5,
            repeat: Infinity,
            delay: particle.delay + 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Accent particles */}
      {particles.slice(0, 30).map((particle) => (
        <motion.div
          key={`accent-${particle.id}`}
          className="absolute rounded-full bg-accent-400/20"
          style={{
            left: `${(particle.x + 25) % 100}%`,
            top: `${(particle.y + 25) % 100}%`,
            width: `${particle.size * 0.7}px`,
            height: `${particle.size * 0.7}px`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 25 - 12, 0],
            opacity: [0.15, 0.45, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration * 1.2,
            repeat: Infinity,
            delay: particle.delay + 1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

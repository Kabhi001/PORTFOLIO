'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function FloatingStars() {
  // Reduced star count for better performance
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Main floating stars - reduced count */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.id % 3 === 0 
              ? '#00d4ff' 
              : star.id % 3 === 1 
              ? '#ff6b6b' 
              : '#ffffff',
            boxShadow: star.id % 3 === 0 
              ? '0 0 4px #00d4ff' 
              : star.id % 3 === 1 
              ? '0 0 4px #ff6b6b' 
              : '0 0 3px #ffffff',
            willChange: 'transform, opacity',
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Accent stars - reduced count */}
      {stars.slice(0, 15).map((star) => (
        <motion.div
          key={`accent-${star.id}`}
          className="absolute"
          style={{
            left: `${(star.x + 30) % 100}%`,
            top: `${(star.y + 30) % 100}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: 'linear',
          }}
        >
          <div
            className="relative"
            style={{
              width: `${star.size * 2}px`,
              height: `${star.size * 2}px`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: star.id % 2 === 0 ? '#00d4ff' : '#ff6b6b',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                filter: 'blur(0.5px)',
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Twinkling stars - reduced count */}
      {stars.slice(0, 25).map((star) => (
        <motion.div
          key={`twinkle-${star.id}`}
          className="absolute rounded-full"
          style={{
            left: `${(star.x + 60) % 100}%`,
            top: `${(star.y + 60) % 100}%`,
            width: `${star.size * 1.5}px`,
            height: `${star.size * 1.5}px`,
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
            willChange: 'transform, opacity',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration * 1.5,
            repeat: Infinity,
            delay: star.delay + 1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

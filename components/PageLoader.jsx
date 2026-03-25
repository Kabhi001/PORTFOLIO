'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)' }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
              style={{ 
                background: 'linear-gradient(135deg, #00d4ff, #ff6b6b)', 
                boxShadow: '0 0 60px rgba(0, 212, 255, 0.5)' 
              }}
            >
              AK
            </div>
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-2xl"
              style={{ 
                border: '2px solid transparent', 
                borderTopColor: '#00d4ff', 
                borderRightColor: '#ff6b6b' 
              }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-white font-bold text-xl tracking-widest mb-6"
          >
            ABHISHEK KUMAR
          </motion.p>

          {/* Progress bar */}
          <div 
            className="w-48 h-0.5 rounded-full overflow-hidden" 
            style={{ background: 'rgba(255, 255, 255, 0.08)' }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #00ffaa, #ff6b6b)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

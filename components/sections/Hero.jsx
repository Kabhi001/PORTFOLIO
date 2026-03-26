"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNode, faJs } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import { roles } from "@/data/portfolio";

const floatingIcons = [
  { icon: faReact, color: "#61DAFB" },
  { icon: faNode, color: "#339933" },
  { icon: faJs, color: "#F7DF1E" },
  { icon: faCode, color: "#4ECDC4" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Section */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-12 mt-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-[40px] opacity-40 animate-pulse" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-500/50 shadow-[0_0_50px_rgba(0,212,255,0.3)]">
              <img
                src="/profile.jpeg"
                alt="Abhishek Kumar"
                className="w-full h-full object-cover object-[center_35%]"
              />
            </div>
            
            {/* Floating Icons */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full"
              >
                {floatingIcons.map((item, i) => {
                  const angle = (i * Math.PI) / 2;
                  const topPos = 50 + 40 * Math.sin(angle);
                  const leftPos = 50 + 40 * Math.cos(angle);
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute text-4xl"
                      style={{
                        top: `${topPos}%`,
                        left: `${leftPos}%`,
                        color: item.color,
                      }}
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="gradient-text">Abhishek <span className="inline-block w-3"></span> Kumar</span>
            </h1>

            <div className="h-20 md:h-24 mb-8">
              <motion.h2
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-3xl md:text-5xl font-semibold text-primary-500"
              >
                {roles[currentRole]}
              </motion.h2>
            </div>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about building <span className="text-primary-400">modern web applications</span> with{" "}
              <span className="text-primary-400">React</span>, <span className="text-primary-400">Node.js</span>, and{" "}
              <span className="text-primary-400">MongoDB</span>. Focused on creating scalable solutions with clean code.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

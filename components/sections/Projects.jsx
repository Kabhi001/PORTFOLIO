"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faBrain, faMap, faExternalLinkAlt, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { projects } from "@/data/portfolio";

const iconMap = {
  gavel: faGavel,
  brain: faBrain,
  map: faMap,
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Section id="projects" title="Featured Projects" className="bg-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-all border border-white/20 hover:border-primary-500/50"
            aria-label="Previous project"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-all border border-white/20 hover:border-primary-500/50"
            aria-label="Next project"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Project Cards Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-3xl border border-white/20 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                  {/* Project Screenshot/Image at Top */}
                  {projects[currentIndex].image && (
                    <div className="w-full h-64 overflow-hidden">
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}

                  {/* Content Below Image */}
                  <div className="p-8">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg flex-shrink-0">
                        {projects[currentIndex].iconName && (
                          <FontAwesomeIcon icon={iconMap[projects[currentIndex].iconName]} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {projects[currentIndex].title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {projects[currentIndex].description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-white/90 rounded-md text-sm border border-white/20 font-medium uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links & Status */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex gap-3">
                        {projects[currentIndex].liveUrl && (
                          <a
                            href={projects[currentIndex].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all hover:scale-105"
                          >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {projects[currentIndex].githubUrl && (
                          <a
                            href={projects[currentIndex].githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20 hover:scale-105"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                            <span>Code</span>
                          </a>
                        )}
                      </div>

                      {/* Status Badge */}
                      {projects[currentIndex].status && (
                        <span
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${
                            projects[currentIndex].status === "live"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          }`}
                        >
                          {projects[currentIndex].status === "live" ? "🟢 Live" : "🟡 Coming Soon"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-primary-500 to-accent-500"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <span className="text-white/60 text-sm">
              Project {currentIndex + 1} of {projects.length}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="transition-all cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-2xl text-white">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-xl text-primary-400 mb-3">{edu.degree}</p>
                  
                  <div className="flex flex-wrap gap-4 text-white/60 mb-3">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-400" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCalendar} className="text-primary-400" />
                      {edu.date}
                    </span>
                  </div>

                  <div className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold border border-primary-500/30">
                    {edu.grade}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

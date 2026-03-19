"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCalendar, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { certificates } from "@/data/portfolio";

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates">
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-xl text-white">
                    <FontAwesomeIcon icon={faCertificate} />
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-primary-400 mb-2">{cert.issuer}</p>
                  <span className="flex items-center gap-2 text-sm text-white/60">
                    <FontAwesomeIcon icon={faCalendar} className="text-primary-400" />
                    {cert.date}
                  </span>
                </div>

                {/* Small View Icon */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 rounded-lg flex items-center justify-center text-white/60 hover:text-primary-400 transition-all group"
                    title="View Certificate"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="group-hover:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

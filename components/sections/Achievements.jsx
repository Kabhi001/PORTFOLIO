"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const achievements = [
  {
    icon: "🥈",
    title: "Spectra 2026 - 2nd Position",
    description: "Got 2nd Position in Spectra 2026: An inter school competition.",
  },
  {
    icon: "🥈",
    title: "One India Runner Up 2025",
    description: "Won 1st runner-up prize in One India 2025.",
  },
  {
    icon: "🏆",
    title: "Hackathon Participant",
    description: "Participated in multiple coding hackathons, developing solutions under time constraints.",
  },
];

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="max-w-4xl mx-auto space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-3xl">
                    {achievement.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {achievement.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

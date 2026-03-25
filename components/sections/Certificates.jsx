"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { certificates } from "@/data/portfolio";

function CertificateCard({ cert, index }) {
  // Alternate between primary and accent colors
  const badgeColor = index % 2 === 0 ? "#00d4ff" : "#ff6b6b";
  const glowColor = index % 2 === 0 ? "rgba(0, 212, 255, 0.3)" : "rgba(255, 107, 107, 0.3)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(15, 20, 40, 0.85)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Image area */}
      <div className="relative w-full overflow-hidden" style={{ height: "340px" }}>
        {/* Certificate image */}
        <img
          src={cert.image}
          alt={cert.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay for better badge visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        {/* Issuer badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold z-10"
          style={{ 
            background: `linear-gradient(135deg, ${badgeColor}, ${index % 2 === 0 ? '#ff6b6b' : '#00d4ff'})`,
            color: "#ffffff",
            boxShadow: `0 4px 12px ${glowColor}`
          }}
        >
          {cert.issuer}
        </div>

        {/* Date badge */}
        <div
          className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold z-10"
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            color: badgeColor,
            backdropFilter: "blur(4px)",
            border: `1px solid ${badgeColor}30`
          }}
        >
          {cert.date}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 gap-4 p-8">
        <h3
          className="gradient-text"
          style={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {cert.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#94a3b8",
            lineHeight: 1.7,
          }}
          className="flex-1"
        >
          {cert.description}
        </p>

        {/* Divider and info */}
        <div
          className="flex items-center justify-between pt-3 text-xs"
          style={{ borderTop: `1px solid ${badgeColor}20` }}
        >
          <span className="font-semibold" style={{ color: badgeColor }}>
            {cert.issuer}
          </span>
          <span style={{ color: index % 2 === 0 ? '#ff6b6b' : '#00d4ff' }}>{cert.date}</span>
        </div>

        {/* View button */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg self-start transition-all duration-200"
          style={{
            background: `${badgeColor}18`,
            color: badgeColor,
            border: `1px solid ${badgeColor}35`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${badgeColor}30`;
            e.currentTarget.style.boxShadow = `0 4px 12px ${glowColor}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${badgeColor}18`;
            e.currentTarget.style.boxShadow = 'none';
          }}
          onClick={(e) => e.stopPropagation()}
        >
          View Certificate →
        </a>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </Section>
  );
}

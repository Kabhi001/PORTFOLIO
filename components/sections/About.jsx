"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const stats = [
  { label: "Projects", value: "3+" },
  { label: "Technologies", value: "18+" },
  { label: "Certificates", value: "4+" },
];

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-white/5">
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-4xl font-bold"
            >
              AK
            </motion.div>
            <h3 className="text-3xl font-bold mb-2">Abhishek Kumar</h3>
            <p className="text-white/60 text-xl">Full Stack Developer | React • Node.js • MongoDB | Problem Solver</p>
          </div>

          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              I am a passionate <span className="text-primary-400 font-semibold">Full Stack Developer</span> and Computer Science student at{" "}
              <span className="text-primary-400 font-semibold">Lovely Professional University</span>, with a strong interest in building modern, scalable web applications. 
              My journey into development started with curiosity about how websites and applications work, which quickly grew into a deep passion for creating real-world digital solutions.
            </p>
            
            <p>
              I specialize in <span className="text-accent-400 font-semibold">React</span>, <span className="text-accent-400 font-semibold">Node.js</span>, <span className="text-accent-400 font-semibold">MongoDB</span>, and modern JavaScript technologies, 
              and I enjoy transforming ideas into responsive and user-friendly applications. I focus on writing clean, maintainable code while ensuring performance and a smooth user experience.
            </p>
            
            <p>
              Through my projects, I have built applications such as <span className="text-primary-400 font-semibold">real-time auction platforms</span>, <span className="text-accent-400 font-semibold">AI-powered systems</span>, 
              and <span className="text-primary-400 font-semibold">navigation-based solutions</span>, which helped me strengthen my problem-solving skills and practical development experience.
            </p>
            
            <p>
              I am always eager to learn new technologies, solve challenging problems, and collaborate on innovative projects that create meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-primary-500/20 hover:border-primary-500/50 transition-all cursor-pointer"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

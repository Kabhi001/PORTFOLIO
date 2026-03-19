import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Section({ id, title, children, className }) {
  return (
    <section id={id} className={cn("py-20 relative", className)}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

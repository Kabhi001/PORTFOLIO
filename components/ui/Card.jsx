import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Card({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-primary-500/50 transition-all",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

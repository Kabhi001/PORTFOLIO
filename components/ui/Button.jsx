import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) {
  const baseStyles = "font-semibold rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

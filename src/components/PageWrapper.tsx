import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function PageWrapper({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}     // start off right side
      animate={{ opacity: 1, x: 0 }}       // slide to center
      exit={{ opacity: 0, x: 0 }}       // slide out left
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
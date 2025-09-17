import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageWrapper({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}    // enter from right
      animate={{ opacity: 1, x: 0 }}     // settle
      exit={{ opacity: 0, x: -50 }}      // exit left
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
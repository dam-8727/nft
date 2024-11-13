import React from "react";
import { motion } from "framer-motion";

const PopOutSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Start smaller and transparent
      whileInView={{ opacity: 1, scale: 1 }} // Scale up and become opaque
      transition={{ duration: 0.5, ease: "backInOut" }} // Smooth pop-out effect
      viewport={{ once: false, amount: 0.9 }} //
    >
      {children}
    </motion.div>
  );
};

export default PopOutSection;
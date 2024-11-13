import React from "react";
import { motion } from "framer-motion";

const SlideInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
      whileInView={{ opacity: 1, x: 0 }} // Move to the original position
      transition={{ duration: 0.5 }} // Animation duration
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInSection;
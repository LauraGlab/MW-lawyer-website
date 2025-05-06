import React from "react";
import { motion } from "framer-motion";
import "./../../css/components/header/Logo.css";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="logo__section"
    >
      <div className="logo" alt="Logo" />
    </motion.div>
  );
}
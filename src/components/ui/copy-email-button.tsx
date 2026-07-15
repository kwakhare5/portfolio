"use client";

import { Icons } from "./social-icons";
import { motion } from "motion/react";

export function CopyEmailButton({ email }: { email: string }) {
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    window.dispatchEvent(new CustomEvent('emailCopied'));
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={handleCopy}
      data-cursor-type="copy-email"
      className="group flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
    >
      <Icons.Email className="size-3.5 group-hover:scale-110 transition-transform duration-150" />
      <span>Email</span>
    </motion.button>
  );
}

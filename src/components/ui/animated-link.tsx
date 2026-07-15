"use client";

import React from "react";
import { motion } from "motion/react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: React.ComponentPropsWithoutRef<typeof motion.div>["whileHover"];
  whileTap?: React.ComponentPropsWithoutRef<typeof motion.div>["whileTap"];
}

export function AnimatedLink({
  children,
  className,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ...props
}: AnimatedLinkProps) {
  return (
    <motion.div
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      <Link className={cn("inline-block", className)} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}




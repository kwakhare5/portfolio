"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";

interface AnimatedEntranceProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

const AnimatedEntrance = ({
  children,
  className,
  variant,
  duration = 0.5,
  delay = 0,
  yOffset = 16,
  inView = false,
  inViewMargin = "-50px",
  blur = "4px",
}: AnimatedEntranceProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });
  const isInView = !inView || inViewResult;

  const combinedVariants: Variants = variant || {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedEntrance;




"use client";
import { Css3, Docker, FastAPI, FramerMotion, Git, Html5, Java, Javascript, NextjsIconDark, Nodejs, Postgresql, Python, ReactLight, Supabase, Tailwind, Typescript, Vite } from '@/components/ui/skill-icons';

import React from "react";
import { motion } from "motion/react";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  "TypeScript": Typescript,
  "JavaScript": Javascript,
  "Python": Python,
  "Java": Java,
  "React": ReactLight,
  "Next.js": NextjsIconDark,
  "Node.js": Nodejs,
  "PostgreSQL": Postgresql,
  "Docker": Docker,
  "Git": Git,
  "HTML5": Html5,
  "CSS3": Css3,
  "Tailwind CSS": Tailwind,
  "Framer Motion": FramerMotion,
  "Supabase": Supabase,
  "FastAPI": FastAPI,
  "Vite": Vite
};

interface SkillsSectionProps {
  readonly skills: readonly string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } },
      }}
    >
      {skills.map((skillName) => {
        const IconComponent = ICON_MAP[skillName];
        return (
          <motion.div
            key={skillName}
            variants={{
              hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}

            data-cursor-type="skill"
            data-skill-name={skillName}
            className="border bg-background border-border hover:border-foreground/25 hover:shadow-md transition-colors duration-200 ring-2 ring-border/10 rounded-xl h-8 w-fit px-4 flex items-center gap-2 cursor-pointer select-none"
          >
            {IconComponent && (
              <span className="flex items-center">
                <IconComponent className="size-4 rounded overflow-hidden object-contain" />
              </span>
            )}
            <span className="text-foreground text-sm font-medium">{skillName}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

interface Dot {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

export function Particles({ className = "", quantity = 25 }: ParticlesProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    let active = true;
    const generated = Array.from({ length: quantity }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.08,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * -30,
      driftX: (Math.random() - 0.5) * 30,
      driftY: (Math.random() - 0.5) * 30,
    }));

    const timer = setTimeout(() => {
      if (active) {
        setDots(generated);
      }
    }, 0);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [quantity]);

  if (dots.length === 0) return null;

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-muted-foreground/30"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `particle-float ${d.duration}s ease-in-out ${d.delay}s infinite`,
            "--particle-dx": `${d.driftX}px`,
            "--particle-dy": `${d.driftY}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

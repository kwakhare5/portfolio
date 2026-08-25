"use client";

import { useEffect, useState, useRef } from "react";

const GREETINGS = [
  "Hi",
  "Hola",
  "Bonjour",
  "Konnichiwa",
  "Namaste",
  "Ciao"
];

const ASCII_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?~";

export function HeroGreeting({ name }: { name: string }) {
  const [displayText, setDisplayText] = useState("Hi");
  const indexRef = useRef(0);
  const scrambleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;

    const triggerDecode = (targetWord: string) => {
      let frame = 0;
      const totalFrames = 14;

      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }

      scrambleTimerRef.current = setInterval(() => {
        if (!isMounted) return;

        if (frame >= totalFrames) {
          setDisplayText(targetWord);
          if (scrambleTimerRef.current) {
            clearInterval(scrambleTimerRef.current);
            scrambleTimerRef.current = null;
          }
          return;
        }

        const scrambled = targetWord
          .split("")
          .map((char, index) => {
            const resolveThreshold = (index / Math.max(targetWord.length, 1)) * totalFrames;
            if (frame >= resolveThreshold) {
              return char;
            }
            return ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
          })
          .join("");

        setDisplayText(scrambled);
        frame++;
      }, 35);
    };

    const mainInterval = setInterval(() => {
      if (!isMounted) return;
      indexRef.current = (indexRef.current + 1) % GREETINGS.length;
      triggerDecode(GREETINGS[indexRef.current]);
    }, 3500);

    return () => {
      isMounted = false;
      clearInterval(mainInterval);
      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }
    };
  }, []);

  return (
    <h1 id="hero-greeting" className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground min-h-[36px] flex items-center">
      <span>
        <span className="font-mono font-medium tracking-normal text-foreground">
          {displayText}
        </span>
        <span>, I&apos;m {name}</span>
      </span>
    </h1>
  );
}

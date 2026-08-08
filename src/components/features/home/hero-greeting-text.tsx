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

export function HeroGreetingText({ name }: { name: string }) {
  const [displayText, setDisplayText] = useState("Hi");
  const indexRef = useRef(0);
  const scrambleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const triggerDecode = (targetWord: string) => {
      let frame = 0;
      const totalFrames = 14;

      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }

      scrambleTimerRef.current = setInterval(() => {
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
      indexRef.current = (indexRef.current + 1) % GREETINGS.length;
      triggerDecode(GREETINGS[indexRef.current]);
    }, 3500);

    return () => {
      clearInterval(mainInterval);
      if (scrambleTimerRef.current) {
        clearInterval(scrambleTimerRef.current);
      }
    };
  }, []);

  return (
    <h1 id="hero-greeting" className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl font-sans min-h-[40px] sm:min-h-[50px] flex items-center">
      <span>
        <span className="font-mono tracking-normal text-foreground">
          {displayText}
        </span>
        <span>, I&apos;m {name}</span>
      </span>
    </h1>
  );
}

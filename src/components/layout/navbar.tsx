"use client";

import { ModeToggle } from "@/components/layout/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";


const NAV_SECTIONS = [
  { label: "About",    id: "hero-section" },
  { label: "Work",     id: "work-experience" },
  { label: "Projects", id: "projects" },
];

// Scroll to section with offset for fixed navbar
const NAVBAR_HEIGHT = 120; // px

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        id="main-nav"
        className={cn(
          "pointer-events-auto flex items-center rounded-full border transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-2xl border-border/70 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)]"
            : "bg-background/55 backdrop-blur-xl border-border/40"
        )}
      >
        {/* ── Name ── */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              scrollToSection("hero-section");
            }
          }}
          className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-semibold tracking-tight text-foreground hover:opacity-60 transition-opacity rounded-full shrink-0 cursor-pointer"
        >
          <span className="block sm:hidden">{DATA.name.split(" ").map((n) => n[0]).join("")}</span>
          <span className="hidden sm:block">
            {DATA.name.split(" ")[0]}
            <span className="text-muted-foreground font-normal">
              {" "}{DATA.name.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-border/60 shrink-0" />

        {/* ── Section links ── */}
        <div className="flex items-center px-0.5 sm:px-1">
          {NAV_SECTIONS.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => {
                  if (pathname !== "/") {
                    router.push(`/#${id}`);
                  } else {
                    scrollToSection(id);
                  }
                }}
                data-cursor-type="nav"
                data-nav-label={label}
                className="relative px-2 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-[12px] font-medium rounded-full transition-colors duration-200 cursor-pointer"
              >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-tab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-foreground/[0.07] border border-border/50"
                    />
                  )}
                <span className={cn(
                  "relative transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-border/60 shrink-0" />

        {/* ── Theme toggle ── */}
        <div className="px-1.5 sm:px-2 py-1 sm:py-1.5">
          <ModeToggle className="size-6.5 sm:size-7 rounded-full hover:bg-foreground/6 flex items-center justify-center" />
        </div>
      </motion.nav>
    </div>
  );
}




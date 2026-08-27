

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Removed Globe and ChevronDown as they are no longer needed here
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const headerElement = document.querySelector<HTMLElement>("header");

      if (!headerElement) return;

      const rect = headerElement.getBoundingClientRect();
      const y = rect.top + rect.height / 2;
      const x = rect.left + rect.width / 2;

      let elements: Element[] = [];
      if (typeof document.elementsFromPoint === "function") {
        elements = document.elementsFromPoint(x, y);
      } else if (
        "msElementsFromPoint" in document &&
        typeof (document as Document & {
          msElementsFromPoint?: (x: number, y: number) => Element[];
        }).msElementsFromPoint === "function"
      ) {
        elements =
          (
            document as Document & {
              msElementsFromPoint: (x: number, y: number) => Element[];
            }
          ).msElementsFromPoint(x, y);
      } else {
        const originalPointerEvents = headerElement.style.pointerEvents;
        headerElement.style.pointerEvents = "none";
        const el = document.elementFromPoint(x, y);
        headerElement.style.pointerEvents = originalPointerEvents;
        if (el) elements = [el];
      }

      // Find the first underlying element that is not inside the header
      const underlyingElement = elements.find(
        (el) => !headerElement.contains(el)
      );

      if (underlyingElement) {
        const detectedTheme = getBackgroundTheme(underlyingElement);
        setTheme(detectedTheme);
      }
    };

    const getBackgroundTheme = (element: Element): 'light' | 'dark' => {
      let el: Element | null = element;
      while (el && el !== document.body) {
        // 1. Check explicit data-theme attribute
        const themeAttr = el.getAttribute("data-theme");
        if (themeAttr === "dark" || themeAttr === "light") {
          return themeAttr;
        }

        // 2. Check Tailwind/CSS classes
        const className = el.className || "";
        if (typeof className === "string") {
          const darkClasses = ["bg-black", "bg-[#0a0a0a]", "bg-[#050505]", "bg-[#111111]", "bg-zinc-900", "bg-gray-900"];
          const lightClasses = ["bg-white", "bg-[#FAFAFA]", "bg-zinc-50", "bg-zinc-100", "bg-gray-50"];
          
          if (darkClasses.some(c => className.includes(c))) {
            return "dark";
          }
          if (lightClasses.some(c => className.includes(c))) {
            return "light";
          }
        }

        // 3. Check computed background style luminance
        const style = window.getComputedStyle(el);
        const bgColor = style.backgroundColor;
        if (bgColor && bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
          if (isDarkColor(bgColor)) {
            return "dark";
          } else {
            return "light";
          }
        }

        el = el.parentElement;
      }

      // Fallback for body background
      const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
      if (bodyBgColor && bodyBgColor !== "rgba(0, 0, 0, 0)" && bodyBgColor !== "transparent") {
        return isDarkColor(bodyBgColor) ? "dark" : "light";
      }

      return "light";
    };

    const isDarkColor = (colorStr: string): boolean => {
      const match = colorStr.match(/\d+/g);
      if (!match || match.length < 3) return false;
      const r = parseInt(match[0], 10);
      const g = parseInt(match[1], 10);
      const b = parseInt(match[2], 10);
      
      // Relative luminance formula
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance < 0.5;
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const intervalId = setInterval(handleScroll, 250);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearInterval(intervalId);
    };
  }, []);

  // Use the dynamic theme directly so the expanded menu keeps the glass effect
  const activeTheme = theme;

  return (
    <>
      <header 
        role="banner" 
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 ${activeTheme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-lg border border-white/20 shadow-[0_5px_30px_rgba(0,0,0,0.15)] rounded-2xl transition-all duration-500 ${activeTheme === 'dark' ? 'text-white' : 'text-black'}`}
      >
        <div className="flex items-center justify-between py-4 px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="relative w-[120px] h-[40px] flex items-center shrink-0" aria-label="Seabrand Home">
            {/* Light theme logo */}
            <Image
              src="/images/seabrand_logo.png"
              alt="Seabrand Logo"
              width={120}
              height={40}
              className={`object-contain transition-opacity duration-300 ${activeTheme === "dark" ? "opacity-0" : "opacity-100"}`}
              priority
            />
            {/* Dark theme logo */}
            <Image
              src="/images/white.png"
              alt="Seabrand Logo"
              width={120}
              height={40}
              className={`object-contain transition-opacity duration-300 absolute inset-0 m-auto ${activeTheme === "dark" ? "opacity-100" : "opacity-0"}`}
              priority
            />
          </Link>

          {/* Desktop Navigation Component */}
          <DesktopNav />

          {/* Right Side (Contact) - Removed Language selector here */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className={`group relative overflow-hidden px-6 py-2 text-sm font-medium rounded-xl shadow-lg transition-all duration-300 border ${
                activeTheme === "dark"
                  ? "bg-transparent border-white text-white hover:border-[#6748FE]"
                  : "bg-black border-transparent text-white"
              }`}
            >
              <span className="absolute inset-0 bg-[#6748FE] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />
              <span className="relative z-10 text-current transition-colors duration-500">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden group relative flex items-center justify-center w-10 h-10 focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                >
                  <X className="w-8 h-8 text-current" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-current"></span>
                    <span className="block w-6 h-0.5 bg-current"></span>
                    <span className="block w-6 h-0.5 bg-current"></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation inside the header to stretch the glassmorphism */}
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
}
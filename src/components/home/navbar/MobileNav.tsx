"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { mobileNavLinks } from "@/src/data/navbar.data";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface SubLink {
  name: string;
  href: string;
}

interface NavLinkItem {
  name: string;
  href: string;
  subLinks?: SubLink[];
}

const menuVariants: Variants = {
  closed: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const submenuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function MobileNav({
  isOpen,
  setIsOpen,
}: MobileNavProps) {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleMenuClick = (
    menuName: string,
    hasSubLinks: boolean,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (hasSubLinks) {
      e.preventDefault();
      setExpandedMenu((prev) => (prev === menuName ? null : menuName));
    } else {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed top-20 left-5 right-5 bottom-0 z-40 flex flex-col overflow-hidden rounded-b-2xl border-t border-gray-100 bg-white shadow-xl"
        >
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="flex flex-col">
              {(mobileNavLinks as NavLinkItem[]).map((link, index) => {
                const hasSubLinks = !!link.subLinks?.length;
                const isExpanded = expandedMenu === link.name;

                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.05,
                        duration: 0.4,
                      },
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        handleMenuClick(link.name, hasSubLinks, e)
                      }
                      className={`group flex items-center justify-between py-5 text-lg transition-colors ${
                        isActive
                          ? "font-semibold text-[#6748FE]"
                          : "font-medium text-gray-900 hover:text-[#6748FE]"
                      }`}
                    >
                      <span>{link.name}</span>

                      {hasSubLinks && (
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isExpanded
                              ? "rotate-180 text-[#6748FE]"
                              : "text-gray-400 group-hover:text-[#6748FE]"
                          }`}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {hasSubLinks && isExpanded && (
                        <motion.div
                          variants={submenuVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="overflow-hidden"
                        >
                          <div className="ml-2 mt-1 flex flex-col border-l-2 border-gray-100 pb-4 pl-4">
                            {link.subLinks?.map((subItem) => {
                              const isSubActive =
                                pathname === subItem.href;

                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`rounded-md px-4 py-3 text-base transition-colors ${
                                    isSubActive
                                      ? "bg-gray-50 font-semibold text-[#6748FE]"
                                      : "text-gray-600 hover:text-[#6748FE]"
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
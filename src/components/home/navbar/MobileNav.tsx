
// // "use client";

// // import React, { useState } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { motion, AnimatePresence, Variants } from "framer-motion";
// // import { ChevronDown, X } from "lucide-react";
// // import { mobileNavLinks } from "@/src/data/navbar.data";

// // interface MobileNavProps {
// //   isOpen: boolean;
// //   setIsOpen: (isOpen: boolean) => void;
// // }

// // interface SubLink {
// //   name: string;
// //   href: string;
// // }

// // interface NavLinkItem {
// //   name: string;
// //   href: string;
// //   subLinks?: SubLink[];
// // }

// // const menuVariants: Variants = {
// //   closed: {
// //     opacity: 0,
// //     y: -20,
// //     scale: 0.98,
// //     transition: {
// //       duration: 0.25,
// //       ease: [0.76, 0, 0.24, 1],
// //     },
// //   },
// //   open: {
// //     opacity: 1,
// //     y: 0,
// //     scale: 1,
// //     transition: {
// //       duration: 0.3,
// //       ease: [0.16, 1, 0.3, 1],
// //     },
// //   },
// // };

// // const submenuVariants: Variants = {
// //   closed: {
// //     height: 0,
// //     opacity: 0,
// //     transition: {
// //       duration: 0.2,
// //       ease: "easeInOut",
// //     },
// //   },
// //   open: {
// //     height: "auto",
// //     opacity: 1,
// //     transition: {
// //       duration: 0.2,
// //       ease: "easeInOut",
// //     },
// //   },
// // };

// // export default function MobileNav({
// //   isOpen,
// //   setIsOpen,
// // }: MobileNavProps) {
// //   const pathname = usePathname();
// //   const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

// //   const handleMenuClick = (
// //     menuName: string,
// //     hasSubLinks: boolean,
// //     e: React.MouseEvent<HTMLAnchorElement>
// //   ) => {
// //     if (hasSubLinks) {
// //       e.preventDefault();
// //       setExpandedMenu((prev) => (prev === menuName ? null : menuName));
// //     } else {
// //       setIsOpen(false);
// //     }
// //   };

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.div
// //           key="mobile-nav"
// //           initial="closed"
// //           animate="open"
// //           exit="closed"
// //           variants={menuVariants}
// //           className="fixed top-4 left-4 right-4 z-40 flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-2xl max-h-[85vh]"
// //         >
// //           {/* Header section inside the single container */}
// //           <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
// //             <Link
// //               href="/"
// //               onClick={() => setIsOpen(false)}
// //               className="flex items-center"
// //             >
// //               <img
// //                 src="/images/seabrand_logo.png"
// //                 alt="Seabrand AI"
// //                 className="h-7 w-auto object-contain"
// //               />
// //             </Link>
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="p-1 rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
// //               aria-label="Close menu"
// //             >
// //               <X className="h-6 w-6 stroke-[2.2]" />
// //             </button>
// //           </div>

// //           {/* Navigation items list */}
// //           <nav className="flex-1 overflow-y-auto px-6 py-2">
// //             <ul className="flex flex-col">
// //               {(mobileNavLinks as NavLinkItem[]).map((link, index) => {
// //                 const hasSubLinks = !!link.subLinks?.length;
// //                 const isExpanded = expandedMenu === link.name;

// //                 const isActive =
// //                   pathname === link.href ||
// //                   (link.href !== "/" && pathname.startsWith(link.href));

// //                 return (
// //                   <motion.li
// //                     key={link.name}
// //                     initial={{ opacity: 0, y: 10 }}
// //                     animate={{
// //                       opacity: 1,
// //                       y: 0,
// //                       transition: {
// //                         delay: index * 0.04,
// //                         duration: 0.3,
// //                       },
// //                     }}
// //                     exit={{ opacity: 0, y: 10 }}
// //                     className="border-b border-gray-100 last:border-none"
// //                   >
// //                     <Link
// //                       href={link.href}
// //                       onClick={(e) =>
// //                         handleMenuClick(link.name, hasSubLinks, e)
// //                       }
// //                       className={`group flex items-center justify-between py-4 text-lg transition-colors ${
// //                         isActive
// //                           ? "font-semibold text-[#6748FE]"
// //                           : "font-normal text-gray-900 hover:text-[#6748FE]"
// //                       }`}
// //                     >
// //                       <span>{link.name}</span>

// //                       {hasSubLinks && (
// //                         <ChevronDown
// //                           className={`h-4 w-4 transition-transform duration-300 ${
// //                             isExpanded
// //                               ? "rotate-180 text-[#6748FE]"
// //                               : "text-gray-400 group-hover:text-[#6748FE]"
// //                           }`}
// //                         />
// //                       )}
// //                     </Link>

// //                     <AnimatePresence>
// //                       {hasSubLinks && isExpanded && (
// //                         <motion.div
// //                           variants={submenuVariants}
// //                           initial="closed"
// //                           animate="open"
// //                           exit="closed"
// //                           className="overflow-hidden"
// //                         >
// //                           <div className="ml-2 mt-0.5 flex flex-col border-l-2 border-gray-100 pb-3 pl-3">
// //                             {link.subLinks?.map((subItem) => {
// //                               const isSubActive =
// //                                 pathname === subItem.href;

// //                               return (
// //                                 <Link
// //                                   key={subItem.href}
// //                                   href={subItem.href}
// //                                   onClick={() => setIsOpen(false)}
// //                                   className={`rounded-md px-3 py-2.5 text-base transition-colors ${
// //                                     isSubActive
// //                                       ? "bg-gray-50 font-semibold text-[#6748FE]"
// //                                       : "text-gray-600 hover:text-[#6748FE]"
// //                                   }`}
// //                                 >
// //                                   {subItem.name}
// //                                 </Link>
// //                               );
// //                             })}
// //                           </div>
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </motion.li>
// //                 );
// //               })}
// //             </ul>
// //           </nav>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import { mobileNavLinks } from "@/src/data/navbar.data";

// interface MobileNavProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// interface SubLink {
//   name: string;
//   href: string;
// }

// interface NavLinkItem {
//   name: string;
//   href: string;
//   subLinks?: SubLink[];
// }

// // Height expanding animation to push the main navbar downwards
// const menuVariants: Variants = {
//   closed: {
//     height: 0,
//     opacity: 0,
//     transition: {
//       height: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//       opacity: { duration: 0.2 },
//     },
//   },
//   open: {
//     height: "auto",
//     opacity: 1,
//     transition: {
//       height: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//       opacity: { duration: 0.3, delay: 0.1 },
//     },
//   },
// };

// const submenuVariants: Variants = {
//   closed: {
//     height: 0,
//     opacity: 0,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
//   open: {
//     height: "auto",
//     opacity: 1,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   },
// };

// export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
//   const pathname = usePathname();
//   const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

//   const handleMenuClick = (
//     menuName: string,
//     hasSubLinks: boolean,
//     e: React.MouseEvent<HTMLAnchorElement>
//   ) => {
//     if (hasSubLinks) {
//       e.preventDefault();
//       setExpandedMenu((prev) => (prev === menuName ? null : menuName));
//     } else {
//       setIsOpen(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           key="mobile-nav"
//           initial="closed"
//           animate="open"
//           exit="closed"
//           variants={menuVariants}
//           className="overflow-hidden md:hidden border-t border-current/10 mx-6"
//         >
//           <nav className="py-4 max-h-[70vh] overflow-y-auto hide-scrollbar">
//             <ul className="flex flex-col">
//               {(mobileNavLinks as NavLinkItem[]).map((link, index) => {
//                 const hasSubLinks = !!link.subLinks?.length;
//                 const isExpanded = expandedMenu === link.name;
//                 const isActive =
//                   pathname === link.href ||
//                   (link.href !== "/" && pathname.startsWith(link.href));

//                 return (
//                   <motion.li
//                     key={link.name}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{
//                       opacity: 1,
//                       x: 0,
//                       transition: {
//                         delay: index * 0.04 + 0.1,
//                         duration: 0.3,
//                       },
//                     }}
//                     exit={{ opacity: 0, x: -10 }}
//                     className="border-b border-current/10 last:border-none"
//                   >
//                     <Link
//                       href={link.href}
//                       onClick={(e) => handleMenuClick(link.name, hasSubLinks, e)}
//                       className={`group flex items-center justify-between py-4 text-lg transition-colors ${
//                         isActive
//                           ? "font-semibold text-[#6748FE]"
//                           : "font-normal text-current hover:text-[#6748FE]"
//                       }`}
//                     >
//                       <span>{link.name}</span>

//                       {hasSubLinks && (
//                         <ChevronDown
//                           className={`h-4 w-4 transition-transform duration-300 ${
//                             isExpanded
//                               ? "rotate-180 text-[#6748FE]"
//                               : "opacity-60 group-hover:text-[#6748FE]"
//                           }`}
//                         />
//                       )}
//                     </Link>

//                     <AnimatePresence>
//                       {hasSubLinks && isExpanded && (
//                         <motion.div
//                           variants={submenuVariants}
//                           initial="closed"
//                           animate="open"
//                           exit="closed"
//                           className="overflow-hidden"
//                         >
//                           <div className="ml-2 mt-0.5 flex flex-col border-l-2 border-current/20 pb-3 pl-3">
//                             {link.subLinks?.map((subItem) => {
//                               const isSubActive = pathname === subItem.href;

//                               return (
//                                 <Link
//                                   key={subItem.href}
//                                   href={subItem.href}
//                                   onClick={() => setIsOpen(false)}
//                                   className={`rounded-md px-3 py-2.5 text-base transition-colors ${
//                                     isSubActive
//                                       ? "bg-current/10 font-semibold text-[#6748FE]"
//                                       : "opacity-80 hover:opacity-100 hover:text-[#6748FE]"
//                                   }`}
//                                 >
//                                   {subItem.name}
//                                 </Link>
//                               );
//                             })}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

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

// Height expanding animation to push the main navbar downwards
const menuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      opacity: { duration: 0.2 },
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      opacity: { duration: 0.3, delay: 0.1 },
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

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
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
          className="overflow-hidden md:hidden border-t border-current/10 mx-6"
        >
          {/* Scrollable container with the scrollbar totally hidden */}
          <nav className="py-4 max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.04 + 0.1,
                        duration: 0.3,
                      },
                    }}
                    exit={{ opacity: 0, x: -10 }}
                    className="border-b border-current/10 last:border-none"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleMenuClick(link.name, hasSubLinks, e)}
                      className={`group flex items-center justify-between py-4 text-lg transition-colors ${
                        isActive
                          ? "font-semibold text-[#6748FE]"
                          : "font-normal text-current hover:text-[#6748FE]"
                      }`}
                    >
                      <span>{link.name}</span>

                      {hasSubLinks && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isExpanded
                              ? "rotate-180 text-[#6748FE]"
                              : "opacity-60 group-hover:text-[#6748FE]"
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
                          <div className="ml-2 mt-0.5 flex flex-col pb-3 pl-3">
                            {link.subLinks?.map((subItem) => {
                              const isSubActive = pathname === subItem.href;

                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`rounded-md px-3 py-2.5 text-base transition-colors ${
                                    isSubActive
                                      ? "bg-current/10 font-semibold text-[#6748FE]"
                                      : "opacity-80 hover:opacity-100 hover:text-[#6748FE]"
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
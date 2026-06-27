"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Windows & Doors", href: "/windows-doors" },
  { label: "Interiors", href: "/interiors" },
  { label: "Renovation", href: "/renovation" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
  document.body.style.overflow =
    mobileMenuOpen ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-lg border-b border-slate-100"
            : "bg-white/20 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="h-24 flex items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
            <Image
  src="/logo.png"
  alt="Simmply Perfect"
  width={55}
  height={55}
  priority
  className="
    h-[55px]
    w-auto
    object-contain
    transition-all
    duration-300
    group-hover:scale-105
  "
/>

              <div>
                <h1
                  className="
                    text-xl
                    font-bold
                    text-[#0A2E6F]
                    leading-none
                    tracking-wide
                  "
                >
                  SIMMPLY PERFECT
                </h1>

                <span
                  className="
                    text-[10px]
                    tracking-[5px]
                    text-slate-500
                  "
                >
                  GROUP
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">

              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    relative
                    text-[16px]
                    font-medium
                    text-slate-700
                    hover:text-[#0A2E6F]
                    transition-all
                    duration-300
                    group
                  "
                >
                  {link.label}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-0
                      bg-[#0A2E6F]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}
            </nav>

            {/* CTA */}

            <Link
  href="/contact"
  className="
    hidden
    lg:flex
    items-center
    justify-center
    bg-[#0A2E6F]
    text-white
    px-7
    py-3
    rounded-full
    text-sm
    font-medium
    hover:scale-105
    hover:shadow-xl
    transition-all
    duration-300
  "
>
  Get In Touch
</Link>

            {/* Mobile Button */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className="
                lg:hidden
                w-12
                h-12
                rounded-xl
                bg-white
                shadow-md
                border
                border-slate-200
                flex
                items-center
                justify-center
              "
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-5 h-[2px] bg-[#0A2E6F]" />
                <span className="w-5 h-[2px] bg-[#0A2E6F]" />
                <span className="w-5 h-[2px] bg-[#0A2E6F]" />
              </div>
            </motion.button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="
                fixed
                inset-0
                bg-black/50
                backdrop-blur-sm
                z-50
              "
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[90%]
                max-w-[380px]
                bg-white
                z-[60]
                shadow-2xl
                p-8
              "
            >
              <div className="flex items-center justify-between mb-12">

                <div className="flex items-center gap-3">

                  <Image
  src="/logo.png"
  alt="Logo"
  width={40}
  height={40}
  className="w-auto h-[40px]"
/>

                  <span className="font-bold text-[#0A2E6F]">
                    SIMMPLY PERFECT
                  </span>

                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 90 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-slate-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <X size={18} />
                </motion.button>

              </div>

              <div className="flex flex-col gap-8">

                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      text-2xl
                      font-medium
                      text-slate-700
                      hover:text-[#0A2E6F]
                      transition-all
                    "
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
  href="/contact"
  onClick={() => setMobileMenuOpen(false)}
  className="
    mt-8
    bg-[#0A2E6F]
    text-white
    py-4
    rounded-2xl
    font-semibold
    text-center
    hover:shadow-lg
    transition-all
    duration-300
  "
>
  Get In Touch
</Link>

              </div>
            </motion.div>
          </>
        )}

      </AnimatePresence>
    </>
  );
}

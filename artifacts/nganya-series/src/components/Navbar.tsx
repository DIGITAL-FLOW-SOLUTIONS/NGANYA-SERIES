import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/stories", label: "STORIES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Navbar — no backdrop-blur when menu is open to avoid fixed positioning trap */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled && !isOpen
            ? "bg-background/90 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex flex-col z-50 relative cursor-pointer">
            <span className="font-display text-4xl leading-none text-white group-hover:text-primary transition-colors">NGANYA</span>
            <span className="text-xl leading-none text-accent italic font-semibold tracking-widest" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>SERIES</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative group overflow-hidden pb-1">
                <span className={`font-display text-xl tracking-wider ${location === link.href ? "text-primary" : "text-white"}`}>
                  {link.label}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left transition-transform duration-300 ${location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-[60] relative text-white"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu-toggle"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — rendered OUTSIDE nav to avoid backdrop-filter positioning trap */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] md:hidden"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/98 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white z-10 p-1"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              data-testid="button-mobile-menu-close"
            >
              <X size={32} />
            </button>

            {/* Links */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display text-5xl tracking-wider block ${
                      location === link.href ? "text-primary" : "text-white"
                    } hover:text-primary transition-colors`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="w-12 h-[2px] bg-accent" />
                <p className="font-display text-accent text-xs tracking-[0.3em] mt-2">
                  OUR CULTURE. OUR STORIES. OUR LEGACY.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

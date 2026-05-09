import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="relative w-10 h-10 border-2 border-ink flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-ink -translate-y-1 group-hover:translate-y-0 transition-transform duration-300" />
      <span className="font-serif font-bold text-xl text-forest italic leading-none relative z-10">CB</span>
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-forest rotate-45" />
    </div>
    <div className="flex flex-col">
      <span className="font-serif font-bold text-lg tracking-tight leading-none uppercase">Canaan</span>
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-forest font-semibold">Business House</span>
    </div>
  </Link>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Articles", path: "/articles" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-forest ${location.pathname === link.path ? "text-forest" : "text-muted"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-xs uppercase tracking-widest">
            Enquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-cream border-b border-ink/5"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif font-medium border-b border-ink/5 pb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

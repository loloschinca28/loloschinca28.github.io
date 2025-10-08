import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ["educacion", "conocimientos", "proyectos", "contacto"];

  return (
    <header className="sticky relative z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium transition-colors duration-300 hover:text-purple-500"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
       <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
  {menuItems.map((item, index) => (
    <motion.a
      key={`${item}-${index}`}
      href={`#${item}`}
      className="transition-colors duration-300 text-foreground/60 hover:text-purple-500"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
    >
      {/* Si el item es educacion, mostramos con tilde */}
      {item === "educacion"
        ? "Educación"
        : item.charAt(0).toUpperCase() + item.slice(1)}
    </motion.a>
  ))}
</nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      className="md:hidden absolute top-full left-0 w-full z-50 py-4 px-4 border-t border-border backdrop-blur-md bg-background dark:bg-background overflow-hidden"
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      style={{ transformOrigin: "top" }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-col space-y-4 text-sm font-medium">
        {menuItems.map((item, index) => (
          <motion.a
            key={`${item}-${index}`}
            href={`#${item}`}
            className="transition-colors duration-300 hover:text-purple-500 focus:text-purple-500 active:text-purple-500 text-foreground/60 py-2"
            onClick={toggleMenu}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {item === "educacion"
              ? "Educación"
              : item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}

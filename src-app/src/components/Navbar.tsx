import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type Tab = "home" | "videos" | "books" | "about";

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs: { id: Tab; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "videos", label: "Videos" },
    { id: "books", label: "Books" },
    { id: "about", label: "About" },
  ];

  const handleNavClick = (tab: Tab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-4 cursor-pointer" 
            onClick={() => handleNavClick("home")}
            data-testid="nav-logo"
          >
            <div className="w-12 h-12 bg-white flex items-center justify-center overflow-hidden">
              <img src="/favicon.png" alt="Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
                William C. Roach
              </h1>
              <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mt-1 hidden sm:block">
                Pursuing the Objective Christian Faith for the Modern Mind
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.id)}
                data-testid={`nav-tab-${tab.id}`}
                className={`uppercase tracking-widest font-bold text-sm pb-1 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-white border-white"
                    : "text-zinc-500 border-transparent hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <a
              href="https://drbillroach.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-substack-link"
              className="flex items-center gap-2 text-zinc-500 hover:text-white uppercase tracking-widest font-bold text-sm transition-colors"
            >
              Substack <ExternalLink size={14} />
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="button-mobile-menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black border-l border-white/10 flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
                data-testid="button-close-menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavClick(tab.id)}
                  data-testid={`mobile-nav-${tab.id}`}
                  className={`text-4xl font-black uppercase tracking-tighter ${
                    activeTab === tab.id ? "text-white" : "text-zinc-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <a
                href="https://drbillroach.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-black uppercase tracking-tighter text-zinc-600 flex items-center gap-4"
              >
                Substack <ExternalLink size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

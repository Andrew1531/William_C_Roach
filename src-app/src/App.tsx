import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Tab } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomeSection } from "./components/sections/HomeSection";
import { VideosSection } from "./components/sections/VideosSection";
import { BooksSection } from "./components/sections/BooksSection";
import { AboutSection } from "./components/sections/AboutSection";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (["home", "videos", "books", "about"].includes(hash)) {
      setActiveTab(hash as Tab);
    }
  }, []);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeTab === "home" && <HomeSection onTabChange={handleTabChange} />}
            {activeTab === "videos" && <VideosSection />}
            {activeTab === "books" && <BooksSection />}
            {activeTab === "about" && <AboutSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;

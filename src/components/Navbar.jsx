import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { t, dark, toggleLang, toggleDark } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const handleDarkToggle = () => {
    toggleDark();
    toast(dark ? "☀️ Light mode on" : "🌙 Dark mode on", {
      position: "bottom-right",
      autoClose: 1800,
      hideProgressBar: true,
      closeButton: false,
      style: { fontSize: "13px", minHeight: "auto", padding: "10px 16px" },
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-950 transition-shadow ${scrolled ? "shadow-sm" : ""}`}>

      <div className="max-w-content mx-auto px-5 sm:px-8 flex justify-end items-center gap-2 sm:gap-3 pt-2.5 pb-1">
        <button
          onClick={handleDarkToggle}
          aria-label="Toggle dark mode"
          className="relative w-10 h-[22px] rounded-full transition-colors duration-200 bg-[#4338CA]"
        >
          <span className={`absolute top-[3px] left-[3px] w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${dark ? "translate-x-[18px]" : ""}`} />
        </button>
        <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 tracking-widest uppercase select-none">
          Dark Mode
        </span>
        <span className="text-zinc-300 dark:text-zinc-600 select-none">|</span>
        <button
          onClick={toggleLang}
          className="text-[11px] font-semibold text-accent hover:opacity-75 transition-opacity tracking-widest uppercase"
        >
          {t.nav.langToggle}
        </button>
      </div>

      <div className="max-w-content mx-auto px-5 sm:px-8 h-12 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
        <a href="#" aria-label="Home">
          <div className="w-8 h-8 rounded-full border-2 border-violet-300 dark:border-violet-600 flex items-center justify-center text-violet-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#skills"   className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">{t.nav.skills}</a>
          <a href="#projects" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">{t.nav.projects}</a>
          <a href="#contact" className="inline-flex items-center px-5 py-1.5 border border-zinc-900 dark:border-white text-sm font-medium text-zinc-900 dark:text-white rounded hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-colors">
            {t.nav.hire}
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex md:hidden flex-col gap-1.5 p-1" aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-zinc-700 dark:bg-zinc-300 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-zinc-700 dark:bg-zinc-300 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-zinc-700 dark:bg-zinc-300 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 px-5 py-5 flex flex-col gap-4">
          <a href="#skills"   onClick={() => setMenuOpen(false)} className="text-sm text-zinc-700 dark:text-zinc-300">{t.nav.skills}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-700 dark:text-zinc-300">{t.nav.projects}</a>
          <a href="#contact"  onClick={() => setMenuOpen(false)} className="inline-flex w-fit items-center px-5 py-2 border border-zinc-900 dark:border-white text-sm font-medium text-zinc-900 dark:text-white rounded">{t.nav.hire}</a>
        </div>
      </div>

    </header>
  );
}

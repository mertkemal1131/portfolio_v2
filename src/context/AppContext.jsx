import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import data from "../data/data";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dark");
    return saved !== null ? JSON.parse(saved) : false;
  });

  
  useEffect(() => {
    const postData = async () => {
      const toastId = toast.loading("Connecting to API...");
      try {
        await axios.post("https://jsonplaceholder.typicode.com/posts", data.en.heroSection);
        toast.update(toastId, {
          render: "✅ API connected",
          type: "success",
          isLoading: false,
          autoClose: 2500,
        });
      } catch (err) {
        console.error("API error:", err);
        toast.update(toastId, {
          render: "❌ API connection failed",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    };
    postData();
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const toggleLang = () => setLang((p) => (p === "en" ? "tr" : "en"));
  const toggleDark = () => setDark((p) => !p);

  return (
    <AppContext.Provider value={{ lang, dark, toggleLang, toggleDark, t: data[lang] }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

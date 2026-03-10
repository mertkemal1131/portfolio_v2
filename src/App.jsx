import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider, useApp } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Layout() {
  const { dark } = useApp();
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </main>
      <ToastContainer
        position="bottom-right"
        theme={dark ? "dark" : "light"}
        toastClassName="text-sm"
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}

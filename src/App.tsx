import { lazy, Suspense } from "react";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { HeroProvider } from "./context/HeroContext";
import "./App.css";

const Projects = lazy(() => import("./components/Projects/Projects"));
const Timeline = lazy(() => import("./components/Timeline/Timeline"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <HeroProvider>
      <div className="bgImage" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense>
          <Projects />
          <Timeline />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </HeroProvider>
  );
}

export default App;

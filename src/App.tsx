import { lazy, Suspense } from "react";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { HeroProvider } from "./context/HeroContext";
import "./App.css";

const Projects = lazy(() => import("./components/Projects/Projects"));
const Career = lazy(() => import("./components/Career/Career"));
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
          <Career />
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

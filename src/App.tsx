import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { HeroProvider } from "./context/HeroContext";
import "./App.css";

function App() {
  return (
    <HeroProvider>
      <div className="bgImage" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <About />
        <Contact />
      </main>
      <Footer />
    </HeroProvider>
  );
}

export default App;

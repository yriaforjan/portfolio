import { useEffect, useState } from "react";
import { useHero } from "../../context/HeroContext";
import "./Navbar.css";

const links = [
  { label: "Proyectos", id: "projects" },
  { label: "Trayectoria", id: "career" },
  { label: "Sobre mí", id: "about" },
  { label: "Contacto", id: "contact" },
];

export default function Navbar() {
  const { ready } = useHero();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 0.9s ease-in-out" }}
    >
      <nav className="nav">
        <button
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Inicio"
        >
          <img
            src="/images/logo.webp"
            alt="Yria Forján logo"
            className="logoImage"
            width={150}
            height={80}
          />
        </button>

        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          {links.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`link ${active === id ? "active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
                <span className="underline" />
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="burgerLine" />
          <span className="burgerLine" />
        </button>
      </nav>
    </header>
  );
}

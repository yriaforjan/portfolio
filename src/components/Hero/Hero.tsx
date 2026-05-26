import { useEffect, useRef, useState } from "react";
import { skills } from "../../data/data";
import { useHero } from "../../context/HeroContext";
import "./Hero.css";
import "../Skills/Skills.css";

type TType = "keyword" | "type" | "prop" | "string" | "bool" | "plain";
type Token = { text: string; type: TType };

function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  let rest = line;

  const push = (text: string, type: TType) => tokens.push({ text, type });
  const tail = () => {
    const l = tokens[tokens.length - 1];
    if (l?.type === "plain") l.text += rest[0];
    else push(rest[0], "plain");
  };

  while (rest.length) {
    const kwMatch = rest.match(/^(const|let|var)\b/);
    const tyMatch = rest.match(/^(Developer)\b/);
    const boolMatch = rest.match(/^(true|false|null)\b/);
    const strMatch = rest.match(/^"[^"]*"/);
    const propMatch = rest.match(/^[a-zA-ZÀ-ú_][a-zA-ZÀ-ú0-9_]*(?=\s*:)/);

    if (kwMatch) {
      push(kwMatch[0], "keyword");
      rest = rest.slice(kwMatch[0].length);
    } else if (tyMatch) {
      push(tyMatch[0], "type");
      rest = rest.slice(tyMatch[0].length);
    } else if (boolMatch) {
      push(boolMatch[0], "bool");
      rest = rest.slice(boolMatch[0].length);
    } else if (strMatch) {
      push(strMatch[0], "string");
      rest = rest.slice(strMatch[0].length);
    } else if (propMatch) {
      push(propMatch[0], "prop");
      rest = rest.slice(propMatch[0].length);
    } else {
      tail();
      rest = rest.slice(1);
    }
  }
  return tokens;
}

function CodeLine({ text }: { text: string }) {
  return (
    <span>
      {tokenize(text).map((t, i) => (
        <span key={i} className={`tok_${t.type}`}>
          {t.text}
        </span>
      ))}
    </span>
  );
}

const CODE = [
  "const yria: Developer = {",
  '  name: "Yria Forján",',
  '  role: "Full Stack Developer",',
  '  focus: "Modern digital experiences",',
  '  frontend: ["React", "Vue", "TypeScript"],',
  '  backend: ["Node.js", "Spring Boot"],',
  '  nextStep: "Cybersecurity specialization",',
  "  cleanCodeObsessed: true,",
  '  location: "Spain",',
  '  languages: ["Spanish", "English"],',
  "};",
];

function CodeBlock({ onDone }: { onDone: () => void }) {
  const [revealed, setRevealed] = useState(0);
  const calledDone = useRef(false);
  const done = revealed >= CODE.length;

  useEffect(() => {
    if (done) {
      if (!calledDone.current) {
        calledDone.current = true;
        onDone();
      }
      return;
    }
    const t = setTimeout(
      () => setRevealed((n) => n + 1),
      revealed === 0 ? 550 : 190 + Math.random() * 100,
    );
    return () => clearTimeout(t);
  }, [revealed, done, onDone]);

  return (
    <div className="codeBlock">
      <div className="codeHeader">
        <span className="dot" style={{ background: "#ff5f57" }} />
        <span className="dot" style={{ background: "#febc2e" }} />
        <span className="dot" style={{ background: "#28c840" }} />
        <span className="fileName">yria.ts</span>
      </div>
      <div className="codeBody">
        {CODE.slice(0, revealed).map((line, i) => (
          <div key={i} className="codeLine">
            <span className="lineNum">{String(i + 1).padStart(2, " ")}</span>
            <CodeLine text={line} />
          </div>
        ))}
        {!done && <span className="cursor" />}
      </div>
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="ctaGroup">
      <button
        className="ctaButton"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="ctaObject">yria.</span>
        <span className="ctaMethod">verProyectos</span>
        <span className="ctaPunctuation">()</span>
      </button>
      <button
        className="ctaButton ctaButtonGhost"
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="ctaObject">yria.</span>
        <span className="ctaMethodSecondary">contactar</span>
        <span className="ctaPunctuation">()</span>
      </button>
    </div>
  );
}

function SkillsStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const halfWidth = el.scrollWidth / 2;
    let pos = 0;

    let raf: number;
    const tick = () => {
      if (!dragging.current) {
        pos += 1;
        if (pos >= halfWidth) pos -= halfWidth;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onDown = (e: PointerEvent) => {
      dragging.current = true;
      startX.current = e.clientX;
      startScroll.current = pos;
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      pos = startScroll.current + (startX.current - e.clientX);
      if (pos >= halfWidth) pos -= halfWidth;
      if (pos < 0) pos += halfWidth;
      el.scrollLeft = pos;
    };
    const onUp = () => {
      dragging.current = false;
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div className="skillsSection">
      <span className="section-tag">Stack tecnológico</span>
      <h2 className="section-title">Con qué trabajo</h2>
      <div className="carouselWrapper">
        <div ref={trackRef} className="carousel">
          <ul className="list">
            {skills.map((s) => (
              <li key={s} className="pill">
                {s}
              </li>
            ))}
            {skills.map((s) => (
              <li key={`dup-${s}`} className="pill" aria-hidden="true">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { ready, setReady } = useHero();

  return (
    <section className="hero">
      <div className="inner">
        <CodeBlock onDone={setReady} />
        <div className={`heroReveal${ready ? " visible" : ""}`}>
          <CtaButtons />
        </div>
      </div>
      <div className={`heroReveal${ready ? " visible" : ""}`}>
        <SkillsStrip />
      </div>
      <div className={`scrollHint heroReveal${ready ? " visible" : ""}`}>
        <span />
      </div>
    </section>
  );
}

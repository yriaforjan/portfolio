import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loves, hates } from "../../data/data";
import "./About.css";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const [tab, setTab] = useState<"love" | "hate">("love");
  const items = tab === "love" ? loves : hates;

  return (
    <section id="about" className="about">
      <motion.div
        className="inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="grid">
          <div className="left">
            <span className="section-tag">Sobre mí</span>
            <h2 className="section-title">La persona detrás del código</h2>
            <p className="text">
              Me gusta construir productos que se sientan rápidos, cuidados e
              intuitivos.
            </p>
            <p className="text">
              Frontend, backend y diseño trabajando juntos como una sola
              experiencia.
            </p>
          </div>

          <div className="interestsBlock">
            <button
              className="section-title toggleButton"
              onClick={() => setTab((t) => (t === "love" ? "hate" : "love"))}
            >
              {tab === "love" ? "Amo" : "Odio"}
            </button>
            <div className="listWrapper">
            <AnimatePresence mode="wait">
              <motion.ul
                key={tab}
                className="itemList"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {items.map(({ name, icon: Icon }) => (
                  <li key={name} className="item">
                    <span className="itemIcon">
                      <Icon size={22} color="var(--purple)" />
                    </span>
                    <span className="itemLabel">{name}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
            </div>
          </div>

          <div className="photoWrapper">
            <img
              src="/images/avatar.webp"
              alt="Yria Forján"
              className="photo"
              width={600}
              height={783}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

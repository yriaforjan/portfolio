import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "../../data/data";
import "./Timeline.css";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Timeline() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section id="timeline" className="timeline">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-tag">Experiencia y Formación</span>
          <h2 className="section-title">Mi trayectoria</h2>
        </motion.div>

        <div className="track">
          <div className="line" />

          {timeline.map((entry, i) => (
            <motion.div
              key={i}
              className="item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
            >
              <div
                className={`dot ${entry.type === "work" ? "dotWork" : entry.type === "cert" ? "dotCert" : "dotEdu"}`}
              />

              <button
                className={`card ${open === i ? "expanded" : ""}`}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <div className="cardHeader">
                  <div className="cardLeft">
                    <span
                      className={`badge ${entry.type === "work" ? "badgeWork" : entry.type === "cert" ? "badgeCert" : "badgeEdu"}`}
                    >
                      {entry.type === "work"
                        ? "Experiencia"
                        : entry.type === "cert"
                          ? "Certificación"
                          : "Formación"}
                    </span>
                    <h3 className="role">{entry.role}</h3>
                    <p className="entity">{entry.entity}</p>
                  </div>
                  <div className="cardRight">
                    <span className="year">{entry.year}</span>
                    <svg
                      className={`chevron ${open === i ? "chevronOpen" : ""}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      className="description"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      {entry.subEntries ? (
                        <ul className="subList">
                          {entry.subEntries.map((sub, j) => (
                            <li key={j} className="subItem">
                              <span className="subYear">{sub.year}</span>
                              <div className="subInfo">
                                <span className="subRole">{sub.role}</span>
                                <span className="subEntity">{sub.entity}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        entry.description
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

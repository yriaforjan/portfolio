import { motion } from "framer-motion";
import { skills } from "../../data/data";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-tag">Stack tecnológico</span>
          <h2 className="section-title">Con qué trabajo</h2>
        </motion.div>
      </div>
      <div className="carousel">
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
    </section>
  );
}

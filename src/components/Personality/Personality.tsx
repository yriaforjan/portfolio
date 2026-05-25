import { motion } from "framer-motion";
import { loves } from "../../data/data";
import "./Personality.css";

const ease = [0.16, 1, 0.3, 1] as const;

function Wave() {
  return (
    <div className="waveContainer" aria-hidden="true">
      <div className="waveInner">
        {[0, 1].map((i) => (
          <svg
            key={i}
            className="waveSvg"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C120,65 240,15 360,40 C480,65 600,15 720,40 C840,65 960,15 1080,40 C1200,65 1320,15 1440,40 L1440,80 L0,80 Z"
              fill="rgba(156, 127, 215, 0.1)"
            />
            <path
              d="M0,52 C120,28 240,72 360,52 C480,28 600,72 720,52 C840,28 960,72 1080,52 C1200,28 1320,72 1440,52 L1440,80 L0,80 Z"
              fill="rgba(255, 159, 0, 0.06)"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function Personality() {
  return (
    <section className="section">
      <Wave />

      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-tag">La persona detrás del teclado</span>
          <h2 className="section-title">Más allá del código</h2>
        </motion.div>

        <div className="grid">
          {loves.map((love, i) => (
            <motion.div
              key={love.name}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            >
              <span className="emoji">{love.emoji}</span>
              <p className="label">{love.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

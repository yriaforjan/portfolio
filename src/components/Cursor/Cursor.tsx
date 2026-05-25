import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useHero } from "../../context/HeroContext";
import "./Cursor.css";

export default function Cursor() {
  const { ready } = useHero();
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 28, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 200, mass: 0.5 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [dotX, dotY]);

  useEffect(() => {
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const attach = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attach();
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <motion.div
        className="cursorDot"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className={`cursorRing ${hovered ? "hovered" : ""}`}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </>
  );
}

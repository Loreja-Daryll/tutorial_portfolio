import { motion } from "framer-motion";
import { content } from "../data/content.js";

function List({ label, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
        {label}
      </p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-white text-sm md:text-base leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Background() {
  return (
    <section className="px-6 md:px-16 py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold text-white mb-10 md:mb-14"
      >
        {content.backgroundHeading}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-3xl">
        <List
          label={content.education.label}
          items={content.education.items}
          delay={0.1}
        />
        <List
          label={content.experience.label}
          items={content.experience.items}
          delay={0.2}
        />
      </div>
    </section>
  );
}

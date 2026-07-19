import { motion } from "framer-motion";
import { images } from "../data/images.js";
import { content } from "../data/content.js";
import Eyebrow from "./Eyebrow.jsx";

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col justify-between px-6 md:px-16 pt-10 pb-8 relative">
      <div className="flex items-start justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-xl"
        >
          <Eyebrow className="mb-6">
            {content.name} · {content.heroSubtext}
          </Eyebrow>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            {content.heroHeading}
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted">
            {content.heroSubtext}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="shrink-0"
        >
          <img
            src={images.heroProfile}
            alt={`Portrait of ${content.name}`}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border border-white/10"
          />
        </motion.div>
      </div>

      <motion.a
        href="#who"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-16 inline-flex items-center gap-2 text-xs text-muted uppercase tracking-widest w-fit"
      >
        {content.scrollHint}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}

import { motion } from "framer-motion";
import { images } from "../data/images.js";
import { content } from "../data/content.js";

const thumbs = [
  images.workThumb1,
  images.workThumb2,
  images.workThumb3,
  images.workThumb4,
  images.workThumb5,
];

export default function MoreWork() {
  return (
    <section className="px-6 md:px-16 py-20 md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold text-white mb-10 md:mb-14"
      >
        {content.workHeading}
      </motion.h2>

      <div className="flex flex-wrap gap-6 md:gap-8">
        {thumbs.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.08 }}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center gap-2"
          >
            <img
              src={src}
              alt={content.work[i]?.label || `Work sample ${i + 1}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover transition-[filter] duration-300 hover:brightness-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

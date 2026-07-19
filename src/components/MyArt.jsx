import { motion } from "framer-motion";
import { images } from "../data/images.js";
import { content } from "../data/content.js";

const cardBg = ["bg-[#2b2320]", "bg-[#241d2b]", "bg-[#1f2620]"];
const artImages = [images.artPiece1, images.artPiece2, images.artPiece3];

export default function MyArt() {
  return (
    <section className="px-6 md:px-16 py-20 md:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold text-white mb-10 md:mb-14"
      >
        {content.artHeading}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {content.art.map((piece, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.12 }}
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <div className={`${cardBg[i]} p-3`}>
              <motion.img
                src={artImages[i]}
                alt={`Art piece ${i + 1}`}
                className="arch-top w-full h-64 object-cover transition-[filter] duration-300 group-hover:brightness-110"
              />
            </div>
            <p className="mt-3 text-xs md:text-sm text-muted leading-snug line-clamp-2">
              {piece.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

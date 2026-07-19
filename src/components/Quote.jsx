import { motion } from "framer-motion";
import { images } from "../data/images.js";
import { content } from "../data/content.js";

export default function Quote() {
  return (
    <section className="px-6 md:px-16 py-20 md:py-28">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1"
        >
          <p className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-md">
            {content.quote}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          className="flex-1 w-full flex justify-center md:justify-end"
        >
          <div className="bg-[#1a1a1a] p-4 w-full max-w-sm">
            <img
              src={images.quoteSection}
              alt="Reading and working"
              className="arch-top w-full h-80 md:h-96 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

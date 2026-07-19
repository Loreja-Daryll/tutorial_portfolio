import { motion } from "framer-motion";
import { images } from "../data/images.js";
import { content } from "../data/content.js";

export default function WhoIsMe() {
  return (
    <section id="who" className="px-6 md:px-16 py-20 md:py-28">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-6"
          >
            {content.whoHeading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-muted text-base md:text-lg leading-relaxed max-w-md"
          >
            {content.whoBody}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="flex-1 w-full flex justify-center md:justify-end"
        >
          <div className="bg-[#1a1a1a] p-4 w-full max-w-sm">
            <img
              src={images.whoIsMe}
              alt={`${content.name} at work`}
              className="arch-top w-full h-80 md:h-96 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

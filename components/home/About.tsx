"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="rounded-3xl"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-[#0A2E6F] font-semibold mb-3">
            ABOUT US
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Building Beautiful Spaces
          </h2>

          <p className="text-gray-600 leading-8">
            Simmply Perfect Group specializes in premium
            windows & doors, luxury interiors, and
            renovation solutions. We transform homes
            and commercial spaces with exceptional
            craftsmanship and attention to detail.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
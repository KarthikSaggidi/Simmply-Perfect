"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Kumar",
    review:
      "Outstanding workmanship and attention to detail.",
  },
  {
    name: "Anjali Reddy",
    review:
      "Our home looks completely transformed.",
  },
  {
    name: "Praveen",
    review:
      "Professional team and premium quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -10 }}
              className="
                bg-white
                rounded-[30px]
                shadow-xl
                p-8
              "
            >
              <p className="text-slate-600 leading-8">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Hammer,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Only the finest materials and finishes for lasting elegance.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "Years of industry experience delivering exceptional results.",
  },
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    description:
      "Attention to detail and precision in every project.",
  },
  {
    icon: Building2,
    title: "Complete Solutions",
    description:
      "From concept to completion under one trusted group.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[6px] text-[#0A2E6F] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-5xl md:text-7xl font-black text-[#0A1A35]">
            Excellence In
            <br />
            Every Detail
          </h2>

          <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto">
            We combine innovation, quality and craftsmanship
            to create spaces that exceed expectations.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  p-10
                  rounded-[30px]
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  group
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#0A2E6F]
                    flex
                    items-center
                    justify-center
                    mb-8
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#0A1A35]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
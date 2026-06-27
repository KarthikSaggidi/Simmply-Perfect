"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Hammer,
  Paintbrush,
  Building2,
} from "lucide-react";

export default function RenovationPage() {

  const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">
        <section className="pt-40 pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black text-[#071224] tracking-tight leading-[0.95]">
                  Transform Old <br />
                  Spaces Into  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2E6F] via-[#1E4ED8] to-indigo-600">
                    Modern Masterpiece
                  </span>
                </h1>

                <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
                  From complete home renovations to premium kitchen remodeling
                  and structural upgrades, we transform outdated spaces into
                  beautiful, functional environments.
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <button className="bg-[#0A2E6F] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">
                    Explore Renovations
                  </button>

                  <button className="border border-slate-300 px-8 py-4 rounded-full font-semibold hover:border-[#0A2E6F] hover:text-[#0A2E6F] transition-all">
                    Get Consultation
                  </button>
                </div>

                <div className="flex flex-wrap gap-12 mt-14">
                  <div>
                    <h3 className="text-4xl font-black text-[#0A2E6F]">
                      800+
                    </h3>
                    <p className="text-slate-500">Renovation Projects</p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-black text-[#0A2E6F]">
                      15+
                    </h3>
                    <p className="text-slate-500">Years Experience</p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-black text-[#0A2E6F]">
                      100%
                    </h3>
                    <p className="text-slate-500">Satisfaction</p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)]">

                  {/* BEFORE IMAGE */}
                  <img
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600"
                    alt="Before Renovation"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* AFTER IMAGE REVEAL */}
                  <motion.div
                    animate={{
                      width: ["0%", "100%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 left-0 overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600"
                      alt="After Renovation"
                      className="w-[650px] h-full object-cover"
                    />
                  </motion.div>

                  {/* DRAG LINE */}
                  <motion.div
                    animate={{
                      left: ["0%", "100%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
                  />

                  <div className="absolute top-6 left-6 bg-red-500 text-white px-5 py-2 rounded-full font-bold">
                    BEFORE
                  </div>

                  <div className="absolute top-6 right-6 bg-green-500 text-white px-5 py-2 rounded-full font-bold">
                    AFTER
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* RENOVATION SERVICES */}

<section className="py-32 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#0A2E6F]">
        Our Services
      </span>

      <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
        Complete Renovation Solutions
      </h2>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        From structural upgrades to aesthetic transformations,
        we handle every aspect of your renovation project.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

      {[
        {
          title: "Home Renovation",
          desc: "Complete transformation of residential spaces."
        },
        {
          title: "Kitchen Remodeling",
          desc: "Modern kitchen upgrades and redesign."
        },
        {
          title: "Bathroom Renovation",
          desc: "Luxury bathroom renovations and fittings."
        },
        {
          title: "Flooring Solutions",
          desc: "Tiles, marble, wooden and vinyl flooring."
        },
        {
          title: "Painting & Finishes",
          desc: "Premium paints and decorative finishes."
        },
        {
          title: "Commercial Renovation",
          desc: "Office and commercial space upgrades."
        }
      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="
            bg-white
            rounded-[36px]
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          <CheckCircle2
            size={28}
            className="text-[#0A2E6F]"
          />

          <h3 className="mt-5 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 text-slate-600 leading-7">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* FLOORING & FINISHES */}

<section className="py-32">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800"
          alt=""
          className="
            w-full
            h-[750px]
            object-cover
            rounded-[40px]
          "
        />

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <span className="uppercase tracking-[4px] text-[#0A2E6F]">
          Flooring & Finishes
        </span>

        <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
          Premium Materials
          For Lasting Beauty
        </h2>

        <p className="mt-8 text-lg text-slate-600 leading-8">
          We use premium flooring materials and luxury finishes
          that enhance aesthetics while ensuring durability.
        </p>

        <div className="space-y-5 mt-10">

          {[
            "Italian Marble Flooring",
            "Wooden Flooring",
            "Premium Tiles",
            "Decorative Wall Panels",
            "Luxury Paint Finishes",
            "Waterproof Solutions",
          ].map((item) => (

            <div
              key={item}
              className="flex gap-3"
            >

              <CheckCircle2
                className="text-[#0A2E6F]"
                size={22}
              />

              <span className="font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* ELECTRICAL & PLUMBING */}

<section className="py-32 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#0A2E6F]">
        Infrastructure Upgrades
      </span>

      <h2 className="mt-4 text-5xl font-black">
        Modern Systems For Modern Living
      </h2>

    </div>

    <div className="grid lg:grid-cols-4 gap-8 mt-20">

      {[
        "Electrical Rewiring",
        "Smart Home Integration",
        "LED Lighting Systems",
        "Plumbing Upgrades",
        "Bathroom Fittings",
        "Waterproofing",
        "Network Cabling",
        "Power Backup Solutions",
      ].map((item) => (

        <motion.div
          key={item}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="
            bg-white
            rounded-[30px]
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
        >

          <CheckCircle2
            className="text-[#0A2E6F]"
            size={26}
          />

          <h3 className="mt-4 font-bold text-lg">
            {item}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* BEFORE & AFTER GALLERY */}

<section className="py-32 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#0A2E6F]">
        Before & After
      </span>

      <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
        Renovation Transformations
      </h2>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        See how we transform outdated interiors into beautiful,
        modern and functional spaces.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 mt-20">

      {[
        {
          before:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800",
          after:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1800",
          title: "Bedroom Renovation",
        },
        {
          before:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1800",
          after:
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1800",
          title: "Kitchen Remodeling",
        },
      ].map((project, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          className="
            bg-white
            rounded-[36px]
            overflow-hidden
            shadow-[0_25px_70px_rgba(0,0,0,0.08)]
          "
        >

          <div className="grid grid-cols-2">

            <div className="relative">

              <img
                src={project.before}
                alt="Before"
                className="
                  w-full
                  h-[350px]
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  top-4
                  left-4
                  bg-red-500
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                BEFORE
              </div>

            </div>

            <div className="relative">

              <img
                src={project.after}
                alt="After"
                className="
                  w-full
                  h-[350px]
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  top-4
                  right-4
                  bg-green-500
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >
                AFTER
              </div>

            </div>

          </div>

          <div className="p-8">

            <h3 className="text-2xl font-bold text-[#0A1A35]">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Complete transformation with premium materials,
              modern aesthetics and expert craftsmanship.
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* RENOVATION PROCESS */}

<section className="py-32">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#0A2E6F]">
        Our Process
      </span>

      <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
        From Vision To Reality
      </h2>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        Our proven renovation process ensures a smooth experience,
        exceptional quality and timely project completion.
      </p>

    </div>

    <div className="grid lg:grid-cols-5 gap-8 mt-24">

      {[
        {
          icon: Building2,
          title: "Site Visit",
          desc: "Understanding your space and requirements.",
        },
        {
          icon: Paintbrush,
          title: "Design Planning",
          desc: "Creating concepts and visualizations.",
        },
        {
          icon: Hammer,
          title: "Execution",
          desc: "Renovation work by expert craftsmen.",
        },
        {
          icon: CheckCircle2,
          title: "Quality Check",
          desc: "Detailed inspection and finishing.",
        },
        {
          icon: Sparkles,
          title: "Project Delivery",
          desc: "Ready-to-use transformed spaces.",
        },
      ].map((step, index) => {
        const Icon = step.icon;

        return (

          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="
              relative
              bg-white
              rounded-[36px]
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              border
              border-slate-100
              text-center
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-[#0A2E6F]
                text-white
                flex
                items-center
                justify-center
                mx-auto
              "
            >
              <Icon size={30} />
            </div>

            <div
              className="
                absolute
                -top-4
                left-1/2
                -translate-x-1/2
                w-10
                h-10
                rounded-full
                bg-white
                shadow-lg
                flex
                items-center
                justify-center
                font-bold
                text-[#0A2E6F]
              "
            >
              {index + 1}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#0A1A35]">
              {step.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              {step.desc}
            </p>

          </motion.div>

        );
      })}

    </div>

  </div>

</section>

{/* WHY CHOOSE US */}

<section className="py-32 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* IMAGE */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
          alt="Renovation"
          className="
            w-full
            h-[750px]
            object-cover
            rounded-[40px]
          "
        />

      </motion.div>

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <span className="uppercase tracking-[4px] text-[#0A2E6F]">
          Why Simmply Perfect
        </span>

        <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
          Excellence In Every Renovation
        </h2>

        <p className="mt-8 text-lg text-slate-600 leading-8">
          We combine innovative design, skilled craftsmanship
          and premium materials to deliver renovations that
          enhance beauty, functionality and long-term value.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-12">

          {[
            "800+ Projects",
            "15+ Years Experience",
            "Premium Materials",
            "Certified Team",
            "On-Time Delivery",
            "100% Satisfaction",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={22}
                className="text-green-500"
              />

              <span className="font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-3xl font-black text-[#0A2E6F]">
              800+
            </h3>
            <p className="text-slate-500 mt-2">
              Projects Delivered
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-3xl font-black text-[#0A2E6F]">
              15+
            </h3>
            <p className="text-slate-500 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-3xl font-black text-[#0A2E6F]">
              100%
            </h3>
            <p className="text-slate-500 mt-2">
              Client Satisfaction
            </p>
          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* FEATURED PROJECTS */}

<section className="py-32">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#0A2E6F]">
        Featured Projects
      </span>

      <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
        Renovations That Redefined Spaces
      </h2>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        Explore some of our most successful renovation projects,
        from luxury homes to premium commercial spaces.
      </p>

    </div>

    <div className="grid lg:grid-cols-12 gap-6 mt-20">

      {/* LARGE IMAGE */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          lg:col-span-7
          overflow-hidden
          rounded-[40px]
        "
      >

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
          alt=""
          className="
            w-full
            h-[650px]
            object-cover
            duration-700
            hover:scale-110
          "
        />

      </motion.div>

      {/* RIGHT SIDE */}

      <div className="lg:col-span-5 grid gap-6">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
            overflow-hidden
            rounded-[40px]
          "
        >

          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1600"
            alt=""
            className="
              w-full
              h-[312px]
              object-cover
              duration-700
              hover:scale-110
            "
          />

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="
            overflow-hidden
            rounded-[40px]
          "
        >

          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600"
            alt=""
            className="
              w-full
              h-[312px]
              object-cover
              duration-700
              hover:scale-110
            "
          />

        </motion.div>

      </div>

    </div>

    {/* PROJECT STATS */}

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div
        className="
          bg-slate-50
          rounded-[32px]
          p-8
          text-center
        "
      >
        <h3 className="text-4xl font-black text-[#0A2E6F]">
          800+
        </h3>

        <p className="text-slate-600 mt-2">
          Renovation Projects
        </p>
      </div>

      <div
        className="
          bg-slate-50
          rounded-[32px]
          p-8
          text-center
        "
      >
        <h3 className="text-4xl font-black text-[#0A2E6F]">
          120+
        </h3>

        <p className="text-slate-600 mt-2">
          Luxury Villas Upgraded
        </p>
      </div>

      <div
        className="
          bg-slate-50
          rounded-[32px]
          p-8
          text-center
        "
      >
        <h3 className="text-4xl font-black text-[#0A2E6F]">
          100%
        </h3>

        <p className="text-slate-600 mt-2">
          Client Satisfaction
        </p>
      </div>

    </div>

  </div>

</section>

{/* TESTIMONIALS */}

<section className="py-32 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#0A2E6F]">
        Testimonials
      </span>

      <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
        What Our Clients Say
      </h2>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        Trusted by homeowners, villa owners and commercial clients
        for delivering exceptional renovation experiences.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-8 mt-20">

      {[
        {
          name: "Ramesh Kumar",
          role: "Villa Owner",
          review:
            "The renovation completely transformed our home. The team handled everything professionally and delivered beyond expectations.",
        },
        {
          name: "Anita Sharma",
          role: "Interior Consultant",
          review:
            "Excellent workmanship, premium materials and a very smooth process from planning to execution.",
        },
        {
          name: "Vikram Reddy",
          role: "Commercial Client",
          review:
            "Their renovation expertise helped us modernize our office while maintaining functionality and aesthetics.",
        },
      ].map((item) => (

        <motion.div
          key={item.name}
          whileHover={{
            y: -10,
          }}
          className="
            bg-white
            rounded-[36px]
            p-10
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          <div className="flex gap-1 text-yellow-500 text-xl">
            ★★★★★
          </div>

          <p className="mt-6 text-slate-600 leading-8">
            "{item.review}"
          </p>

          <div className="mt-8">

            <h4 className="font-bold text-lg text-[#0A1A35]">
              {item.name}
            </h4>

            <p className="text-slate-500">
              {item.role}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* FAQ */}

<section className="py-32">

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#0A2E6F]">
        Frequently Asked Questions
      </span>

      <h2 className="mt-4 text-5xl font-black text-[#0A1A35]">
        Everything You Need To Know
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Answers to the most common questions about our
        renovation services and project process.
      </p>

    </div>

    <div className="mt-20 space-y-6">

      {[
        {
          q: "How long does a renovation project take?",
          a: "The duration depends on the project scope. Small renovations may take a few weeks, while complete home renovations can take several months.",
        },
        {
          q: "Do you provide design services before execution?",
          a: "Yes. We provide consultation, space planning, 3D visualizations and material selection before project execution.",
        },
        {
          q: "Can I stay in my home during renovation?",
          a: "For minor renovations, yes. For larger projects, we may recommend temporary relocation for safety and convenience.",
        },
        {
          q: "Do you provide warranties?",
          a: "Absolutely. We offer warranty support on workmanship and selected materials used in the renovation project.",
        },
        {
          q: "Can you renovate kitchens and bathrooms only?",
          a: "Yes. We undertake complete home renovations as well as individual kitchen, bathroom, bedroom and living room remodeling projects.",
        },
        {
          q: "Do you handle commercial renovations?",
          a: "Yes. We provide renovation solutions for offices, retail stores, commercial buildings and hospitality spaces.",
        },
      ].map((faq, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="
            bg-slate-50
            rounded-[30px]
            p-8
            border
            border-slate-100
          "
        >

          <h3 className="text-xl font-bold text-[#0A1A35]">
            {faq.q}
          </h3>

          <p className="mt-4 text-slate-600 leading-8">
            {faq.a}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* PREMIUM CTA */}

<section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#071224]" />
          <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/20 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/20 blur-[150px]" />
          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-14 md:px-16 md:py-16 text-center"
            >
              <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-xs tracking-[3px] uppercase">
                Ready To Get Started?
              </span>
              <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
                Transform Your Space With
                <br />
                Premium Windows & Doors
              </h2>
              <p className="mt-5 max-w-3xl mx-auto text-slate-300 leading-8">
                From design consultation to installation, we deliver complete
                solutions for homes, offices, villas and commercial spaces.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#071224] px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+919999999999"
                  className="border border-white/20 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:bg-white/10"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
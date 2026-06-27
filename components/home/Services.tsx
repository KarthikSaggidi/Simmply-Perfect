"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

interface ServiceItem {
  title: string;
  image: string;
  desc: string;
  bullets: string[];
}

const services: ServiceItem[] = [
  {
    title: "Window & Door Repairs",
    image: "/services/repair.jpg",
    desc: "Comprehensive repair solutions for all types of residential and commercial windows, doors, glass systems, grills, hardware, and accessories. We restore functionality, safety, appearance, and long-term durability.",
    bullets: [
      "Sliding Window Repairs",
      "Casement Window Repairs",
      "UPVC Window Repairs",
      "Aluminium Window Repairs",
      "Wooden Window Repairs",
      "Sliding Door Repairs",
      "Casement Door Repairs",
      "Wooden Door Repairs",
      "UPVC Door Repairs",
      "Glass Door Repairs",
      "Safety Grill Repairs",
      "Mosquito Mesh Repairs",
      "Door Lock & Handle Replacement",
      "Roller, Hinges & Track Repairs",
      "Glass Replacement & Crack Repairs",
      "Weather Seal & Rubber Gasket Replacement"
    ]
  },
  {
    title: "Window & Door Cleaning",
    image: "/services/cleaning.jpg",
    desc: "Professional deep cleaning services that restore the appearance of windows, doors, glass, grills, frames, tracks, and accessories while increasing their lifespan.",
    bullets: [
      "Glass Cleaning",
      "Sliding Track Cleaning",
      "Window Frame Cleaning",
      "Door Frame Cleaning",
      "UPVC Surface Cleaning",
      "Aluminium Frame Cleaning",
      "Wood Polish Cleaning",
      "Mosquito Mesh Cleaning",
      "Safety Grill Cleaning",
      "Hardware Cleaning",
      "Roller & Track Maintenance",
      "Hard Water Stain Removal",
      "Silicone Residue Removal",
      "Post Construction Cleaning",
      "Deep Exterior & Interior Cleaning"
    ]
  },
  {
    title: "Painting & Polishing",
    image: "/services/painting.jpg",
    desc: "Premium painting, polishing, coating, and finishing services for wooden, steel, aluminium, and architectural surfaces to enhance beauty and durability.",
    bullets: [
      "Wooden Door Polishing",
      "Teak Wood Polish",
      "PU Polish Finish",
      "Melamine Polish",
      "Wood Restoration",
      "Steel Grill Painting",
      "Gate Painting",
      "Window Frame Painting",
      "Door Frame Painting",
      "Anti-Rust Coating",
      "Weatherproof Exterior Coating",
      "Interior Decorative Painting",
      "Touch-up Painting",
      "Protective Clear Coating",
      "Surface Preparation & Sanding"
    ]
  },
  {
    title: "Extraction & Renovation",
    image: "/services/extraction.jpg",
    desc: "Safe dismantling, removal, renovation, remodeling, and replacement services for existing doors, windows, partitions, grills, and interior structures.",
    bullets: [
      "Old Window Removal",
      "Old Door Removal",
      "Frame Extraction",
      "Glass Removal",
      "Grill Removal",
      "Partition Dismantling",
      "Wall Cutting for New Frames",
      "Structural Modifications",
      "Bathroom Renovation",
      "Kitchen Renovation",
      "Living Room Renovation",
      "Bedroom Renovation",
      "Office Renovation",
      "False Ceiling Modifications",
      "Complete Home Renovation"
    ]
  },
  {
    title: "Interior Design & Manufacturing",
    image: "/services/interiors.jpg",
    desc: "Complete interior designing, custom furniture manufacturing, modular solutions, and turnkey execution for residential and commercial projects.",
    bullets: [
      "Modular Kitchen Design",
      "Wardrobe Manufacturing",
      "TV Unit Design",
      "Bedroom Interiors",
      "Living Room Interiors",
      "Office Interiors",
      "Reception Area Design",
      "False Ceiling Design",
      "Wall Paneling",
      "Custom Furniture",
      "Storage Solutions",
      "Wooden Partitions",
      "Lighting Design",
      "Space Planning",
      "Complete Turnkey Interior Projects"
    ]
  },
  {
    title: "Installation Services",
    image: "/services/installation.jpg",
    desc: "Professional installation services for all types of windows, doors, glass systems, railings, partitions, grills, and architectural accessories with precision fitting.",
    bullets: [
      "Sliding Window Installation",
      "Casement Window Installation",
      "UPVC Window Installation",
      "Aluminium Window Installation",
      "Sliding Door Installation",
      "Wooden Door Installation",
      "UPVC Door Installation",
      "WPC Door Installation",
      "Laminated Door Installation",
      "Glass Door Installation",
      "Glass Partition Installation",
      "Glass Railing Installation",
      "Shower Cubicle Installation",
      "Safety Grill Installation",
      "Mosquito Mesh Installation",
      "Wardrobe Installation",
      "Kitchen Installation",
      "Hardware & Lock Installation",
      "Curtain & Blind Installation",
      "Mirror & Decorative Glass Installation"
    ]
  }
];

const loopedServices = [...services, ...services, ...services];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);
  const dragDistance = useRef(0);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const singleSetWidth = scrollContainer.scrollWidth / 3;
    scrollContainer.scrollLeft = singleSetWidth;

    const continuousScrollUpdate = () => {
      if (!isDown.current && !isHovered.current && scrollContainer) {
        scrollContainer.scrollLeft += 2.2;

        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft = singleSetWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = singleSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(continuousScrollUpdate);
    };

    animationRef.current = requestAnimationFrame(continuousScrollUpdate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDown.current = true;
    dragDistance.current = 0;
    scrollContainerRef.current.classList.add("active-drag");
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = (item?: ServiceItem) => {
    if (!isDown.current) return;
    isDown.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.classList.remove("active-drag");
    }

    if (item && dragDistance.current < 6) {
      setSelectedService(item);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const currentWalkDistance = (x - startX.current) * 1.5;
    dragDistance.current = Math.abs(x - startX.current);
    
    scrollContainerRef.current.scrollLeft = scrollLeft.current - currentWalkDistance;

    const singleSetWidth = scrollContainerRef.current.scrollWidth / 3;
    if (scrollContainerRef.current.scrollLeft >= singleSetWidth * 2) {
      scrollContainerRef.current.scrollLeft = singleSetWidth;
      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft.current = scrollContainerRef.current.scrollLeft;
    } else if (scrollContainerRef.current.scrollLeft <= 0) {
      scrollContainerRef.current.scrollLeft = singleSetWidth;
      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft.current = scrollContainerRef.current.scrollLeft;
    }
  };

  return (
    <>
      <section className="py-32 bg-slate-50 relative overflow-visible antialiased text-slate-900 select-none">
        
        {/* HEADER BLOCK */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#0A2E6F] font-semibold uppercase tracking-[4px]">
              Our Services
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#071224]">
              Complete Solutions Under One Roof
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-8">
              From repairs and maintenance to installations and interior solutions, we provide complete end-to-end services.
            </p>
          </div>
        </div>

        {/* HORIZONTAL CAROUSEL RENDERER */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { 
            isHovered.current = false; 
            handleMouseLeaveOrUp(); 
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={() => handleMouseLeaveOrUp()}
          onMouseMove={handleMouseMove}
          className="mt-20 flex overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing py-4 select-none whitespace-nowrap"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          <div className="flex flex-nowrap">
            {loopedServices.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                onMouseUp={() => handleMouseLeaveOrUp(item)}
                className="mx-5 w-[420px] inline-block flex flex-col group/card pointer-events-auto shrink-0"
              >
                <div className="relative h-[280px] w-full rounded-[32px] overflow-hidden border border-slate-200/60 bg-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-500 group-hover/card:-translate-y-3 group-hover/card:shadow-[0_30px_80px_rgba(10,46,111,0.25)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#071224] flex items-center justify-center shadow opacity-0 scale-90 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="mt-5 text-center px-4 whitespace-normal">
                  <h3 className="text-2xl font-bold text-[#071224] group-hover/card:text-[#0A2E6F] transition-colors duration-200 leading-snug tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFACTORED ULTRA-PREMIUM MODAL SHOWCASE OVERLAY */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16 overflow-hidden">
            
            {/* Backdrop Mask Frame Screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* High-End Widescreen Single-Card Layout Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white max-w-4xl w-full rounded-[32px] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.35)] border border-slate-100 z-10 my-auto grid md:grid-cols-12 max-h-[90vh] md:max-h-[640px]"
            >
              
              {/* Floating Escape Pin Trigger */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/10 hover:bg-slate-900/90 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-sm border border-slate-200/20"
                aria-label="Exit detailed blueprint layout view"
              >
                <X size={16} />
              </button>

              {/* LEFT COLUMN: GRAPHICAL PANEL MESH (4 COLS) */}
              <div className="relative md:col-span-5 bg-slate-950 min-h-[180px] md:min-h-full overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover opacity-85 object-center absolute inset-0"
                />
                {/* Visual Depth Contrast Mask */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Micro Brand Callout Stamp */}
                <div className="absolute bottom-6 left-6 hidden md:flex flex-col gap-1 z-20">
                  
                  <h4 className="text-white/60 text-xs font-medium mt-1 font-sans">Simmply Perfect Architectural Standards</h4>
                </div>
              </div>

              {/* RIGHT COLUMN: CORE NARRATIVE ENGINE CONTENT (7 COLS) */}
              <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden bg-white">
                
                {/* Top Descriptive Layer Header */}
                <div className="overflow-y-auto pr-1 scrollbar-thin select-text">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex text-[9px] font-extrabold uppercase tracking-widest text-[#0A2E6F] bg-[#0A2E6F]/5 px-2.5 py-1 rounded-md">
                      Portfolio Index Range
                    </span>
                  </div>
                  
                  <h2 className="mt-3 text-2xl sm:text-3xl font-black text-[#071224] tracking-tight leading-tight">
                    {selectedService.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {selectedService.desc}
                  </p>

                  {/* SCROLLABLE INTERIOR CRITERIA BLUEPRINTS SECTION */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-[#0A2E6F]" />
                      Full Scope Capability Matrix
                    </h4>
                    
                    {/* Fixed High-Density Content Scroll Vault */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[160px] md:max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
                      {selectedService.bullets.map((bullet, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 py-2 px-3 rounded-xl bg-slate-50/70 border border-slate-100 text-slate-700 hover:bg-slate-50 transition-colors duration-150"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E6F]/40 group-hover:bg-[#0A2E6F] shrink-0" />
                          <span className="text-[11px] sm:text-xs font-bold leading-tight tracking-tight text-slate-700">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SINGLE-LAYER ACTION PANEL FOOTER */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className="flex-1 bg-[#0A2E6F] hover:bg-[#072456] text-white py-3.5 rounded-xl font-bold text-xs tracking-wide shadow-md hover:shadow-xl transition-all duration-200 text-center flex items-center justify-center gap-2 group"
                  >
                    <PhoneCall size={13} className="group-hover:scale-110 transition-transform" />
                    Contact Us
                  </Link>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 py-3.5 rounded-xl font-bold text-xs tracking-wide transition-all duration-200 text-center"
                  >
                    Close
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
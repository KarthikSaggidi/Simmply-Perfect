"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ShieldCheck, Sparkles, PhoneCall, Layers, Shield, Hammer } from "lucide-react";

interface ServiceItem {
  title: string;
  image: string;
  desc: string;
  bullets: string[];
}

// SECTION 1 DATA: METAL WORKS 
const ironServices: ServiceItem[] = [
  {
    title: "Window Safety Grills & Frameworks",
    image: "/services/iron-grills.jpg",
    desc: "Heavy-duty MS and designer wrought iron window safety grills engineered with high structural rigidity to maximize boundary safety thresholds gracefully.",
    bullets: ["Mild Steel Window Grills", "Wrought Iron Safety Grills", "Modern Minimalist Formats", "Laser-Cut Decorative Grills", "Anti-Rust Primer Coating", "Custom Dimensional Fitting"]
  },
  {
    title: "High-Security Safety Doors",
    image: "/services/safety-doors.jpg",
    desc: "Secondary high-security entrance door structures crafted with thick structural iron channels and secure mesh composites for residential units.",
    bullets: ["Heavy MS Mesh Grill Doors", "Multi-Point Structural Locks", "Integrated Key Lock Modules", "Decorative CNC Metal Inlays", "Anti-Sag Hinge Assemblies", "Duco Premium Painted Finishes"]
  },
  {
    title: "Main Entryway Gates",
    image: "/services/iron-gates.jpg",
    desc: "Premium boundary main gates custom-manufactured to offer absolute mechanical defense capacities alongside elite traditional or modern curb appeal.",
    bullets: ["Swing Gate Profiles", "Sliding Track Main Gates", "Automated Motorized Systems", "Laser-Cut Sheet Metal Panels", "Zinc-Chromate Anti-Rust Layer", "Heavy Structural Hinge Repairs"]
  },
  {
    title: "Balcony & Staircase Railings",
    image: "/services/balcony-grills.jpg",
    desc: "High-integrity safety railings and handrails tailored cleanly for structural interior staircases, multi-level decks, and exterior open balconies.",
    bullets: ["Balcony Safety Railings", "Staircase Handrail Support", "Pipe Profile Structural Railings", "Aesthetic CNC Cut Grills", "Corrosion Resistant Coatings", "Onsite Arc Welding Handover"]
  },
  {
    title: "Sheds, Structural Steel & Pergolas",
    image: "/services/sheds-pergolas.jpg",
    desc: "Industrial-grade outdoor metal fabrication structures including durable poly-carbonate or metal sheet roof sheds and luxury structural garden pergolas.",
    bullets: ["Heavy Fabrication Sheds", "Structural Steel Frameworks", "Luxury Architectural Pergolas", "Weatherproof Roofing Layouts", "Foundational Base Anchoring", "Clear Span Open Shed Systems"]
  },
  {
    title: "Custom Metal Furniture & Racks",
    image: "/services/metal-furniture.jpg",
    desc: "Premium modular heavy-duty steel inventory storage racks and custom wrought iron furniture fixtures manufactured for modern residential and corporate spaces.",
    bullets: ["Bespoke Iron Furniture", "Heavy-Duty Storage Racks", "Modular Display Shelvings", "Industrial Steel Frame Bases", "Powder-Coated Matte Finishes", "High Weight Capacity Shelving"]
  }
];

// SECTION 2 DATA: MOSQUITO MESH SYSTEMS
const meshServices: ServiceItem[] = [
  {
    title: "Pleated Sliding Mesh Doors",
    image: "/services/pleated-mesh.jpg",
    desc: "Premium zig-zag pleated polyester mosquito mesh models featuring specialized space-saving track slide functions for high-traffic doors.",
    bullets: ["Polyester Pleated Fabrics", "Low Profile Floor Tracks", "Smooth Frictionless Sliding", "Dust Resistant Surface Finish", "Aluminium Frame Profiles", "Wind-Resistant Retainers"]
  },
  {
    title: "Velcro & Magnetic Mesh Sheets",
    image: "/services/magnetic-mesh.jpg",
    desc: "Cost-effective, highly flexible detach-and-wash mosquito protection sheets engineered beautifully for standard wooden and UPVC frames.",
    bullets: ["Fiberglass Net Core Compositions", "Heavy Duty Premium Velcro Strips", "Magnetic Self-Sealing Profiles", "Tool-Free Setup Options", "High Transmittance Visibility", "Easy Thermal Water Wash"]
  },
  {
    title: "Aluminium Roller Mesh Windows",
    image: "/services/roller-mesh.jpg",
    desc: "Immaculate roll-up cassette flyscreen configurations fitted seamlessly into window linings to provide on-demand insect protection criteria.",
    bullets: ["Spring Loaded Braking Systems", "Vertical Pull Down Cassettes", "Side Brush Buffering Tracks", "Phifer Fiberglass Mesh Inlays", "Powder Coated Casings", "Automatic Retraction Controls"]
  },
  {
    title: "Solid Stainless Steel Mesh Doors",
    image: "/services/ss-mesh.jpg",
    desc: "Ultra-tough security grade stainless steel wire meshes that provide structural anti-theft break-in protection while filtering mosquitos cleanly.",
    bullets: ["SS 304 High-Tensile Wire Net", "Claw-Proof Pet Resistant Core", "Heavy Aluminium Outer Casts", "Anti-Corrosion Black Finishes", "Rigid Tamper-Proof Fasteners", "Dual Purpose Safety Screens"]
  }
];

// SECTION 3 DATA: GENERAL COMPREHENSIVE SERVICES
const standardServices: ServiceItem[] = [
  {
    title: "Window & Door Repairs",
    image: "/services/repair.jpg",
    desc: "Comprehensive repair solutions for all types of residential and commercial windows, doors, glass systems, grills, hardware, and accessories. We restore functionality, safety, appearance, and long-term durability.",
    bullets: ["Sliding Window Repairs", "Casement Window Repairs", "UPVC Window Repairs", "Aluminium Window Repairs", "Wooden Window Repairs", "Sliding Door Repairs", "Casement Door Repairs", "Wooden Door Repairs", "UPVC Door Repairs", "Glass Door Repairs", "Safety Grill Repairs", "Mosquito Mesh Repairs", "Door Lock & Handle Replacement", "Roller, Hinges & Track Repairs", "Glass Replacement & Crack Repairs", "Weather Seal & Rubber Gasket Replacement"]
  },
  {
    title: "Window & Door Cleaning",
    image: "/services/cleaning.jpg",
    desc: "Professional deep cleaning services that restore the appearance of windows, doors, glass, grills, frames, tracks, and accessories while increasing their lifespan.",
    bullets: ["Glass Cleaning", "Sliding Track Cleaning", "Window Frame Cleaning", "Door Frame Cleaning", "UPVC Surface Cleaning", "Aluminium Frame Cleaning", "Wood Polish Cleaning", "Mosquito Mesh Cleaning", "Safety Grill Cleaning", "Hardware Cleaning", "Roller & Track Maintenance", "Hard Water Stain Removal", "Silicone Residue Removal", "Post Construction Cleaning", "Deep Exterior & Interior Cleaning"]
  },
  {
    title: "Painting & Polishing",
    image: "/services/painting.jpg",
    desc: "Premium painting, polishing, coating, and finishing services for wooden, steel, aluminium, and architectural surfaces to enhance beauty and durability.",
    bullets: ["Wooden Door Polishing", "Teak Wood Polish", "PU Polish Finish", "Melamine Polish", "Wood Restoration", "Steel Grill Painting", "Gate Painting", "Window Frame Painting", "Door Frame Painting", "Anti-Rust Coating", "Weatherproof Exterior Coating", "Interior Decorative Painting", "Touch-up Painting", "Protective Clear Coating", "Surface Preparation & Sanding"]
  },
  {
    title: "Extraction & Renovation",
    image: "/services/extraction.jpg",
    desc: "Safe dismantling, removal, renovation, remodeling, and replacement services for existing doors, windows, partitions, grills, and interior structures.",
    bullets: ["Old Window Removal", "Old Door Removal", "Frame Extraction", "Glass Removal", "Grill Removal", "Partition Dismantling", "Wall Cutting for New Frames", "Structural Modifications", "Bathroom Renovation", "Kitchen Renovation", "Living Room Renovation", "Bedroom Renovation", "Office Renovation", "False Ceiling Modifications", "Complete Home Renovation"]
  },
  {
    title: "Interior Design & Manufacturing",
    image: "/services/interiors.jpg",
    desc: "Complete interior designing, custom furniture manufacturing, modular solutions, and turnkey execution for residential and commercial projects.",
    bullets: ["Modular Kitchen Design", "Wardrobe Manufacturing", "TV Unit Design", "Bedroom Interiors", "Living Room Interiors", "Office Interiors", "Reception Area Design", "False Ceiling Design", "Wall Paneling", "Custom Furniture", "Storage Solutions", "Wooden Partitions", "Lighting Design", "Space Planning", "Complete Turnkey Interior Projects"]
  },
  {
    title: "Installation Services",
    image: "/services/installation.jpg",
    desc: "Professional installation services for all types of windows, doors, glass systems, railings, partitions, grills, and architectural accessories with precision fitting.",
    bullets: ["Sliding Window Installation", "Casement Window Installation", "UPVC Window Installation", "Aluminium Window Installation", "Sliding Door Installation", "Wooden Door Installation", "UPVC Door Installation", "WPC Door Installation", "Laminated Door Installation", "Glass Door Installation", "Glass Partition Installation", "Glass Railing Installation", "Shower Cubicle Installation", "Safety Grill Installation", "Mosquito Mesh Installation", "Wardrobe Installation", "Kitchen Installation", "Hardware & Lock Installation", "Curtain & Blind Installation", "Mirror & Decorative Glass Installation"]
  }
];

// Universal Infinite Loop Carousel Row Component
interface CarouselRowProps {
  data: ServiceItem[];
  onSelectItem: (item: ServiceItem) => void;
}

function CarouselRow({ data, onSelectItem }: CarouselRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);
  const dragDistance = useRef(0);

  const doubledData = [...data, ...data, ...data];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    const continuousScrollUpdate = () => {
      if (!isDown.current && !isHovered.current && container) {
        container.scrollLeft += 1.8; // Uniform auto-crawling animation loop vector

        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = singleSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(continuousScrollUpdate);
    };

    animationRef.current = requestAnimationFrame(continuousScrollUpdate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDown.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
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

  const handleMouseLeaveOrUp = (item?: ServiceItem) => {
    if (!isDown.current) return;
    isDown.current = false;
    if (item && dragDistance.current < 6) {
      onSelectItem(item);
    }
  };

  return (
    <div 
      ref={scrollContainerRef}
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; handleMouseLeaveOrUp(); }}
      onMouseDown={handleMouseDown}
      onMouseUp={() => handleMouseLeaveOrUp()}
      onMouseMove={handleMouseMove}
      className="mt-8 flex overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing py-4 select-none whitespace-nowrap"
      style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
    >
      <div className="flex flex-nowrap">
        {doubledData.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            onMouseUp={() => handleMouseLeaveOrUp(item)}
            className="mx-4 w-[380px] inline-block flex flex-col group/card pointer-events-auto shrink-0"
          >
            <div className="relative h-[260px] w-full rounded-[2.5rem] overflow-hidden border border-slate-200/80 bg-white shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover/card:-translate-y-2 group-hover/card:shadow-[0_25px_60px_-10px_rgba(10,46,111,0.2)]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#0A2E6F] flex items-center justify-center shadow-lg border border-slate-100 opacity-0 scale-90 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300">
                <ArrowUpRight size={16} className="stroke-[2.5]" />
              </div>
            </div>
            <div className="mt-4 text-center px-4 whitespace-normal">
              <h3 className="text-xl font-black text-slate-800 group-hover/card:text-[#0A2E6F] transition-colors duration-200 tracking-tight leading-snug">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedService]);

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#FAFBFD] relative overflow-visible antialiased text-slate-900 select-none">
        
        {/* TOP LEVEL INTRODUCTORY BRANDING HEADER */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#071224] tracking-tight leading-none">
              Complete Architectural Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-slate-500 leading-relaxed text-sm sm:text-base font-light">
              From heavy iron fabrication configurations and high-transmittance flyscreens to turnkey spatial interiors, we manage every engineering specification under one elite umbrella.
            </p>
          </div>
        </div>

        {/* SECTION 1: METAL WORKS (CENTERED & REPROFESSIONALIZED) */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="flex flex-col items-center text-center pb-6 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg border border-slate-800"><Hammer size={20} /></div>
            <div className="space-y-1">
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Metal Fabrication & Iron Works</h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-medium">Bespoke safety enclosures, architectural gates, staircase structures, and industrial-grade frameworks.</p>
            </div>
          </div>
          <CarouselRow data={ironServices} onSelectItem={setSelectedService} />
        </div>

        {/* SECTION 2: MOSQUITO MESH SYSTEMS (CENTERED & REPROFESSIONALIZED) */}
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="flex flex-col items-center text-center pb-6 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0A2E6F] text-white flex items-center justify-center shadow-lg border border-[#082456]"><Shield size={20} /></div>
            <div className="space-y-1">
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"> Mosquito Mesh Systems</h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-medium">High-durability insect protection screens custom-fitted seamlessly for luxury window and door frames.</p>
            </div>
          </div>
          <CarouselRow data={meshServices} onSelectItem={setSelectedService} />
        </div>

        {/* SECTION 3: COMPREHENSIVE ARCHITECTURAL SERVICES (CENTERED & REPROFESSIONALIZED) */}
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="flex flex-col items-center text-center pb-6 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg border border-blue-500"><Layers size={20} /></div>
            <div className="space-y-1">
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"> Interior & Restoration Services</h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-medium">End-to-end indoor masterplanning, comprehensive site renovations, maintenance, and expert installations.</p>
            </div>
          </div>
          <CarouselRow data={standardServices} onSelectItem={setSelectedService} />
        </div>

      </section>

      {/* ULTRA-PREMIUM INTERACTIVE OVERLAY MODAL DISPLAY SCREEN */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16 overflow-hidden">
            
            {/* Backdrop Layer Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl"
            />

            {/* Modal Canvas Shell Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 25 }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white max-w-4xl w-full rounded-[2.5rem] sm:rounded-[3.5rem] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.25)] overflow-hidden z-10 flex flex-col md:flex-row max-h-[85vh] md:h-[600px] border border-slate-100"
            >
              
              {/* Escape Trigger X Top Button Icon */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-200/60 shadow-md z-30"
              >
                <X size={18} />
              </motion.button>

              {/* LEFT COLUMN PANEL: CINEMATIC MEDIA ASSET HERO */}
              <div className="w-full md:w-[42%] bg-slate-950 h-48 md:h-full relative overflow-hidden shrink-0">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover opacity-90 object-center absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* RIGHT COLUMN PANEL: CORE CAPABILITY RUNTIME DECK */}
              <div className="w-full md:w-[58%] p-8 sm:p-10 md:p-12 flex flex-col justify-between overflow-hidden bg-white">
                
                {/* Content Scroller Body */}
                <div className="overflow-y-auto pr-1 custom-scrollbar flex-1 select-text">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex text-[9px] font-black uppercase tracking-widest text-[#0A2E6F] bg-[#0A2E6F]/5 px-2.5 py-1 rounded-md border border-[#0A2E6F]/10 shadow-inner">
                      Portfolio Specifications
                    </span>
                  </div>
                  
                  <h3 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    {selectedService.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-sans">
                    {selectedService.desc}
                  </p>

                  {/* HIGH-DENSITY CAPABILITY MATRIX LIST */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2 font-sans">
                      <ShieldCheck size={14} className="text-[#0A2E6F]" />
                      Full Capability Sub-Index
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[180px] md:max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
                      {selectedService.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 py-2 px-3.5 rounded-xl bg-slate-50 border border-slate-200/40 hover:bg-slate-50/50 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E6F]/50 shrink-0" />
                          <span className="text-[11px] sm:text-xs font-bold leading-tight text-slate-700 tracking-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* MODAL ACTION ROW FOOTER BUTTON LAYOUTS */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3 shrink-0">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-[#0A2E6F] hover:bg-[#072456] text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase shadow-xl hover:shadow-[#0A2E6F]/10 transition-all flex items-center justify-center gap-2 group"
                  >
                    <PhoneCall size={14} className="group-hover:scale-105 transition-transform" />
                    <span>Contact Distribution</span>
                  </Link>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 py-4 rounded-xl font-bold text-xs tracking-widest uppercase transition-colors"
                  >
                    Close Window
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
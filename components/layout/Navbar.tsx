"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ArrowRight, BookOpen, Download, CheckCircle2, User, Mail, Phone, DoorOpen, Layout, Construction, Layers, Eye, ArrowLeft, Loader2, Sparkles, FileText, ArrowUpRight, FolderOpen, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Windows & Doors", href: "/windows-doors" },
  { label: "Interiors", href: "/interiors" },
  { label: "Renovation", href: "/renovation" },
  { label: "Contact", href: "/contact" },
];

// Data configuration mapped verbatim to your file structure snapshots
const categoriesData = [
  {
    id: "railing",
    name: "Railing Systems",
    desc: "Balcony, staircase, and safety specifications",
    icon: Layers,
    color: "from-blue-600 to-cyan-600",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    files: [
      { name: "Brass Stair Railing", size: "2.4 MB", url: "/catalogs/Railing/Brass Stair Railing.pdf" },
      { name: "Glass Balcony Railing", size: "3.1 MB", url: "/catalogs/Railing/Glass Balcony Railing.pdf" },
      { name: "Glass Staircase Railing", size: "2.8 MB", url: "/catalogs/Railing/Glass Staircase Railing.pdf" },
      { name: "MS Balcony Railing", size: "1.9 MB", url: "/catalogs/Railing/MS Balcony Railing.pdf" },
      { name: "MS Safety Door", size: "2.2 MB", url: "/catalogs/Railing/MS Safety Door.pdf" },
      { name: "MS Stair Railing", size: "2.5 MB", url: "/catalogs/Railing/MS Stair Railing.pdf" },
      { name: "SS Balcony Railing", size: "2.1 MB", url: "/catalogs/Railing/SS Balcony Railing.pdf" },
      { name: "SS Main Gate", size: "4.2 MB", url: "/catalogs/Railing/SS Main Gate.pdf" },
      { name: "SS Safety Door", size: "2.3 MB", url: "/catalogs/Railing/SS Safety Door.pdf" },
      { name: "SS Spiral Railing", size: "3.0 MB", url: "/catalogs/Railing/SS Spiral Railing.pdf" },
    ]
  },
  {
    id: "upvc-doors",
    name: "UPVC Doors",
    desc: "Sliding, folding, and casement variants",
    icon: DoorOpen,
    color: "from-indigo-600 to-blue-600",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    files: [
      { name: "Casement Doors", size: "3.5 MB", url: "/catalogs/UPVC-doors/Casement Doors.pdf" },
      { name: "Customized Doors", size: "4.8 MB", url: "/catalogs/UPVC-doors/Customized.pdf" },
      { name: "French Door", size: "3.9 MB", url: "/catalogs/UPVC-doors/French Door.pdf" },
      { name: "Lift and Slide", size: "5.1 MB", url: "/catalogs/UPVC-doors/Lift and Slide.pdf" },
      { name: "Slide & Fold", size: "4.6 MB", url: "/catalogs/UPVC-doors/Slide & Fold.pdf" },
      { name: "Sliding Doors", size: "3.2 MB", url: "/catalogs/UPVC-doors/Sliding Doors.pdf" },
    ]
  },
  {
    id: "upvc-windows",
    name: "UPVC Windows",
    desc: "Fixed, hung, and combination frames",
    icon: Layout,
    color: "from-purple-600 to-indigo-600",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
    files: [
      { name: "Bay and Bow", size: "2.9 MB", url: "/catalogs/UPVC-windows/Bay and Bow.pdf" },
      { name: "Casement Windows", size: "3.1 MB", url: "/catalogs/UPVC-windows/Casement Windows.pdf" },
      { name: "Combination windows", size: "4.2 MB", url: "/catalogs/UPVC-windows/Combination windows.pdf" },
      { name: "Double Hung", size: "2.7 MB", url: "/catalogs/UPVC-windows/Double Hung.pdf" },
      { name: "Fixed Windows", size: "1.8 MB", url: "/catalogs/UPVC-windows/Fixed Windows.pdf" },
      { name: "French Windows", size: "3.6 MB", url: "/catalogs/UPVC-windows/French Windows.pdf" },
      { name: "Glass to Glass", size: "4.0 MB", url: "/catalogs/UPVC-windows/Glass to Glass.pdf" },
      { name: "Single Hung", size: "2.3 MB", url: "/catalogs/UPVC-windows/Single Hung.pdf" },
      { name: "Sliding Windows", size: "3.0 MB", url: "/catalogs/UPVC-windows/Sliding Windows.pdf" },
      { name: "Tilt and Turn", size: "3.4 MB", url: "/catalogs/UPVC-windows/Tilt and Turn.pdf" },
    ]
  },
  {
    id: "wooden-doors",
    name: "Wooden Doors",
    desc: "Premium natural timber and veneer frames",
    icon: Construction,
    color: "from-amber-600 to-orange-600",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
    files: [
      { name: "Simmply Perfect Wooden Door", size: "5.8 MB", url: "/catalogs/Wooden-doors/Simmply Perfect Wooden Door.pdf" }
    ]
  },
  {
    id: "wpvc-doors",
    name: "WPVC Doors",
    desc: "Waterproof alternative architectural lineups",
    icon: DoorOpen,
    color: "from-teal-600 to-emerald-600",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200/60",
    files: [
      { name: "Simmply Perfect WPVC Exterior Designs", size: "6.2 MB", url: "/catalogs/WPVC-doors/Simmply Perfect Exterior Designs.pdf" },
      { name: "Simmply Perfect WPVC Interior Designs", size: "5.9 MB", url: "/catalogs/WPVC-doors/Simmply Perfect Interior Designs.pdf" }
    ]
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogsOpen, setCatalogsOpen] = useState(false);

  // Directory system layout filter states
  const [activeTab, setActiveTab] = useState(categoriesData[0].id);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Focused Input layout tracker
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // PDF Active Window State
  const [activePreviewPdf, setActivePreviewPdf] = useState<{ title: string; url: string } | null>(null);

  // Freeze root scroll properties during overlay visibility hooks
  useEffect(() => {
    if (mobileMenuOpen || catalogsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen, catalogsOpen]);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 30); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form submission network handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/catalogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `User completed vault registration matrix fields. Initial tab layout configuration index path: ${activeTab}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register access authorization credentials.");
      }
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Submission exception handler caught:", error);
      setSubmitError(error.message || "Failed to process form entry tracking.");
      setIsSubmitted(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseCatalogs = () => {
    setCatalogsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setSubmitError(null);
      setActivePreviewPdf(null);
      setFormData({ name: "", email: "", phone: "" });
      setFocusedField(null);
    }, 300);
  };

  const activeCategoryObject = categoriesData.find(cat => cat.id === activeTab) || categoriesData[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-lg border-b border-slate-100"
            : "bg-white/20 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="h-24 flex items-center justify-between">
            
            {/* Logo Layout */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Simmply Perfect"
                width={55}
                height={55}
                priority
                className="h-[55px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
              <div>
                <h1 className="text-xl font-bold text-[#0A2E6F] leading-none tracking-wide">
                  SIMMPLY PERFECT
                </h1>
                <span className="text-[10px] tracking-[5px] text-slate-500">
                  GROUP
                </span>
              </div>
            </Link>

            {/* Desktop Menu Navbar elements */}
            <nav className="hidden lg:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-[16px] font-medium text-slate-700 hover:text-[#0A2E6F] transition-all duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#0A2E6F] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <button
                onClick={() => setCatalogsOpen(true)}
                className="relative text-[16px] font-medium text-slate-700 hover:text-[#0A2E6F] transition-all duration-300 group text-left"
              >
                Catalogs
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#0A2E6F] transition-all duration-300 group-hover:w-full" />
              </button>
            </nav>

            <Link
              href="/contact"
              className="hidden lg:flex items-center justify-center bg-[#0A2E6F] text-white px-7 py-3 rounded-full text-sm font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </Link>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-12 h-12 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-center"
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-5 h-[2px] bg-[#0A2E6F]" />
                <span className="w-5 h-[2px] bg-[#0A2E6F]" />
                <span className="w-5 h-[2px] bg-[#0A2E6F]" />
              </div>
            </motion.button>

          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-[90%] max-w-[380px] bg-white z-[60] shadow-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-auto h-[40px]" />
                    <span className="font-bold text-[#0A2E6F]">SIMMPLY PERFECT</span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ rotate: 90 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                <div className="flex flex-col gap-6">
                  {links.map((link) => (
                    <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-slate-700 hover:text-[#0A2E6F] transition-all">
                      {link.label}
                    </Link>
                  ))}

                  <button onClick={() => { setMobileMenuOpen(false); setCatalogsOpen(true); }} className="text-2xl font-medium text-slate-700 hover:text-[#0A2E6F] text-left transition-all">
                    Catalogs
                  </button>
                </div>
              </div>

              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-8 bg-[#0A2E6F] text-white py-4 rounded-2xl font-semibold text-center hover:shadow-lg transition-all duration-300">
                Get In Touch
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* IMAX MULTI-PANEL EXTENDED SYSTEM DIALOG MODULE */}
      <AnimatePresence>
        {catalogsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCatalogs}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-2xl z-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 35 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-7xl bg-white rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden z-10 flex flex-col md:flex-row min-h-[600px] md:h-[750px] border border-slate-100/80"
            >
              
              {/* TARGET PDF FULLSCREEN STUDIO DECK OVERLAY VIEWPORT */}
              <AnimatePresence>
                {activePreviewPdf && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 bg-[#0f172a] z-50 flex flex-col"
                  >
                    <div className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white p-5 px-8 flex items-center justify-between shadow-2xl relative z-10">
                      <button 
                        onClick={() => setActivePreviewPdf(null)}
                        className="group flex items-center gap-2.5 text-xs uppercase tracking-widest text-slate-400 hover:text-white font-bold transition-colors"
                      >
                        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                        <span>Return to Directory</span>
                      </button>
                      
                      <div className="flex items-center gap-3 bg-slate-800/60 border border-slate-700/50 px-4 py-2 rounded-xl max-w-sm md:max-w-xl hidden sm:flex">
                        <FileText size={16} className="text-blue-400" />
                        <h4 className="text-xs font-bold tracking-wide text-slate-200 truncate">
                          {activePreviewPdf.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={activePreviewPdf.url}
                          download
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-[#0A2E6F] hover:from-blue-700 hover:to-[#082456] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg"
                        >
                          <Download size={14} />
                          <span>Download High-Res PDF</span>
                        </a>
                        <button 
                          onClick={handleCloseCatalogs}
                          className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700/60"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 bg-slate-950 p-2 md:p-4 relative">
                      <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-800 shadow-[inset_0_4px_30px_rgba(0,0,0,0.8)] bg-slate-900">
                        <iframe src={`${activePreviewPdf.url}#toolbar=0&navpanes=0`} className="w-full h-full border-none" title={activePreviewPdf.title} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Escape Action X Control button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseCatalogs}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-100/80 backdrop-blur-md hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center shadow-md border border-slate-200/50 transition-all z-30"
              >
                <X size={20} />
              </motion.button>

              {/* LEFT VIEW COLUMN: DIRECTORY & SIDEBAR SWITCHBOARD (35%) */}
              <div className="w-full md:w-[35%] bg-gradient-to-br from-[#0A2E6F] via-[#072354] to-[#031026] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-100/10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-slate-200 text-xs font-bold tracking-widest uppercase shadow-inner">
                    <Sparkles size={14} className="text-blue-300 animate-pulse" />
                    <span>Media Blueprint Index</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl lg:text-4xl font-black tracking-tight leading-[1.15] bg-clip-text bg-gradient-to-b from-white to-slate-300 text-transparent">
                      Corporate Design Portfolios
                    </h3>
                    <p className="text-xs lg:text-sm text-slate-300/80 leading-relaxed font-light">
                      Verify parameters below to explore technical architectural templates, profile charts, and timber lookbooks.
                    </p>
                  </div>
                </div>

                {/* SIDEBAR NAVIGATION SWITCH WORKSPACE (MOUNTED DYNAMICALLY UPON SUBMIT) */}
                <div className="mt-8 md:mt-0 relative z-10 border-t border-white/10 pt-6 space-y-2">
                  {isSubmitted ? (
                    <>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-2">Navigation Directories</span>
                      <div className="flex flex-col gap-1.5">
                        {categoriesData.map((category) => {
                          const SideIcon = category.icon;
                          const isActive = activeTab === category.id;
                          return (
                            <motion.button
                              key={category.id}
                              onClick={() => {
                                setActiveTab(category.id);
                                setFocusedField(null);
                              }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-bold tracking-wide uppercase transition-all text-left group ${
                                isActive 
                                  ? "bg-white text-[#0A2E6F] shadow-lg shadow-black/10" 
                                  : "bg-white/5 text-slate-300 hover:bg-white/10"
                              }`}
                            >
                              <div className="flex items-center gap-3 truncate">
                                <SideIcon size={16} className={isActive ? "text-[#0A2E6F]" : "text-slate-400"} />
                                <span className="truncate">{category.name}</span>
                              </div>
                              <ChevronRight size={14} className={`shrink-0 transition-transform ${isActive ? "text-[#0A2E6F] translate-x-0.5" : "text-slate-500 opacity-0 group-hover:opacity-100"}`} />
                            </motion.button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        <div className="w-9 h-9 rounded-full bg-slate-200 border-2 border-[#0A2E6F] shadow-md flex items-center justify-center text-[10px] font-bold text-slate-900">MW</div>
                        <div className="w-9 h-9 rounded-full bg-slate-400 border-2 border-[#0A2E6F] shadow-md flex items-center justify-center text-[10px] font-bold text-slate-900">JD</div>
                        <div className="w-9 h-9 rounded-full bg-slate-500 border-2 border-[#0A2E6F] shadow-md flex items-center justify-center text-[10px] font-bold text-slate-900">RK</div>
                      </div>
                      <div className="text-xs text-slate-300 font-medium">
                        <span className="text-white font-bold block">1,200+ Requests Logged</span>
                        Architectural distribution centers
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT VIEW COLUMN: SUBMISSION FORM & INTERACTIVE DOCUMENT RENDER LAYER (65%) */}
              <div className="w-full md:w-[65%] p-10 md:p-14 flex flex-col justify-center bg-slate-50/40 overflow-y-auto h-full relative">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    /* STEP 1: PREMIUM ENTRY GATE REGISTRATION VECTOR */
                    <motion.div
                      key="gate-form-panel"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full max-w-xl mx-auto space-y-8"
                    >
                      <div className="space-y-1.5">
                        <h4 className="text-3xl font-black text-slate-900 tracking-tight">Unlock Architectural Media</h4>
                        <p className="text-sm text-slate-500">Provide registration details to activate real-time access nodes to our asset subdirectories.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* CONTROL FIELD: NAME */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Full Name</label>
                          <div className={`relative rounded-2xl bg-white border transition-all duration-300 shadow-sm ${focusedField === "name" ? "border-[#0A2E6F] ring-4 ring-[#0A2E6F]/5" : "border-slate-200 hover:border-slate-300"}`}>
                            <span className={`absolute inset-y-0 left-0 pl-5 flex items-center transition-colors duration-300 ${focusedField === "name" ? "text-[#0A2E6F]" : "text-slate-400"}`}><User size={18} /></span>
                            <input type="text" required disabled={isSubmitting} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Alexander Wright" className="w-full pl-13 pr-5 py-4 bg-transparent rounded-2xl focus:outline-none text-slate-800 placeholder-slate-400 text-sm font-semibold" />
                          </div>
                        </div>

                        {/* SPLIT HORIZONTAL ROW */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          {/* CONTROL FIELD: EMAIL */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Email Address</label>
                            <div className={`relative rounded-2xl bg-white border transition-all duration-300 shadow-sm ${focusedField === "email" ? "border-[#0A2E6F] ring-4 ring-[#0A2E6F]/5" : "border-slate-200 hover:border-slate-300"}`}>
                              <span className={`absolute inset-y-0 left-0 pl-5 flex items-center transition-colors duration-300 ${focusedField === "email" ? "text-[#0A2E6F]" : "text-slate-400"}`}><Mail size={18} /></span>
                              <input type="email" required disabled={isSubmitting} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="name@firm.com" className="w-full pl-13 pr-5 py-4 bg-transparent rounded-2xl focus:outline-none text-slate-800 placeholder-slate-400 text-sm font-semibold" />
                            </div>
                          </div>
                          
                          {/* CONTROL FIELD: PHONE */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest block">Contact Number</label>
                            <div className={`relative rounded-2xl bg-white border transition-all duration-300 shadow-sm ${focusedField === "phone" ? "border-[#0A2E6F] ring-4 ring-[#0A2E6F]/5" : "border-slate-200 hover:border-slate-300"}`}>
                              <span className={`absolute inset-y-0 left-0 pl-5 flex items-center transition-colors duration-300 ${focusedField === "phone" ? "text-[#0A2E6F]" : "text-slate-400"}`}><Phone size={18} /></span>
                              <input type="tel" required disabled={isSubmitting} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className="w-full pl-13 pr-5 py-4 bg-transparent rounded-2xl focus:outline-none text-slate-800 placeholder-slate-400 text-sm font-semibold" />
                            </div>
                          </div>
                        </div>

                        {submitError && <p className="text-xs text-rose-600 font-semibold bg-rose-50 p-3 rounded-xl border border-rose-100">{submitError}</p>}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-4 bg-gradient-to-r from-[#0A2E6F] to-[#061e4a] hover:from-[#082456] hover:to-[#041533] text-white py-4 rounded-2xl font-bold text-sm tracking-widest uppercase shadow-xl hover:scale-[1.005] active:scale-[0.995] transition-all flex items-center justify-center gap-3 disabled:opacity-75"
                        >
                          {isSubmitting ? (
                            <><Loader2 size={18} className="animate-spin" /><span>Syncing Lead Credentials...</span></>
                          ) : (
                            <><span className="tracking-widest">Initialize Catalogs Access</span><ArrowRight size={18} /></>
                          )}
                        </button>
                      </form>

                      <div className="pt-4 border-t border-slate-200 text-center text-[11px] text-slate-400 leading-normal max-w-sm mx-auto">
                        Your specifications are securely processed. Data pipeline triggers automatic authorization logs straight to data control rooms.
                      </div>
                    </motion.div>
                  ) : (
                    /* STEP 2: PREMIUM RE-STRUCTURED FILE MANIFEST VIEWPORT GRID */
                    <motion.div
                      key="download-vault-panel"
                      initial={{ opacity: 0, scale: 0.99, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.99, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full flex flex-col space-y-5 justify-between"
                    >
                      {/* Top Welcome Notification Badge Banner */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4.5 bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100 rounded-2xl shadow-sm shrink-0">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                            <CheckCircle2 size={20} className="stroke-[2.5]" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900 text-sm md:text-base block tracking-tight truncate">
                              Unlocked Directory: {activeCategoryObject.name}
                            </span>
                            <p className="text-xs text-emerald-700 font-medium truncate mt-0.5">
                              Authorized agent identity: <span className="text-slate-900 font-bold">{formData.name}</span>
                            </p>
                          </div>
                        </div>
                        <span className={`text-[9px] uppercase font-black px-2.5 py-1 rounded-full border shrink-0 tracking-widest ${activeCategoryObject.badgeColor} hidden sm:block`}>
                          {activeCategoryObject.files.length} Manifests
                        </span>
                      </div>

                      {/* Dynamic Document Row List Core Viewport Deck Container */}
                      <div className="flex-1 min-h-0 relative bg-slate-50/50 border border-slate-200/60 rounded-3xl p-4 overflow-y-auto custom-scrollbar">
                        <div className="space-y-2.5">
                          {activeCategoryObject.files.map((file, idx) => {
                            const FileIcon = activeCategoryObject.icon;
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, delay: idx * 0.03 }}
                                whileHover={{ scale: 1.005, x: 4 }}
                                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white hover:bg-slate-50/80 rounded-xl border border-slate-200/50 hover:border-slate-300 shadow-sm transition-all duration-300 gap-3"
                              >
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${activeCategoryObject.color} text-white flex items-center justify-center shrink-0 shadow-sm shadow-black/5`}>
                                    <FileIcon size={18} className="stroke-[2]" />
                                  </div>
                                  <div className="min-w-0 space-y-0.5">
                                    <h5 className="font-bold text-sm text-slate-800 tracking-tight group-hover:text-[#0A2E6F] transition-colors line-clamp-1">
                                      {file.name}
                                    </h5>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[9px] bg-slate-100 text-slate-500 font-bold px-1.5 py-0.5 rounded border border-slate-200/40 uppercase tracking-wide">Adobe PDF</span>
                                      <span className="text-xs text-slate-400 font-medium">{file.size}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* RE-DESIGNED FLEX ACTION CONTROL PACK */}
                                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                  <button
                                    onClick={() => setActivePreviewPdf({ title: `${file.name}.pdf`, url: file.url })}
                                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#0A2E6F] bg-white hover:bg-blue-50/30 border border-slate-200 hover:border-[#0A2E6F]/30 rounded-xl transition-all shadow-sm"
                                  >
                                    <Eye size={14} />
                                    <span>Preview Layout</span>
                                  </button>
                                  
                                  <a
                                    href={file.url}
                                    download
                                    className="p-2.5 rounded-xl bg-white hover:bg-[#0A2E6F] text-slate-400 hover:text-white shadow-sm border border-slate-200 hover:border-[#0A2E6F] transition-all"
                                    title="Download File"
                                  >
                                    <Download size={14} className="stroke-[2.2]" />
                                  </a>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Footer Attribution Strip bar */}
                      <div className="text-center pt-2 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-400 shrink-0">
                        <span>Database structure synchronized with system configurations.</span>
                        <Link href="/contact" onClick={handleCloseCatalogs} className="inline-flex items-center gap-1 text-[#0A2E6F] font-bold hover:underline group">
                          <span>Request physical profile samples</span>
                          <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
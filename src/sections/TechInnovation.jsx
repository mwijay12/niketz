import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shoe4, shoe5, shoe6 } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const techItems = [
  {
    id: "zoom-air",
    title: "Nike Zoom Air Cushioning",
    subtitle: "Explosive Energy Return & Ultra-Responsive Feel",
    description:
      "Tightly stretched tensile fibers inside a pressurized Air unit absorb impact and snap back rapidly for maximum propulsion on urban streets and courts.",
    specs: ["100% Impact Protection", "24mm Air Thickness", "Lightweight Cushioning"],
    image: shoe4,
    color: "#FF6452",
    tag: "Aero Cushioning",
  },
  {
    id: "flyknit",
    title: "Flyknit Weave Precision",
    subtitle: "Seamless Support & Dynamic Breathability",
    description:
      "High-strength threads knit into a single-piece upper targeted where you need support, stretch, and airflow. Tailored for humid East African heat.",
    specs: ["Zone-Engineered Ventilation", "Ultra-Light 180g Weight", "Zero Waste Knitting"],
    image: shoe6,
    color: "#2563EB",
    tag: "Upper Tech",
  },
  {
    id: "react-foam",
    title: "Nike React Resilience",
    subtitle: "Durable Traction & Supreme Shock Absorption",
    description:
      "Engineered foam compound providing 13% more energy return than previous Nike cushions while remaining ultra-durable across tough city pavement.",
    specs: ["Tough Grip Outsole", "11% Softer Cushioning", "High Heat Resistance"],
    image: shoe5,
    color: "#D97706",
    tag: "Sole Power",
  },
];

const TechInnovation = () => {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.fromTo(
        ".tech-header",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
        }
      );

      // Reveal tech cards stagger
      gsap.fromTo(
        ".tech-card-item",
        { y: 40, opacity: 0, scale: 0.96 },
        {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeTech = techItems[activeTechIndex];

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="max-container w-full py-16 sm:py-24 padding-x bg-obsidian text-white rounded-3xl relative overflow-hidden shadow-2xl my-10"
    >
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25 transition-all duration-700"
        style={{ backgroundColor: activeTech.color }}
      />

      {/* Header */}
      <div className="tech-header flex flex-col items-center text-center mb-12 sm:mb-16 relative z-10">
        <span className="badge-tag bg-white/10 text-coral-red border-coral-red/30 mb-3">
          ⚡ Nike Air Innovation
        </span>
        <h2 className="text-3xl sm:text-5xl font-palanquin font-bold tracking-tight">
          Engineered For <span className="text-coral-red">Peak Performance</span>
        </h2>
        <p className="mt-3 font-montserrat text-slate-400 text-sm sm:text-base max-w-xl">
          Explore the cutting-edge technological advancements designed to make every step powerful, cushioned, and uniquely stylish.
        </p>
      </div>


      {/* Interactive Tabs */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 mb-10 flex-wrap relative z-10">
        {techItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveTechIndex(index)}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-montserrat text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTechIndex === index
                ? "bg-coral-red text-white shadow-glow scale-105"
                : "bg-white/10 text-slate-300 hover:bg-white/20"
            }`}
          >
            {item.tag}
          </button>
        ))}
      </div>

      {/* Active Tech Interactive Showcase Grid */}
      <div
        ref={cardsRef}
        className="grid lg:grid-cols-12 gap-8 items-center relative z-10 bg-obsidian-card/80 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-2xl shadow-2xl"
      >
        {/* Text Info Column */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-montserrat font-bold uppercase tracking-wider px-3 py-1 rounded-md"
              style={{ backgroundColor: `${activeTech.color}20`, color: activeTech.color }}
            >
              {activeTech.tag}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-palanquin font-bold text-white leading-tight">
            {activeTech.title}
          </h3>

          <h4 className="text-coral-red font-montserrat text-sm sm:text-base font-semibold">
            {activeTech.subtitle}
          </h4>

          <p className="font-montserrat text-slate-300 text-sm sm:text-base leading-relaxed">
            {activeTech.description}
          </p>

          {/* Specs Chips */}
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            {activeTech.specs.map((spec, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-center font-montserrat text-xs font-semibold text-slate-200"
              >
                ✨ {spec}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Asset Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div
            className="absolute inset-0 rounded-full blur-[80px] opacity-30"
            style={{ backgroundColor: activeTech.color }}
          />
          <img
            key={activeTech.id}
            src={activeTech.image}
            alt={activeTech.title}
            className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,100,82,0.3)] animate-floatSlow hover:scale-105 transition-transform duration-500 relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;

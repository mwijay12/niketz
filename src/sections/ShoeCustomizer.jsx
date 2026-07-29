import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { useShop } from "../context/ShopContext";

gsap.registerPlugin(ScrollTrigger);

const upperColors = [
  { name: "Coral Crimson", hex: "#FF6452" },
  { name: "Obsidian Black", hex: "#111827" },
  { name: "Royal Sapphire", hex: "#2563EB" },
  { name: "Electric Gold", hex: "#D97706" },
];

const soleOptions = [
  { name: "Clear Air Cushion", type: "Air", price: 0 },
  { name: "React Cushion Foam", type: "React", price: 15000 },
  { name: "Ultra Rubber Grip", type: "Trail", price: 20000 },
];

const shoeBases = [
  { id: "base-1", name: "Jordan Retro High", image: bigShoe1, basePrice: 135000 },
  { id: "base-2", name: "Air Max Alpha Pro", image: bigShoe2, basePrice: 145000 },
  { id: "base-3", name: "Nike Zoom Runner", image: bigShoe3, basePrice: 125000 },
];

const ShoeCustomizer = () => {
  const { addToCart, showToast } = useShop();
  const [selectedBaseIndex, setSelectedBaseIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(upperColors[0]);
  const [selectedSole, setSelectedSole] = useState(soleOptions[0]);
  const [selectedSize, setSelectedSize] = useState(42);
  const [customName, setCustomName] = useState("NIKE-TZ-01");

  const sectionRef = useRef(null);
  const shoeImgRef = useRef(null);

  const currentBase = shoeBases[selectedBaseIndex];
  const totalPrice = currentBase.basePrice + selectedSole.price;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".customizer-content",
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBaseChange = (index) => {
    gsap.fromTo(
      shoeImgRef.current,
      { scale: 0.85, opacity: 0.5, rotate: -5 },
      { scale: 1, opacity: 1, rotate: 0, duration: 0.4, ease: "back.out(1.5)" }
    );
    setSelectedBaseIndex(index);
  };

  const handleAddToCartCustom = () => {
    const customProduct = {
      id: `custom-${Date.now()}`,
      name: `${currentBase.name} (${selectedColor.name} / ${customName})`,
      priceNumber: totalPrice,
      price: `TSh ${totalPrice.toLocaleString()}`,
      imgURL: currentBase.image,
      selectedSize: selectedSize,
      selectedColor: selectedColor.hex,
    };

    addToCart(customProduct);
    showToast(`Added ${customProduct.name} (Size ${selectedSize}) to your Cart!`);
  };

  return (
    <section
      id="customizer"
      ref={sectionRef}
      className="max-container padding py-16 sm:py-24 max-sm:mt-10"
    >
      <div className="customizer-content flex flex-col items-center text-center mb-12">
        <span className="badge-tag mb-3">
          🎨 Nike Studio Customizer
        </span>
        <h2 className="text-3xl sm:text-5xl font-palanquin font-bold text-slate-900">
          Design Your <span className="text-coral-red">Custom Sneakers</span>
        </h2>
        <p className="mt-3 font-montserrat text-slate-gray text-sm sm:text-base max-w-xl">
          Pick your custom colors, sole technology, size, and personal tag for a one-of-a-kind footwear experience!
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-center bg-pale-blue/60 border border-slate-200/80 p-6 sm:p-12 rounded-3xl shadow-xl">
        {/* Left: Interactive Shoe Preview */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[420px] bg-white rounded-2xl p-6 shadow-inner border border-slate-100 overflow-hidden">
          {/* Color Accent Background Halo */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full blur-[70px] opacity-35 transition-colors duration-500 pointer-events-none"
            style={{ backgroundColor: selectedColor.hex }}
          />

          {/* Badge Overlay */}
          <div className="absolute top-4 left-4 bg-slate-900 text-white font-montserrat text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
            {customName || "NIKE-01"}
          </div>

          <div className="absolute top-4 right-4 bg-coral-red/10 text-coral-red font-montserrat text-xs font-bold px-3 py-1 rounded-full border border-coral-red/20">
            {selectedSole.type} Tech
          </div>

          {/* Main Interactive Shoe Preview */}
          <img
            ref={shoeImgRef}
            src={currentBase.image}
            alt="custom shoe preview"
            className="w-full max-w-[360px] sm:max-w-[420px] h-auto object-contain drop-shadow-2xl relative z-10 transition-transform duration-300 hover:scale-105"
          />

          {/* Base Selector Thumbnails */}
          <div className="flex gap-4 mt-6 z-20">
            {shoeBases.map((base, idx) => (
              <button
                key={base.id}
                onClick={() => handleBaseChange(idx)}
                className={`p-2 bg-white rounded-xl border-2 transition-all ${
                  selectedBaseIndex === idx
                    ? "border-coral-red shadow-lg scale-105"
                    : "border-slate-200 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={base.image} alt={base.name} className="w-12 h-10 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Customization Controls */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Custom Tag Input */}
          <div>
            <label className="block font-montserrat text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Custom Engraving / Name Tag:
            </label>
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value.toUpperCase().slice(0, 12))}
              placeholder="E.G. NIKE-2026"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl font-montserrat text-sm font-bold text-slate-900 focus:outline-none focus:border-coral-red shadow-sm"
            />
          </div>

          {/* Color Selector */}
          <div>
            <label className="block font-montserrat text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              2. Upper Color Palette: <span className="text-coral-red">{selectedColor.name}</span>
            </label>
            <div className="flex items-center gap-3">
              {upperColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-9 h-9 rounded-full border-2 transition-transform ${
                    selectedColor.hex === color.hex
                      ? "scale-125 border-slate-900 shadow-md ring-2 ring-coral-red ring-offset-2"
                      : "border-white hover:scale-110"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Sole Technology Options */}
          <div>
            <label className="block font-montserrat text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              3. Sole & Cushioning Upgrade:
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {soleOptions.map((sole) => (
                <button
                  key={sole.name}
                  onClick={() => setSelectedSole(sole)}
                  className={`p-3 text-left rounded-xl border font-montserrat text-xs transition-all ${
                    selectedSole.name === sole.name
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  <div className="font-bold">{sole.name}</div>
                  <div className="text-[11px] opacity-80">
                    {sole.price === 0 ? "Standard Included" : `+TSh ${sole.price.toLocaleString()}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <label className="block font-montserrat text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              4. Size (EU):
            </label>
            <div className="flex flex-wrap gap-2">
              {[39, 40, 41, 42, 43, 44, 45].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-xl font-montserrat font-bold text-xs transition-all ${
                    selectedSize === size
                      ? "bg-coral-red text-white shadow-md scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-coral-red"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Action */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-montserrat text-xs font-semibold text-slate-500 block">Total Price:</span>
              <span className="font-palanquin text-3xl font-bold text-coral-red">
                TSh {totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleAddToCartCustom}
              className="w-full sm:w-auto px-8 py-4 bg-coral-red hover:bg-coral-dark text-white font-montserrat font-bold text-sm rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 transform active:scale-95"
            >
              Order Custom Sneakers
            </button>
          </div>
        </div>
      </div>
    </section>
  );

};

export default ShoeCustomizer;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../constants";
import { PopularProductCard } from "../components";

gsap.registerPlugin(ScrollTrigger);

const PopularProducts = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Safe animation that always clears opacity & transform props so elements are never hidden
      gsap.fromTo(
        ".popular-card-item",
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-3">
        <div className="flex items-center gap-2">
          <span className="bg-coral-red/10 text-coral-red font-montserrat text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Top Selling Footwear
          </span>
        </div>
        <h2 className="text-4xl font-palanquin font-bold text-slate-900">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray leading-relaxed text-sm sm:text-base">
          Experience top-tier quality and style with our sought-after Nike collections. Click any shoe to inspect details, select your size, and add to cart!
        </p>

      </div>

      {/* Grid of Products - Always visible and structured */}
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8 min-h-[380px]">
        {products.map((product) => (
          <div key={product.id || product.name} className="popular-card-item opacity-100">
            <PopularProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;

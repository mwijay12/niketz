import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shoe8 } from "../assets/images";
import { Button } from "../components";

gsap.registerPlugin(ScrollTrigger);

const SuperQuality = () => {
  const qualityRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".quality-text", {
        scrollTrigger: {
          trigger: qualityRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".quality-img", {
        scrollTrigger: {
          trigger: qualityRef.current,
          start: "top 80%",
        },
        x: 50,
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, qualityRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-us"
      ref={qualityRef}
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="quality-text flex flex-1 flex-col">
        <span className="bg-coral-red/10 text-coral-red font-montserrat text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-3">
          World-Class Quality
        </span>

        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-slate-900">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your everyday experience, providing you with unmatched durability and performance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your complete satisfaction with genuine comfort, Air-sole cushioning technology, and signature style.
        </p>
        <div className="mt-10">
          <a href="#products">
            <Button label="View Products" />
          </a>
        </div>

      </div>

      <div className="quality-img flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default SuperQuality;

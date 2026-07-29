import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard, TypingEffect, CounterStats } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const heroTextRef = useRef(null);
  const shoeContainerRef = useRef(null);

  useEffect(() => {
    // GSAP Hero Entry Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTextRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        shoeContainerRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
          clearProps: "all",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleShoeChange = (newShoe) => {
    gsap.fromTo(
      ".main-shoe-img",
      { scale: 0.9, opacity: 0.8, rotate: -3 },
      { scale: 1, opacity: 1, rotate: 0, duration: 0.4, ease: "back.out(1.5)" }
    );
    setBigShoeImg(newShoe);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container pt-6 sm:pt-10"
    >
      {/* Left Text Block - Brought forward z-30 */}
      <div
        ref={heroTextRef}
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x z-30"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-coral-red/10 text-coral-red text-xs font-montserrat font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Summer Collection 2026
          </span>
        </div>

        {/* Headline without white box cutout */}
        <h1 className="mt-3 font-palanquin text-7xl sm:text-8xl max-sm:text-[56px] max-sm:leading-[64px] font-bold text-slate-900 leading-tight">
          <span className="relative z-30 block text-slate-900 drop-shadow-sm">
            The New Arrival
          </span>
          <span className="text-coral-red inline-block mt-2">Nike</span> Shoes
        </h1>

        <div className="mt-4 mb-4 min-h-[30px]">
          <TypingEffect />
        </div>

        <p className="font-montserrat text-slate-gray text-base sm:text-lg leading-8 mb-8 sm:max-w-md">
          Discover stylish Nike arrivals with ultimate comfort, responsive Air cushion technology, and premium athletic footwear for your active lifestyle.
        </p>

        <a href="#products" className="z-30">
          <Button label="Shop Now" iconURL={arrowRight} />
        </a>


        {/* Counter Statistics */}
        <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-10 sm:gap-14 border-t border-slate-100 pt-8">
          {statistics.map((stat, index) => (
            <CounterStats
              key={index}
              targetValue={stat.value}
              displaySuffix={stat.displayValue}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      {/* Shoe Showcase Banner */}
      <div
        ref={shoeContainerRef}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-32 bg-primary bg-hero bg-cover bg-center rounded-3xl z-10 shadow-lg border border-slate-100"
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="main-shoe-img object-contain relative z-20 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-30">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => handleShoeChange(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

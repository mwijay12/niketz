import React, { useState } from "react";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
import { useShop } from "../context/ShopContext";

const SpecialOffer = () => {
  const { showToast } = useShop();
  const [showOfferModal, setShowOfferModal] = useState(false);

  const handleShopNow = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    setShowOfferModal(true);
  };

  const handleClaimCoupon = () => {
    navigator.clipboard.writeText("NIKE-OFFER-30");
    showToast("Promo code NIKE-OFFER-30 copied! Apply at checkout for 30% OFF.");
    setShowOfferModal(false);
  };

  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container relative">
      {/* Left Promo Graphic with Animated Rotating Badge */}
      <div className="flex-1 relative flex justify-center items-center">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full drop-shadow-2xl rounded-3xl"
        />

        {/* Continuous Rotating Circular Text Badge around 30% OFF */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none sm:scale-110">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
            {/* Inner Black Badge */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-900 text-white font-palanquin font-extrabold flex flex-col items-center justify-center text-center shadow-glow border-2 border-white/20 z-20">
              <span className="text-sm sm:text-base text-coral-red leading-tight">30%</span>
              <span className="text-xs sm:text-sm tracking-wider">OFF</span>
            </div>

            {/* Rotating Outer SVG Circular Text */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] z-10"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="#111827" fontSize="13 font-bold font-montserrat" letterSpacing="3.5">
                <textPath href="#circlePath" startOffset="0%">
                  YOU CAN GET THE OFFER FROM NIKE • 30% OFF •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Right Text Content */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-tag">🔥 30% Off Special Savings</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-palanquin font-bold text-slate-900 leading-tight">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Get authentic Air Jordan and Air Max sneakers with an instant 30% discount. Claim your exclusive coupon code or browse our collection now.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <div onClick={handleShopNow}>
            <Button label="Shop Now" iconURL={arrowRight} />
          </div>
          <button
            onClick={handleLearnMore}
            className="px-7 py-4 bg-white hover:bg-slate-50 border border-slate-400 text-slate-700 font-montserrat font-bold text-base rounded-full transition-all shadow-sm hover:shadow active:scale-95"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Interactive Coupon Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-obsidian border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-white text-center">
            <span className="badge-tag bg-coral-red/20 text-coral-red mb-3 inline-block">
              🎁 Exclusive Promo Code
            </span>
            <h3 className="text-2xl font-palanquin font-bold text-white mb-2">
              Claim Your 30% OFF Discount!
            </h3>
            <p className="text-xs font-montserrat text-slate-300 mb-6">
              Click the button below to copy your promo code <strong>NIKE-OFFER-30</strong> and apply it during checkout.
            </p>

            <div className="bg-white/5 border border-dashed border-coral-red p-4 rounded-2xl mb-6 flex items-center justify-between">
              <span className="font-mono text-xl font-bold text-coral-red tracking-widest">NIKE-OFFER-30</span>
              <span className="text-xs bg-coral-red text-white px-2.5 py-1 rounded-full font-montserrat font-bold">30% OFF</span>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleClaimCoupon}
                className="w-full py-3.5 bg-coral-red hover:bg-coral-dark text-white font-montserrat font-bold text-sm rounded-full shadow-glow transition-all"
              >
                Copy Coupon Code
              </button>
              <button
                onClick={() => setShowOfferModal(false)}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-slate-300 font-montserrat text-xs rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SpecialOffer;

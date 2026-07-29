import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { star } from "../assets/icons";

const ProductModal = () => {
  const { selectedProduct, setSelectedProduct, addToCart } = useShop();
  const [selectedSize, setSelectedSize] = useState(42);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedSize, selectedColor || selectedProduct.colors?.[0]);
    setSelectedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-lg transition-all"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Container */}
          <div className="flex flex-col items-center justify-center bg-coral-red/10 rounded-2xl p-6 relative group">
            <span className="absolute top-3 left-3 bg-coral-red text-white text-xs font-montserrat px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
              {selectedProduct.category || "Original"}
            </span>
            <img
              src={selectedProduct.imgURL}
              alt={selectedProduct.name}
              className="w-full h-48 sm:h-60 object-contain transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <img src={star} alt="rating" width={18} height={18} />
              <span className="font-montserrat text-sm text-slate-600 font-semibold">
                ({selectedProduct.rating || 4.8}) 120+ Customer Reviews
              </span>
            </div>

            <h3 className="font-palanquin text-2xl font-bold text-slate-900 leading-snug">
              {selectedProduct.name}
            </h3>

            <p className="font-montserrat font-bold text-2xl text-coral-red mt-2">
              {selectedProduct.price}
            </p>

            <p className="font-montserrat text-sm text-slate-600 mt-3 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* Color Selector */}
            {selectedProduct.colors && (
              <div className="mt-4">
                <label className="block text-xs font-montserrat text-slate-500 uppercase tracking-wider font-bold mb-2">
                  Color Option
                </label>
                <div className="flex gap-3">
                  {selectedProduct.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        (selectedColor === color || (!selectedColor && idx === 0))
                          ? "ring-2 ring-coral-red scale-110 border-white"
                          : "border-slate-300 opacity-80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="mt-5">
              <label className="block text-xs font-montserrat text-slate-500 uppercase tracking-wider font-bold mb-2">
                Select EU Size
              </label>
              <div className="flex flex-wrap gap-2">
                {(selectedProduct.sizes || [39, 40, 41, 42, 43, 44, 45]).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold border transition-all ${
                      selectedSize === sz
                        ? "bg-coral-red text-white border-coral-red shadow-md shadow-coral-red/30 scale-105"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    EU {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Tag */}
            <div className="mt-4 p-2.5 bg-slate-50 rounded-xl flex items-center gap-2 border border-slate-100">
              <span className="text-base">🚚</span>
              <span className="text-xs font-montserrat text-slate-600 font-medium">
                Free Express Doorstep Shipping & Tracked Delivery!
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full py-3.5 bg-coral-red hover:bg-red-600 text-white font-montserrat font-bold text-sm rounded-full shadow-lg shadow-coral-red/30 hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>🛒 Add to Cart</span>
              <span className="text-white/80">•</span>
              <span>{selectedProduct.price}</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

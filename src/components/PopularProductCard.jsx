import React from "react";
import { star } from "../assets/icons";
import { useShop } from "../context/ShopContext";

const PopularProductCard = ({ id, imgURL, name, price, rating, category, description, sizes, colors, priceNumber }) => {
  const { setSelectedProduct, addToCart } = useShop();

  const productData = {
    id: id || name,
    imgURL,
    name,
    price,
    rating: rating || 4.8,
    category: category || "Retro High",
    description: description || "Premium sneaker crafted for peak comfort and style.",
    sizes: sizes || [39, 40, 41, 42, 43, 44, 45],
    colors: colors || ["#EF4444", "#111827", "#FFFFFF"],
    priceNumber: priceNumber || 125000,
  };

  return (
    <div
      onClick={() => setSelectedProduct(productData)}
      className="popular-card flex flex-1 flex-col w-full max-sm:w-full bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      <div className="w-full flex justify-center items-center bg-coral-red/5 rounded-2xl p-6 relative">
        <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-slate-800 text-[11px] font-montserrat font-bold px-2.5 py-1 rounded-full border border-slate-200">
          {category || "TZ Edition"}
        </span>
        <img
          src={imgURL}
          alt={name}
          className="w-[240px] h-[240px] object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <img src={star} alt="rating icon" width={18} height={18} />
          <p className="font-montserrat text-sm leading-normal text-slate-gray font-semibold">
            ({rating || 4.8})
          </p>
        </div>
        <span className="text-xs font-montserrat font-semibold text-slate-400">In Stock (TZ)</span>
      </div>

      <h3 className="mt-2 text-xl leading-normal font-bold font-palanquin text-slate-900 group-hover:text-coral-red transition-colors truncate">
        {name}
      </h3>

      <div className="mt-3 flex items-center justify-between">
        <p className="font-bold font-montserrat text-coral-red text-xl leading-normal">
          {price}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(productData);
          }}
          className="p-2.5 bg-coral-red hover:bg-red-600 text-white rounded-full shadow-md shadow-coral-red/30 transition-all duration-300 active:scale-90 flex items-center justify-center"
          title="Add to Cart"
        >
          <span className="text-sm font-bold">🛒 +</span>
        </button>
      </div>
    </div>
  );
};

export default PopularProductCard;

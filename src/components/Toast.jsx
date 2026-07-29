import React from "react";
import { useShop } from "../context/ShopContext";

const Toast = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounceIn">
      <div className="bg-slate-900 text-white font-montserrat text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/50 flex items-center gap-3 backdrop-blur-md">
        <span className="w-2.5 h-2.5 rounded-full bg-coral-red animate-ping" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

export default Toast;

import React, { useState } from "react";
import { useShop } from "../context/ShopContext";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    showToast,
  } = useShop();

  const [paymentStep, setPaymentStep] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card / Visa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      setPaymentStep(false);
      setIsCartOpen(false);
      showToast(`🎉 Order Confirmed! Your order via ${paymentMethod} has been placed. Updates will be sent to ${phoneNumber || 'your phone number'}.`);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-slideLeft relative z-10">
          
          {/* Header */}
          <div>
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="font-palanquin text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span>🛒 Your Shopping Cart</span>
                <span className="text-sm font-montserrat font-semibold text-coral-red bg-coral-red/10 px-2.5 py-0.5 rounded-full">
                  {cart.reduce((a, b) => a + b.quantity, 0)} Items
                </span>
              </h2>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setPaymentStep(false);
                }}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm transition-all"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            {!paymentStep ? (
              <div className="mt-6 space-y-4 max-h-[55vh] overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-16 flex flex-col items-center">
                    <span className="text-5xl mb-4">👟</span>
                    <p className="font-montserrat text-slate-500 font-medium">Your cart is empty right now.</p>
                    <p className="font-montserrat text-xs text-slate-400 mt-1">Browse our products and add your favorite pair!</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
                    >
                      <img
                        src={item.imgURL}
                        alt={item.name}
                        className="w-16 h-16 object-contain bg-white rounded-xl p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-montserrat font-bold text-sm text-slate-800 truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs font-montserrat text-slate-500 mt-0.5">
                          <span className="bg-slate-200 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            EU {item.selectedSize}
                          </span>
                          <span className="font-bold text-coral-red">
                            TSh {item.priceNumber?.toLocaleString()}
                          </span>
                        </div>
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            className="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 font-bold text-xs flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="font-montserrat text-xs font-bold px-2">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            className="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 font-bold text-xs flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-slate-400 hover:text-red-500 font-bold text-sm px-2"
                      >
                        🗑️
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : (
              /* Payment Step */
              <div className="mt-6 space-y-4 animate-fadeIn">
                <button
                  onClick={() => setPaymentStep(false)}
                  className="text-xs font-montserrat font-bold text-coral-red flex items-center gap-1 hover:underline mb-2"
                >
                  ← Back to Cart
                </button>
                <h3 className="font-palanquin text-lg font-bold text-slate-900">
                  Select Payment Method
                </h3>
                <p className="font-montserrat text-xs text-slate-500">
                  Choose your preferred payment method below to complete your order securely.
                </p>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  {["Credit Card / Visa", "PayPal", "Mobile Money", "Cash on Delivery"].map((method) => (
                    <button
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`p-3 rounded-xl text-xs font-montserrat font-bold border transition-all text-left ${
                        paymentMethod === method
                          ? "bg-coral-red text-white border-coral-red shadow-md"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {method === "Credit Card / Visa" && "💳 "}
                      {method === "PayPal" && "🅿️ "}
                      {method === "Mobile Money" && "📱 "}
                      {method === "Cash on Delivery" && "💵 "}
                      {method}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-montserrat text-slate-600 font-bold mb-1">
                    Phone Number / Contact Info
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +255 700 000 000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-montserrat focus:outline-none focus:border-coral-red"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          <div className="border-t pt-4 mt-6">
            <div className="flex items-center justify-between font-montserrat font-bold text-lg text-slate-900 mb-4">
              <span>Subtotal:</span>
              <span className="text-coral-red">TSh {cartTotal.toLocaleString()}</span>
            </div>

            {!paymentStep ? (
              <button
                disabled={cart.length === 0}
                onClick={() => setPaymentStep(true)}
                className={`w-full py-3.5 rounded-full font-montserrat font-bold text-sm text-white shadow-lg transition-all duration-300 ${
                  cart.length > 0
                    ? "bg-coral-red hover:bg-red-600 shadow-coral-red/30 active:scale-95"
                    : "bg-slate-300 cursor-not-allowed opacity-70"
                }`}
              >
                Proceed to Checkout →
              </button>
            ) : (
              <button
                disabled={isProcessing}
                onClick={handleCheckout}
                className="w-full py-3.5 bg-coral-red hover:bg-red-600 text-white font-montserrat font-bold text-sm rounded-full shadow-lg shadow-coral-red/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
              >
                {isProcessing ? (
                  <span>⏳ Processing Order...</span>
                ) : (
                  <span>Complete Order ({paymentMethod})</span>
                )}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

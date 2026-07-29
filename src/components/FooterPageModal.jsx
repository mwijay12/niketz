import React from "react";

const pageContents = {
  "about-us": {
    title: "About Nike Store",
    category: "Brand Story",
    content: (
      <div className="space-y-4 text-slate-300 font-montserrat text-sm leading-relaxed">
        <p>
          Nike Store is your premier online destination delivering 100% authentic Nike footwear (Original Air Jordan, Air Max, and Running Shoes) with quality assurance and exceptional customer service.
        </p>
        <p>
          We are dedicated to ensuring every customer receives premium footwear featuring advanced Air Cushioning, Flyknit weaves, and ergonomic comfort tailored for active everyday lifestyles.
        </p>
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
          <h4 className="font-bold text-coral-red mb-1">Quality Inspection & Fast Express Shipping</h4>
          <p className="text-xs text-slate-300">
            Every pair of sneakers is thoroughly inspected by hand before dispatch to guarantee pristine condition and authentic sizing.
          </p>
        </div>
      </div>
    ),
  },
  "privacy-policy": {
    title: "Privacy Policy",
    category: "Legal & Security",
    content: (
      <div className="space-y-4 text-slate-300 font-montserrat text-sm leading-relaxed">
        <p>
          We respect your privacy. All customer data, contact phone numbers, and shipping addresses are protected using industry-standard SSL encryption and will never be shared with third parties.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-300">
          <li>Your phone number and contact information are strictly used for order updates and shipping logistics.</li>
          <li>We do not store or process sensitive payment PINs or credit card CVV details on our servers.</li>
          <li>You may request complete deletion of your customer profile and order history at any time via support.</li>
        </ul>
      </div>
    ),
  },
  "payment-policy": {
    title: "Payment Policy",
    category: "Payment Methods & Security",
    content: (
      <div className="space-y-4 text-slate-300 font-montserrat text-sm leading-relaxed">
        <p>
          We offer secure, flexible payment options for your convenience, including credit card, debit card, online mobile payments, and Cash on Delivery.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 my-3">
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
            <span className="font-bold text-coral-red block text-xs">💳 Cards & Digital Wallets</span>
            <span className="text-xs text-slate-300">Visa, Mastercard, American Express, and Apple Pay accepted.</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
            <span className="font-bold text-coral-red block text-xs">📱 Mobile Money & COD</span>
            <span className="text-xs text-slate-300">Mobile Money transfers and Cash on Delivery available at checkout.</span>
          </div>
        </div>
      </div>
    ),
  },
  faqs: {
    title: "Frequently Asked Questions (FAQs)",
    category: "Help Center",
    content: (
      <div className="space-y-4 text-slate-300 font-montserrat text-sm leading-relaxed">
        <div className="border-b border-white/10 pb-3">
          <h4 className="font-bold text-white text-sm mb-1">Q: How long does shipping take?</h4>
          <p className="text-xs text-slate-300">A: Express local orders are delivered same-day (2-4 hours). Standard domestic and regional shipping takes 24 to 48 hours.</p>
        </div>
        <div className="border-b border-white/10 pb-3">
          <h4 className="font-bold text-white text-sm mb-1">Q: What if the shoe size does not fit?</h4>
          <p className="text-xs text-slate-300">A: We offer hassle-free size exchanges within 7 days of delivery at no extra cost!</p>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm mb-1">Q: Are all sneakers authentic Nike originals?</h4>
          <p className="text-xs text-slate-300">A: Yes! 100% of our products are genuine Nike shoes featuring authentic Air Cushion Technology and original boxes.</p>
        </div>
      </div>
    ),
  },
  "how-it-works": {
    title: "How It Works",
    category: "Ordering Guide",
    content: (
      <div className="space-y-4 text-slate-300 font-montserrat text-sm leading-relaxed">
        <ol className="list-decimal pl-5 space-y-3 text-slate-300">
          <li>
            <strong>Select Product & Size:</strong> Browse our collection and choose your desired shoe and EU size (39 – 45).
          </li>
          <li>
            <strong>Add to Cart:</strong> Click "Add to Cart" or use the custom sneaker studio builder.
          </li>
          <li>
            <strong>Enter Delivery Details:</strong> Fill in your name, contact number, and shipping address.
          </li>
          <li>
            <strong>Receive & Enjoy:</strong> Our courier delivers your sneakers right to your door for inspection.
          </li>
        </ol>
      </div>
    ),
  },
};

const FooterPageModal = ({ isOpen, onClose, pageKey }) => {
  if (!isOpen) return null;

  const pageData = pageContents[pageKey] || {
    title: "Information Page",
    category: "Nike Store",
    content: <p className="text-slate-300 font-montserrat">For further assistance, please contact our support team.</p>,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-obsidian border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-xs font-montserrat font-bold text-coral-red uppercase tracking-wider">
              {pageData.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-palanquin font-bold text-white mt-1">
              {pageData.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-coral-red transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-2">{pageData.content}</div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-coral-red hover:bg-coral-dark text-white font-montserrat font-bold text-xs rounded-full shadow-glow transition-all"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterPageModal;

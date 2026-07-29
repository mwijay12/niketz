import React, { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useShop } from "../context/ShopContext";

const Nav = () => {
  const { totalCartCount, setIsCartOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass-nav shadow-lg border-b border-slate-200/80 py-3"
          : "bg-white/95 border-b border-slate-100 py-4"
      }`}
    >
      {/* Scroll Progress Bar at very top */}
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-coral-red via-coral-dark to-slate-900 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="flex justify-between items-center max-container padding-x">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group"
        >
          <img
            src={headerLogo}
            alt="Nike Logo"
            width={129}
            height={29}
            className="m-0 w-[115px] sm:w-[130px] h-auto group-hover:scale-105 transition-transform"
          />
          <span className="bg-coral-red text-white text-[10px] font-montserrat font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
            Official Store
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="flex-1 flex justify-center items-center gap-8 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-montserrat leading-normal text-sm text-slate-700 hover:text-coral-red transition-colors font-bold tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-coral-red after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Currency Badge */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-montserrat font-bold text-slate-700">
            <span>🌍 USD / TSh</span>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-slate-900 text-white hover:bg-coral-red rounded-full shadow-md hover:shadow-glow transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
            title="Your Cart"
          >
            <span className="text-lg">🛒</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-coral-red text-white font-montserrat text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {totalCartCount}
              </span>
            )}
          </button>

          <div className="hidden max-lg:block">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              <img src={hamburger} alt="hamburger icon" width={22} height={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-2xl text-white shadow-2xl border-b border-slate-800 py-6 px-8 animate-fadeIn z-50">
          <ul className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-montserrat text-base text-slate-100 font-bold hover:text-coral-red block py-1 border-b border-slate-800/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 flex items-center justify-between border-t border-slate-800 text-xs font-montserrat text-slate-400">
            <span>Express Doorstep Delivery</span>
            <span className="text-coral-red font-bold">24/7 Support</span>
          </div>
        </div>
      )}

    </header>
  );
};

export default Nav;



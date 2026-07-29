import React, { useState } from "react";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { FooterPageModal } from "../components";

const Footer = () => {
  const [activeModalKey, setActiveModalKey] = useState(null);

  const handleLinkClick = (e, link) => {
    if (link.key) {
      e.preventDefault();
      setActiveModalKey(link.key);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="max-container relative">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="#home">
            <img
              src={footerLogo}
              alt="Nike Tanzania Logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new season at your nearest Nike store. Find your perfect size in-store or order online with fast express shipping.
          </p>

          <div className="flex items-center gap-4 mt-8">
            {socialMedia.map((icon) => (
              <a
                key={icon.alt}
                href="#"
                className="flex justify-center items-center w-11 h-11 bg-white hover:bg-coral-red transition-all duration-300 rounded-full group shadow-md"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={22}
                  height={22}
                  className="group-hover:brightness-200 transition-all"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-16 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-xl leading-normal font-bold mb-6 text-white tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link || "#"}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="font-montserrat text-sm sm:text-base leading-normal text-white-400 hover:text-coral-red transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-20 pt-8 border-t border-white/10 max-sm:flex-col max-sm:items-center gap-4 text-xs sm:text-sm">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={18}
            height={18}
            className="rounded-full m-0"
          />
          <p>
            Copyright 2026. Made with ❤️ by{" "}
            <span className="text-white font-semibold hover:text-coral-red transition-colors">
              MWIJAY DAVIE (Mwijay Tech)
            </span>
            . All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveModalKey("privacy-policy")}
            className="font-montserrat hover:text-coral-red transition-colors"
          >
            Terms & Conditions
          </button>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 bg-white/10 hover:bg-coral-red text-white px-3 py-1.5 rounded-full font-montserrat text-xs transition-all"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* Footer Policy Modal Dialog */}
      <FooterPageModal
        isOpen={Boolean(activeModalKey)}
        onClose={() => setActiveModalKey(null)}
        pageKey={activeModalKey}
      />
    </footer>
  );
};

export default Footer;


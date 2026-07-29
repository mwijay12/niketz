import React, { useState, useEffect } from "react";

const phrases = [
  "Quality Comfort & Innovation",
  "Premium Footwear & Streetwear",
  "Style & Performance Combined",
  "Original Nike Collection"
];


const TypingEffect = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(90);

        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(40);

        if (text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <span className="inline-block min-h-[1.5em] font-montserrat text-coral-red font-semibold text-lg sm:text-xl">
      {text}
      <span className="animate-pulse ml-0.5 font-bold">|</span>
    </span>
  );
};

export default TypingEffect;

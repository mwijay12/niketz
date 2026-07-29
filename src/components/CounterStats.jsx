import React, { useState, useEffect, useRef } from "react";

const CounterStats = ({ targetValue, displaySuffix, label }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const duration = 2000; // 2 seconds
          const steps = 50;
          const stepTime = duration / steps;
          const increment = targetValue / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "k";
    return num.toString();
  };

  return (
    <div ref={counterRef} className="flex flex-col">
      <p className="text-3xl sm:text-4xl font-palanquin font-bold text-slate-900 transition-all">
        {formatNumber(count)}
        <span className="text-coral-red font-bold">+</span>
      </p>
      <p className="leading-7 font-montserrat text-slate-gray text-xs sm:text-sm font-medium">
        {label}
      </p>
    </div>
  );
};

export default CounterStats;

import React, { useState } from "react";
import { Button } from "../components";
import { useShop } from "../context/ShopContext";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Thank you for subscribing (${email})! You will receive exclusive drops & offers.`);
    setEmail("");
  };

  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 bg-pale-blue p-8 sm:p-12 rounded-3xl border border-slate-100"
    >
      <h3 className="text-3xl sm:text-4xl leading-[50px] lg:max-w-md font-palanquin font-bold text-slate-900">
        Sign Up for <span className="text-coral-red">Updates</span> & Special Offers
      </h3>
      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[45%] w-full flex items-center max-sm:flex-col gap-4 p-2.5 sm:border sm:border-slate-300 rounded-full bg-white shadow-sm"
      >
        <input
          type="email"
          required
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input pl-4 text-sm font-montserrat text-slate-700 w-full focus:outline-none"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </form>
    </section>
  );

};

export default Subscribe;

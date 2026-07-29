import React from "react";
import { Nav, CartDrawer, ProductModal, Toast } from "./components";
import { ShopProvider } from "./context/ShopContext";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  TechInnovation,
  ShoeCustomizer,
} from "./sections";

const App = () => {
  return (
    <ShopProvider>
      <main className="relative overflow-x-hidden bg-white text-slate-900 selection:bg-coral-red selection:text-white pt-[72px] sm:pt-[80px]">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>

        <section className="padding">
          <PopularProducts />
        </section>
        <section>
          <TechInnovation />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section>
          <ShoeCustomizer />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-28 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-obsidian padding-x padding-t pb-8">
          <Footer />
        </section>

        {/* Interactive Overlays */}
        <CartDrawer />
        <ProductModal />
        <Toast />
      </main>
    </ShopProvider>
  );
};

export default App;


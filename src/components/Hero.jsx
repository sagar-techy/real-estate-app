import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Hero() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const isBuy = type === "buy";

  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-12">
  <div className="relative bg-white rounded-2xl shadow-lg overflow-visible">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="hero"
            className="w-full h-96 md:h-[520px] object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex items-start justify-center mt-12 md:mt-20 pointer-events-none">
            <div className="w-full max-w-5xl px-6 pointer-events-auto">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                  {isBuy
                    ? "Featured Properties For Sale"
                    : "Find Your Dream Home in One Click!"}
                </h1>
                <p className="mt-3 text-white/90">
                  {isBuy
                    ? "Discover, Buy, or Rent Verified Properties with Ease."
                    : "Discover, Buy, or Rent Verified Properties with Ease."}
                </p>
              </div>

              <div className="mt-8 relative">
                <div className="static md:absolute md:-top-12 md:left-4 md:right-4 flex flex-col md:flex-row items-center md:items-center gap-3">
                  <div className="bg-white rounded-full hero-search px-4 py-3 flex items-center gap-4">
                    <input
                      placeholder="Search Location..."
                      className="flex-1 rounded-full px-6 py-3 border-none outline-none"
                    />
                    <select
                      defaultValue={isBuy ? "For Buying" : "For Rent"}
                      className="rounded-full border px-4 py-2 text-sm min-w-[120px] appearance-none"
                    >
                      <option>For Rent</option>
                      <option>For Buying</option>
                      <option>For Sale</option>
                    </select>
                    <button className="ml-2 px-6 py-3 bg-brand-600 text-white rounded-full shadow">
                      Find Property
                    </button>
                  </div>
                </div>
                <div className="mt-24 flex items-center justify-end gap-3">
                  <Link
                    to="/listings"
                    className="px-4 py-2 bg-white/90 text-brand-700 rounded-full"
                  >
                    List Your Property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

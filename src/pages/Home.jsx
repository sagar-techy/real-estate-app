import { useEffect, useMemo, useState } from "react";
import Hero from "../components/Hero.jsx";
import WhatWeDo from "../components/WhatWeDo.jsx";
import NewsletterForm from "../components/NewsletterForm.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import { fetchProperties } from "../services/api.js";
import React from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProperties()
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const featured = useMemo(() => data.slice(0, 6), [data]);
  const sale = useMemo(
    () => data.filter((d) => d.type === "sale").slice(0, 6),
    [data]
  );
  const rent = useMemo(
    () => data.filter((d) => d.type === "rent").slice(0, 6),
    [data]
  );

  return (
    <>
      <Hero />

      <WhatWeDo />

      {/* Featured property hero strip */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 md:p-8">
            <div className="md:flex gap-6 items-center">
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {featured.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    className="relative rounded-xl overflow-hidden"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-gradient-to-t from-black/40 to-transparent text-white absolute bottom-0 left-0 right-0">
                      <h3 className="font-semibold">{p.name}</h3>
                      <p className="text-sm">{p.city}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:w-1/3">
                <div className="rounded-xl overflow-hidden">
                  {featured[3] ? (
                    <img
                      src={featured[3].image}
                      alt={featured[3].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
                      alt="feature"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured Property
            </h2>
            <button className="px-4 py-2 border rounded-full text-sm">
              See 268 New Projects
            </button>
          </div>
          {loading ? (
            <p className="mt-6 text-gray-500">Loading...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {featured.slice(0, 3).map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">
              Best Properties Available For Sale
            </h2>
            <button className="px-4 py-2 bg-brand-600 text-white rounded-full shadow">
              View More Properties
            </button>
          </div>
          {loading ? (
            <p className="mt-6 text-gray-500">Loading...</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {sale.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">
              Find The Perfect Rental Home
            </h2>
            <button className="px-4 py-2 border rounded-full text-sm">
              View All Rentals
            </button>
          </div>
          {loading ? (
            <p className="mt-6 text-gray-500">Loading...</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {rent.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Start your journey CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold">Start Your Journey Today!</h3>
          <p className="text-gray-600 mt-2">
            Create a profile in seconds and find your ideal home.
          </p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <input
              placeholder="Enter Your Name"
              className="px-4 py-3 border rounded-full"
            />
            <select className="px-4 py-3 border rounded-full">
              <option>Select User Type</option>
            </select>
            <input
              placeholder="Enter Your Location"
              className="px-4 py-3 border rounded-full"
            />
            <button className="px-6 py-3 bg-brand-600 text-white rounded-full shadow">
              Continue
            </button>
          </form>
        </div>
      </section>

      {/* Collage + highlights */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex gap-4 items-center">
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop"
                className="rounded-lg shadow-lg transform rotate-2"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              We Provide Latest Properties For Our Valuable Clients
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow">🏷️</div>
                <div>
                  <h4 className="font-semibold">Budget Friendly</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow">🤝</div>
                <div>
                  <h4 className="font-semibold">Trusted By Thousand</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow">📍</div>
                <div>
                  <h4 className="font-semibold">Prime Location</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <NewsletterForm />
    </>
  );
}

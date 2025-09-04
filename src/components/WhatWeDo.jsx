
import React from "react";
const items = [
  { title: "Buy Homes", desc: "Find properties for sale in prime locations.", icon: "🏠" },
  { title: "Rent Homes", desc: "Affordable rentals with trusted owners.", icon: "🔑" },
  { title: "Verified Listings", desc: "We verify owners and property details.", icon: "✔️" },
  { title: "24/7 Support", desc: "Get help anytime from our support team.", icon: "💬" },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-responsive">
        <h2 className="text-2xl md:text-3xl font-bold">What We Do</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {items.map((it) => (
            <div key={it.title} className="p-6 bg-white rounded-2xl shadow-card">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
              <p className="text-gray-600 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

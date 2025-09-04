import React from "react";
export default function PropertyCard({ p }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-card border">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{p.name}</h4>
          <span className={`px-2 py-1 text-xs rounded-full ${p.type === "sale" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
            {p.type}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{p.city}, {p.state}, {p.country}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-brand-700 font-bold">₹{p.price.toLocaleString()}</span>
          <a href={`tel:${p.contactNumber}`} className="text-sm text-brand-600 hover:underline">Contact</a>
        </div>
      </div>
    </article>
  );
}

import { useEffect, useMemo, useState } from "react";
import { fetchProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";
import Filter from "../components/Filter";
import React from "react";  

export default function Listings() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState("all");
  const [q, setQ] = useState("");

  useEffect(() => {
    fetchProperties()
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return data.filter((p) => (type === "all" ? true : p.type === type))
               .filter((p) => p.city.toLowerCase().includes(q.toLowerCase()) || p.state.toLowerCase().includes(q.toLowerCase()) || p.country.toLowerCase().includes(q.toLowerCase()));
  }, [data, type, q]);

  return (
    <section className="py-10">
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">All Properties</h1>
          <div className="flex items-center gap-3">
            <input placeholder="Search city/state/country" value={q} onChange={(e) => setQ(e.target.value)} className="px-3 py-2 border rounded-xl"/>
            <Filter value={type} onChange={setType} />
          </div>
        </div>

        {loading ? <p className="mt-6 text-gray-500">Loading...</p> : error ? <p className="mt-6 text-red-600">{error}</p> : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}

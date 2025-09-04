const BASE_URL = "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

export async function fetchProperties() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch properties");
  const data = await res.json();

  // The schema in the assignment does not include a 'type' field (sale/rent).
  // To enable deterministic filtering without mutating API, we derive a pseudo-type:
  // odd id => 'sale', even id => 'rent'.
  return data.map((p) => ({
    ...p,
    type: Number(p.id) % 2 === 0 ? "rent" : "sale",
    price: Math.floor(Math.abs(p.latitude * 1000) + 500) * 10 // synthetic price for display
  }));
}

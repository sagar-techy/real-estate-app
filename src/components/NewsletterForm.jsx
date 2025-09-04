import React from "react";
export default function NewsletterForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    alert(`Subscribed: ${email}`);
    e.currentTarget.reset();
  };

  return (
    <section id="newsletter" className="py-16 bg-brand-600 text-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold">Get in Touch with Us</h3>
            <p className="mt-2 text-white/90">
              Subscribe now for exclusive property insights and deals!
            </p>
          </div>
          <form onSubmit={onSubmit} className="w-full md:w-1/2">
            <div className="relative">
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-full bg-white/90 text-gray-800 outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-brand-700 text-white px-5 py-2 rounded-full shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

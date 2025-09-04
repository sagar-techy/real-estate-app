import { Link } from "react-router-dom";
import React from "react";

export default function NotFound() {
  return (
    <section className="py-16">
      <div className="container-responsive text-center">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="text-gray-600 mt-2">
          The page you are looking for was not found.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-5 py-3 bg-brand-600 text-white rounded-full hover:bg-brand-700 shadow"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}

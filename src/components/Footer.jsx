import React from "react";
export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container-responsive py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} EstateX. All rights reserved.</p>
        <div className="text-gray-400 text-sm">Made for assignment demo</div>
      </div>
    </footer>
  );
}

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React, { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/");
  };

  const linkCls = ({ isActive }) =>
    `text-sm px-3 py-2 transition ${
      isActive
        ? "text-brand-700 font-semibold"
        : "text-gray-700 hover:text-brand-700"
    }`;

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container-responsive grid grid-cols-[auto_1fr_auto] items-center h-16">
        {/* left: logo + mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lg font-bold text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-brand-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 10l9-7 9 7v7a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-7z"
              />
            </svg>
            <span>PropBot</span>
          </Link>

          {/* show hamburger next to logo on small screens */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md border"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* center: nav links */}
        <nav className="hidden md:flex items-center justify-center gap-6">
          <NavLink to="/" className={linkCls}>
            Home
          </NavLink>
          <Link to="/?type=buy" className={linkCls({ isActive: false })}>
            Buy
          </Link>
          <NavLink to="/listings?type=rent" className={linkCls}>
            Rent
          </NavLink>
          <NavLink to="/listings?type=sell" className={linkCls}>
            Sell
          </NavLink>
          <NavLink to="/about" className={linkCls}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkCls}>
            Contact Us
          </NavLink>
        </nav>

        {/* right: auth actions */}
        <div className="flex items-center justify-end gap-3 justify-self-end relative z-10">
          {user ? (
            <>
              <span className="text-sm text-gray-600 hidden md:block">
                Hi, {user.displayName || user.email}
              </span>
              <button
                onClick={onLogout}
                className="inline-flex px-4 py-2 bg-brand-700 text-white rounded-full hover:bg-brand-600 shadow whitespace-nowrap"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="inline-flex px-4 py-2 bg-brand-700 text-white rounded-full hover:bg-brand-600 shadow whitespace-nowrap"
              >
                Login / Register
              </Link>
            </>
          )}
        </div>

        {/* mobile menu overlay */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="container-responsive py-4">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="px-3 py-2 text-sm text-gray-700"
              >
                Home
              </Link>
              <Link
                to="/?type=buy"
                onClick={closeMenu}
                className="px-3 py-2 text-sm text-gray-700"
              >
                Buy
              </Link>
              <Link
                to="/listings?type=rent"
                onClick={closeMenu}
                className="px-3 py-2 text-sm text-gray-700"
              >
                Rent
              </Link>
              <Link
                to="/listings?type=sell"
                onClick={closeMenu}
                className="px-3 py-2 text-sm text-gray-700"
              >
                Sell
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="px-3 py-2 text-sm text-gray-700"
              >
                About Us
              </Link>
              <a
                href="#newsletter"
                onClick={(e) => {
                  closeMenu();
                  setTimeout(
                    () =>
                      document
                        .getElementById("newsletter")
                        ?.scrollIntoView({ behavior: "smooth" }),
                    100
                  );
                }}
                className="px-3 py-2 text-sm text-gray-700"
              >
                Contact Us
              </a>
            </nav>
            <div className="mt-4">
              {user ? (
                <button
                  onClick={() => {
                    onLogout();
                    closeMenu();
                  }}
                  className="w-full px-4 py-2 bg-brand-700 text-white rounded-full"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="w-full inline-block text-center px-4 py-2 bg-brand-700 text-white rounded-full"
                >
                  Login / Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

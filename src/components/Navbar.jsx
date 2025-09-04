import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

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

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container-responsive grid grid-cols-3 items-center h-16">
        {/* left: logo */}
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
        </div>

        {/* center: nav links */}
        <nav className="flex items-center justify-center gap-6">
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
        <div className="flex items-center justify-end gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-600 hidden md:block">
                Hi, {user.displayName || user.email}
              </span>
              <button
                onClick={onLogout}
                className="px-4 py-2 bg-brand-700 text-white rounded-full hover:bg-brand-600 shadow"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-brand-700 text-white rounded-full hover:bg-brand-600 shadow"
              >
                Login / Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* left: form card */}
          <div className="bg-white shadow-md rounded-2xl p-8 max-w-lg mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-3xl font-bold">Log In</h1>
              <Link
                to="/"
                className="text-sm text-gray-600 inline-flex items-center gap-2 border rounded-full px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h4l3 8 4-16 3 8h4"
                  />
                </svg>
                Back to Homepage
              </Link>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter Your Email Id"
                    className="w-full px-4 py-3 border rounded-xl pr-12"
                  />
                  <span className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.94 6.94A2 2 0 014 6h12a2 2 0 011.06.28L10 11 2.94 6.94z" />
                      <path d="M18 8.118l-8 4.8-8-4.8V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    required
                    placeholder="Enter Your Password"
                    className="w-full px-4 py-3 border rounded-xl pr-12"
                  />
                  <span className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v2H5a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1h-1V6a4 4 0 00-4-4zM8 8V6a2 2 0 114 0v2H8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-brand-600"
                  />
                  <span className="text-gray-600">Remember Me</span>
                </label>
                <Link to="#" className="text-sm text-brand-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                disabled={loading}
                className="w-full py-3 bg-black text-white rounded-full text-lg hover:bg-gray-900 disabled:opacity-60 shadow"
              >
                {loading ? "Signing in..." : "Log In"}
              </button>

              <div className="flex items-center gap-3">
                <hr className="flex-1" />
                <span className="text-xs text-gray-400 uppercase">
                  or continue with
                </span>
                <hr className="flex-1" />
              </div>

              <div className="flex items-center gap-4 justify-center">
                <button
                  type="button"
                  aria-label="Continue with Apple"
                  className="p-3 rounded-full bg-white border shadow hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.365 1.43c.01 0 .02.002.03.002-..." />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Continue with Facebook"
                  className="p-3 rounded-full bg-white border shadow hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M22 12.07C22 6.49 17.52 2 11.94 2S2 6.49 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.76-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.75l-.44 2.9h-2.31V22c4.78-.81 8.44-4.94 8.44-9.93z" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="p-3 rounded-full bg-white border shadow hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 11.5v8.5h13.4C36.7 23.8 30.9 29 24 29c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.3 0 6.2 1.2 8.4 3.1l6-6C36.7 3.1 30.9 1 24 1 11.3 1 1 11.3 1 24s10.3 23 23 23 23-10.3 23-23c0-1.5-.1-3-.4-4.5H24z"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center">
                Doesn’t have an account?{" "}
                <Link to="/signup" className="text-brand-600 font-medium">
                  Create One
                </Link>
              </p>
            </form>
          </div>

          {/* right: image */}
          <div className="mx-auto max-w-3xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop&crop=entropy"
              alt="house"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

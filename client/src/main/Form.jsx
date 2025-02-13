import React, { useState, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [login, setlogin] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Handle Input Change Dynamically
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleUser = useCallback(
    async (e) => {
      e.preventDefault(); // Prevent default form submission
      try {
        const api = login
          ? "http://localhost:3000/api/user/signin"
          : "http://localhost:3000/api/user/signup";
        const res = await axios.post(api, user);
        const data = res.data;

        // Store token in cookies (expires in 7 days)
        Cookies.set("token", data.token, {
          expires: 7,
          secure: false,
          sameSite: "Strict",
        });
        

        // Reset user state
        setUser({ name: "", email: "", password: "" });
        window.location.reload();

        // Navigate to homepage after success
        navigate("/");
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
      }
    },
    [user, setUser, login, navigate]
  );

  return (
    <div className="p-8 rounded-lg shadow-xl w-full max-w-sm mx-auto my-auto">
      <h2 className="text-2xl font-bold text-center text-black mb-6">
        Welcome To Todo
      </h2>

      <form onSubmit={handleUser}>
        {login ? (
          <>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-black mb-2"
              >
                Name
              </label>
              <input
                type="name"
                value={user.name}
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-md bg-blue-700 text-white border-2 border-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black mb-2"
              >
                Email
              </label>
              <input
                type="email"
                value={user.email}
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full p-3 rounded-md bg-blue-700 text-white border-2 border-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-black mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                name="password"
                value={user.password}
                required
                className="w-full p-3 rounded-md bg-blue-700 text-white border-2 border-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black mb-2"
              >
                Email
              </label>
              <input
                type="email"
                value={user.email}
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full p-3 rounded-md bg-blue-700 text-white border-2 border-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-black mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                value={user.password}
                required
                className="w-full p-3 rounded-md bg-blue-700 text-white border-2 border-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {login ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
          Forgot Password?
        </a>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm">
          {login ? "Already have an account?" : "Don't have an account?"}{" "}
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300"
            onClick={() => setlogin(!login)}
          >
            {login ? "Sign Up" : "Sign In"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;

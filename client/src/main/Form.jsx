import React, { useState, useCallback } from "react";

const Form = () => {
  const [login, setlogin] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change Dynamically
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const handleUser = useCallback(
    (e) => {
      e.preventDefault();
      console.log(user); // Here you can send the data to an API or store it
      setUser({ name: "", email: "", password: "" });
    },
    [user]
  );
  return (
    <>
      <div className="p-8 rounded-lg shadow-xl w-full max-w-sm mx-auto my-auto">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Welcome To Todo
        </h2>

        <form action="submit">
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
              value={user.password}
              required
              className="w-full p-3 rounded-md bg-blue-700 text-white border-2 border-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleUser}
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
    </>
  );
};

export default Form;

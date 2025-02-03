import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [active, setactive] = useState("");
  return (
    <>
      <div className="navbar bg-slate-500 flex justify-center items-center w-full h-[100px]">
        <ul className="flex justify-center items-center gap-5 text-white font-medium text-lg">
          <li
            className={active === "home" ? "text-blue-300 " : ""}
            onClick={() => setactive(active === "home" ? "" : "home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={active === "signiup" ? "text-blue-300 " : ""}
            onClick={() => setactive(active === "signiup" ? "" : "signiup")}
          >
            <Link to={"/signup"}>Login </Link>
          </li>
          <li
            className={active === "signin" ? "text-blue-300 " : ""}
            onClick={() => setactive(active === "signin" ? "" : "signin")}
          >
            <Link to={"/signin"}>Register</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const Header = () => {
  const [active, setactive] = useState("");
  const Out = () => {
    Cookies.remove("token");
    window.location.reload();
    console.log("Token Removed");
  };
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
            <Link to={"/form"}>Form </Link>
          </li>
          <button onClick={Out}>Logout</button>
          <button>
            <Link to={"/"}>
              <img src="./user.svg" alt="" />
            </Link>
          </button>
        </ul>
      </div>
    </>
  );
};

export default Header;

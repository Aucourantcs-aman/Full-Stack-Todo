import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate} from "react-router-dom";
const Header = () => {
  const [active, setactive] = useState("");
  // const { userId } = useParams();
  // console.log(userId);
  
  const navigate = useNavigate();
  const Out = () => {
    Cookies.remove("token");
    navigate("/");
    window.location.reload();
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
          <button onClick={Out}>Logout</button>
        </ul>
      </div>
    </>
  );
};

export default Header;

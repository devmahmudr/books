import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import brat from "../../assets/images/brat.png";
import downArrow from "../../assets/images/icons/down.svg";
const Header = () => {
  const [active, setActive] = useState("bosh");
  const [down, setDown] = useState(false);
  return (
    <div className="flex justify-between items-center py-[22px] pl-[80px] pr-[32px] border-b-2  border-gray-600 mb-[55px]">
      <div>
        <NavLink to="/">
          <img src={logo} alt="sitelogo" />
        </NavLink>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-x-4 px-4 text-white">
          <li>
            <NavLink
              to="/"
              className={`pb-9 ${
                active === "bosh" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive("bosh")}
            >
              Bosh sahifa
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`pb-9 ${
                active === "nasr" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive("nasr")}
            >
              Nasr
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`pb-9 ${
                active === "nazm" ? "border-b-2  border-white" : ""
              }`}
              onClick={() => setActive("nazm")}
            >
              Nazm
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`pb-9 ${
                active === "maqola" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive("maqola")}
            >
              Maqolalar
            </NavLink>
          </li>
          <li>
            <NavLink
              className={` pb-9 ${
                active === "forum" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive("forum")}
            >
              Forum
            </NavLink>
          </li>
        </ul>
        <div className="header-profile flex ml-5">
          <img src={brat} alt="" className="rounded-[50%] mr-3" />
          <img
            src={downArrow}
            alt=""
            onClick={() => setDown(!down)}
            className=" cursor-pointer"
          />
          <ul
            className={`${
              down
                ? "block absolute top-[80px] right-4 rounded-xl bg-gray-900"
                : "hidden"
            }`}
          >
            <NavLink to="/signin">
              <li className="text-white px-8 py-2 mb-3 cursor-pointer hover:opacity-80">
                Sing In
              </li>
            </NavLink>
            <NavLink to="/signup">
              <li className="text-white px-8 py-2  cursor-pointer hover:opacity-80">
                Sing Up
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

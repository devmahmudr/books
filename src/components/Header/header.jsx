import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
const Header = () => {
  const [active, setActive] = useState("");
  return (
    <div className="flex justify-between items-center py-[22px] pl-[80px] pr-[32px] border-b-2  border-gray-600 mb-[55px]">
      <div>
        <NavLink to="/">
          <img src={logo} alt="sitelogo" />
        </NavLink>
      </div>
      <div>
        <ul className="flex gap-x-4 px-4 text-white">
          <li>
            <NavLink
              to="/"
              className={`pb-6 ${
                active == "bosh" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive("bosh")}
            >
              Bosh sahifa
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`pb-6 ${
                active == "nasr" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive("nasr")}
            >
              Nasr
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`pb-6 ${
                active == "nazm" ? "border-b-2  border-white" : ""
              }`}
              onClick={() => setActive("nazm")}
            >
              Nazm
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`pb-6 ${
                active == "maqola" ? "border-b-2 border-white"  : ""
              }`}
              onClick={() => setActive("maqola")}
            >
              Maqolalar
            </NavLink>
          </li>
          <li>
            <NavLink
              className={` pb-6 ${
                active == "forum" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive("forum")}
            >
              Forum
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

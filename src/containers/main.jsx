import { useState } from "react";
import Hero from "../components/hero/hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainards from "./mainards";
import Search from "./search";
const Main = () => {
  const [color, setColor] = useState("temur");
  return (
    <div className="container mx-auto">
        <Hero />
        <div className="section2">
          <div className="sec2-top">
            <h1 className="font-normal text-[#C9AC8C] text-[36px] leading-9 text-center my-7">
              Asosiy kategoriyalar
            </h1>
            <div className="flex justify-center gap-x-[70px]">
              <p
                onClick={() => setColor("temur")}
                className={` cursor-pointer ${
                  color === "temur"
                    ? "text-[#C9AC8C] text-[1rem] leading-5"
                    : "text-white text-[1rem] leading-5"
                }`}
              >
                Temuriylar davri{" "}
              </p>
              <p
                onClick={() => setColor("jadid")}
                className={` cursor-pointer ${
                  color === "jadid"
                    ? "text-[#C9AC8C] text-[1rem] leading-5"
                    : "text-white text-[1rem] leading-5"
                }`}
              >
                Jadid adabiyoti{" "}
              </p>
              <p
                onClick={() => setColor("sovet")}
                className={` cursor-pointer ${
                  color === "sovet"
                    ? "text-[#C9AC8C] text-[1rem] leading-5"
                    : "text-white text-[1rem] leading-5"
                }`}
              >
                Sovet davri
              </p>
              <p
                onClick={() => setColor("must")}
                className={` cursor-pointer ${
                  color === "must"
                    ? "text-[#C9AC8C] text-[1rem] leading-5"
                    : "text-white text-[1rem] leading-5"
                }`}
              >
                Mustaqillik davri
              </p>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Mainards />} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
    </div>
  );
};

export default Main;

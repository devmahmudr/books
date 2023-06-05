import { NavLink } from "react-router-dom";

const Maincard = ({ image, title, autor,id }) => {
  return (
    <NavLink to={`/bookssingle/${id}`}>
      <div className="mt-[50px]">
        <img src={image} alt="" className="mb-4 w-[165px] h-[245px]" />
        <p className="text-[#C9AC8C] text-[20px] leading-5">{title}</p>
        <p className="text-white">{autor}</p>
        <p className="text-white">4.1 • 3400 ta fikrlar</p>
      </div>
    </NavLink>
  );
};

export default Maincard;

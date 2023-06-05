import { NavLink } from "react-router-dom";
import signinImg from "../assets/images/icons/signin.svg";

const Signin = () => {
  return (
    <div className="bg-white flex h-[100vh]">
      <div className="signup-left bg-[#C9AC8CED] p-[100px]">
        <img src={signinImg} alt="" />
      </div>
      <div className="signup-right px-[125px] pt-[75px] mt-[191px]">
        <h1 className="font-black leading-[50px] text-[36px]">Sign in</h1>
        <p className=" font-normal mb-5">
          Do not you have an account?{" "}
          <NavLink to="/signup" className={`text-[#549FF9]`}>
            Sign up
          </NavLink>{" "}
        </p>
        <form className="flex flex-col">
          <input
            required
            type="email"
            placeholder="Email"
            className="text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none 
            w-[330px] py-4 rounded-[10px] border border-[#B4B4BB] pl-8 mb-4"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none 
            w-[330px] py-4 rounded-[10px] border border-[#B4B4BB] pl-8 mb-4"
          />
          <button className="text-white font-medium leading-9 text-[18px] bg-[#152540] py-1 px-5 rounded-[100px]">
            Next step
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

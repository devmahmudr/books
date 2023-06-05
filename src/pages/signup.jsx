import { NavLink, useNavigate } from "react-router-dom";
import signupImg from "../assets/images/icons/signup.svg";
import { post } from "../utils/api";

const Signup = () => {
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    const data = {
      email: email.value,
      password: password.value,
    };

    const api = await post("user/register", data);

    if (api.data.status === 200) {
      window.localStorage.setItem("token", api?.data?.token);
      return nav("/");
    }

    e.target.reset();
  };

  return (
    <div className="bg-white flex h-[100vh]">
      <div className="signup-left bg-[#C9AC8CED] p-[100px]">
        <img src={signupImg} alt="" />
      </div>
      <div className="signup-right px-[125px] pt-[75px] ">
        <h1 className="font-black leading-[50px] text-[36px]">Sign up</h1>
        <p className=" font-normal mb-5">
          Already have an account?{" "}
          <NavLink to="/signin" className={`text-[#549FF9]`}>
            Sign in
          </NavLink>{" "}
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="First name"
            name="firstName"
            className="text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none 
              w-[330px] py-4 rounded-[10px] border border-[#B4B4BB] pl-8 mb-4"
          />
          <input
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            className="text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none 
              w-[330px] py-4 rounded-[10px] border border-[#B4B4BB] pl-8 mb-4"
          />
          <input
            required
            type="tel"
            placeholder="Phone"
            name="phone"
            className="text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none 
              w-[330px] py-4 rounded-[10px] border border-[#B4B4BB] pl-8 mb-4"
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            className="text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none 
              w-[330px] py-4 rounded-[10px] border border-[#B4B4BB] pl-8 mb-4"
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            className="text-[#aaaaaa] placeholder:text-[#aaaaaa] outline-none 
              w-[330px] py-4 rounded-[10px] border border-[#B4B4BB] pl-8 mb-4"
          />
          <button
            type="submit"
            className="text-white font-medium leading-9 text-[18px] bg-[#152540] py-1 px-5 rounded-[100px]"
          >
            Next step
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

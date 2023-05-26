import heroimg from "../../assets/images/hero.png";
const Hero = () => {
  return (
    <div>
      <div>
        <img src={heroimg} alt="sitelogo" />
      </div>
      <div>
        <form className="bg-black shadow-[0px 4px 77px rgba(0, 0, 0, 0.25)] 
         w-[1100px] mx-auto  relative bottom-12 rounded-2xl py-[44px] pl-[110px]  ">
          <label htmlFor="search" className="text-white">Qidirish</label>
          <div>
            <input
              type="search"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              className=" bg-[#404040] rounded-2xl placeholder:text-[rgba(255, 255, 255, 0.3)] 
              w-[700px] px-7 py-4 outline-none text-white placeholder:font-normal  "
              id="search"
            />
            <button className="px-[40px]  py-4 bg-[#C9AC8C] text-[#3C2710] rounded-2xl ml-4  ">izlash</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;

import { FaAngleDoubleDown } from "react-icons/fa";
import hero from "../assets/image0.webp";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none tracking-wider">
          Creativerse
        </h1>
        <div className="mt-8">
          <span className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
            Scroll Down <FaAngleDoubleDown className="ml-2" />
          </span>
        </div>
      </div>
      <div className="w-full">
        <img src={hero} alt="" className="mt-8 h-96 w-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;

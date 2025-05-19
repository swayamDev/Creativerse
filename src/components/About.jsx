import { ABOUT } from "../constants";

const About = () => {
  return (
    <section id="about">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">About Us</h2>
      <div className="flex items-center justify-center">
        <div className="m-8 max-w-6xl text-3xl lg:text-6xl">
          {ABOUT.split("\n").map((line, idx) =>
            line.trim() !== "" ? <p key={idx}>{line}</p> : <br key={idx} />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

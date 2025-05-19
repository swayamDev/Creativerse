import About from "./components/About";
import Contact from "./components/Contact";
import Experiments from "./components/Experiments";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Grids from "./components/Grids";

const App = () => {
  return (
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Grids />
      <About />
      <Experiments />
      <Contact />
    </main>
  );
};

export default App;

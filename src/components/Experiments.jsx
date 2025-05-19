import { EXPERIMENTS } from "../constants";

const Experiments = () => {
  return (
    <section id="experiments">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">
        Build Log / Experiments
      </h2>
      <div className="mx-auto max-w-6xl">
        {EXPERIMENTS.map((experiment, id) => (
          <div key={id} className="mx-4 mb-20">
            <h2 className="tracking-wide lg:text-2xl">{experiment.title}</h2>
            <div className="flex justify-between">
              <p className="py-4 tracking-wider font-extralight lg:text-xl">
                {experiment.tags}
              </p>
              <p className="py-4 tracking-wider lg:text-xl">
                {experiment.author}
              </p>
            </div>
            <p className="font-sans text-gray-400">{experiment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiments;

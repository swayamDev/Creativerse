import { GRIDS } from "../constants";

const Grids = () => {
  return (
    <section className="p-8" id="explore">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">
        Explore the Creativerse
      </h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {GRIDS.map((grid) => (
          <a
            key={grid.id}
            href={grid.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                src={grid.imgSrc}
                alt={grid.title}
                className="h-auto w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 m-8 p-8 text-white backdrop-blur-md">
                <h3 className="text-3xl">{grid.title}</h3>
                <p className="max-w-xs text-lg">{grid.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Grids;

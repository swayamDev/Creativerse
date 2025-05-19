import { CONTACT, SOCIAL_LINKS } from "../constants";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">
        Say Hello to Creativity{" "}
      </h2>
      <div className="mx-auto max-w-6xl">
        <div className="p-4 text-center tracking-wider text-xl lg:text-2xl">
          {CONTACT.text
            .split("\n")
            .map((line, idx) =>
              line.trim() !== "" ? <p key={idx}>{line}</p> : <br key={idx} />
            )}
        </div>
        <p className="my-4 text-center text-2xl font-medium text-lime-300 hover:underline hover:text-lime-400 lg:pt-6 lg:text-5xl">
          {CONTACT.email}
        </p>
        <p className="my-4 text-center text-2xl font-medium text-lime-300 hover:underline hover:text-lime-400 lg:pt-6 lg:text-5xl">
          {CONTACT.phone}
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center gap-8">
        {SOCIAL_LINKS.map((link, index) => (
          <a
            aria-label={link.label}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="my-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Creativerse. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;

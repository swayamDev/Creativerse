import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";
import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";

export const LINKS = [
  { id: "explore", name: "explore" },
  { id: "about", name: "about" },
  { id: "experiments", name: "experiments" },
  { id: "contact", name: "contact" },
];

export const MARQUEE_TEXT =
  " Design | Code | Sketch | Write | Build | Dream | Repeat |\u00A0";

export const GRIDS = [
  {
    id: 1,
    title: "Micro-Interaction Library",
    description:
      "A curated collection of slick micro-interactions built with GSAP and Framer Motion.",
    imgSrc: image1,
    link: "#",
  },
  {
    id: 2,
    title: "UI Snapshot: Minimal Login",
    description: "Clean, minimalist login UI concept for modern apps.",
    imgSrc: image2,
    link: "#",
  },
  {
    id: 3,
    title: "Daily Design Quote",
    description: "“Design is intelligence made visible.” — Alina Wheeler",
    imgSrc: image3,
    link: "#",
  },
  {
    id: 4,
    title: "Mini Tool: Palette Picker",
    description:
      "Generate color palettes with one click. Great for fast prototyping.",
    imgSrc: image4,
    link: "#",
  },
  {
    id: 5,
    title: "Figma UI Kit",
    description:
      "Free UI kit with buttons, cards, inputs — ready to drag into your Figma files.",
    imgSrc: image5,
    link: "#",
  },
  {
    id: 6,
    title: "Dev Tip",
    description:
      "Use `scroll-behavior: smooth;` for buttery-smooth scrolling effects on anchor links.",
    imgSrc: image6,
    link: "#",
  },
  {
    id: 7,
    title: "Animation Demo: Text Reveal",
    description:
      "An animated text reveal effect using clip-path and GSAP timelines.",
    imgSrc: image7,
    link: "#",
  },
  {
    id: 8,
    title: "Easter Egg",
    description: "There's a secret Konami Code hidden in this site. Try it. 👀",
    imgSrc: image8,
    link: "#",
  },
  {
    id: 9,
    title: "Workflow Peek",
    description:
      "How I use Notion, Figma, and VSCode together for rapid design-dev cycles.",
    imgSrc: image9,
    link: "#",
  },
];

export const ABOUT = `Welcome to Creativerse — a digital playground where creativity flows endlessly.
We’re not a company. We’re not a product. We’re an idea.

Creativerse is a conceptual space built for experimentation — a canvas for developers, designers, and dreamers to explore layouts, interactions, and imagination without rules. From infinite scrolls to animated grids, this site is all about pushing boundaries and breaking patterns (with style, of course).

We believe in small sparks leading to big ideas.
We love minimal UI with maximum vibes.
And we’re here just to create for the joy of creating.`;

export const EXPERIMENTS = [
  {
    title: "Bento Grid on Scroll",
    description:
      "An experimental layout that turns a static grid into a dynamic experience. As you scroll, each tile comes alive with a staggered entrance — creating rhythm, movement, and a sense of depth. Perfect for storytelling, portfolios, or playful UI concepts.",
    tags: `[ "layout", "motion" ]`,
    author: "Creativerse Team",
  },
  {
    title: "Infinite Text Loop",
    description:
      "A continuous, looping stream of animated text that feels like a never-ending ribbon of thought. Designed to grab attention and inject motion into typography — ideal for taglines, vibes, or creative signatures.",
    tags: `[ "typography", "scroll" ]`,
    author: "Creativerse Team",
  },
  {
    title: "Hover-to-Reveal Layers",
    description:
      "This interaction experiment introduces depth to flat design. Tiles reveal hidden content with smooth hover animations, mimicking layers peeling back. A delightful surprise that encourages curiosity and exploration.",
    tags: `[ "interaction", "UI" ]`,
    author: "Creativerse Team",
  },
  {
    title: "Animated Dark Mode Toggle",
    description:
      "Not just a theme switch — a visual story. This toggle animates between sun and moon icons with a satisfying morph and easing motion. It adds character and polish to any theme switcher while enhancing accessibility.",
    tags: `[ "micro-interaction", "theme" ]`,
    author: "Creativerse Team",
  },
  {
    title: "Sticky Side Scroll",
    description:
      "A horizontally scrolling section that sticks into view and reveals one panel at a time — creating a controlled storytelling moment. Perfect for showcasing steps, product features, or visual chapters in a sleek format.",
    tags: `[ "scroll", "layout" ]`,
    author: "Creativerse Team",
  },
];

export const CONTACT = {
  text: `We love curious minds, bold ideas, and unexpected collaborations.

Whether you’re a developer, designer, artist, or just creatively curious — let’s connect. Drop us a note, a weird idea, or just a “hi.”

This is Creativerse. We're always open to what's next.
`,
  email: "hello@creativerse.space",
  phone: "+1 (234) 567-890",
};

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
    label: "Facebook",
  },
  {
    href: "https://discord.com/invite",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
    label: "Discord",
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
    label: "Twitter",
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
    label: "Linkedin",
  },
];

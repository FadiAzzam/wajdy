import {
  faReact,
  faPython,
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faWordpress,
  faUnity,
  faGit,
  faNodeJs,
  faFigma,
  faDocker,
  faNpm,
  faBootstrap,
  faFontAwesome,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineCode,
  AiOutlineHtml5,
  AiOutlineFormatPainter,
  AiOutlineApi,
  AiOutlineBehanceSquare,
  AiOutlineDribbble,
} from "react-icons/ai";

import {
  FaReact,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaCogs,
  FaJs,
  FaTerminal,
  FaDocker,
  FaNpm,
  FaWordpress,
  FaElementor,
  FaVectorSquare,
  FaPalette,
  FaPinterestSquare,
} from "react-icons/fa";

import { FiFramer, FiLayout } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo, DiCss3, DiNodejsSmall } from "react-icons/di";
import {
  SiTailwindcss,
  SiSemanticuireact,
  SiFontawesome,
  SiMaterialdesignicons,
  SiAdobexd,
  SiDjango,
  SiPython,
  SiNotion,
  SiAdobeindesign,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiFirebase,
} from "react-icons/si";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { VscDebugLineByLine } from "react-icons/vsc";
import { TbCloudComputing } from "react-icons/tb";

export const AboutContent = [
  {
    text: (
      <p className="text-justify font-extralight text-align-justify  p-3 ">
        Willkommen auf meiner Portfolio-Website! Mein Name ist Fadi Azzam und
        ich bin ein Webentwickler mit Leidenschaft für React js,
        Webseitengestaltung und Grafikdesign. Geboren und aufgewachsen bin ich
        in Sweida, Syrien und seit 2016 lebe ich in Deutschland. Im September
        2021 habe ich meinen Bachelor in Medieninformatik an der
        <a
          className="text-blue-400 hover:text-blue-300 font-bold"
          target="_blank"
          rel="noreferrer"
          href="https://www.ba-dresden.de/"
        >
          {" "}
          Berufsakademie Dresden
        </a>{" "}
        erfolgreich abgeschlossen und arbeite derzeit als Wissenschaftlicher
        Mitarbeiter bei
        <a
          className="text-blue-400 hover:text-blue-300 font-bold"
          target="_blank"
          rel="noreferrer"
          href="https://infai.org/"
        >
          {" "}
          InfAI | Institut für Angewandte Informatik
        </a>{" "}
        . Ich betrachte meine Arbeit nicht nur als Beruf, sondern auch als
        kreative Herausforderung. Mein Ziel ist es, Websites und Anwendungen zu
        entwickeln, die nicht nur funktional sind, sondern auch ästhetisch
        ansprechend und benutzerfreundlich. Als Teamplayer bin ich stets offen
        und interkulturell flexibel und setze mich leidenschaftlich für jedes
        Projekt ein, an dem ich arbeite.`,
      </p>
    ),
  },
];

export const skillsContent = [
  {
    title: "React js",
    icon: faReact,
    frameworks: [""],
  },
  {
    title: "JavaScript",
    icon: faJs,
    frameworks: [""],
  },
  {
    title: "Django",
    icon: faPython,
    frameworks: [""],
  },
  {
    title: "JQuery",
    icon: faJs,
    frameworks: [""],
  },
  {
    title: "HTML5",
    icon: faHtml5,
    frameworks: [""],
  },
  {
    title: "Bootstrap 5",
    icon: faBootstrap,
    frameworks: [""],
  },
  {
    title: "Tailwind CSS",
    icon: faBootstrap,
    frameworks: [""],
  },
  {
    title: "StyledComponent",
    icon: faBootstrap,
    frameworks: [""],
  },
  {
    title: "Semantic UI",
    icon: faBootstrap,
    frameworks: [""],
  },
  {
    title: "Font Awesome 6",
    icon: faFontAwesome,
    frameworks: [""],
  },
  {
    title: "CSS3",
    icon: faCss3,
    frameworks: [""],
  },
  {
    title: "Sass",
    icon: faSass,
    frameworks: [""],
  },
  {
    title: "UI/UX-Design",
    icon: faSass,
    frameworks: [""],
  },
  {
    title: "Wordpress",
    icon: faWordpress,
    frameworks: [""],
  },
  {
    title: "Elementor",
    icon: faWordpress,
    frameworks: [""],
  },
  {
    title: "Python",
    icon: faPython,
    frameworks: [""],
  },
  {
    title: "Grafikdesign",
    icon: faSass,
    frameworks: ["Affinity Designer & Photo"],
  },
  {
    title: "Datenanalyse",
    icon: faPython,
    frameworks: ["MS Office"],
  },
  {
    title: "Adobe InDesign",
    icon: faPython,
    frameworks: [""],
  },
  {
    title: "Gamedesign | Leveldesign",
    icon: faUnity,
    frameworks: [""],
  },
  {
    title: "Git + Github",
    icon: faGit,
    frameworks: [""],
  },
  {
    title: "Bash",
    icon: faGit,
    frameworks: [""],
  },
  {
    title: "Chrome Dev Tools",
    icon: faGit,
    frameworks: [""],
  },
  {
    title: "RESTful API",
    icon: faGit,
    frameworks: [""],
  },
  {
    title: "Node js",
    icon: faNodeJs,
    frameworks: [""],
  },
  {
    title: "Express js",
    icon: faNodeJs,
    body: "",
    frameworks: [""],
  },
  {
    title: "Redux",
    icon: faNodeJs,
    frameworks: [""],
  },
  {
    title: "Figma",
    icon: faFigma,
    frameworks: [""],
  },
  {
    title: "Adobe XD",
    icon: faFigma,
    body: "",
    frameworks: [""],
  },
  {
    title: "Wireframing & protoyping",
    icon: faFigma,
    body: "",
    frameworks: [""],
  },
  {
    title: "Docker",
    icon: faDocker,
    frameworks: [""],
  },
  {
    title: "Firebase",
    icon: faDocker,
    frameworks: [""],
  },
  {
    title: "Npm",
    icon: faNpm,
    frameworks: [""],
  },
  {
    title: "Framer Motion",
    icon: faNpm,
    frameworks: [""],
  },
  {
    title: "Notion",
    icon: faNpm,
    frameworks: [""],
  },
];

export const skillsHierarchyContent = [
  [
    {
      label: "Frontend Development",
      icon: <AiOutlineCode />,
      children: [
        {
          name: "HTML5",
          icon: <AiOutlineHtml5 />,
        },
        {
          name: "CSS3",
          icon: <DiCss3 />,
        },
        {
          name: "WordPress",
          icon: <FaWordpress />,
        },
        {
          name: "Elementor",
          icon: <FaElementor />,
        },
      ],
    },
  ],

  [
    {
      label: "Graphic & UI design",
      icon: <AiOutlineFormatPainter />,
      children: [
        {
          name: "Adobe InDesign",
          icon: <SiAdobeindesign />,
        },
        {
          name: "Affinity Designer",
          icon: <SiAffinitydesigner />,
        },
        {
          name: "Affinity Phone",
          icon: <SiAffinityphoto />,
        },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiAdobexd />, name: "Adobe XD" },
      ],
    },
  ],
];

export const skillsInProgressContent = [
  {
    title: "React Native",
    icon: "",
  },
  {
    title: "WebGL & Three.js",
    icon: "",
  },
  {
    title: "Java",
    icon: "",
  },
];

export const workExperienceContent = [
  {
    date: [
      {
        start: "Oct 2022",
        end: "current",
      },
    ],
    title: "Graphic Designer",
    description:
      "As a Graphic Designer at Lamasat Company, I am responsible for creating visually compelling and impactful designs across various platforms. My key tasks and responsibilities include:",
    company: "Lamasat Company",

    tasks: [
      "Designing Visiting Cards",
      "Print Media Design",
      "Social Media Graphics",
      "Branding and Identity",
      "Creative Conceptualization",
      "Project Management",
      "Keeping up with Industry Trends",
    ],
    links: [],
  },
];

export const educationContent = [
  {
    date: [
      {
        start: "Nov 2010",
        end: "Dec 2021",
      },
    ],
    title: "Bachelor of Applied Science - BASc, Geophysics",
    description: "Abschlussnote: 2,3",
    company: "Attended Damascus University",
    location: "Damascus, Syria",
  },
  {
    date: [
      {
        start: "Oct 2007",
        end: "Nov 2010",
      },
    ],
    title: "High School",
    description: "high-school diploma",
    company: "Kamal Obaid High School",
    location: "Sweida / Syrien",
  },
];

export const hobbiesContent = [
  {
    date: [
      {
        start: "09.2020",
        end: "heute",
      },
    ],
    title: "Ehrenamt als Koordinator eines Bildungsprogramms",
    description:
      "Ich beteilige mich maßgeblich am Bildungsinlandsprojekt „In- terkultureller Austausch für Menschen im besten Alter“. In dem Projekt werden ältere Menschen aus unterschiedlichen Kulturkreisen zusam- mengeführt, um sich miteinander auszutauschen und gemeinsame Projekte anzugehen.",
    company: "Ingenieure ohne Grenzen e. V.",
    location: "Dresden / Deutschland",
  },
];

export const socialLinks = [
  {
    title: "Wajdi Azzam",
    icon: <AiOutlineInstagram />,
    link: "https://www.instagram.com/wajdi_azzam92/",
  },
  {
    title: "Wajdi Azzam",
    icon: <AiOutlineBehanceSquare />,
    link: "https://www.behance.net/wajdiazzam?tracking_source=search_users|wajdi%20azzam",
  },
  {
    title: "Wajdi Azzam",
    icon: <AiOutlineDribbble />,
    link: "",
  },
  {
    title: "Wajdi Azzam",
    icon: <FaPinterestSquare />,
    link: "",
  },
  {
    title: "Wajdi Azzam",
    icon: <AiOutlineLinkedin />,
    link: "https://www.linkedin.com/in/wajdi-azzam-11a581225/",
  },
  {
    title: "wajdiazzam.com",
    icon: <AiOutlineGlobal />,
    link: "wajdiazzam.com",
  },
];

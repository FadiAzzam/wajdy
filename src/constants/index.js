import {
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineCode,
  AiOutlineHtml5,
  AiOutlineFormatPainter,
  AiOutlineBehanceSquare,
  AiOutlineDribbble,
} from "react-icons/ai";

import {
  FaFigma,
  FaWordpress,
  FaElementor,
  FaPinterestSquare,
} from "react-icons/fa";

import { DiCss3 } from "react-icons/di";
import {
  SiAdobexd,
  SiAdobeindesign,
  SiAffinitydesigner,
  SiAffinityphoto,
} from "react-icons/si";

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
          name: "Affinity Photo",
          icon: <SiAffinityphoto />,
        },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiAdobexd />, name: "Adobe XD" },
      ],
    },
  ],
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

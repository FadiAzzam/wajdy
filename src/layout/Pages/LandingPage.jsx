import React from "react";

import ProfileHero from "../Sections/ProfileHero";
import ProfileDescription from "../Sections/ProfileDescription";
import ProfileArticles from "../Sections/ProfileArticles";
import ProfileSkills from "../Sections/ProfileSkills";
import ProfileContact from "../Sections/ProfileContact";

import Tabs from "../../components/Tabs";

const data = [
  {
    id: "1",
    tabTitle: "Work",
    tabContent: <ProfileArticles />,
  },
  {
    id: "2",
    tabTitle: "Skills",
    tabContent: <ProfileSkills />,
  },
  {
    id: "3",
    tabTitle: "about",
    tabContent: <ProfileDescription />,
  },
  {
    id: "4",
    tabTitle: "contact",
    tabContent: <ProfileContact />,
  },
];
const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileHero />
      <div className="container">
        <Tabs data={data} />
      </div>
    </div>
  );
};

export default LandingPage;

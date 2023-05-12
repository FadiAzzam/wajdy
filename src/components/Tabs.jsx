import React, { useState } from "react";

export default function Tabs({ data }) {
  const [visibleTab, setVisibleTab] = useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      key={item.id}
      onClick={() => setVisibleTab(item.id)}
      className={`cursor-pointer p-3 hover:bg-gray-700/20 ${
        visibleTab === item.id
          ? "border-b-2 border-indigo-400 text-indigo-400  "
          : ""
      }`}
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = data.map((item) => (
    <p key={item.id} style={visibleTab === item.id ? {} : { display: "none" }}>
      {item.tabContent}
    </p>
  ));

  return (
    <div className="">
      <ul className="flex">{listTitles}</ul>
      <div className="tab-content">{listContent}</div>
    </div>
  );
}

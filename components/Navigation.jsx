import React from "react";
import "@/styles/navigation.css"
const Items = [
  "Live shows",
  "Streams",
  "Movies",
  "Plays",
  "Events",
  "Sports",
  "Activities",
];

const Navigation = () => {
  return (
    <div className="nav--container">
      {Items.map((item, index) => (
        <div className="nav--item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Navigation;

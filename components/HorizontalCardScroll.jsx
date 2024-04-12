import "@/styles/horizontal-card-scroll.css";

import React from "react";

const HorizontalCardScroll = ({ children }) => {
  return (
    <div className="recommend--container">
      <div className="recommend--list">
        {children}
      </div>
    </div>
  );
};

export default HorizontalCardScroll;

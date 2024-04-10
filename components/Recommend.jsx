import React from "react";
import RecommendCard from "./cards/RecommendCard";
import "@/styles/recommend.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import HorizontalCardScroll from "./HorizontalCardScroll";

const Recommend = () => {
  return (
    <div className="recommend--section">
      <div className="list--heading">
        Recommended Shows <ArrowLongRightIcon className="right-arrow--icon" />
      </div>

      <HorizontalCardScroll>
        <RecommendCard/>
        <RecommendCard/>
        <RecommendCard/>
        <RecommendCard/>
        <RecommendCard/>
        <RecommendCard/>
        <RecommendCard/>
      </HorizontalCardScroll>
      
    </div>
  );
};

export default Recommend;

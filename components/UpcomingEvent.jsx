import React from "react";
import RecommendCard from "./cards/RecommendCard";
import "@/styles/upcoming-event.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import HorizontalCardScroll from "./HorizontalCardScroll";
import EventCard from "./cards/EventCard";


const UpcomingEvent = () => {
  return (
    <div className="upcoming--section">
      <div className="list--heading">
        Recommended Shows <ArrowLongRightIcon className="right-arrow--icon" />
      </div>
    
    <div className="upcoming-grid--container">
        <div className="upcoming--list">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            
        </div>
    </div>
      
    </div>
  );
};

export default UpcomingEvent;

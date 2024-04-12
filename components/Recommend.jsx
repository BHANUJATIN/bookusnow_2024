<<<<<<< HEAD
"use client";

import { useState, useEffect } from "react";
import RecommendCard from "./cards/RecommendCard";
import "@/styles/recommend.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import makeRequest from "@/utils/makeRequest";

const Recommend = () => {
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch events
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await makeRequest(
          "https://gg-backend-assignment.azurewebsites.net/api/Events",
          {
            page: 1,
            type: "reco",
            code: process.env.NEXT_AUTH_CODE, // Add the code parameter here
          }
        );
        setRecommendedEvents(response.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div className="recommend--section">
      <div className="list--heading">
        <span className="flex-center">
          Recommended shows <ArrowLongRightIcon className="right-arrow--icon" />
        </span>
        <div className="see-all--btn">see all</div>
      </div>

      <div className="recommend--container">
        <div className="recommend--list">
          {recommendedEvents.length &&
            recommendedEvents.map((event, index) => {
              return <RecommendCard key={index} event={event} />;
            })}
        </div>
      </div>
=======
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
      
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
    </div>
  );
};

export default Recommend;

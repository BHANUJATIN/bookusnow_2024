"use client";

import { useState, useEffect, useRef } from "react";
import "@/styles/upcoming-event.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import EventCard from "./cards/EventCard";
import makeRequest from "@/utils/makeRequest";
import Loading from "./Loading";

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const upcomingListRef = useRef(null);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await makeRequest(
          "https://gg-backend-assignment.azurewebsites.net/api/Events",
          {
            page: currentPage,
            type: "upcoming",
            code: process.env.NEXT_AUTH_CODE,
          }
        );
        setEvents((prevEvents) => [...prevEvents, ...response.events]);
        setLoading(false);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentPage < totalPages) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [currentPage, totalPages]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="upcoming--section">
      <div className="list--heading">
        <span className="flex-center">
          Recommended shows <ArrowLongRightIcon className="right-arrow--icon" />
        </span>
        <div className="see-all--btn">see all</div>
      </div>

      <div className="upcoming-grid--container">
        <div className="upcoming--list" ref={upcomingListRef}>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
          <div ref={sentinelRef} style={{ height: "1px" }} />
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;

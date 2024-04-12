import React from "react";
import "@/styles/event-card.css";
import extractDriveUrl from "@/utils/extractDriverUrl";
import Location from "../Location";
import roundDistance from "@/utils/roundDistance";
import formatWeather from "@/utils/formatWeather";
import formatDate from "@/utils/formatDate";

const EventCard = ({event}) => {
  return (
    <div className="event--container">
      <div className="image--box">
        <img
          crossorigin="anonymous"
          src={extractDriveUrl(event.imgUrl)}
          alt="event image"
          className="event--img"
        />
        <div className="upcoming-event--date">{formatDate(event.date)}</div>
      </div>
      <div className="content--box">
        {/* content */}
        <div className="event--name">{event.eventName}</div>
        <div className="event--content">
          <Location
            iconClassName="event--location--icon"
            containerClassName="event--location"
            value={event.cityName}
          />
          <div className="event--weather--distance--box">
            <div className="weather--box">{formatWeather(event.weather)}</div> 
            <div>{roundDistance(event.distanceKm)} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

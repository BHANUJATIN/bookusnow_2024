import React from "react";
import "@/styles/event-card.css";
import extractDriveUrl from "@/utils/extractDriverUrl";
import Location from "../Location";
import roundDistance from "@/utils/roundDistance";
import formatWeather from "@/utils/formatWeather";
<<<<<<< HEAD
import formatDate from "@/utils/formatDate";

const EventCard = ({event}) => {
=======

const EventCard = () => {
  const event = {
    eventName: "Winter Wonderland Fair",
    cityName: "West Douglas",
    date: "2024-03-24T00:00:00.000Z",
    weather: "Snowy 26C",
    distanceKm: "42.61226847222415",
    imgUrl:
      "https://drive.google.com/file/d/1eCTPLcYF_u8mcAlmZ2-SN2_j-aiWA_7y/view",
  };

>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
  return (
    <div className="event--container">
      <div className="image--box">
        <img
          crossorigin="anonymous"
          src={extractDriveUrl(event.imgUrl)}
          alt="event image"
          className="event--img"
        />
<<<<<<< HEAD
        <div className="upcoming-event--date">{formatDate(event.date)}</div>
      </div>
      <div className="content--box">
        {/* content */}
        <div className="event--name">{event.eventName}</div>
=======
      </div>
      <div className="content--box">
        {/* content */}
        <div className="event--name">After note nearly</div>
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
        <div className="event--content">
          <Location
            iconClassName="event--location--icon"
            containerClassName="event--location"
<<<<<<< HEAD
            value={event.cityName}
          />
          <div className="event--weather--distance--box">
            <div className="weather--box">{formatWeather(event.weather)}</div> 
=======
          />
          <div className="event--weather--distance--box">
            <div className="weather--box">{formatWeather(event.weather)}</div>
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
            <div>{roundDistance(event.distanceKm)} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

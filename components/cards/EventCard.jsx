import React from "react";
import "@/styles/event-card.css";
import extractDriveUrl from "@/utils/extractDriverUrl";
import Location from "../Location";
import roundDistance from "@/utils/roundDistance";
import formatWeather from "@/utils/formatWeather";

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

  return (
    <div className="event--container">
      <div className="image--box">
        <img
          crossorigin="anonymous"
          src={extractDriveUrl(event.imgUrl)}
          alt="event image"
          className="event--img"
        />
      </div>
      <div className="content--box">
        {/* content */}
        <div className="event--name">After note nearly</div>
        <div className="event--content">
          <Location
            iconClassName="event--location--icon"
            containerClassName="event--location"
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

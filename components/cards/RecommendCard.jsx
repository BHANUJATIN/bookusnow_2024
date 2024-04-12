import React from "react";
import "@/styles/recommend-card.css";
import Location from "../Location";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import extractDriveUrl from "@/utils/extractDriverUrl";
import roundDistance from "@/utils/roundDistance";
import formatWeather from "@/utils/formatWeather";

<<<<<<< HEAD
const RecommendCard = ({event}) => {
  
=======
const RecommendCard = () => {
  const event = {
    eventName: "Winter Wonderland Fair",
    cityName: "West Douglas",
    date: "2024-03-24T00:00:00.000Z",
    weather: "Snowy 26C",
    distanceKm: "42.641226847222415",
    imgUrl:
      "https://drive.google.com/file/d/12_gTNeR25K3JALpgc81dwISb9YYn4GAt/preview",
  };
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
  return (
    <div className="recommend-card--container">
      <img
        crossorigin="anonymous"
        src={extractDriveUrl(event.imgUrl)}
        alt="event image"
        className="recommend-card--img"
      />
      <div className="recommend--event--details">
        <div className="event--details--box">
          <div className="event--name">Make Agree</div>
          <div className="event--date">{formatDate(event.date)}</div>
        </div>
        <div className="event--details--box">
          <Location
            containerClassName="event--location"
            iconClassName="event--location--icon"
<<<<<<< HEAD
            value={event.cityName}
=======
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
          />
          <div className="weather--distance--box">
            <div className="weather--box">{formatWeather(event.weather)}</div>
            <div>{roundDistance(event.distanceKm)} km</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;

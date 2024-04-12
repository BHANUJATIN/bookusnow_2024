import "@/styles/location.css";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";

const Location = ({
  containerClassName,
  iconClassName,
  value = "Mumbai, India",
  arrowFlag = false,
}) => {
  const containerClass = "location--container " + containerClassName;
  const iconClass = "icon location--icon " + iconClassName;
  return (
    <div className={containerClass}>
      <MapPinIcon className={iconClass} />
      {value}
      {arrowFlag && <ChevronRightIcon className={iconClass} />}
    </div>
  );
};

export default Location;

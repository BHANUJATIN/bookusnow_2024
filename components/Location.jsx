<<<<<<< HEAD
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
=======
import "@/styles/location.css"
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Location = ({containerClassName, iconClassName, value}) => {

>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
  const containerClass = "location--container " + containerClassName;
  const iconClass = "icon location--icon " + iconClassName;
  return (
    <div className={containerClass}>
<<<<<<< HEAD
      <MapPinIcon className={iconClass} />
      {value}
      {arrowFlag && <ChevronRightIcon className={iconClass} />}
    </div>
  );
};
=======
        <MapPinIcon className={iconClass}/>
        West Douglas
        {/* <ChevronRightIcon className='icon location--icon'/> */}
    </div>
  )
}
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70

export default Location;

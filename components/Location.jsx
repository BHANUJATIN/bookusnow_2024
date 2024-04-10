import "@/styles/location.css"
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Location = ({containerClassName, iconClassName, value}) => {

  const containerClass = "location--container " + containerClassName;
  const iconClass = "icon location--icon " + iconClassName;
  return (
    <div className={containerClass}>
        <MapPinIcon className={iconClass}/>
        West Douglas
        {/* <ChevronRightIcon className='icon location--icon'/> */}
    </div>
  )
}

export default Location
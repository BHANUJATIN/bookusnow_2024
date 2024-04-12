"use client";
import React from "react";
import { useScreen } from "usehooks-ts";
import Image from "next/image";
import BannerImage from "@/public/images/Banner.svg";
import '@/styles/banner.css'

const Banner = () => {
  const screen = useScreen();

  return (
    <div className="banner--container">
      {console.log(screen)}
      {/* <div>{screen}</div> */}
      <Image
        className="banner--img"
        src={BannerImage}
        alt="Banner Image"
        width={screen.availWidth}
        
      />

      <div className="banner--content">
        <div className="banner--heading">
          <h1>Discover Exciting Events Happening
          Near You - Stay Tuned for Updates!</h1>
        </div>

        <div className="banner--para">
<<<<<<< HEAD
          <span className="hide-at-mobile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis, eius magni iusto a esse dorem
          </span>
          <span className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis, eius magni iusto a esse
          </span>
=======
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis, eius magni iusto a esse, sequi ipsa nemo sint amet exercitationem, itaque dolore! Nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, officia.
>>>>>>> 3d2b0cd0c4ce8e828e058f6050b4ea32ce112a70
        </div>
      </div>
    </div>
  );
};

export default Banner;

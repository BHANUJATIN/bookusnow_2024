import React from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon, UserIcon } from "@heroicons/react/24/solid";
import "@/styles/header.css";

const Header = () => {
  return (
    <div className="header--container">
      <div className="left">
        <span className="brand--logo">BookUsNow</span>
      </div>

      <div className="middle">
        <button className="category--btn">
          <Bars3Icon className="icon category--icon" />
          Categories
        </button>
        <div className="search--box">
          <input
            className="search--input"
            type="text"
            placeholder="DJI Phantom"
          />
          <span className="icon--containor">
            <MagnifyingGlassIcon className="icon header--icon" />
          </span>
        </div>
      </div>

      <div className="right">
        <button className="fav--btn">
          <span className="icon--containor">
            <HeartIcon className="icon header--icon" />
          </span>
          Favorites
        </button>
        <button className="sign--btn">Sign in</button>
        <div className="visible-at-mobile right--features">
          <span className="header--icon icon">
            <MagnifyingGlassIcon />
          </span>
          <span className="header--icon icon">
            <HeartIcon />
          </span>
          <span className="header--icon icon">
            <UserIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

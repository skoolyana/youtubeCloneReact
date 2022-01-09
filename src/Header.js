import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon></MenuIcon>

        <Link to="/">
          <img
            className="header_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m72yrmNxmX5jdWY_sO0ufBQatb8KJx1_UQ&usqp=CAU"
            alt=""
          ></img>
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        ></input>

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputBtn"></SearchIcon>
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon"></VideoCallIcon>
        <AppsIcon className="header_icon"></AppsIcon>
        <NotificationsIcon className="header_icon"></NotificationsIcon>
        <Avatar
          alt="Sunil Kulyana"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g0IIQXN2z9T6t1q1CUcxq9pqPkA8re9_Qw&usqp=CAU"
        ></Avatar>
      </div>
    </div>
  );
}

export default Header;

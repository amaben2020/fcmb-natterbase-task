import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneSharpIcon from "@material-ui/icons/NotificationsNoneSharp";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        {" "}
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.fcmb.com/themes/fcmb/logo.png"
            alt="fcmb logo"
          />{" "}
        </Link>{" "}
      </div>{" "}
      <p className="txt1"> FCMB Mobile Banking. </p>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <NotificationsNoneSharpIcon className="header__icon" />
        <Avatar
          alt="Natterbase"
          src="https://www.fcmb.com/themes/fcmb/logo.png"
        />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

function VideoCard({ title, timestamp, logoImage }) {
  return (
    <div className="card">
      <div className="card-content">
        <img className="videoCard__thumbnail" src="{image}" alt="" />
        <div className="videoCard__info">
          <div className="videoCard__text">
            <h4>{title}</h4>

            <p>{timestamp}</p>
            <div className="header__logo">
              <Avatar className="videoCard__avatar" src={logoImage} />
            </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default VideoCard;

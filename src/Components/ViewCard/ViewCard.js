import React from "react";
import Avatar from "@material-ui/core/Avatar";

{
  /** Destructuring the data */
}
function ViewCard(image, title, channel, views, timestamp, channelImage) {
  return (
    <div>
      <img src="{image}" alt="" />
      <div className="video__info">
        <Avatar className="videoCard__avatar" alt={channel} src="" />
        <div className="video__text">
          <h4> {title} </h4> <p> {channel} </p>{" "}
          <p>
            {" "}
            {views} + {timestamp}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ViewCard;

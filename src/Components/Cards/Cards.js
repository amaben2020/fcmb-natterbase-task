import React from "react";
import "./Cards.css";
import VideoCard from "../VideoCard/VideoCard";

function RecommendedVideos() {
    return ( <
        div className = "recommendedVideos" >
        <
        div className = "recommendedVideos__videos" >
        <
        VideoCard title = "Update Logo on all pages"
        timestamp = "Due Date Aug 8"
        logoImage = "https://www.fcmb.com/themes/fcmb/logo.png" /
        > { " " } <
        VideoCard title = "Update Logo on all pages"
        timestamp = "Due Date Aug 8"
        logoImage = "https://www.fcmb.com/themes/fcmb/logo.png" /
        > { " " } <
        VideoCard title = "Update Logo on all pages"
        timestamp = "Due Date Aug 8"
        logoImage = "https://www.fcmb.com/themes/fcmb/logo.png" /
        > { " " } <
        /div>{" "} <
        /div>
    );
}

export default RecommendedVideos;
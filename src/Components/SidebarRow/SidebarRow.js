import React from "react";

import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    /** if homepage is displayed, let the homepage in the sidebar be permanently selected */
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title"> {title} </h2>{" "}
    </div>
  );
}

export default SidebarRow;

//** Making the homepage selected by default using prop **/

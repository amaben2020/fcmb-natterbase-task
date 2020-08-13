import React from "react";
import "./Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import AccountBalanceWalletSharpIcon from "@material-ui/icons/AccountBalanceWalletSharp";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";

function Sidebar() {
  /** importing all the sidebar icons from material ui */
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={AccountBalanceWalletSharpIcon} title="Banking" />
      <SidebarRow Icon={AccountBalanceSharpIcon} title="Investment" />

      <SidebarRow Icon={AccountBalanceWalletSharpIcon} title="Insurance" />
      <SidebarRow Icon={AccountBalanceSharpIcon} title="Trust" />
    </div>
  );
}

export default Sidebar;

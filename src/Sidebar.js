import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={NoteAddIcon} title="Course Registration" />
            <SidebarRow Icon={AssignmentIcon} title="Syllabus" />
            <SidebarRow Icon={FontDownloadIcon} title="Grade" />
            <SidebarRow Icon={AttachMoneyIcon} title="Tuition Fee Status" />
            <SidebarRow Icon={ContactMailIcon} title="Student Forms" />
            <SidebarRow Icon={SportsBasketballIcon} title="School Activity" />
            <hr />
        </div>
    );
}

export default Sidebar;

import { useState } from "react";
import "./SideBar.css";
import { TbLayoutGridFilled } from "react-icons/tb";
import { MdOutlineExplore, MdLogout } from "react-icons/md";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { RiSettings2Line } from "react-icons/ri";
import person from "../../assets/334A8787.png";
import { HiPlusCircle } from "react-icons/hi2";
import img1 from "../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import img2 from "../../assets/ian-dooley-d1UPkiFd04A-unsplash.jpg";
import img3 from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg";

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState("explore");
  const darkMode = true;

  const handleClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="sidebar">
      <div className="sidebarDesign">
      <img
        src={person}
        height={60}
        width={60}
        className="imgStyle"
        alt="Profile"
      />
      <ul>
        <li onClick={() => handleClick("grid")}>
          <TbLayoutGridFilled
            className={`icon ${activeIcon === "grid" ? "active" : ""}`}
          />
        </li>
        <li onClick={() => handleClick("explore")}>
          <MdOutlineExplore
            className={`icon ${activeIcon === "explore" ? "active" : ""}`}
          />
        </li>
        <li onClick={() => handleClick("bookmark")}>
          <PiBookmarkSimpleBold
            className={`icon ${activeIcon === "bookmark" ? "active" : ""}`}
          />
        </li>
        <li onClick={() => handleClick("notifications")}>
          <IoMdNotificationsOutline
            className={`icon ${activeIcon === "notifications" ? "active" : ""}`}
          />
        </li>
        <li onClick={() => handleClick("play")}>
          <IoPlayOutline
            className={`icon ${activeIcon === "play" ? "active" : ""}`}
          />
        </li>
        <li onClick={() => handleClick("settings")}>
          <RiSettings2Line
            className={`icon ${activeIcon === "settings" ? "active" : ""}`}
          />
        </li>
      </ul>
      <div className="friendList">
        <div className="friend">
          <img src={img1} className="imgStyleFriend" alt="Profile1" />
          <img src={img2} className="imgStyleFriend" alt="Profile2" />
          <img src={img3} className="imgStyleFriend" alt="Profile3" />
        </div>
        <HiPlusCircle className="iconPlus" />
      </div>
      <div className="SideBarBottom">
        <label className="switch">
          <input type="checkbox" checked={darkMode} />
          <span className="slider round"></span>
        </label>
        <MdLogout className="logoutIcon" />
      </div>
      </div>
    </div>
  );
};

export default SideBar;

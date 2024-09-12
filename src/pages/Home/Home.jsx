import RightSide from "../../components/RightSide/RightSide";
import SideBar from "../../components/SideBar/SideBar";
import { IoIosSearch } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import "./Home.css";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import { moviesCategory, moviesData, serviceChannel } from "../../data/data";

const Home = () => {
  return (
    <div className="MainHome">
      <SideBar className="sideItem" />
      <div className="MainDesign">
        <div className="TopMain">
          <h2>Discover your favorites.</h2>
          <div className="TopMain-right">
            <div className="search-container">
              <IoIosSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search here..."
                className="search-input"
              />
            </div>
            <div className="settingBox">
              <LuSettings2 className="settingIcon" />
            </div>
          </div>
        </div>
        <div className="MainCenter">
          <div className="MainCenterPart1">
            <div className="MainCenterPart1Container">
              <span>#1 in series</span>
              <RiFireLine className="FireIcon" />
            </div>
            <div className="MainCenterPart1Bottom">
              <h3>Squid Game</h3>
              <h4>2021</h4>
            </div>
          </div>
          <div className="MainCenterPart2">
            <div className="MainCenterPart2Container">
              <FaStar className="starIcon" />
              <h3>4.2</h3>
            </div>
            <div className="MainCenterPart1Bottom">
              <h3>Dune</h3>
              <h4>2021</h4>
            </div>
          </div>
        </div>
        <div className="MainBottom">
          <div className="MainBottomPart1">
            <div className="MainBottomPart1Top">
              <div className="MainBottomPart1Top1">
                <span className="MainBottomPart1TopText1">
                  Continue watching
                </span>
                <span className="MainBottomPart1TopText2">
                  (3 Movies Remaining)
                </span>
              </div>
              <button className="MainBottomPart1TopButton">See more</button>
            </div>
            <div className="MainBottomPart1Center">
              {moviesData.map((movie) => (
                <MoviesCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
          <div className="MainBottomPart2"></div>
        </div>
      </div>
      <div className="RightSideItem">
        <div className="RightSideChannel">
          <h4>Media Service</h4>
          {serviceChannel.map((channel) => (
            <RightSide channel={channel} key={channel.id} />
          ))}
        </div>
        <h4>Genre</h4>
        <div className="RightSideCategory">
          {moviesCategory.map((category) => (
            <span
              key={category.id}
              className={category.name === "Thriller" ? "ThrillerClass" : ""}
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

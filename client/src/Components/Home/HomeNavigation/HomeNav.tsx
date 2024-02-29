import React from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const HomeNav = () => {
  return (
    <div>
      <ul>
        <li>
            
          <Link to="/home">
            <HomeIcon /> Home
          </Link>
        </li>
        <li>
          <Link to="/create">
            <AddCircleOutlineIcon />
            Create
          </Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        {/* <li><a href="#about">About</a></li> */}
      </ul>
    </div>
  );
};

export default HomeNav;

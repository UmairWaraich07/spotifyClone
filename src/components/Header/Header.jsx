import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { getDataLayerValue } from "../../DataLayer";

const Header = () => {
  const [{ user }, dispatch] = getDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon className="header__left-icon" />
        <input type="text" placeholder="Search for artists, music & podcasts" />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { getDataLayerValue } from "../../DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = getDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src={discover_weekly?.images[0]?.url}
          alt="Discover Weekly"
          className="body__info-img"
        />

        <div className="body__info-content">
          <strong>Playlist</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon fontSize="large" className="body__icons-play" />
          <FavoriteIcon className="body__icons-favorite" />
          <MoreHorizIcon className="body__icons-more" />
        </div>

        {/* {list of songs} */}
        {discover_weekly?.tracks?.items?.map((item) => (
          <SongRow key={item?.track?.id} track={item?.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;

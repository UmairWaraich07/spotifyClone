import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { getDataLayerValue } from "../../DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = getDataLayerValue();
  return (
    <div className="sidebar">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify"
        className="sidebar__logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist?.id} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;

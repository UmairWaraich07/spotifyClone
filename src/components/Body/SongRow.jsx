import React from "react";
import "./SongRow.css";

const SongRow = ({ track }) => {
  return (
    <div className="songrow">
      <img
        src={track?.album?.images[0]?.url}
        alt=""
        className="songrow__album"
      />
      <div className="songrow__info">
        <h4>{track.name}</h4>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {/* {track.album.name} */}
        </p>
      </div>
    </div>
  );
};

export default SongRow;

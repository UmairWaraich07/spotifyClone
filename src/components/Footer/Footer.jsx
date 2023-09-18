import React, { useEffect } from "react";
import "./Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";
import { getDataLayerValue } from "../../DataLayer";

const Footer = () => {
  const [{ user, spotify }, dispatch] = getDataLayerValue();
  // console.log(spotify);

  return (
    <div className="footer">
      <div className="footer__left">
        <img src={user?.images[0]?.url} alt="" className="footer__left-img" />
        <div className="footer__left-songinfo">
          <h4>We Rollin</h4>
          <p>Shubh</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__center-green " />
        <SkipPreviousIcon className="footer__center-icon" />
        <PlayCircleFilledWhiteIcon
          fontSize="large"
          className="footer__center-icon"
        />
        <SkipNextIcon className="footer__center-icon" />
        <RepeatIcon className="footer__center-green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon className="footer__right-icon" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="footer__right-icon" />
          </Grid>
          <Grid item xs>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

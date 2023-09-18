const clientID = "e7959c2d07014eb8855aa8d02b5df064";
const redirectUri = "http://localhost:5173/";

export const authorizeEndpoint = "https://accounts.spotify.com/authorize";

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      // console.log(parts);
      // console.log(initial);
      return initial;
    }, {});
};

export const loginUrl = `${authorizeEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

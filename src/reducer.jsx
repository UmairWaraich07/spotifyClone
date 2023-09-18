export const initialState = {
  user: null,
  spotify: null,
  playing: false,
  playlists: [],
  item: null,
  token: null,
  // "BQBTrAeUhOKbCfI39PbWxexTOQepVco2ZKiaDAmLy24goGo5qpoG_ZhVHrn1g1ktFB2s5BFqo63uN4FNb3FjMufO61Fn21zh3070JzqROVKvt2nzMi6iiw2HY6MZNw1ahISG2ubM_zIbAE3EjHm1355B8C_E0DyWizUuZKfRR4WZc6RtIe7pknr3vT3fWY6AWiYv",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlist,
      };
    case "SET_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    // case "SET_PLAYING":
    //   return {
    //     ...state,
    //     playing: action.playing,
    //   };
    // case "SET_ITEM":
    //   return {
    //     ...state,
    //     item: action.item,
    //   };
    default:
      return state;
  }
};
export default reducer;

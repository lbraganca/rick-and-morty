import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    masonry: {
      display: "flex",
      marginLeft: -30,
      width: "auto",
    },
    masonryColumn: {
      paddingLeft: 30,
      backgroundClip: "padding-box",
    },
    masonryItem: {
      marginBottom: 30,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  };
});

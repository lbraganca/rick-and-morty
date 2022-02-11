import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  };
});

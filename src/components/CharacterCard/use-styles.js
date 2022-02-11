import { makeStyles } from "@material-ui/core";
import { green, red, grey } from "@material-ui/core/colors";

export default makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "space-between",
    },
    value: {
      fontSize: 16
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    title: {
      fontSize: 14,
    },
    status: {
      color: ({ status }) => {
        if (status === "Alive") {
          return green[700];
        }
        if (status === "Dead") {
          return red[700];
        }
        return grey[700];
      },
      fontWeight: "bold",
    },
    media: {
      width: 126,
    },
  };
});

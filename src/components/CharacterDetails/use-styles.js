import { makeStyles } from "@material-ui/core";
import { green, red, grey } from "@material-ui/core/colors";

export default makeStyles((theme) => {
  return {
    root: {},
    value: {
      fontSize: 16,
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
      height: 300,
      width: 300,
      float: "right",
    },
  };
});

import { createTheme } from "@material-ui/core";
import { lightBlue, yellow } from "@material-ui/core/colors";

export default createTheme({
  palette: {
    primary: yellow,
    secondary: lightBlue,
  },
  typography: {
    fontFamily: "Lato",
  },
});

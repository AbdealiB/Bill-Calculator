import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F4A261",
    },
    secondary: {
      main: "#F00",
    },
  },
  typography: {
    fontFamily: "Calibri",
  },
  shape: {
    borderRadius: 20,
  },
  overrides: {
    MuiButtonBase: {
      root: {
        margin: "10px",
      },
    },
    MuiTextField: {
      root: {
        margin: "10px",
      },
    },
    MuiButton: {
      root: {
        margin: "10px",
        textTransform: "none",
        fontSize: "20px",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      color: "primary",
    },
    
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
});

export default Theme;

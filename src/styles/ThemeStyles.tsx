import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#6c757d",
    },
    success: {
      main: "#28a745",
    },
    error: {
      main: "#dc3545",
    },
    warning: {
      main: "#ffc107",
    },
    info: {
      main: "#17a2b8",
    },
    background: {
      default: "#f8f9fa",
      paper: "#fff",
    },
    text: {
      primary: "#343a40",
      secondary: "#6c757d",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;

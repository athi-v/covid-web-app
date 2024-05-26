import { createTheme } from "@mui/material/styles";
import '../styles/App.css'

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
    fontFamily: "'Manrope', sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: '52px',
      fontFamily: "'Darker Grotesque', sans-serif"
    },
    h2: {
      fontWeight: 600,
      fontSize: '20px',
      fontFamily: "'Darker Grotesque', sans-serif"
    },
    h3: {
      fontWeight: 500,
      fontSize: '15px',
      fontFamily: "'Darker Grotesque', sans-serif"
    },
    h4: {
      fontWeight: 700,
      fontSize: '14px',
      fontFamily: "'Darker Grotesque', sans-serif"
    },
    h5: {
      fontWeight: 300,
      fontSize: '30px',
      fontFamily: "'Darker Grotesque', sans-serif"
    },
    h6: {
      fontWeight: 200,
      fontSize: '30px',
      fontFamily: "'Darker Grotesque', sans-serif"
    },

  },

  components: {
    MuiInputBase: {
        styleOverrides: {
            root: {
                borderRadius: '0px !important',
            },
        },
    },

    MuiButton: { 
        styleOverrides: {
            root: {
                fontSize: '14px',
                borderRadius: '20', 
                fontWeight: '600',
                height: "53px", 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                color: '#f5f5f5',
            }
        }
    }

},
});

export default theme;

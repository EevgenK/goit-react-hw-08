import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#03063b", light: "rgb(6, 6, 248)" },

    secondary: {
      main: "#d5f5f4",
    },
  },
});

const CustomMuiColors = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default CustomMuiColors;

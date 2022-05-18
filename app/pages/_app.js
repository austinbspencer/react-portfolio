import AppTheme from "@/styles/Theme";
import { CssBaseline } from "@mui/material";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppTheme>
      <CssBaseline />
      <Component {...pageProps} />
    </AppTheme>
  );
}

export default MyApp;

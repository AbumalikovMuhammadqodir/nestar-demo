import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { light } from "../pages/ scss/MaterialTheme/index";
// Update the import path below to the correct relative path if needed
// Update the import path below to the correct relative path if needed

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignoreAdd commentMore actions
  const [theme, setTheme] = useState(createTheme(light));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

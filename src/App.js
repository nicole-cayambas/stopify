import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Theme } from "./config/Theme";
import AppContent from "./layouts/AppContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppToolbar from "./layouts/AppToolbar";
import Navigation from "./layouts/Navigation";
import { Stack, CssBaseline } from "@mui/material";

const theme = createTheme(Theme("light"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (data) => {
        console.log("ERROR", data.error?.message || "Something went wrong");
        if (data.error?.status == 401) {
          // refreshAccess();
        }
      }
    }
  }
});

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <AppToolbar theme={theme} handleDrawerToggle={handleDrawerToggle} />
          <Stack direction={"row"}>
            <Navigation
              theme={theme}
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
            <AppContent />
          </Stack>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

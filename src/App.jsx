import AppLoader from "./hoc/app-loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallsPage from "./components/UI/pages/calls";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <AppLoader>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <BrowserRouter>
            <Routes>
              <Route index path="calls" element={<CallsPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppLoader>
    </div>
  );
}

export default App;

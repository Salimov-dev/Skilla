import AppLoader from "./hoc/app-loader";
// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
// components
import CallsPage from "./components/UI/pages/calls";
// other
import { theme } from "./theme";
import ScrollToTop from "./utils/scroll-to-top";

function App() {
  return (
    <div className="App">
      <AppLoader>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route index path="/" element={<CallsPage />} />
              <Route index path="calls" element={<CallsPage />} />
              <Route index path="/orders" element={<CallsPage />} />
              <Route index path="/messages" element={<CallsPage />} />
              <Route index path="/partner" element={<CallsPage />} />
              <Route index path="/documents" element={<CallsPage />} />
              <Route index path="/executors" element={<CallsPage />} />
              <Route index path="/reports" element={<CallsPage />} />
              <Route index path="/knowledgebase" element={<CallsPage />} />
              <Route index path="/settings" element={<CallsPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppLoader>
    </div>
  );
}

export default App;

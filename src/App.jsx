import AppLoader from "./hoc/app-loader";
// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
// components
import CallsPage from "./components/UI/pages/calls";
import EmptyPage from "./components/UI/pages/empty";
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
              <Route index path="/" element={<EmptyPage />} />
              <Route index path="calls" element={<CallsPage />} />
              <Route index path="/orders" element={<EmptyPage />} />
              <Route index path="/messages" element={<EmptyPage />} />
              <Route index path="/partner" element={<EmptyPage />} />
              <Route index path="/documents" element={<EmptyPage />} />
              <Route index path="/executors" element={<EmptyPage />} />
              <Route index path="/reports" element={<EmptyPage />} />
              <Route index path="/knowledgebase" element={<EmptyPage />} />
              <Route index path="/settings" element={<EmptyPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppLoader>
    </div>
  );
}

export default App;

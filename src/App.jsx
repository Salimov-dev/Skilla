import AppLoader from "./hoc/app-loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallsPage from "./components/UI/pages/calls";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import EmptyPage from "./components/UI/pages/empty";

function App() {
  return (
    <div className="App">
      <AppLoader>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <BrowserRouter>
            <Routes>
              {/* <Route index path="/" element={<CallsPage />} /> */}
              <Route index path="/" element={<EmptyPage />} />
              <Route index path="calls" element={<CallsPage />} />
              <Route index path="/orders" element={<EmptyPage />} />
              <Route index path="/messages" element={<EmptyPage />} />
              <Route index path="/partner" element={<EmptyPage />} />
              <Route index path="/documents" element={<EmptyPage />} />
              <Route index path="/executors" element={<EmptyPage />} />
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

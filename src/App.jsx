import AppLoader from "./hoc/app-loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallsPage from "./components/UI/pages/calls";

function App() {
  return (
    <div className="App">
      <AppLoader>
        <BrowserRouter>
          <Routes>
            <Route index path="calls" element={<CallsPage />} />
          </Routes>
        </BrowserRouter>
      </AppLoader>
    </div>
  );
}

export default App;

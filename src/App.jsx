
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
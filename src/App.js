import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpinnerAtom from "./components/atoms/SpinnerAtom.js";

const HomePage = React.lazy(() => import("./components/pages/HomePage.js"));
const CodingPage = React.lazy(() => import("./components/pages/CodingPage.js"));
const MusicPage = React.lazy(() => import("./components/pages/MusicPage.js"));
const TravelPage = React.lazy(() => import("./components/pages/TravelPage.js"));

function App() {
  return (
    <Suspense fallback={<SpinnerAtom />}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coding" element={<CodingPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/travel" element={<TravelPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

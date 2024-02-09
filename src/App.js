import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SpinnerAtom from "./components/atoms/SpinnerAtom.jsx";
const HomePage = React.lazy(() => import("./components/pages/HomePage.jsx"));
const ProjectPage = React.lazy(() =>
  import("./components/pages/ProjectPage.jsx")
);
const MusicPage = React.lazy(() => import("./components/pages/MusicPage.jsx"));
const TravelPage = React.lazy(() =>
  import("./components/pages/TravelPage.jsx")
);
const professions = ["Software Engineering", "Data Science"];

function App() {
  return (
    <Suspense fallback={<SpinnerAtom />}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                headerImageSrc="public\main-logo.png"
                headerImageAlt="logo"
                homePath="/"
                projectPath="/projects"
                musicPath="/music"
                travelPath="/travel"
                fullName="Sebastian Horon"
                professions={professions}
              />
            }
          />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/travel" element={<TravelPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

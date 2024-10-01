import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazily } from 'react-lazily';
import "./App.css"

import { SpinnerAtom } from "./components/atoms/SpinnerAtom.tsx";
import { ThemeWrapper } from "./components/ThemeWrapper.tsx";

const { HomePage } = lazily(() => import("./components/pages/HomePage.tsx"));
// const { ProjectPage } = lazily(() => import("./components/pages/ProjectPage.jsx"));
// const { MusicPage } = lazily(() => import("./components/pages/MusicPage.js"));
// const { TravelPage } = lazily(() => import("./components/pages/TravelPage.jsx"));

const professions = ["Software Engineering", "Data Science"];

function App() {
  const [open] = React.useReducer(() => true, false);

  return (
    <>
      {open ? (
        <Suspense fallback={<SpinnerAtom />}>
        </Suspense>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ThemeWrapper>
                  <HomePage
                    headerImageSrc="public\main-logo.png"
                    headerImageAlt="logo"
                    homePath="/"
                    projectPath="/projects"
                    musicPath="/music"
                    travelPath="/travel"
                    subHeaderImageSrc=""
                    subHeaderImageAlt=""
                    fullName="Sebastian Horon"
                    professions={professions}
                  />
                </ThemeWrapper>
              }
            />
            {/* <Route path="/projects" element={<ProjectPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/travel" element={<TravelPage />} /> */}
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App
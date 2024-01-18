import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderOrganism from "./components/organisms/HeaderOrganism";

function App() {
  const [brand] = useState("Student Portal");
  return (
    <Router>
      <div className="container">
        <HeaderOrganism
          brand={brand}
          homePath="/"
          registrationPath="/register"
          aboutPath="/about"
        />
      </div>
    </Router>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";

import "./app.css";

import { ThemeProvider } from "./context/ThemeContext";
import { SpinnerAtom } from "./components/atoms/SpinnerAtom";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider fallbackElement={<SpinnerAtom />} router={Router} />
    </ThemeProvider>
  );
}

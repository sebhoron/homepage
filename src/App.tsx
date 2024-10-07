import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css"

import { ThemeProvider } from "./context/ThemeContext";
import { SpinnerAtom } from "./components/atoms/SpinnerAtom";
import { Header } from "./components/organisms/Header/HeaderOrganism";
import { HomePage } from "./components/pages/HomePage/HomePage";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
      <Route path="portfolio" lazy={() => import("./components/pages/PortfolioPage")} />
    </Route>
  )
);

export default function App() {
  return (
    <div className='app'>
      <Header />
      <ThemeProvider>
        <RouterProvider
          fallbackElement={<SpinnerAtom />}
          router={router}
        />
      </ThemeProvider>
    </div>
  )
}

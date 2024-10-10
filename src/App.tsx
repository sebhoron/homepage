import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css"

import { ThemeProvider } from "./context/ThemeContext";
import { SpinnerAtom } from "./components/atoms/SpinnerAtom";
import { Header } from "./components/organisms/Header/HeaderOrganism";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { ErrorBoundary } from "./utils/ErrorBoundary";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<NavbarWrapper />} errorElement={<ErrorBoundary />}>
      <Route index element={<HomePage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
    </Route>
  )
);

function NavbarWrapper() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider
        fallbackElement={<SpinnerAtom />}
        router={router}
      />
    </ThemeProvider>
  )
}

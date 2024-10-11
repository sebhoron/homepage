import {
  createHashRouter,
  createRoutesFromElements,
  isRouteErrorResponse,
  Outlet,
  Route,
  useRouteError,
} from "react-router-dom";
import { HomePage } from "../components/pages/HomePage/HomePage";
import { PortfolioPage } from "../components/pages/PortfolioPage";
import { Header } from "../components/organisms/Header/Header";

export const Router = createHashRouter(
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
  );
}

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>Something went wrong</div>;
}

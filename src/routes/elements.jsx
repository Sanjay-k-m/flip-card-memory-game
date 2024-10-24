import { lazy, Suspense } from "react";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Component {...props} />
    </Suspense>
  );

export const GamePage = Loadable(lazy(() => import("../pages/GamePage")));
export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));

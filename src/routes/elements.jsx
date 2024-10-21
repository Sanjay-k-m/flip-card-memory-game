import { lazy, Suspense } from "react";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Component {...props} />
    </Suspense>
  );

export const TestPage = Loadable(lazy(() => import("../pages/Test")));
export const HomePage = Loadable(lazy(() => import("../pages/Home")));

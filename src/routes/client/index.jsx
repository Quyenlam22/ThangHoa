import { lazy } from "react";
import withSuspense from "../../utils/withSuspense";

// import LayoutClient from "../../layouts/LayoutClient";

const Home = lazy(() => import("../../pages/client/Home"));

const Error404 = lazy(() => import("../../pages/Error404"));

export const clientRoutes = [
    // {
        // path: "/",
        // element: <LayoutClient />,
        // children: [
            { index: true, element: withSuspense(Home) },
            { path: "/", element: withSuspense(Home) },
            { path: "*", element: withSuspense(Error404) },
    //     ],
    // }
];
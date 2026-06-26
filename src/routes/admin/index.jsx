import { lazy } from "react";
import withSuspense from "../../utils/withSuspense";

const Dashboard = lazy(() => import("../../pages/admin/Dashboard"));
const ProductManagement = lazy(
  () => import("../../pages/admin/ProductManagement"),
);

// import LayoutAdmin from "../../layouts/LayoutAdmin";

export const adminRoutes = [
  {
    path: "/admin",
    //     element: <LayoutAdmin />,
    children: [
      //   {
      //         element: <PrivateRouteAdmin />,
      //         children: [
      { index: true, element: withSuspense(Dashboard) },
      { path: "dashboard", element: withSuspense(Dashboard) },
      { path: "products", element: withSuspense(ProductManagement) },
    //   { path: "*", element: withSuspense(Error404) },
      // ],
      //   },
    ],
  },
];

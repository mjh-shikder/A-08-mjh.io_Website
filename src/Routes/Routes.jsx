import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: ()=>fetch('/Trending.json'),
        Component: Home,
      },
      {
        path: "/apps",
        loader: ()=>fetch('/AllApplications.json'),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: ()=>fetch('/AllApplications.json'),
        Component: Installation,
      },
      {
        path: '/appDetails/:id',
        loader: ()=>fetch('/AllApplications.json'),
        Component: AppDetails,
      }
    ],
  },
]);

import { Layout } from "../components";
import { Counter } from "../pages";

const routes = [
  {
    path: "/",
    element: Layout,
    exact: false,
    childrens: [
      {
        path: "/counter",
        element: Counter,
        exact: false,
      },
    ],
  },
];

export default routes;

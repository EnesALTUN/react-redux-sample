import { Layout } from "../components";
import { Counter, PostCreate, PostList, PostListApi } from "../pages";

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
      {
        path: "/posts",
        element: PostList,
        exact: false,
      },
      {
        path: "/posts-api",
        element: PostListApi,
        exact: false,
      },
      {
        path: "/post/create",
        element: PostCreate,
        exact: false,
      },
    ],
  },
];

export default routes;

import App from "./App.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/sign_up.jsx";
import Dashboard from "./components/dashboard.jsx";
import Home from "./components/home.jsx";
import NotFound from "./components/not_found.jsx";
import PostForm from "./components/post_form.jsx";

export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "posts",
            children: [
              {
                path: "new",
                element: <PostForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

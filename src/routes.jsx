import App from "./App.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/sign_up.jsx";
import Dashboard from "./components/dashboard.jsx";
import NotFound from "./components/not_found.jsx";

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
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

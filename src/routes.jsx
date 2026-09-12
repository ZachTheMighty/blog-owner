import App from "./App.jsx";
import Signup from "./components/sign_up.jsx";
import NotFound from "./components/not_found.jsx";

export default [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

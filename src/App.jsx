import { useState } from "react";
import { Outlet } from "react-router";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return <Outlet context={{ isAuth, setIsAuth }} />;
}

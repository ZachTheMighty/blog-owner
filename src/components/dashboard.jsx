import { useOutletContext } from "react-router";
import Link from "./link";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./navbar.jsx";

export default function Dashboard() {
  const { setIsAuth, isAuth } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    fetch(
      "http://localhost:8080/tokens",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
      [],
    )
      .then((res) => res.json())
      .then((data) => {
        setIsAuth(data.isAuth);
        setUserName(
          `${data.payload.user.firstName} ${data.payload.user.lastName}`,
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  if (loading) return <div>Loading...</div>;
  if (!isAuth)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        <div>
          You need to <Link to="/" text="login" /> to view the dashboard.
        </div>
      </div>
    );
  return (
    <div className="flex flex-col items-center sm:block sm:p-10">
      <Navbar userName={userName} />
    </div>
  );
}

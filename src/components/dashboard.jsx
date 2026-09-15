import { Outlet, useOutletContext } from "react-router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const { isAuth, setIsAuth } = useOutletContext();

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

  return (
    <div className="flex flex-col items-center sm:block sm:p-5">
      <Outlet context={{ isAuth, loading, userName }} />
    </div>
  );
}

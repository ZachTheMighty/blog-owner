import Link from "./link";
import { useContext } from "react";
import Posts from "./posts.jsx";
import { Context } from "../App.jsx";

export default function Home() {
  const { isAuth, loading, postsLoading } = useContext(Context);

  if (loading || postsLoading) return <div>Loading...</div>;
  if (!isAuth)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        <div>
          You need to <Link to="/" text="login" /> to view the dashboard.
        </div>
      </div>
    );
  return (
    <div className="min-w-full px-4 sm:min-w-auto sm:p-0">
      <div className="text-xl font-bold mt-8 sm:text-2xl lg:text-3xl">
        Your posts
      </div>
      <Posts />
    </div>
  );
}

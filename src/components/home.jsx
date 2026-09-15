import { useOutletContext } from "react-router";
import Link from "./link";

export default function Home() {
  const { isAuth, loading } = useOutletContext();

  if (loading) return <div>Loading...</div>;
  if (!isAuth)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        <div>
          You need to <Link to="/" text="login" /> to view the dashboard.
        </div>
      </div>
    );
  return <div>home</div>;
}

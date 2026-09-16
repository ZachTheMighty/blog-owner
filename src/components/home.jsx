import { useOutletContext } from "react-router";
import Link from "./link";
import { useEffect, useState } from "react";
import Posts from "./posts.jsx";

export default function Home() {
  const { isAuth, loading } = useOutletContext();
  const [postsLoading, setPostsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => setErrors(error))
      .finally(() => setPostsLoading(false));
  }, []);

  if (loading || postsLoading) return <div>Loading...</div>;
  if (!isAuth)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        <div>
          You need to <Link to="/" text="login" /> to view the dashboard.
        </div>
      </div>
    );
  if (errors) return <div>{errors}</div>;
  return (
    <div className="min-w-full px-4 sm:min-w-auto sm:p-0">
      <div className="text-xl font-bold mt-8 sm:text-2xl lg:text-3xl">
        Your posts
      </div>
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
}

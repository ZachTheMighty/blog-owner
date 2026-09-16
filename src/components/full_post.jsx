import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "./post.jsx";
import Comments from "./comments.jsx";

export default function FullPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => {
        setErrors(error);
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading post...</div>;
  if (errors) return <div>Check console for errors</div>;
  return (
    <div className="bg-pink-500 p-4 mt-8 w-full sm:w-auto lg:mx-100 rounded-md flex flex-col gap-8">
      <Post post={post} full={true} />
      <Comments comments={post.comments} />
    </div>
  );
}

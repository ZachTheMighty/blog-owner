import { useContext } from "react";
import { Context } from "../App";
import { useParams } from "react-router";

export default function Comment({ comment }) {
  const { posts, setPosts } = useContext(Context);
  const { id } = useParams();

  const handleDelete = async () => {
    const response = await fetch(
      `https://blog-api-ljzu.onrender.com/posts/${id}/comments/${comment.id}`,
      {
        method: "delete",
      },
    );

    const data = await response.json();
    let key = posts.findIndex((post) => post.id === +id);
    const newComments = posts[key].comments.filter(
      (comment) => comment.id !== data.id,
    );
    setPosts(
      posts.map((post) =>
        post.id === +id ? { ...post, comments: newComments } : post,
      ),
    );
  };

  return (
    <div className="bg-pink-500 px-4 py-2 rounded-md text-white">
      <div className="flex justify-between sm:text-lg font-bold mb-2">
        <div>{comment.user.firstName + " " + comment.user.lastName}</div>
        <div>{comment.createdAt.split("T")[0]}</div>
      </div>
      <div className="text-lg sm:text-xl font-bold">{comment.body}</div>
      <div
        onClick={handleDelete}
        className="mt-4 bg-white px-4 py-2 rounded-md font-bold text-pink-500 text-center hover:bg-pink-600 hover:text-white active:bg-pink-400"
      >
        Delete
      </div>
    </div>
  );
}

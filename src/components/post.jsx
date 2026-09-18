import { MessageCircle, Eye } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../App";

export default function Post({ post, full }) {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(Context);

  const handleViewPost = async () => {
    if (full) return;
    await fetch(`http://localhost:8080/posts/${post.id}/views`, {
      method: "post",
    })
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          posts.map((p) =>
            p.id === post.id ? { ...p, views: data.views } : p,
          ),
        ),
      )
      .catch((error) => console.log(error));

    navigate(`posts/${post.id}`);
  };

  const handlePublish = async (event) => {
    event.stopPropagation();
    await fetch(`http://localhost:8080/posts/${post.id}/published`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: post.published }),
    })
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          posts.map((p) =>
            p.id === post.id ? { ...p, published: data.published } : p,
          ),
        ),
      )
      .catch((error) => console.log(error));
  };

  const handleDelete = async (event) => {
    event.stopPropagation();
    await fetch(`http://localhost:8080/posts/${post.id}`, {
      method: "delete",
    })
      .then(() => setPosts(posts.filter((item) => item.id !== post.id)))
      .then(() => navigate("/dashboard"));
  };

  const handleEdit = async (event) => {
    event.stopPropagation();
    navigate(`edit`);
  };

  return (
    <div
      onClick={handleViewPost}
      className={`bg-white rounded-md p-4 ${!full ? "hover:bg-gray-100 active:bg-gray-200" : ""} shadow-[0px_0px_20px_1px_rgba(255,255,255,0.3)]  ${!full ? "h-85" : ""} flex flex-col justify-between gap-8`}
    >
      <div>
        <div
          className={`text-2xl font-bold sm:text-3xl mb-2 ${!full ? "line-clamp-1" : "break-words"}`}
        >
          {post.title}
        </div>
        <div className={`${!full ? "line-clamp-3" : "break-all"}`}>
          {post.body}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between font-bold">
          <div>{post.createdAt.split("T")[0]}</div>
          <div className="flex gap-4 text-gray-400">
            <div className="flex gap-2">
              <div>{post.comments.length}</div>
              <MessageCircle />
            </div>
            <div className="flex gap-2">
              <div>{post.views}</div>
              <Eye />
            </div>
          </div>
        </div>
        <div className="flex justify-between font-bold border-t border-black/10 pt-4">
          <div className="flex gap-1 items-center">
            Status:{" "}
            <div
              className={`${post.published ? "text-green-500" : "text-red-500"}`}
            >
              {post.published ? "Published" : "Unpublished"}
            </div>
          </div>
          <button
            onClick={(event) => handlePublish(event)}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 active:bg-pink-500"
          >
            {post.published ? "Unpublish" : "Publish"}
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <button
            onClick={(event) => handleDelete(event)}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 active:bg-pink-500 font-bold w-full"
          >
            Delete
          </button>
          {full && (
            <button
              onClick={(event) => handleEdit(event)}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 active:bg-pink-500 font-bold w-full"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

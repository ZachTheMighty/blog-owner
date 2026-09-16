import { MessageCircle, Eye } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Post({ post, full, posts, setPosts }) {
  const [views, setViews] = useState(post.views);
  const [published, setPublished] = useState(post.published);
  const navigate = useNavigate();

  const handleViewPost = async () => {
    if (full) return;
    await fetch(`http://localhost:8080/posts/${post.id}/views`, {
      method: "post",
    })
      .then((response) => response.json())
      .then((data) => setViews(data.views))
      .catch((error) => console.log(error));

    navigate(`posts/${post.id}`);
  };

  const handlePublish = async (event) => {
    event.stopPropagation();
    await fetch(`http://localhost:8080/posts/${post.id}/published`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published }),
    })
      .then((response) => response.json())
      .then((data) => setPublished(data.published))
      .catch((error) => console.log(error));
  };

  const handleDelete = async (event) => {
    event.stopPropagation();
    await fetch(`http://localhost:8080/posts/${post.id}`, {
      method: "delete",
    }).then(() =>
      setPosts(Object.values(posts).filter((item) => item.id !== post.id)),
    );
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
              <div>{views}</div>
              <Eye />
            </div>
          </div>
        </div>
        <div className="flex justify-between font-bold border-t border-black/10 pt-4">
          <div className="flex gap-1 items-center">
            Status:{" "}
            <div className={`${published ? "text-green-500" : "text-red-500"}`}>
              {published ? "Published" : "Unpublished"}
            </div>
          </div>
          <button
            onClick={(event) => handlePublish(event)}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 active:bg-pink-500"
          >
            {published ? "Unpublish" : "Publish"}
          </button>
        </div>
        <div className="flex-1">
          <button
            onClick={(event) => handleDelete(event)}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 active:bg-pink-500 font-bold w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

import { MessageCircle, Eye } from "lucide-react";
import { useState } from "react";

export default function Post({ post }) {
  const [views, setViews] = useState(post.views);
  const handleClick = async () => {
    await fetch(`http://localhost:8080/posts/${post.id}/views`, {
      method: "post",
    })
      .then((response) => response.json())
      .then((data) => setViews(data.views))
      .catch((error) => console.log(error));
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-md px-2 py-4 hover:bg-gray-100 active:bg-gray-200 shadow-[0px_0px_20px_1px_rgba(255,255,255,0.3)] h-60 flex flex-col justify-between"
    >
      <div>
        <div className="text-2xl font-bold sm:text-3xl mb-2 line-clamp-2">
          {post.title}
        </div>
        <div className="line-clamp-3">{post.body}</div>
      </div>
      <div className="mt-8 flex justify-between">
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
    </div>
  );
}

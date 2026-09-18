import { useContext, useEffect, useState } from "react";
import Input from "./input.jsx";
import Link from "./link.jsx";
import { useParams } from "react-router";
import { Context } from "../App.jsx";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState("s");

  const { id } = useParams();
  const { posts, setPosts } = useContext(Context);
  const post =
    posts && id ? Object.values(posts).find((post) => post.id === +id) : null;

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  if (!posts) return <div>Loading posts...</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const method = id ? "put" : "post";
    const url = id
      ? `http://localhost:8080/posts/${id}`
      : "http://localhost:8080/posts";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, body }),
    });

    const data = await response.json();
    if (!response.ok)
      return setErrors({ errors: data.error, status: response.status });
    setErrors(null);

    if (!id) {
      const newPosts = [...posts, data.post];
      newPosts.sort((postA, postB) => postB.id - postA.id);
      return setPosts(newPosts);
    }

    let key = posts.findIndex((post) => post.id === +id);
    setPosts(posts.map((post, index) => (index === key ? data.post : post)));
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="text-xl font-bold text-center md:text-2xl lg:text-3xl">
        {id ? "Edit post" : "Create new post"}
      </div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="flex flex-col gap-4 px-8 py-16 rounded-md bg-white sm:p-16 w-full md:w-200"
      >
        <Input
          type="text"
          name="title"
          text="title"
          value={title}
          setValue={setTitle}
          errors={errors}
        />
        <Input
          type="textarea"
          name="body"
          text="body"
          value={body}
          setValue={setBody}
          errors={errors}
        />
        {!errors && (
          <div>
            Successfully {id ? "edited" : "created"} post!{" "}
            <Link text="Go home" to="/dashboard" />
          </div>
        )}
        <button className="bg-pink-700 min-w-full px-4 py-2 text-white font-medium hover:bg-pink-600 active:bg-pink-700">
          {id ? "Edit" : "Create"} post
        </button>
      </form>
    </div>
  );
}

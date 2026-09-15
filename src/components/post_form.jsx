import { useState } from "react";
import Input from "./input.jsx";
export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState("s");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/posts", {
      method: "post",
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
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="text-xl font-bold text-center md:text-2xl lg:text-3xl">
        Create new post
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
        <button className="bg-pink-700 min-w-full px-4 py-2 text-white font-medium hover:bg-pink-600 active:bg-pink-700">
          Create post
        </button>
      </form>
    </div>
  );
}

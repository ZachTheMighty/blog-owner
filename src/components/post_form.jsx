import { useState } from "react";
import Input from "./input.jsx";
export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState("s");

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold text-center">Create new post</div>
      <form className="flex flex-col gap-4 px-8 py-16 rounded-md bg-white sm:p-16 w-full md:w-200">
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

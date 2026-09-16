import Comment from "./comment.jsx";

export default function Comments({ comments }) {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="text-xl font-bold sm:text-2xl">Comments:</div>
      <ul className="flex flex-col gap-8 mt-2">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import Post from "./post.jsx";

export default function Posts({ posts, setPosts }) {
  return (
    <div className="mt-2">
      <ul className="bg-pink-500 rounded-md px-4 py-4 grid place-content-center grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-16 mb-16">
        {Object.values(posts).map((post) => (
          <li key={post.id}>
            <Post post={post} posts={posts} setPosts={setPosts} />
          </li>
        ))}
      </ul>
    </div>
  );
}

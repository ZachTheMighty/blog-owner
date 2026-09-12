export default function From({ header, button, children }) {
  let inputs;
  if (header === "Login") inputs = [children[0], children[1]];
  else inputs = children;
  return (
    <form className="px-8 py-16 rounded-md bg-white sm:p-16">
      <h1 className="text-3xl text-center mb-8 text-gray-600">{header}</h1>
      {inputs}
      <button className="bg-cyan-700 min-w-full px-4 py-2 text-white font-medium hover:bg-cyan-600 active:bg-cyan-700">
        {button}
      </button>
      {header === "Login" && children.at(-1)}
    </form>
  );
}

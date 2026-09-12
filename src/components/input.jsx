export default function Input({ type, text = type }) {
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor={text}>{text[0].toUpperCase() + text.slice(1)}:</label>
      <input
        type={type}
        name={text}
        id={text}
        className="border-1 border-black/10 p-5 mb-3 hover:outline-1 outline-cyan-600 focus:outline-2 outline-cyan-600 sm:w-120"
        placeholder={`Enter ${text}`}
      />
    </div>
  );
}

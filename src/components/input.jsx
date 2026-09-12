export default function Input({ type }) {
  return (
    <div className="flex flex-col justify-center">
      <label for={type}>{type[0].toUpperCase() + type.slice(1)}:</label>
      <input
        type={type}
        name={type}
        id={type}
        className="border-1 border-black/10 p-5 mb-3 hover:outline-1 outline-cyan-600 focus:outline-2 outline-cyan-600"
        placeholder={`Enter ${type}`}
      />
    </div>
  );
}

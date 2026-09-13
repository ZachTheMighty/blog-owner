export default function Input({
  type,
  text = type,
  name = type,
  value,
  setValue,
}) {
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor={name}>{text[0].toUpperCase() + text.slice(1)}:</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="border-1 border-black/10 p-5 mb-3 hover:outline-1 outline-cyan-600 focus:outline-2 outline-cyan-600 sm:w-120"
        placeholder={`Enter ${text}`}
      />
    </div>
  );
}

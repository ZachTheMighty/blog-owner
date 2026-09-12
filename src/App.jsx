import Input from "./components/input.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center px-8 items-center bg-cyan-600">
      <form className="px-8 py-16 rounded-md bg-white sm:p-16">
        <h1 className="text-3xl text-center mb-8 text-gray-600">Login</h1>
        <Input type="email" />
        <Input type="password" />
        <button className="bg-cyan-700 min-w-full px-4 py-2 text-white font-medium hover:bg-cyan-600 active:bg-cyan-700">
          SIGN IN
        </button>

        <div className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-cyan-700 hover:text-cyan-600 active:text-cyan-700"
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}

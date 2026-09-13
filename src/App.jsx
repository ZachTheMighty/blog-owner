import Input from "./components/input.jsx";
import { Link } from "react-router";
import Form from "./components/form.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center px-8 items-center bg-pink-600">
      <Form header="Login" button="SIGN IN">
        <Input type="email" />
        <Input type="password" />
        <div className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="text-pink-700 hover:text-pink-600 active:text-pink-700"
          >
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
}

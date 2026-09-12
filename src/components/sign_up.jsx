import Input from "./input.jsx";
import Form from "./form.jsx";

export default function Signup() {
  return (
    <div className="min-h-screen flex justify-center px-8 items-center bg-cyan-600">
      <Form header="Sign Up" button="SIGN UP">
        <Input type="text" text="First Name" />
        <Input type="text" text="Last Name" />
        <Input type="email" />
        <Input type="password" />
        <Input type="password" text="Confirm Password" />
      </Form>
    </div>
  );
}

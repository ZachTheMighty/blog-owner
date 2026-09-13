import Input from "./input.jsx";
import Form from "./form.jsx";
import { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex justify-center px-8 items-center bg-cyan-600">
      <Form
        header="Sign Up"
        button="SIGN UP"
        fields={{
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }}
      >
        <Input
          type="text"
          text="First Name"
          name="firstName"
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          type="text"
          text="Last Name"
          name="lastName"
          value={lastName}
          setValue={setLastName}
        />
        <Input type="email" value={email} setValue={setEmail} />
        <Input type="password" value={password} setValue={setPassword} />
        <Input
          type="password"
          text="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
      </Form>
    </div>
  );
}

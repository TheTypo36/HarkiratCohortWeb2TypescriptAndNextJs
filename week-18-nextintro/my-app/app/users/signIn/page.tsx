import React, { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = () => {};

  return (
    <div className="h-60 w-80 bg-gray-500 border-0 rounded-md flex-col ite-center p-4 justify-center items-baseline">
      <h2>SignIn</h2>
      <Input
        type="email"
        name="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter the email"
      />

      <Input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter the password"
      />
      <button
        className="b-2 bg-green-500 p-2 rounded-md"
        onClick={handleSignIn}
      >
        SignIn
      </button>
    </div>
  );
}

export default SignIn;

export interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export function Input(props: InputProps) {
  return (
    <div className="p-2 text-red-300 w-full">
      <input
        className="p-2 border-amber-500 border-2"
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}

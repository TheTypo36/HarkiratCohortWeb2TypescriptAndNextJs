"use client";

import React, { useState } from "react";
import Input from "@/app/components/Input";
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = () => {};

  return (
    <div className="h-60 w-80 bg-gray-500 border-0 rounded-md flex-col items-center p-4 justify-center">
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
        className="border-2 bg-green-500 p-2 rounded-md"
        onClick={handleSignIn}
      >
        SignIn
      </button>
    </div>
  );
}

export default SignIn;

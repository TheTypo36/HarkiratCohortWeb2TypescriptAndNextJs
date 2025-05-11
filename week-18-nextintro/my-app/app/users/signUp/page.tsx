"use client";

import React, { useState } from "react";
import Input from "@/app/components/Input";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    axios.post("http://localhost:3000/api/v1/signup", {
      username,
      password,
    });
  };
  return (
    <div className="h-60 w-80 bg-gray-500 border-0 rounded-md flex-col items-center p-4 justify-center">
      <h2>SignUp</h2>
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
        onClick={handleSignUp}
      >
        SignUp
      </button>
    </div>
  );
}

export default SignUp;

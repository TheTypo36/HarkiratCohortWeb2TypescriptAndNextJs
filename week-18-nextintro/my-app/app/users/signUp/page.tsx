"use client";

import React, { useState } from "react";
import Input from "@/app/components/Input";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/v1/user/signup", {
      username,
      email,
      password,
    });
  };
  return (
    <div className="min-h-100 absolute left-96 top-100 w-80 bg-gray-500 border-0 rounded-md flex-col items-center p-4 justify-center">
      <h2>SignUp</h2>
      <form>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter the email"
        />
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter the username"
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
      </form>
    </div>
  );
}

export default SignUp;

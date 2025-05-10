import React from "react";
import axios from "axios";
import Link from "next/link";
async function page() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details");

  const data = response.data;
  return (
    <div className="flex justify-center items-center text-2xl">
      Todo Application
      <Link href="/user/signIn">SignIn</Link>
      <Link href="/user/signUp">SignUp</Link>
    </div>
  );
}

export default page;

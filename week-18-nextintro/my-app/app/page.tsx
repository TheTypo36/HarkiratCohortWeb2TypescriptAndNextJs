"use client";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col justify-center h-full items-center text-2xl">
      Todo Application
      <Link href="/users/signIn">SignIn</Link>
      <Link href="/users/signUp">SignUp</Link>
    </div>
  );
}

export default Page;

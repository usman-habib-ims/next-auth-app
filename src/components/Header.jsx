import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <header className="bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">
            Auth
          </span>
          <span className="text-traansparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600 ">
            App
          </span>
        </Link>

        {/* add navigation menu */}
        <nav>
          <ul className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/sign-in">Sign in</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

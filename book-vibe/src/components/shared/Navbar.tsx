import { link } from "fs";
import Link from "next/link";
import React from "react";
import logo from "@/assets/book.ico";
import Image from "next/image";

const links = (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/listed-books">Listed Books</Link>
    </li>
    <li>
      <Link href="">Pages to Read</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className=" navbar   container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <Link
              href="/"
              className="btn btn-ghost text-xl font-bold normal-case"
            >
              Book Vibe
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="btn btn-ghost  border-none bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 rounded-xl px-6 md:px-8">
            Sign In
          </button>
          <button className="btn btn-ghost  border-none bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-md shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 rounded-xl px-6 md:px-8">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

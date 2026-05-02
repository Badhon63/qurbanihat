import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-base-200 shadow-sm">
      <div className="container mx-auto max-lg:collapse  w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <Image
              className="mx-2"
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
            ></Image>
            <p className="font-bold text-xl">Qurbani Hat</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li>
                <button>
                  <Link href={"/"}>Home</Link>
                </button>
              </li>
              <li>
                <button>
                  <Link href={"/animals"}>All Animals</Link>
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <Link href={"/login"}>
              <button className="btn btn-neutral">Login</button>
            </Link>
            <Link href={"/register"}>
              <button className="btn btn-neutral hidden sm:block">
                Register
              </button>
            </Link>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            <li>
              <button>
                <Link href={"/"}>Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link href={"/animals"}>All Animals</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

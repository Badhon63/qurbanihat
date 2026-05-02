"use client";

import { authClient, googleSignIn } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log("login data:", data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };

  return (
    <div className=" bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 mt-6 md:mt-10">
      <p className="text-lg text-center font-semibold border-b border-black/20 pb-4 mb-4">
        Login
      </p>
      <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Enter your email address"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-red-500">* Email is required</p>}

        <label className="label">Password</label>
        <div className="relative">
          <input
            type={`${visible ? "text" : "password"}`}
            className="input"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          <span
            onClick={() => {
              setVisible(!visible);
            }}
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer p-1 text-sm w-fit"
          >
            {visible ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500">* Password is required</p>
        )}

        <button className="btn btn-neutral mt-4">Login</button>
        <div className="mx-auto mt-2 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="hover:text-blue-500 underline">
            Register
          </Link>{" "}
        </div>
      </form>

      <button
        onClick={googleSignIn}
        className="btn w-full bg-white text-black border-[#e5e5e5] mb-2 mt-5"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;

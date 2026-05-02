import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

        <p className="mt-2 text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

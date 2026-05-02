"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import LoadingPage from "../loading";

export default function ProfilePage() {
  const { data } = authClient.useSession();
  const user = data?.user;

  if (!user) return <LoadingPage />;

  return (
    <div className="max-w-xl mx-auto mt-10 ">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <div className="border border-black/10 rounded-lg shadow-md p-6 space-y-4 mt-5">
        <Image
          src={user.image || "/default.png"}
          alt=""
          className="w-24 h-24 rounded-full"
          width={50}
          height={50}
        />

        <p>
          <b>Name:</b> {user.name}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <Link href="/profile/update" className="btn btn-info">
          Update Profile
        </Link>
      </div>
    </div>
  );
}

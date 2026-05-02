"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function UpdateProfile() {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");

  const handleUpdate = async () => {
    if (!name.trim() || !image.trim()) {
      toast.error("Fields cannot be empty", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error("Update failed", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    toast.success("Profile updated", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="mx-auto space-y-4 p-6 flex flex-col mt-5">
      <h1 className="text-2xl font-bold">Update Profile</h1>

      <input
        onChange={(e) => setName(e.target.value)}
        className="input"
        placeholder="New name"
        value={name}
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        className="input"
        placeholder=" New profile image link"
        value={image}
      />

      <button onClick={handleUpdate} className="btn btn-primary">
        Update
      </button>
    </div>
  );
}

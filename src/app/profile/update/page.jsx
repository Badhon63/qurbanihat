"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function UpdateProfile() {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [name, setName] = useState(user?.name);
  const [image, setImage] = useState(user?.image);

  const handleUpdate = async () => {
    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error("Update failed");
      return;
    }

    toast.success("Profile updated");
  };

  return (
    <div className="mx-auto space-y-4 p-6 flex flex-col mt-5">
      <h1 className="text-2xl font-bold">Update Profile</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
        placeholder="New name"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="input"
        placeholder=" New profile image link"
      />

      <button onClick={handleUpdate} className="btn btn-primary">
        Update
      </button>
    </div>
  );
}

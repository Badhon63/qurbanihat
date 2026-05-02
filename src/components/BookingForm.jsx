"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({ animalName }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    toast.success("Booking successful!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white border border-black/10 shadow-sm rounded-xl p-6 max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Book {animalName}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Your Name" required className="input" />

        <input type="email" placeholder="Email" required className="input" />

        <input type="tel" placeholder="Phone" required className="input" />

        <textarea placeholder="Address" required className="input" />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 cursor-pointer"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

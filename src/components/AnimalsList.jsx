"use client";

import { useState } from "react";
import AnimalCard from "./AnimalCard";

const AnimalsList = ({ animals }) => {
  const [sortOrder, setSortOrder] = useState("");

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <div className="mb-6 flex justify-end">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsList;

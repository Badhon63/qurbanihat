import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <div className="overflow-hidden">
        <Image
          src={animal.image}
          alt={animal.name}
          width={400}
          height={300}
          className="w-full max-h-62 "
        />
      </div>

      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{animal.name}</h2>

        <p className="text-sm text-gray-600">Type: {animal.type}</p>

        <p className="text-sm text-gray-600">Breed: {animal.breed}</p>

        <p className="text-sm text-gray-600">Location: {animal.location}</p>

        <p className="text-lg font-bold text-green-600">৳ {animal.price}</p>

        <div className="pt-3">
          <Link href={`/animals/${animal.id}`}>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;

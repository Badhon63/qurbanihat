import Image from "next/image";
import BookingForm from "@/components/BookingForm";

const getAnimal = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/animals.json`,
    { cache: "no-store" },
  );

  const animals = await res.json();
  return animals.find((a) => a.id === parseInt(id));
};

export default async function AnimalDetails({ params }) {
  const { id } = await params;

  const animal = await getAnimal(id);

  if (!animal) {
    return (
      <div className="text-center text-3xl font-medium mt-20">
        Animal not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: IMAGE */}
        <div className="lg:col-span-1 flex items-center justify-center">
          <div className="rounded-xl overflow-hidden w-full">
            <Image
              src={animal.image}
              alt={animal.name}
              width={500}
              height={400}
              className="w-full"
            />
          </div>
        </div>

        {/* MIDDLE: DETAILS */}
        <div className="lg:col-span-1 space-y-4">
          <h1 className="text-3xl font-bold">{animal.name}</h1>

          <p className="text-gray-600">{animal.description}</p>

          <p>
            <strong>Type:</strong> {animal.type}
          </p>
          <p>
            <strong>Breed:</strong> {animal.breed}
          </p>
          <p>
            <strong>Weight:</strong> {animal.weight} kg
          </p>
          <p>
            <strong>Age:</strong> {animal.age} years
          </p>
          <p>
            <strong>Location:</strong> {animal.location}
          </p>

          <p className="text-2xl font-bold text-green-600">৳ {animal.price}</p>
        </div>

        {/* RIGHT: BOOKING FORM */}
        <div className="lg:col-span-1">
          <BookingForm animalName={animal.name} />
        </div>
      </div>
    </div>
  );
}

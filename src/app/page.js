import Image from "next/image";
import Link from "next/link";

const getAnimals = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/animals.json`,
    {
      cache: "no-store",
    },
  );
  return res.json();
};

const Home = async () => {
  const animals = await getAnimals();
  const featured = animals.slice(0, 4);

  return (
    <div className="px-6">
      <section className="bg-green-50 py-16 text-center rounded-xl mt-6">
        <h1 className="text-4xl font-bold mb-4">
          QurbaniHat Livestock Marketplace
        </h1>
        <p className="text-gray-600 mb-6">
          Find healthy cows, goats and buffalo for Qurbani
        </p>
        <Link href={"/animals"}>
          <button className="btn btn-success text-white text-base ">
            Browse Animals
          </button>
        </Link>
      </section>

      <section className="mt-16 container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Animals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((animal) => (
            <div
              key={animal.id}
              className="shadow-lg border border-black/10 hover:shadow-xs transition p-5"
            >
              <Image
                src={animal.image}
                alt={animal.name}
                width={300}
                height={300}
                className="w-full max-h-50 object-cover"
              />

              <div>
                <h3 className="font-semibold text-xl mt-4">{animal.name}</h3>

                <p className="text-sm text-gray-600">Type: {animal.type}</p>

                <p className="text-sm text-gray-600">Breed: {animal.breed}</p>

                <p className="text-sm text-gray-600">
                  Location: {animal.location}
                </p>

                <p className="font-bold text-green-600 mt-2">
                  ৳ {animal.price}
                </p>

                <Link href={`/animals/${animal.id}`}>
                  <button className="btn mt-3 btn-neutral">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 container mx-auto bg-white border border-black/10 shadow-xs rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">1. Explore Animals</h3>
            <p className="text-gray-600 text-sm">
              Browse cows, goats and buffalo from different locations
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">2. Check Details</h3>
            <p className="text-gray-600 text-sm">
              View price, weight, breed and health information
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">3. Book Easily</h3>
            <p className="text-gray-600 text-sm">
              Login and submit booking form instantly
            </p>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="mt-16 container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Qurbani Tips</h2>

        <div className="space-y-3 text-gray-700 font-medium">
          <p className="border p-3 rounded-lg">
            1. Choose healthy animals with proper weight
          </p>
          <p className="border p-3 rounded-lg">
            2. Check age and health condition
          </p>
          <p className="border p-3 rounded-lg">3. Avoid weak or sick animals</p>
          <p className="border p-3 rounded-lg">
            4. Ensure proper care before purchase
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

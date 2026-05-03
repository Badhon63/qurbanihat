import AnimalsList from "@/components/AnimalsList";

const getAnimals = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/animals.json`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch animals data");
  }

  return res.json();
};

export default async function Animals() {
  const animals = await getAnimals();

  return (
    <div className="min-h-screen bg-base-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">All Animals</h1>
        <AnimalsList animals={animals} />
      </div>
    </div>
  );
}

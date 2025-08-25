import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-green-700 text-center">
        Empowering Sustainable Agriculture Through Innovation
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
        We are building a zero-waste, tech-driven farming model that integrates AI, drones, and solar energy to enhance efficiency, productivity, and sustainability.
      </p>
    </main>
  );
}

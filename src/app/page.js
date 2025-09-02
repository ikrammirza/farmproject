import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden group">
        {/* Image with hover zoom */}
        <Image
          src="/sustainable farming.webp"
          alt="Sustainable Farm"
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-green-900/40 to-black/70"></div>

        <div className="relative z-10 max-w-3xl px-4 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Empowering Sustainable Agriculture Through Innovation
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-100 drop-shadow-md">
            Building a zero-waste, tech-driven farming model integrating AI,
            drones, and solar energy.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-gradient-to-r from-green-600 to-green-800 px-8 py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-white font-semibold"
          >
            Join Our Journey
          </a>
        </div>
      </div>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-20">
        {[
          {
            title: "Solar Powered",
            desc: "Harnessing renewable energy to power farms efficiently.",
            img: "/solar powered.jfif",
          },
          {
            title: "Zero-Waste Ecosystem",
            desc: "Creating circular systems that minimize waste and maximize value.",
            img: "/zero eco waste ecosystem.jpg",
          },
          {
            title: "Smart Farming",
            desc: "Using IoT, drones, and AI to boost productivity sustainably.",
            img: "/SmartFarming.jpg",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

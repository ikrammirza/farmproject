import { Leaf, Fish, Sun, Recycle, UtensilsCrossed, Dog } from "lucide-react";

export default function Model() {
  const modelParts = [
    {
      title: "Crops",
      desc: "Nutritious fruits, vegetables, and grains grown using eco-friendly practices to support food security.",
      icon: <Leaf className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Livestock",
      desc: "Goats, chickens, and ducks provide dairy, eggs, and meat, while contributing manure for organic farming.",
      icon: <Dog className="w-8 h-8 text-green-700" />, // placeholder for livestock
    },
    {
      title: "Aquaculture",
      desc: "Fish farming creates additional protein sources, with water enriched by organic nutrients from livestock.",
      icon: <Fish className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Solar Energy",
      desc: "Solar panels power irrigation, lighting, and farm operations, reducing reliance on fossil fuels.",
      icon: <Sun className="w-8 h-8 text-yellow-600" />,
    },
    {
      title: "Waste Recycling",
      desc: "Every by-product is reused — from composting crop waste to creating feed and natural fertilizers.",
      icon: <Recycle className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Farm-to-Table",
      desc: "Directly connecting farming with catering and takeaway services to boost local income and jobs.",
      icon: <UtensilsCrossed className="w-8 h-8 text-green-700" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-800 tracking-tight">
          Our Model
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our zero-waste model integrates <span className="font-semibold text-green-700">livestock</span>,{" "}
          <span className="font-semibold text-green-700">crops</span>,{" "}
          <span className="font-semibold text-green-700">aquaculture</span>, and{" "}
          <span className="font-semibold text-green-700">renewable energy</span> into a circular ecosystem. 
          Waste becomes a resource, ensuring sustainability, productivity, and community empowerment.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {modelParts.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-green-100 hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 group-hover:text-green-900 transition">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

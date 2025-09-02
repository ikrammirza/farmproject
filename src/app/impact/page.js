import { Leaf, Users, Globe, BookOpen } from "lucide-react";

export default function Impact() {
  const impacts = [
    {
      title: "No Poverty",
      desc: "Creating local jobs and empowering rural communities through sustainable farming practices.",
      icon: <Users className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Zero Hunger",
      desc: "Ensuring food security by producing fresh, organic crops and livestock products.",
      icon: <Leaf className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Climate Action",
      desc: "Reducing carbon footprint with renewable energy, recycling, and zero-waste practices.",
      icon: <Globe className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Education",
      desc: "Training farmers and youth in modern agri-tech methods for long-term sustainability.",
      icon: <BookOpen className="w-8 h-8 text-green-700" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-800 tracking-tight">
          Our Impact
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We align with{" "}
          <span className="font-semibold text-green-700">UN SDGs</span>:{" "}
          <span className="font-semibold text-green-700">No Poverty</span>,{" "}
          <span className="font-semibold text-green-700">Zero Hunger</span>,{" "}
          <span className="font-semibold text-green-700">Responsible Consumption</span>, and{" "}
          <span className="font-semibold text-green-700">Climate Action</span>.  
          Our farms provide food security, employment, and education while reducing carbon footprint.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {impacts.map((item, idx) => (
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

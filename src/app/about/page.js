import { Lightbulb, Leaf, Users, Globe, Zap, Utensils } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Zero-Waste Farming",
      desc: "We create a circular farming system where waste from one process becomes input for another — livestock, fish, and crops work together in balance.",
      icon: <Leaf className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Tech-Driven Innovation",
      desc: "Our model integrates AI, drones, and solar energy to maximize efficiency, productivity, and sustainability in agriculture.",
      icon: <Zap className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Community Empowerment",
      desc: "Through training, skill development, and entrepreneurship, we enable rural communities to become self-sufficient and economically resilient.",
      icon: <Users className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Global Inspiration",
      desc: "We learn from successful integrated farms in India and abroad, adapting global best practices into a scalable, local-first model.",
      icon: <Globe className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Vision for the Future",
      desc: "Our venture aligns with the UN SDGs — No Poverty, Zero Hunger, Climate Action, and Responsible Consumption.",
      icon: <Lightbulb className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Farm-to-Table Model",
      desc: "We extend our farming ecosystem into catering and takeaway services, creating jobs and new revenue streams while promoting healthy, local food.",
      icon: <Utensils className="w-8 h-8 text-green-700" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 tracking-tight">
          About AgriGrid
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are reimagining agriculture through{" "}
          <span className="font-semibold text-green-700">innovation</span>,{" "}
          <span className="font-semibold text-green-700">sustainability</span>,
          and community-driven growth. Our mission is to build a future where
          farming is self-sufficient, tech-enabled, and environmentally friendly.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-green-100 hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-green-800 group-hover:text-green-600 transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-16 text-center">
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-bold text-green-700">AgriGrid</span>, we are
          not just building farms — we are building{" "}
          <span className="font-semibold text-green-800">resilient communities</span> 
          and a{" "}
          <span className="font-semibold text-green-800">sustainable future</span> 
          for people and the planet.
        </p>
      </div>
    </div>
  );
}

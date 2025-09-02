export default function Card({ title, desc, img }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition p-4">
      <img src={img} alt={title} className="w-full h-48 object-cover image-hover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

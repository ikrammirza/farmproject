export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-green-800 tracking-tight">
          Contact Us
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Have questions or want to collaborate? Fill out the form below and
          we’ll get back to you shortly.
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-5">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-600 focus:outline-none transition placeholder-gray-400"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-600 focus:outline-none transition placeholder-gray-400"
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-600 focus:outline-none transition placeholder-gray-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-green-800 hover:shadow-lg transform hover:-translate-y-0.5 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

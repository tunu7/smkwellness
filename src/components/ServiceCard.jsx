function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300">
      <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 text-[#6F7652] font-medium">
        Learn More →
      </button>
    </div>
  );
}

export default ServiceCard;
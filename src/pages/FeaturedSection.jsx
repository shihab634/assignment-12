import React from "react";

const features = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
    title: "Verified Donors",
    description:
      "All donors go through a verification process to ensure safety and reliability.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "24/7 Request Support",
    description:
      "Need help at any hour? Our donor search system works round the clock.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2271/2271063.png",
    title: "Instant Matching",
    description:
      "Quickly find a suitable donor based on location and blood group.",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Why Donate with Us?</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We are committed to saving lives by connecting compassionate donors with those in need. 
          Here’s why thousands trust our platform.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded shadow hover:shadow-md transition"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-red-500 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

import React from "react";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";

const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-red-100 mt-2 text-center py-20 px-4 rounded-md shadow-md">
      <h1 className="text-4xl font-bold text-red-700 mb-6">
        Welcome to Blood Donation Portal
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Be the reason someone lives — join the mission today!
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          onClick={() => navigate("/registration")}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded"
        >
          Join as a donor
        </button>
        <button
          onClick={() => navigate("/search")}
          className="bg-white border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-6 py-3 rounded"
        >
          Search Donors
        </button>
      </div>
    </div>
  );
};

export default BannerSection;

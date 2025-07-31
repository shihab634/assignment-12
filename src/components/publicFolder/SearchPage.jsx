import React, { useState } from "react";
import upazilas from "../../assets/upazilas.json";
import districts from "../../assets/division.json";
import useAllReqInprog from "../../hooks/useAllReqInprog";


const SearchPage = () => {
  const { requests } = useAllReqInprog();
  console.log(requests);

  const [searchData, setSearchData] = useState({
    bloodGroup: "",
    district: "",
    upazila: "",
  });

  const [donors, setDonors] = useState(null); 

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    
   

    
    const filtered = requests.filter(
      (donor) =>
        donor.bloodGroup === searchData.bloodGroup &&
        donor.district === searchData.district &&
        donor.upazila === searchData.upazila
    );

    setDonors(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <form
        onSubmit={handleSearch}
        className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Search for Blood Donors
        </h2>

       
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Blood Group
          </label>
          <select
            name="bloodGroup"
            value={searchData.bloodGroup}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-black"
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

       
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            District
          </label>
          <select
            name="district"
            value={searchData.district}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-black"
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district.id} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

       
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Upazila
          </label>
          <select
            name="upazila"
            value={searchData.upazila}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-black"
          >
            <option value="">Select Upazila</option>
            {upazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.name}>
                {upazila.name}
              </option>
            ))}
          </select>
        </div>

       
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      
      {donors && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {donors.length > 0
              ? `Found ${donors.length} donor(s)`
              : "No donors found"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {donors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white rounded-lg shadow p-4 border-l-4 border-red-600"
              >
                <h4 className="text-lg font-semibold text-red-600">
                  {donor.donorName}
                </h4>
                <p className="text-sm text-gray-700">
                  Blood Group: <strong>{donor.bloodGroup}</strong>
                </p>
                <p className="text-sm text-gray-700">
                  Location: {donor.upazila}, {donor.district}
                </p>
                <p className="text-sm text-gray-700">phone: 018xxxxxxxx</p>
                <p className="text-sm text-gray-700">
                  Last Donated: {donor.createdAt}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

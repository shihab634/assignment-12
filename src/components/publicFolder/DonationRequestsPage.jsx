import React, { useState } from "react";
import { Link } from "react-router";
// import useAllRequests from '../../hooks/useAllRequests';
import useAllRequestsPending from "../../hooks/useAllRequestsPending";
import FilterSelectBlood from "./FilterSelectBlood";

const DonationRequestsPage = () => {
  const { requests } = useAllRequestsPending();

  // const [selectedGroup, setSelectedGroup] = useState("");
  const [filter, setFilter] = useState(requests);

  // const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const filteredData = filter
    ? requests.filter((item) => item.bloodGroup === filter)
    : requests;
  if (!requests) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-spinner w-14 text-primary"></span>
        <span className="loading loading-spinner w-14 text-secondary"></span>
        <span className="loading loading-spinner w-14 text-accent"></span>
        <span className="loading loading-spinner w-14 text-neutral"></span>
        <span className="loading loading-spinner w-14 text-info"></span>
        <span className="loading loading-spinner w-14 text-success"></span>
        <span className="loading loading-spinner w-14 text-warning"></span>
        <span className="loading loading-spinner w-14 text-error"></span>
      </div>
    );
  }

  return (
    <div className="p-12 min-h-screen bg-gray-100 space-y-6">
      <h2 className="text-2xl font-bold text-center text-black">
        Pending Donation Requests
      </h2>
      <FilterSelectBlood onFilterChange={setFilter}></FilterSelectBlood>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((req) => (
          <div
            key={req.id}
            className="card border bg-white text-black max-w-md p-6 rounded shadow"
          >
            <h3 className="text-xl font-semibold">{req.recipient}</h3>
            <p>
              <strong>Location:</strong> District: {req.district} Upazila:{" "}
              {req.upazila}
            </p>
            <p>
              <strong>Blood Group:</strong> {req.bloodGroup}
            </p>
            <p>
              <strong>Date:</strong> {req.date}
            </p>
            <p>
              <strong>Time:</strong> {req.time}
            </p>
            <div className="flex justify-between items-center">
              <Link
                className="btn btn-primary btn-md mt-2"
                to={`/donation-requests/${req._id}`}
              >
                View
              </Link>
              <div className="badge badge-error">{req.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationRequestsPage;

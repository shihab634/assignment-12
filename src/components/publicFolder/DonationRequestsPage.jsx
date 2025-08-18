import React  from 'react';
import { Link } from 'react-router';
// import useAllRequests from '../../hooks/useAllRequests';
import useAllRequestsPending from '../../hooks/useAllRequestsPending';

const DonationRequestsPage = () => {
  const {requests} = useAllRequestsPending()
  if (!requests) {
    return <p className="">Loading</p>
  }


  return (
    <div className="p-12 min-h-screen bg-gray-100 space-y-6">
      <h2 className="text-2xl font-bold text-center text-black">Pending Donation Requests</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((req) => (
          <div key={req.id} className="card border bg-white text-black max-w-md p-6 rounded shadow">
            <h3 className="text-xl font-semibold">{req.recipient}</h3>
            <p><strong>Location:</strong> District: {req.district} Upazila: {req.upazila}</p>
            <p><strong>Blood Group:</strong> {req.bloodGroup}</p>
            <p><strong>Date:</strong> {req.date}</p>
            <p><strong>Time:</strong> {req.time}</p>
            <div className="flex justify-between items-center">
              <Link className="btn btn-primary btn-md mt-2"  to={`/donation-requests/${req._id}`}>View</Link>
              <div className="badge badge-error">{req.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationRequestsPage;

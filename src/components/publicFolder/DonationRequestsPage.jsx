import React  from 'react';
import { Link } from 'react-router';
import useAllRequests from '../../hooks/useAllRequests';

const DonationRequestsPage = () => {
  const {requests,setCount,setRequests} = useAllRequests()
  if (!requests) {
    return <p className="">Loading</p>
  }
  // const [requests, setRequests] = useState([]);

  // useEffect(() => {
  //   // Replace with your actual API call
  //   const pendingRequests = [
  //     {
  //       id: 1,
  //       recipient: 'Rahim Uddin',
  //       location: 'Dhaka Medical',
  //       bloodGroup: 'A+',
  //       date: '2025-08-02',
  //       time: '10:00 AM',
  //     },
  //     {
  //       id: 2,
  //       recipient: 'Fatema Begum',
  //       location: 'Square Hospital',
  //       bloodGroup: 'O-',
  //       date: '2025-08-03',
  //       time: '2:30 PM',
  //     },
  //   ];
  //   setRequests(pendingRequests);
  // }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">Pending Donation Requests</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((req) => (
          <div key={req.id} className="card border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{req.recipient}</h3>
            <p><strong>Location:</strong> {req.location}</p>
            <p><strong>Blood Group:</strong> {req.bloodGroup}</p>
            <p><strong>Date:</strong> {req.date}</p>
            <p><strong>Time:</strong> {req.time}</p>
            <Link  to={`/donation-requests/${req._id}`}><button className="btn btn-primary btn-sm mt-2">View</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationRequestsPage;

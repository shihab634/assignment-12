import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";


const RequestDetails = () => {
  const [formData, setFormData] = useState(null);
const data = useLoaderData()

  useEffect(() => {
    setFormData(data)
  }, [data]);


  



  if (!formData) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-xl text-black mx-auto border rounded">
     
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Donation Request Details</h2>
        
      </div>

      <form className="space-y-3">
        {[
          "recipientName", "bloodGroup", "date", "time", "district", "upazila",
          "hospital", "message", "requesterName","requesterEmail"
        ].map((field) => (
          <div key={field}>
            <label className="block font-medium text-black capitalize">{field}</label>
            <input
              className="w-full border px-3 py-1 rounded text-black"
              type="text"
              name={field}
              value={formData[field]}
              
             
            />
          </div>
        ))}

        
       
      </form>
    </div>
  );
};

export default RequestDetails;

import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import useMonchaise from "../../hooks/useMonchaise";
import { toast, ToastContainer } from "react-toastify";

const RequestDetailsEdit = () => {
  const [formData, setFormData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
const data = useLoaderData()
const monchaise = useMonchaise()
  useEffect(() => {
    setFormData(data)
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    // Update backend here
    // await fetch("http://your-api-url.com/request/123", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
    console.log(formData);
    monchaise.put(`/single-request/${formData._id}`,formData).then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount){
        toast('Updated')
      }
      
    })
    
    setIsEditing(false);
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-xl text-black mx-auto border rounded">
      <ToastContainer autoClose={500} />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Donation Request Details</h2>
        {!isEditing ? (
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleEdit}>Edit</button>
        ) : (
          <button className="bg-green-500 text-white px-4 py-1 rounded" onClick={handleSave}>Save</button>
        )}
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
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        ))}

        
       
      </form>
    </div>
  );
};

export default RequestDetailsEdit;

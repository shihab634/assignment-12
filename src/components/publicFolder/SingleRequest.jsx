import React, { useState, useEffect, use } from "react";
import { useLoaderData } from "react-router";
import useMonchaise from "../../hooks/useMonchaise";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const SingleRequest = () => {
  const {user} = use(AuthContext)
  const [formData, setFormData] = useState(null);
  const monchaise = useMonchaise();
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    setFormData(data);
  }, []);

  const handleSave = async () => {
   
    monchaise.put(`/single-request/${formData._id}`, {donorName:user.displayName,donorEmail:user.email,status:'inprogress'}).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast("Updated");
      }
    });
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-xl  mx-auto border rounded">
      <ToastContainer autoClose={500} />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Donation Request Details</h2>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Donor Name: {user.displayName}</h3>
            <p className="py-4">
             Donor Email: {user.email}
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={()=>handleSave(formData._id)} className="btn bg-green-600">Donate</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <form className="space-y-3">
        <div>
          <label className="block font-medium ">Recipient Name</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="recipientName"
            value={formData.recipientName}
          />
        </div>

        <div>
          <label className="block font-medium ">Blood Group</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
          />
        </div>

        <div>
          <label className="block font-medium ">Date</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="date"
            value={formData.date}
          />
        </div>

        <div>
          <label className="block font-medium ">Time</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="time"
            value={formData.time}
          />
        </div>

        <div>
          <label className="block font-medium ">District</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="district"
            value={formData.district}
          />
        </div>

        <div>
          <label className="block font-medium ">Upazila</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="upazila"
            value={formData.upazila}
          />
        </div>

        <div>
          <label className="block font-medium ">Hospital</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="hospital"
            value={formData.hospital}
          />
        </div>

        <div>
          <label className="block font-medium ">Message</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="message"
            value={formData.message}
          />
        </div>

        <div>
          <label className="block font-medium ">Requester Name</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="requesterName"
            value={formData.requesterName}
          />
        </div>

        <div>
          <label className="block font-medium ">Requester Email</label>
          <input
            className="w-full border px-3 py-1 rounded "
            type="text"
            name="requesterEmail"
            value={formData.requesterEmail}
          />
        </div>
      </form>
    </div>
  );
};

export default SingleRequest;

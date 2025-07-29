import React, { use, useEffect, useState } from "react";
import useRoleByEmail from "../../hooks/useRoleByEmail";
import { AuthContext } from "../../providers/AuthProvider";
// import axios from "axios";
import useMonchaise from "../../hooks/useMonchaise";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const { donor } = useRoleByEmail();
  const { updateUser, setUser } = use(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const monchaise = useMonchaise();
  useEffect(() => {
    setFormData(donor);
  }, [donor]);
  if (!donor) {
    return <p className="text-4xl text-teal-400 text-center">Loading</p>;
  }

  const handleChange = (e) => {
    if (e.target.name === "email") return; // prevent editing email
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (id) => {
    // Send updated formData to database here (e.g., via API)
    const { name, photoURL } = formData;

    updateUser({ displayName: name, photoURL: photoURL }).then(() => {
      setUser((prev) => ({ ...prev, displayName: name, photoURL: photoURL }));
    });
    // console.log("Saving to DB:", formData);
    monchaise.put(`/edit-profile/${id}`, formData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast("Updated SuccessFully");
      }
    });
    // Then disable form
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 text-black border rounded">
      <ToastContainer autoClose={500} />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl  font-semibold">User Info</h2>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => handleSave(formData._id)}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        )}
      </div>

      <form className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formData?.name}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
            value={formData?.email}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium">PhotoURL</label>
          <input
            type="text"
            name="photoURL"
            className="w-full border p-2 rounded bg-gray-100 "
            value={formData?.photoURL}
            readOnly={!isEditing}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Blood Group</label>
          <input
            type="text"
            name="blood"
            className="w-full border p-2 rounded"
            value={formData?.blood}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">District</label>
          <input
            type="text"
            name="district"
            className="w-full border p-2 rounded"
            value={formData?.district}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Upazila</label>
          <input
            type="text"
            name="upazila"
            className="w-full border p-2 rounded"
            value={formData?.upazila}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <input
            name="role"
            className="w-full border p-2 rounded"
            value={formData?.role}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <input
            name="status"
            className="w-full border p-2 rounded"
            value={formData?.status}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;

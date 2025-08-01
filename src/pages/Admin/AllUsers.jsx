import React, { useState } from "react";
import useAllUsers from "../../hooks/useAllUsers";
import useMonchaise from "../../hooks/useMonchaise";
import { toast, ToastContainer } from "react-toastify";

const AllUsers = () => {
  const monchaise = useMonchaise();

  const { data, setCount } = useAllUsers();

  const handleSelect = (selectedRole, id) => {
    console.log("Selected Role:", selectedRole);
    // console.log("User ID:", userId);
    monchaise
      .patch(`/change-role/${id}`, { role: selectedRole })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          setCount((prev) => prev + 1);
          toast("Updated Role");
        }
      });
  };

  const handleBlock = (id) => {
    console.log(id);

    monchaise
      .patch(`/change-donor-status/${id}`, { status: "blocked" })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          setCount((prev) => prev + 1);
          toast("Blocked");
        }
      });
  };
  const handleActive = (id) => {
    console.log(id);

    monchaise
      .patch(`/change-donor-status/${id}`, { status: "active" })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          setCount((prev) => prev + 1);
          toast("Active");
        }
      });
  };
  if (!data) {
    return <p className="text-lime-400 text-4xl">loading</p>;
  }
  return (
    <div className="text-black ">
      <ToastContainer autoClose={500} />
      <p className="text-center text-3xl my-4 mb-8 text-cyan-400">All Donors</p>
      <div className="">
        <table className="table text-black">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} alt="photo" />
                      </div>
                    </div>
                    <div>
                      <div className={`font-bold ${user.name == 'Shihab Ullah' && 'text-red-800 text-2xl'}`}>{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className={`${user.name == 'Shihab Ullah' && 'text-red-800 font-bold text-lg'}`}>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <th className="text-white">
                  {user.status == "active" ? (
                    <button
                      onClick={() => handleBlock(user._id)}
                      className={`btn btn-ghost ${user.name == 'Shihab Ullah' && 'opacity-50 pointer-events-none'} bg-white text-black btn-xs`}
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActive(user._id)}
                      className="btn btn-ghost text-green-700 btn-xs"
                    >
                      Active
                    </button>
                  )}
                  <div className={`dropdown dropdown-hover ${user.name == 'Shihab Ullah' && 'opacity-50 pointer-events-none'}`}>
                    <div tabIndex={0} role="button" className={`btn m-1 `} >
                      Edit
                    </div>
                    <ul
                      tabIndex={0}
                      className={`dropdown-content menu ${user.name == 'Shihab Ullah' && 'opacity-50 pointer-events-none'} bg-red-50 rounded-box z-1 w-52 text-red-800 p-2 text-bold shadow-sm`}
                    >
                      <li>
                        <a onClick={() => handleSelect("admin", user._id)}>
                          Admin
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleSelect("volunteer", user._id)}>
                          Volunteer
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleSelect("donor", user._id)}>
                          Donor
                        </a>
                      </li>
                    </ul>

                    {/* {role && <p className="mt-2">Selected Role: {role}</p>} */}
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllUsers;

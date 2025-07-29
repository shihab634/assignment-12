import React from "react";
import useAllUsers from "../../hooks/useAllUsers";

const AllUsers = () => {
  // const {requests}
  const { data } = useAllUsers();
  if (!data) {
    return <p className="">loading</p>;
  }
  return (
    <div className="text-black ">
      <p className="text-center text-3xl my-4 mb-8 text-cyan-400">All Donors</p>
      <div className="overflow-x-auto">
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
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                </td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <th className="text-white">
                 {
                  user.status == 'active'? <button className="btn btn-ghost bg-white text-black btn-xs">Block</button>: <button className="btn btn-ghost text-green-700 btn-xs">Active</button>
                 }
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">
                      Edit 
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <a>Admin</a>
                      </li>
                      <li>
                        <a>Volunteer</a>
                      </li>
                    </ul>
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

import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AdminDashboard = () => {
  const [users, setUsers] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure("/get-users").then(({ data }) => setUsers(data));
  }, []);
  console.log(users);
  if (!users) {
    return <p>loading</p>;
  }
const handleChange = (e,email)=>{
  const role = e.target.value
  console.log(role,email);
  axiosSecure.patch('change-role',{role,email}).then(({data})=>{
    // console.log(data);
    if (data.modifiedCount) {
      alert('role successfully changed')
    }
    
  })
  
}
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr key={user._id}>
              <th>1</th>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <select
                  defaultValue={user.role}
                  className="select select-ghost"
                  onChange={(e)=>handleChange(e,user.email)}
                >
                  <option disabled={true}>{user.role}</option>
                  <option value={"user"}>user</option>
                  <option value={'admin'}>admin</option>
                  <option value={'moderator'}>moderator</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

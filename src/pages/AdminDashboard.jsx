import React, { use, useEffect, useState } from "react";
import useMonchaise from "../hooks/useMonchaise";
import { IoPeople } from "react-icons/io5";
import { ClipboardClock, ShoppingBag, Users } from "lucide-react";
import useAllRequests from "../hooks/useAllRequests";
import { AuthContext } from "../providers/AuthProvider";

const AdminDashboard = () => {
  const {user} = use(AuthContext)
  const [data, setData] = useState(null);
  const monchaise = useMonchaise();
  useEffect(() => {
    monchaise.get("admin-all-donors").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const { requests } = useAllRequests();
  // console.log(requests);

  if (!data) {
    return <p className="">loading</p>;
  }
  if (!requests) {
    return <p className="">loading</p>;
  }
  return (
   <div className="">
    <p className="text-3xl text-center mb-6 text-black my-4">
        Welcome Mr.{user?.displayName}
      </p>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between max-w-md w-full">
        <div className="bg-purple-100 p-3 rounded-xl">
          <Users className="text-purple-600 w-6 h-6" size={48} />
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-sm">Total Donors</p>
          <h2 className="text-2xl font-bold text-gray-800">{data.length}</h2>
          {/* <p className="text-sm text-gray-500">
          Increase by{" "}
          <span className="text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-md">
            +4.2%
          </span>{" "}
          this month
        </p> */}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between max-w-md w-full">
        <div className="bg-purple-100 p-3 rounded-xl">
          <ClipboardClock className="text-purple-600 w-6 h-6" />
          {/* < /> */}
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-sm">Total Requests</p>
          <h2 className="text-2xl font-bold text-gray-800">{requests.length}</h2>
          {/* <p className="text-sm text-gray-500">
          Increase by{" "}
          <span className="text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-md">
            +4.2%
          </span>{" "}
          this month
        </p> */}
        </div>
      </div>
    </div>
   </div>
  );
};

export default AdminDashboard;

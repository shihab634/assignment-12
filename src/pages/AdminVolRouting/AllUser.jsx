import React from "react";
import useAllUsers from "../../hooks/useAllUsers";

const AllUser = () => {
  const { data } = useAllUsers();
  if (!data) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  return (
    <div className="py-12 bg-red-100">
      <h3 className="text-red-600 text-3xl mb-4 text-center font-semibold">
        Meet Our Top Donors
      </h3>
      <p className="text-center text-gray-600 mb-6 max-w-2xl  mx-auto">
        We are committed to saving lives by connecting compassionate donors with
        those in need. Here’s why thousands trust our platform.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {data.slice(0, 6).map((donor) => (
          <div className="w-11/12  mx-auto mt-5">
            <div className="flex flex-col justify-center items-center">
              <div className="card  bg-red-100 bg-gradient-to-br from-[#101928] to-[#0c0f1c] shadow-xl text-white ">
                <div className="card-body flex-row items-center gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={donor?.photoURL} alt="Rasal Ahmad" />
                    </div>
                  </div>
                  <div>
                    <h2 className="card-title text-lg">{donor.name}</h2>
                    <p className="text-sm text-gray-300">{donor.email}</p>
                    <p className="text-sm text-red-300">
                      Blood Group: {donor.blood}
                    </p>

                    <p className="text-xs text-gray-400">
                      District: {donor.district}, Upazila: {donor.upazila}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUser;

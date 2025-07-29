import React, { use } from "react";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useDonationRequest from "../hooks/useDonationRequest";
import useMonchaise from "../hooks/useMonchaise";
import { AuthContext } from "../providers/AuthProvider";

const Request = () => {
  const { user } = use(AuthContext);
  const { data, setData } = useDonationRequest();
  const monchaise = useMonchaise();
  // console.log(data);
  if (!data) {
    return <p className="text-2xl text-green-500">Loading</p>;
  }
  const handleCancel = (id) => {
    console.log(id);
    monchaise.patch(`/cancel-request-status/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast("Canceled");
      }
    });
  };
  const handleDone = (id) => {
    console.log(id);
    monchaise.patch(`/change-request-status/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast("Done");
      }
    });
  };
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        monchaise.delete(`request-delete/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            const filtered = data.filter((x) => x._id != id);
            setData(filtered);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <ToastContainer autoClose={500} />
      <p className="text-3xl text-center text-black my-4">
        Welcome Mr.{user?.displayName}
      </p>
      <div className="overflow-x-auto">
        <table className="table rounded-box border border-base-content/5 bg-base-100">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Recipient Name & Location</th>
              <th>Donation Date & Time</th>
              <th>Blood Group</th>
              <th>Donor Name & Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((request, index) => (
              <tr className="hover:bg-base-300" key={index}>
                <th>{index + 1}</th>
                <td>{request.recipientName}<br />District: {request.district} Upazila: {request.upazila} </td>
                <td>{request.date} <br />{request.time}</td>
                <td>{request.bloodGroup}</td>
                {
                  request.status =='inprogress'?<td>Donor Name</td>:<td></td>
                }
                <td>
                  {request?.status == "inprogress" ? (
                    <div className="join join-vertical">
                      <button
                        onClick={() => handleDone(request._id)}
                        className="btn  btn-success join-item"
                      >
                        Done
                      </button>
                      <button
                        onClick={() => handleCancel(request._id)}
                        className="btn btn-error join-item"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDelete(request._id)}
                        className="btn bg-red-800 join-item"
                      >
                        Delete
                      </button>
                      <button className="btn join-item">Edit</button>
                      <Link
                        className="btn join-item btn-info"
                        to={`../donation-request-details/${request._id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn join-item btn-accent"
                        to={`../donation-request-details-edit/${request._id}`}
                      >
                        Edit
                      </Link>
                    </div>
                  ) : (
                    <div className="join join-vertical">
                      <button
                        onClick={() => handleDelete(request._id)}
                        className="btn bg-red-800 join-item"
                      >
                        Delete
                      </button>
                      <Link
                        className="btn join-item btn-info"
                        to={`../donation-request-details/${request._id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn join-item btn-accent"
                        to={`../donation-request-details-edit/${request._id}`}
                      >
                        Edit
                      </Link>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex justify-center items-center mt-5">
          <Link to={"my-donation-requests"}>
            <button className="btn  px-60  btn-outline btn-primary">
              Wide
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Request;

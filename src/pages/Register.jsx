import React, { use } from "react";
import divisions from "../assets/division.json";
import upazilas from "../assets/upazilas.json";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import {
  FaEnvelope,
  FaUser,
  FaImage,
  FaTint,
  FaMapMarkerAlt,
  FaLock,
} from "react-icons/fa";
const Register = () => {
  const { updateUser, createUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...data } = Object.fromEntries(formData.entries());
    data.status = "active";
    data.loginCount = 1;
    data.role = "donor";
    const { name, email, photoURL } = data;
    // console.log(object);
    // console.log(name, email, password);
    console.log(data);
    axios
      .post("https://assignment-12-wine.vercel.app/register", data)
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          toast("Registered!");
        }
      });
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser({ displayName: name, photoURL: photoURL });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/bMqdVgGH/anirudh-Uiw-Ut-Eq-ROEs-unsplash.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ToastContainer autoClose={1000} />
      <div className="card  bg-opacity-90 w-full max-w-sm shadow-2xl rounded-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
            Become a Donor
          </h2>
          <form onSubmit={handleSubmit} className="fieldset space-y-3">
            <label className="label text-black">
              <span className="flex items-center gap-2">
                <FaEnvelope /> Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />

            <label className="label text-black">
              <span className="flex items-center gap-2">
                <FaUser /> Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
            />

            <label className="label text-black">
              <span className="flex items-center gap-2">
                <FaImage /> Avatar
              </span>
            </label>
            <input
              name="photoURL"
              type="text"
              className="input input-bordered w-full"
              placeholder="Avatar URL"
            />

            <label className="label text-black">
              <span className="flex text-black items-center gap-2">
                <FaTint /> Blood Group
              </span>
            </label>
            <select
              name="blood"
              defaultValue="Blood Group"
              className="select select-bordered w-full"
            >
              <option disabled={true}>Pick a Blood Group</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
            </select>

            <label className="label text-black">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> District
              </span>
            </label>
            <select
              name="district"
              defaultValue="District"
              className="select select-bordered w-full"
            >
              <option disabled={true}>Pick a District</option>
              {divisions.map((division) => (
                <option value={division.name} key={division.id}>
                  {division.name}
                </option>
              ))}
            </select>

            <label className="label text-black">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> Upazila
              </span>
            </label>
            <select
              name="upazila"
              defaultValue="Upazila"
              className="select select-bordered w-full"
            >
              <option disabled={true}>Pick an Upazila</option>
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </select>

            <label className="label text-black">
              <span className="flex items-center gap-2">
                <FaLock /> Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />

            <button className="btn btn-error text-white w-full mt-4 shadow-md hover:scale-105 transition duration-300">
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already Have an Account?{" "}
            <Link className="text-green-600 font-semibold" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

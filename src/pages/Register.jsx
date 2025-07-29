import React, { use } from "react";
import divisions from "../assets/division.json";
import upazilas from "../assets/upazilas.json";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
const Register = () => {
  const { updateUser, createUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...data } = Object.fromEntries(
      formData.entries()
    );
    data.status = "active";
    data.loginCount = 1;
    data.role = "donor";
    const { name, email,photoURL } = data;
    // console.log(object);
    // console.log(name, email, password);
    console.log(data);
    axios.post("http://localhost:3000/register", data).then((res) => {
      console.log(res.data)
      
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
    <div>
      <ToastContainer autoClose={1000} />
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Name</label>
            <input
              name="name"
              type="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Avatar</label>
            <input
              name="photoURL"
              type=""
              className="input"
              placeholder="Avatar"
            />
            <label className="label">Blood Group</label>
            <select name="blood" defaultValue="Blood Group" className="select">
              <option disabled={true}>Pick a color</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-+</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
            </select>
            <label className="label">District</label>
            <select name="district" defaultValue="District" className="select">
              <option disabled={true}>Pick a color</option>
              {divisions.map((division) => (
                <option value={division.name} key={division.id}>
                  {division.name}
                </option>
              ))}
            </select>
            <label className="label">Upazila</label>
            <select name="upazila" defaultValue="Upazila" className="select">
              <option disabled={true}>Pick a color</option>
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </select>
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className="">
            Already Have an Account{" "}
            <Link className="text-green-500" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

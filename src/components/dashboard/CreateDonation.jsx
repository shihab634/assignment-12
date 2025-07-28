import { use, useEffect} from "react";
// import { AuthContext } from "../providers/AuthProvider";
import upazilas from '../../assets/upazilas.json'
import divisions from '../../assets/division.json'
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import useRoleByEmail from "../../hooks/useRoleByEmail";
import { useState } from "react";
export default function CreateDonation() {
  const { user } = use(AuthContext)
const {status} = useRoleByEmail()
const [isDisabled,setIsDisabled] = useState(false)
useEffect(()=>{
  if (status !== 'active') {
  setIsDisabled(true)
  
}
else{
  setIsDisabled(false)
}
},[status])
// if(!status){
//   return <p className="text-black text-7xl">Loading</p>
// }
// console.log(isDisabled);

// console.log(status,loading);
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const objectData = Object.fromEntries(formData.entries())
    objectData.status = 'pending'
    objectData.createdAt= new Date()
    // console.log(objectData);
    axios.post('http://localhost:3000/donation-request',objectData).then(res=>{
      if(res.data.insertedId){
        toast('SuccessFully Inserted')
        console.log(res.data);
        
      }
    })
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-4 bg-base-200 rounded-lg">
      <h2 className="text-2xl font-bold">Blood Request Form</h2>
       <ToastContainer autoClose={1000} />

      <div className="form-control">
        <label className="label">Requester Name</label>
        <input type="text" className="input input-bordered" name="requesterName" value={user?.displayName} readOnly />
      </div>

      <div className="form-control">
        <label className="label">Requester Email</label>
        <input type="email" className="input input-bordered" name="requesterEmail" value={user?.email} readOnly />
      </div>

      <div className="form-control">
        <label className="label">Recipient Name</label>
        <input type="text" className="input input-bordered" name="recipientName"  required />
      </div>

      <div className="flex gap-4">
        <div className="form-control flex-1">
          <label className="label">Recipient District</label>
          <select className="select select-bordered" name="district" required>
           <option disabled={true}>Pick a color</option>
              {divisions.map((division) => (
                <option value={division.name} key={division.id}>
                  {division.name}
                </option>
              ))}
          </select>
        </div>

        <div className="form-control flex-1">
          <label className="label">Recipient Upazila</label>
          <select className="select select-bordered" name="upazila" required>
           <option disabled={true}>Pick a color</option>
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="form-control">
        <label className="label">Hospital Name</label>
        <input type="text" className="input input-bordered" name="hospital" required />
      </div>

      <div className="form-control">
        <label className="label">Full Address</label>
        <input type="text" className="input input-bordered" name="address"  required />
      </div>

      <div className="form-control">
        <label className="label">Blood Group</label>
        <select className="select select-bordered" name="bloodGroup"  required>
          <option disabled={true}>Pick </option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-+</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
        </select>
      </div>

      <div className="flex gap-4">
        <div className="form-control flex-1">
          <label className="label">Donation Date</label>
          <input type="date" className="input input-bordered" name="date"  required />
        </div>

        <div className="form-control flex-1">
          <label className="label">Donation Time</label>
          <input type="time" className="input input-bordered" name="time"  required />
        </div>
      </div>

      <div className="form-control">
        <label className="label">Request Message</label>
        <textarea className="textarea textarea-bordered" name="message"  rows={4} required />
      </div>

      <button type="submit" disabled={isDisabled} className="btn btn-primary w-full">Submit Request</button>
    </form>
  );
} 
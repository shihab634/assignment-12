import React, { useState } from "react";
import useMonchaise from "../hooks/useMonchaise";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ContactUs = () => {
  const monchaise = useMonchaise();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    monchaise.post("/contact-us", formData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          showConfirmButton: false,
          timer:500
        });
      }
    });
    console.log("Submitted data:", formData);
  };

  return (
    <section className="bg-white py-12" id="contact">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 text-black"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 text-black"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border rounded px-4 py-2 text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+880 1234 567890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">support@blooddonorbd.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">Ashulia, Savar, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

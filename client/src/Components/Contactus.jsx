import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";
import image from "../assets/image4.png";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "phoneNumber" ? value.replace(/[^0-9]/g, "") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phoneNumber.length !== 10) {
      alert("Please enter exactly 10 digits for the phone number.");
      return;
    }
    // Submit form logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mx-auto" id="navigation_for_contactus">
      {/* Contact Section */}
      <div
        className="rounded-md bg-[#F5FCFA] bg-cover bg-center px-6 py-6 text-lg font-medium shadow-md"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "28%", // Adjust the background size here
          backgroundRepeat: "no-repeat", // Ensure no repeat for background
          backgroundPosition: "left", // Center the background image
        }}
      >
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
        <form className="mx-auto max-w-md space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            pattern="[A-Za-z\s]+"
            title="Please enter only letters."
            className="w-full border-b border-gray-300 bg-transparent p-2 focus:border-teal-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 bg-transparent p-2 focus:border-teal-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            pattern="\d{10}"
            title="Please enter exactly 10 digits."
            className="w-full border-b border-gray-300 bg-transparent p-2 focus:border-teal-500 focus:outline-none"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength="10"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full border-b border-gray-300 bg-transparent p-2 focus:border-teal-500 focus:outline-none"
            rows={1}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="flex items-center justify-center space-x-2">
            <button
              type="submit"
              className="rounded bg-teal-500 px-8 py-2 text-white transition duration-200 hover:bg-teal-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

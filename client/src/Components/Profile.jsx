import React from "react";
import {
  FaUser,
  FaMoneyBillWave,
  FaCog,
  FaChalkboardTeacher,
  FaRegCopy,
  FaAngleDown,
} from "react-icons/fa";
import image from "../assets/profile.png";
import background from "../assets/background.png";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

const items = [
  {
    value: "personal-information",
    trigger: "Personal Information",
    icon: <FaUser/>,
    content:
      "We offer standard delivery (3-5 business days) and express delivery (1-2 business days).",
  },
  {
    value: "my-subscription",
    trigger: "My Subscription",
    icon: <FaRegCopy/>,
    content:
      "You can return items within 30 days of delivery for a full refund.",
  },
  {
    value: "my-mentors",
    trigger: "My Mentor's",
    icon: <FaChalkboardTeacher/>,
    content:
      "Yes, we ship to most countries worldwide. Shipping costs vary by location.",
  },
  {
    value: "refer-and-earn",
    trigger: "Refer and Earn",
    icon: <FaMoneyBillWave/>,
    content:
      "Yes, we ship to most countries worldwide. Shipping costs vary by location.",
  },
  {
    value: "settings",
    trigger: "Settings",
    icon: <FaCog/>,
    content:
      "Yes, we ship to most countries worldwide. Shipping costs vary by location.",
  },
];

const Profile = () => {
  return (
    <div className="bg-gray-100">
      {/* Profile Section */}
      <div
        className="py-12 shadow-lg"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="text-center">
              <img
                className="mx-auto h-32 w-32 rounded-full object-cover object-top"
                src={image}
                alt="Profile"
              />
              <h2 className="mt-4 text-2xl font-bold">Sarah Shiekh</h2>
              <p className="mt-2 text-gray-500">+91-123456789</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Options */}
      <div className="w-full">
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="divide-y divide-gray-200 border-t border-gray-200 p-2">
            <Accordion defaultValue="item-1" type="single">
              {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger icon={item.icon}>{item.trigger}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Option Component
const ProfileOption = ({ Icon, label }) => {
  return (
    <button className="flex w-full items-center justify-between space-x-4 px-6 py-4 text-left hover:bg-gray-50 focus:outline-none">
      <div className="flex items-center sm:space-x-4">
        <Icon className="hidden text-blue-500 sm:block" size={24} />
        <span className="text-lg font-medium text-gray-900">{label}</span>
      </div>
      <div>
        <FaAngleDown />
      </div>
    </button>
  );
};

export default Profile;

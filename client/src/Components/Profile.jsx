import React from "react";
import {
  FaUser,
  FaMoneyBillWave,
  FaCog,
  FaChalkboardTeacher,
  FaRegCopy,
  FaAngleDown,
  FaEnvelope,
  FaIdCard,
  FaBookReader,
  FaChevronRight
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Custom Accordion Components
const Accordion = ({ children, type = "single", className = "" }) => {
  return (
    <div className={`divide-y divide-gray-100 ${className}`}>
      {children}
    </div>
  );
};

const AccordionItem = ({ value, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-100 last:border-none" data-state={isOpen ? "open" : "closed"}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, setIsOpen })
      )}
    </div>
  );
};

const AccordionTrigger = ({ children, icon, isOpen, setIsOpen }) => {
  return (
    <button
      className="group flex w-full items-center justify-between px-6 py-4 transition-all hover:bg-gray-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center space-x-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#488B80] transition-colors group-hover:bg-blue-100">
          {icon}
        </div>
        <span className="text-lg font-medium text-gray-900">{children}</span>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-gray-400"
      >
        <FaChevronRight className="h-5 w-5" />
      </motion.div>
    </button>
  );
};

const AccordionContent = ({ children, isOpen }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden bg-gray-50"
    >
      <div className="p-6">{children}</div>
    </motion.div>
  );
};

const Profile = () => {
  // const user = {
  //   id: "6717605c2cfbf8ecb93dd8e8",
  //   name: "Test",
  //   email: "test4@gmail.com",
  //   avatar: "",
  //   student_services: {
  //     neetTestSeries: false,
  //     jeeTestSeries: false,
  //     doubtClearing: false
  //   }
  // };
const user=useSelector((state)=>state.user.user.user)
const navigate =useNavigate()
  const items = [
    {
      value: "personal-information",
      trigger: "Personal Information",
      icon: <FaUser />,
      content: (
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex items-center space-x-3 border-l-4 border-[#488B80] bg-white p-4">
              <FaIdCard className="text-[#488B80]" />
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-gray-900">{user?.name}</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="flex items-center space-x-3 border-l-4 border-[#488B80] bg-white p-4">
              <FaEnvelope className="text-[#488B80]" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-900">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      value: "educational-services",
      trigger: "Educational Services",
      icon: <FaBookReader />,
      content: (
        <div className="space-y-4">
          {Object.entries(user?.student_services).map(([service, isActive]) => (
            <div
              key={service}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${isActive ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                    <FaBookReader />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {service.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className={`text-sm ${isActive ? 'text-green-600' : 'text-red-600'}`}>
                      {isActive ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                </div>
                <button className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#488B80] opacity-0 transition-opacity group-hover:opacity-100"
                onClick={()=>{
                  if(service==="neetTestSeries"){
                    navigate('/neet-price')
                  }
                  if(service==="jeeTestSeries"){
                    navigate('/jee-price')
                  } 
                  if(service==="doubtClearing"){
                    navigate('/doubtsection')
                  }

                }}>
                  {isActive ? 'Manage' : 'Activate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    // {
    //   value: "settings",
    //   trigger: "Settings",
    //   icon: <FaCog />,
    //   content: (
    //     <div className="space-y-4">
    //       <div className="rounded-lg bg-white p-4 shadow-sm">
    //         <div className="space-y-4">
    //           <button className="w-full rounded-lg bg-[#488B80] px-4 py-3 text-white transition-colors hover:bg-blue-600">
    //             Edit Profile
    //           </button>
    //           <button className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50">
    //             Change Password
    //           </button>
    //           <button className="w-full rounded-lg border border-red-200 px-4 py-3 text-red-600 transition-colors hover:bg-red-50">
    //             Delete Account
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-[#488B80] to-[#488B80] py-12 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="text-center">
              {user.avatar ? (
                <img
                  className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
                  src={user?.avatar}
                  alt={user?.name}
                />
              ) : (
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg">
                  <FaUser className="h-16 w-16 text-gray-400" />
                </div>
              )}
              <h2 className="mt-4 text-2xl font-bold text-white">{user.name}</h2>
              <p className="mt-2 text-blue-100">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <Accordion type="single">
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
  );
};

export default Profile;
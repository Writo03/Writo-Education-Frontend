import { useState } from "react";
import Services from "./Services";
import Events from "./Events";
import "./NavBar2.css";

const NavBar2 = () => {
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [selected, setSelected] = useState(""); 

  const handleServicesClick = () => {
    setSelected((prev) => (prev === "services" ? "" : "services"));
    setShowServices((prevState) => !prevState);
    setShowEvents(false); // Hide Events component when Services component is clicked
    console.log("Clicked Services");
  };

  const handleEventsClick = () => {
    setSelected((prev) => (prev === "events" ? "" : "events"));
    setShowEvents((prevState) => !prevState);
    setShowServices(false); // Hide Services component when Events component is clicked
    console.log("Clicked Events");
  };

  return (
    <nav className="w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-2 pr-4 md:px-6 lg:px-8">
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            className={`${
              selected === "services" && "bg-[#488b80]"
            } text-black font-medium text-base md:text-2xl sm:mr-2 hover:bg-[#488b80] rounded-md px-2`}
            onClick={handleServicesClick}
          >
            Services
          </button>
          <button
            className={`${
              selected === "events" && "bg-[#488b80]"
            } text-black font-medium text-base md:text-2xl sm:mr-2 hover:bg-[#488b80] rounded-md px-2`}
            onClick={handleEventsClick}
          >
            Events
          </button>
        </div>
        <div className="flex items-center space-x-4 md:space-x-10 ml-2">
          <button className="px-4 py-1 border  border-gray-400  rounded-lg hover:border-black text-xs md:text-base">
            Search class
          </button>
          <button className="px-2 py-1 bg-[#488B80] hover:bg-[#e5e7eb] hover:text-black text-white rounded text-xs md:text-base">
            View plans
          </button>
        </div>
      </div>

      {/* Conditional rendering of Services component */}
      {showServices && <Services className="services-component" />}

      {/* Conditional rendering of Events component */}
      {showEvents && <Events className="events-component" />}
    </nav>
  );
};

export default NavBar2;

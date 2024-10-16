import { useState } from "react";
import Services from "./Services";
import Events from "./Events";
import "./NavBar2.css";
import { CiSearch } from "react-icons/ci";

const NavBar2 = () => {
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 pr-4 md:px-6 lg:px-8">
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            className={`${
              selected === "services" && "bg-[#488b80]"
            } rounded-md px-2 text-base font-medium text-black hover:bg-[#488b80] sm:mr-2 md:text-2xl`}
            onClick={handleServicesClick}
          >
            Services
          </button>
          <button
            className={`${
              selected === "events" && "bg-[#488b80]"
            } rounded-md px-2 text-base font-medium text-black hover:bg-[#488b80] sm:mr-2 md:text-2xl`}
            onClick={handleEventsClick}
          >
            Events
          </button>
        </div>
        <div className="ml-2 flex items-center space-x-4 md:space-x-10">
          {/* <button className="px-4 py-1 border  border-gray-400  rounded-lg hover:border-black text-xs md:text-base">
            Search class
          </button> */}
          <div className="relative flex w-20 items-center justify-center text-xs md:w-1/2 md:text-base">
            <CiSearch className="absolute left-2" />
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-full w-full rounded-lg border border-[#488B80] px-4 py-3 pl-6 hover:border-black"
              placeholder="Search"
            />
          </div>
          <button className="rounded bg-[#488B80] px-2 py-1 text-xs text-white hover:bg-[#e5e7eb] hover:text-black md:text-base">
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

import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import MentorCard from './Components/MentorCard';
import HeroSection from './Components/HeroSection';
import NavScrollExample from './Components/NavScrollExample';
import About from './Components/About';

const App = () => {
    const mentors = [
        {
          name: "Rashmi Poonea",
          image: "https://dummyimage.com/81x81",
          subjects: ["Maths", "Physics"],
          university: "IIT Madras",
          year: 2016
        },
        {
          name: "John Doe",
          image: "https://dummyimage.com/81x81",
          subjects: ["Chemistry", "Biology"],
          university: "MIT",
          year: 2015
        },
        {
          name: "Jane Smith",
          image: "https://dummyimage.com/81x81",
          subjects: ["History", "Geography"],
          university: "Harvard",
          year: 2018
        }, {
            name: "Jan Smith",
            image: "https://dummyimage.com/81x81",
            subjects: ["History", "Geography"],
            university: "Harvard",
            year: 2018
          }
      ];
    
    return (
        <div>
          <div className="font-[Poppins] h-screen overflow-h bg1">
            <Navbar />
            <HeroSection/>
        </div>
        <About />
          {/* <MentorCard mentors={mentors} /> */}
        </div>
    );
};

export default App;

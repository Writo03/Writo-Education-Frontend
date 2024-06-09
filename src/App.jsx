import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import MentorCard from './Components/MentorCard';
import HeroSection from './Components/HeroSection';
import NavScrollExample from './Components/NavScrollExample';
import About from './Components/About';
import TestimonialCard from './Components/TestominalCard';
import image from './assets/image copy.png';
import image1 from './assets/image3.png';
import Contactus from './Components/Contactus';
import Test from './Components/Test';
const App = () => {
    const mentors = [
        {
          name: "Rashmi Poonea",
          image: image1,
          subjects: ["Maths", "Physics"],
          university: "IIT Madras",
          year: 2016
        },
        {
          name: "John Doe",
          image: image1,
          subjects: ["Chemistry", "Biology"],
          university: "MIT",
          year: 2015
        },
        {
          name: "Jane Smith",
          image: image1,
          subjects: ["History", "Geography"],
          university: "Harvard",
          year: 2018
        }, {
            name: "Jan Smith",
            image: image1,
            subjects: ["History", "Geography"],
            university: "Harvard",
            year: 2018
          }
      ];
      const testimonialsData = [
        {
          name: "Henry Letham",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 4 
        },
        {
          name: "Holden Caulfield",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 3
        },
        {
          name: "Alper Kamu",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 5
        },
        {
          name: "Henry Letham",
          text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
          image: image,
          stars: 2
        }
      ];
      
    return (
        <div>
          <div className="font-[Poppins] h-screen overflow-h bg1">
            <Navbar />
            <HeroSection/>
        </div>
        <About />
          <MentorCard mentors={mentors} />
          <Test />
          <TestimonialCard testimonials={testimonialsData} />
          <Contactus />
        </div>
    );
};

export default App;

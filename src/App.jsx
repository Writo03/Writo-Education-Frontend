import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import MentorCard from './Components/MentorCard';

const App = () => {
    return (
        <div className="font-[Poppins] h-screen  overflow-x-hidden">
            <Navbar />
            <MentorCard/>
        </div>
    );
};

export default App;

import React from 'react';
import Community_nav from './Community_nav';

const CommunityGuidelines = () => {
  return (
    <>  
        <Community_nav />
        <div className='bg2'>
            <div className="max-w-4xl mx-auto p-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-[#488B80] item1 mb-6">Community Guidelines</h1>
            <p className="lg:text-lg text-sm mb-8">
                Writo is an online community for students to learn, share experiences, create student-enabled social impact solutions,
                and spread awareness in an inclusive way. The community is open and free for students from across the country to join.
            </p>

            {/* Guidelines */}
            <h2 className="text-xl  text-[#488B80] item1  mb-4">To make the community a safe and inclusive space, all are expected to adhere to the following:</h2>
            <ul className="lg:text-lg text-sm list-inside mb-6">
                <li>Be respectful to others in the community</li>
                <li>Be direct and communicate in a proper manner</li>
                <li>Be inclusive of all gender, nationality, caste, etc.</li>
                <li>Understand different perspectives while having a discourse within the community</li>
                <li>Appreciate and accommodate our similarities and differences</li>
                <li>Lead by example</li>
            </ul>

            {/* Unacceptable behaviors */}
            <h2 className="text-xl  text-[#488B80] item1 mb-4">The following behaviors will not be accepted and will invite disciplinary action:</h2>
            <ul className="lg:text-lg text-sm list-inside mb-6">
                <li>Violence and threats of violence against individuals or groups</li>
                <li>Personal attacks against members inside the community</li>
                <li>Derogatory language towards anyone, in any conversation</li>
                <li>Unwelcome attention or physical contact towards anyone within the community</li>
                <li>Disruptive behavior when in the community</li>
                <li>Influencing unacceptable behavior to instigate a reaction</li>
            </ul>

            {/* Reporting Section */}
            <h2 className="text-2xl text-[#488B80] item1 mb-4">Reporting</h2>
            <p className="lg:text-lg text-sm mb-6">
                Reports of harassment/discrimination will be promptly and thoroughly investigated and appropriate measures will be taken to address the situation.
                False reporting, especially to retaliate or exclude, will not be accepted or tolerated.
            </p>
            <p>
                In addition, any participant found to abuse the reporting process will be considered to be in violation of these guidelines and invite disciplinary action.
            </p>
            </div>
        </div>
    </>    
  );
};

export default CommunityGuidelines;

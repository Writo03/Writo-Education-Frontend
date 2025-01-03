// App.js
import React from 'react';

const StudentReviewCards = () => {
  const testimonials = [
    { 
      name: "Harsh Rawat",
      text: "Thank You Writo for helping me with amazing Tutors and community",
      img: "https://storage.googleapis.com/a1aa/image/4UDPbvrqDB5IH5M3NXzq2MEZezNJ0PQ7UI8U1INR5Apq6U1JA.jpg",
    },
    {
      name: "Sarah Shiekh",
      text: "I struggled with Maths but Writo helped me with providing Detailed solutions",
      img: "https://storage.googleapis.com/a1aa/image/tK72uAh8x8rnJJQNYtxkFzOBdfKYT6KM7ZDdejeN6unxqTVnA.jpg",
    },
    {
      name: "Aman Shri",
      text: "Writo helped me get a 100% on my Maths Test",
      img: "https://st2.depositphotos.com/1240434/5795/i/450/depositphotos_57959497-stock-photo-beautiful-young-indian-student-holding.jpg",
    },
    {
      name: "Utkarsh Singh",
      text: "Was able to ask questions, seek explanation and engage with mentors",
      img: "https://www.shutterstock.com/image-photo/portrait-confident-young-boy-260nw-1700676295.jpg",
    },
    {
      name: "Shivani",
      text: "Live Doubt solving sessions are the best at Writo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLLNn0775n0yKr52mVgUljCk5GF2X1pzqCA&s",
    },
  ];

  return (
    <div className="p-8 bg-blue-50 ">
      <div className=" mb-8">
        <h1 className="text-4xl item2  font-medium  ">
          Understand better,
        </h1>
        <span className="text-gradient item-5   font-medium  text-3xl lg:text-5xl item2">Join Millions of students using Writo!</span>
      </div>
      <div className="grid m-auto lg:w-[75%] grid-cols-1 md:grid-cols-3 gap-2 lg:gap-20">
      {/* <div className="m-auto lg:w-[75%] flex justify-evenly flex-wrap flex-row items-center"> */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black rounded-lg p-4 shadow-sm flex min-w-[300px] space-x-4"
          >
            <img
              src={testimonial.img}
              alt={`Profile of ${testimonial.name}`}
              className="w-16 h-16 rounded-full"
            />
            <div className='flex flex-col gap-6'>
              <div className="font-semibold text-xl mt-4  item-5">{testimonial.name}</div>
              <p className="text-[#434343]">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviewCards;

import React from 'react';

const FacultyMember = ({ name, subjects, university, year, imageUrl }) => (
  <div className="bg-white border bg-card-background flex flex-col gap-8 border-gray-200 rounded-lg p-6 text-center">
    <img 
      src={imageUrl}
      alt={`Portrait of ${name}`}
      className="mx-auto rounded-full  w-36 h-36"
    />
    <h2 className="text-3xl font-bold item3 ">{name}</h2>
    <div className="flex justify-center space-x-2 ">
      {subjects.map((subject, index) => (
        <span 
          key={index} 
          className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full"
        >
          {subject}
        </span>
      ))}
    </div>
    <p className="text-gray-600 text-xl  item3">{`${university}, ${year}`}</p>
  </div>
);

const FacultyShowcase = () => {
  const facultyMembers = [
    {
      name: "Suresh Iyer",
      subjects: ["Maths", "Physics"],
      university: "IIT Madras",
      year: "2016",
      imageUrl: "https://storage.googleapis.com/a1aa/image/6TlebIZFl4y2Ri24Adox2lFv62iyTabnInoV9cwNKdMjjd1JA.jpg"
    },
    {
      name: "Suresh Iyer",
      subjects: ["Maths", "Physics"],
      university: "IIT Madras",
      year: "2016",
      imageUrl: "https://storage.googleapis.com/a1aa/image/6TlebIZFl4y2Ri24Adox2lFv62iyTabnInoV9cwNKdMjjd1JA.jpg"
    },
    {
      name: "Suresh Iyer",
      subjects: ["Maths", "Physics"],
      university: "IIT Madras",
      year: "2016",
      imageUrl: "https://storage.googleapis.com/a1aa/image/6TlebIZFl4y2Ri24Adox2lFv62iyTabnInoV9cwNKdMjjd1JA.jpg"
    }
  ];

  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className=" mb-8">
          <h1 className="lg:text-5xl text-3xl item2 text-[#434343] font-bold">Prestigious & Renowned</h1>
          <p className="lg:text-4xl text-2xl ml-4 item2 font-normal text-[#434343]">Faculty at Writo</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-28">
          {facultyMembers.map((faculty, index) => (
            <FacultyMember key={index} {...faculty} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyShowcase;
/* eslint-disable react/no-unescaped-entities */
//import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import MathsIcon from "../../assets/class6-maths.jpg";
import ScienceIcon from "../../assets/class6-physics.png";

// import Class6 from "../../assets/class-6.jpg";
// import Class7 from "../../assets/class-7.jpg";
// import Class8 from "../../assets/class-8.jpg";
// import Class9 from "../../assets/class-9.jpg";
// import Class10 from "../../assets/class-10.jpg";
// import Class11 from "../../assets/class-11.jpg";
// import Class12 from "../../assets/class-12.jpg";
import NEET from "../../assets/neet.jpg";
import JEE from "../../assets/jee.jpg";

function CoursesPages() {
  const classes = [
    {
      title: "Class 6",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-6/beforepay",
    },
    {
      title: "Class 7",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-7/beforepay",
    },
    {
      title: "Class 8",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-8/beforepay",
    },
    {
      title: "Class 9",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-9/beforepay",
    },
    {
      title: "Class 10",
      description: "All subjects covered",
      students: "3000+ Students Enrolled",
      destination: "/class-10/beforepay",
    },
  ];
  return (
    <>
      {/* Our Features Section */}

      <div className="flex flex-col items-center">
        <h2 className="mt-8 text-2xl font-bold">Our Features</h2>
        <div className="relative mx-auto mt-10 w-full max-w-md">
          <div className="relative mx-auto mt-10 h-72 w-80">
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-black"></div>
            <div className="absolute -top-10 left-1/2 flex -translate-x-1/2 transform flex-col items-center">
              <img src={NEET} alt="Practice Tests" className="h-20 w-20" />
              <p className="mt-2 text-center">Practice Tests</p>
            </div>
            <div className="absolute -bottom-10 left-1/2 flex translate-x-1/2 transform flex-col items-center">
              <img src={NEET} alt="Video Lectures" className="h-20 w-20" />
              <p className="mt-2 text-center">Video Lectures</p>
            </div>
            <div className="absolute -bottom-10 right-2/4 flex -translate-x-1/2 transform flex-col items-center">
              <img src={NEET} alt="Video Lectures" className="h-20 w-20" />
              <p className="mt-2 text-center">Video Lectures</p>
            </div>
            <div className="tra absolute -left-10 top-1/3 flex -translate-y-1/3 transform flex-col items-center">
              <img src={NEET} alt="Happy Customers" className="h-20 w-20" />
              <p className="mt-2 text-center">Happy Customers</p>
            </div>
            <div className="absolute -right-10 top-1/3 flex -translate-y-1/3 transform flex-col items-center">
              <img src={NEET} alt="Happy Customers" className="h-20 w-20" />
              <p className="mt-2 text-center">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Available Section */}

      <div className="mt-16 flex flex-col items-center">
        <h2 className="mt-8 text-2xl font-bold">Classes Available</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="w-80 rounded-lg border-2 border-[#488B80] shadow-md transition-shadow hover:shadow-lg"
            >
              <Link to={`${classItem.destination}`}>
                <h3 className="mb-2 rounded-b-lg bg-[#488B80] p-2 text-center text-xl font-semibold text-white">
                  {classItem.title}
                </h3>
              </Link>
              <p className="mb-1 p-2 text-center">{classItem.description}</p>
              <p className="p-2 text-center font-bold text-[#488B80]">
                {classItem.students}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*Subjects Covered Section */}

      <div className="mt-16 flex flex-col items-center justify-center bg-white">
        <h1 className="mb-8 text-2xl font-bold md:text-4xl">
          Subjects Covered
        </h1>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4 md:gap-x-6 lg:gap-x-8">
          {["Social", "Maths", "Science", "Competitive"].map((subject, idx) => (
            <div
              key={idx}
              className="group flex w-full cursor-pointer flex-col items-center justify-center"
            >
              <div className="mb-4 w-full overflow-hidden rounded-md object-cover object-center">
                <img
                  src={idx % 2 === 0 ? ScienceIcon : MathsIcon}
                  alt={subject}
                  className="w-full rounded-lg object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <p className="w-full bg-[#488b80] text-center text-lg text-white md:text-xl">
                {subject}
              </p>
            </div>
          ))}
          {/* <div className="flex flex-col items-center bg-red-400">
            <div className="overflow-hidden rounded-md object-cover object-center">
              <img
                src={ScienceIcon}
                alt="Social"
                className="w-42 md:h-32 rounded-lg mb-4 hover:scale-105 transition-all duration-500"
              />
            </div>
            <p className="text-center text-lg md:text-xl">Social</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={MathsIcon}
              alt="Maths"
              className=" w-32 md:h-32 rounded-lg mb-4 hover:scale-125"
            />
            <p className="text-center text-lg md:text-xl">Maths</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={ScienceIcon}
              alt="Science"
              className=" w-32 md:h-32 rounded-lg mb-4 hover:scale-125"
            />
            <p className="text-center text-lg md:text-xl">Science</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={MathsIcon}
              alt="Competitive"
              className=" w-32 md:h-32 rounded-lg mb-4 hover:scale-125"
            />
            <p className="text-center text-lg md:text-xl">Competitive</p>
          </div> */}
        </div>
      </div>

      {/*lurning companion section */}
      <div className="mt-32 flex flex-col items-center justify-center space-y-8 bg-white p-4 md:p-8">
        <h1 className="mb-8 text-center text-xl font-bold text-black">
          The Learning App is every student's favourite learning companion
        </h1>

        {/* Comprehensive Curriculum Section */}
        <div className="flex w-full flex-col items-center justify-center md:w-3/4 md:flex-row">
          <div className="flex w-full flex-col gap-y-8 md:w-11/12 md:flex-row md:gap-x-16">
            <img
              src={JEE}
              alt="Comprehensive Curriculum"
              className="h-64 w-full rounded-3xl border border-black md:h-72 md:w-1/2"
            />
            <div className="flex flex-col justify-center gap-y-4 md:gap-y-7">
              <h2 className="text-center text-xl font-bold md:text-left md:text-2xl">
                Comprehensive curriculum
              </h2>
              <p className="text-md mx-auto w-full text-center md:mx-0 md:w-3/4 md:text-left md:text-sm">
                The app should cover all the major subjects that students in
                grades 6-10 typically learn, such as math, English, science,
                social studies, and history.
              </p>
            </div>
          </div>
        </div>

        {/* Engaging Content Section */}
        <div className="flex w-full flex-col items-center justify-center md:w-3/4 md:flex-row">
          <div className="flex w-full flex-col gap-y-8 md:w-11/12 md:flex-row md:gap-x-16">
            <div className="flex flex-col items-center justify-center gap-y-4 md:gap-y-7">
              <h2 className="text-center text-xl font-bold md:mr-20 md:text-left md:text-2xl">
                Engaging Content
              </h2>
              <p className="text-md mx-auto w-full text-center md:mx-0 md:w-3/4 md:text-left md:text-sm">
                The app should use a variety of engaging content formats to keep
                students interested, such as interactive lessons, videos,
                simulations, games, and quizzes.
              </p>
            </div>
            <img
              src={NEET}
              alt="Engaging Content"
              className="h-64 w-full rounded-3xl border border-black md:h-72 md:w-1/2"
            />
          </div>
        </div>

        {/* Personalized Learning Section */}
        <div className="flex w-full flex-col items-center justify-center md:w-3/4 md:flex-row">
          <div className="flex w-full flex-col gap-y-8 md:w-11/12 md:flex-row md:gap-x-16">
            <img
              src={JEE}
              alt="Personalized Learning"
              className="h-64 w-full rounded-3xl border border-black md:h-72 md:w-1/2"
            />
            <div className="flex flex-col justify-center gap-y-4 md:gap-y-7">
              <h2 className="text-center text-xl font-bold md:text-left md:text-2xl">
                Personalized learning
              </h2>
              <p className="text-md mx-auto w-full text-center md:mx-0 md:w-3/4 md:text-left md:text-sm">
                The app should allow students to learn at their own pace and
                level by providing personalized learning paths. This could
                include adaptive learning technology that adjusts the difficulty
                of the content based on the student's performance.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Tracking Section */}
        <div className="flex w-full flex-col items-center justify-center md:w-3/4 md:flex-row">
          <div className="flex w-full flex-col gap-y-8 md:w-11/12 md:flex-row md:gap-x-16">
            <div className="flex flex-col justify-center gap-y-4 md:items-center md:gap-y-7">
              <h2 className="text-center text-xl font-bold md:mr-8 md:text-left md:text-2xl">
                Performance tracking
              </h2>
              <p className="text-md mx-auto w-full text-center md:mx-0 md:w-3/4 md:text-left md:text-sm">
                The app should track student progress and provide feedback to
                help them identify areas where they need improvement. This could
                include features such as progress reports, quizzes, and
                diagnostic tests.
              </p>
            </div>
            <img
              src={NEET}
              alt="Performance Tracking"
              className="h-64 w-full rounded-3xl border border-black md:h-72 md:w-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesPages;

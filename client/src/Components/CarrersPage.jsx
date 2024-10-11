import img from "./ourresults.png";
import JobOffer from "./JobOffers";
import Contactus from "./Contactus";
import JobDetail from "../Pages/JobDetail";


const Card = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-2xl p-6 md:m-4 mb-4 flex-1 lg:min-h-[205px]">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 w-full md:w-2/3">{description}</p>
  </div>
);

const Cards = () => {
  const cardData = [
    {
      title: "Immersive Exploration",
      description:
        "Over 200 students have successfully completed immersive training programs in fields like data science, AI, and web development",
    },
    {
      title: "Seamless Matching",
      description:
        "98% of graduates have secured jobs within 3 months of course completion, thanks to our personalized job matching services.",
    },
    {
      title: "Streamlined Communication",
      description:
        "We facilitate ongoing dialogue between students and career mentors through dedicated channels and periodic feedback.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-4 m">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

const CarrersPage = () => {
  return (
    <>
   
      <h2 className="text-3xl text-[#184948] font-bold my-5 lg:my-10 text-center ">
        Our Results
      </h2>
      <div className="flex flex-col lg:flex-row items-center bg-white px-6 lg:px-24 py-8 lg:py-8">
      
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-24">
              <div className="text-center">
                <p className="text-xl md:text-4xl  font-bold text-[#184948]">65+</p>
                <p className="text-gray-600 text-sm md:text-base">
                  Members in Our team
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-4xl font-bold text-[#184948] ">20+</p>
                <p className="text-gray-600 text-sm md:text-base">
                 Faculty trainee in Our team
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-4xl font-bold text-[#184948] ">40+</p>
                <p className="text-gray-600 text-sm md:text-base">
                Members in Our Teachinical team
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl md:text-4xl font-bold text-[#184948] ">10000+</p>
                <p className="text-gray-600 text-sm md:text-base">
                  Students in Our Community
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src={img}
              alt="Results Illustration"
              className="w-full lg:w-3/4 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 mx-6 lg:mx-24">
        <p className="text-[#184948] mr-4">WHAT WE OFFER</p>
        <div className="flex-1 border-t border-black ml-6"></div>
      </div>
      <div className="lg:mr-14 lg:ml-14">
        <Cards />
      </div>
      <div className="flex items-center mt-5 mx-6 lg:mx-24">
        <p className="text-[#184948] mr-4 text-3xl">Latest Job Offer</p>
        <div className="flex-1 border-t border-black ml-6"></div>
      </div>
      <div className="lg:mr-20 lg:ml-20">
        <JobOffer />
      </div>
      <div className="mt-2 mb-8">
        <div className="flex flex-row gap-x-4 justify-center items-center mt-10">
          <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
          <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center">
            Having doubts
          </h2>
          <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
        </div>
        <div className="flex flex-row gap-x-4 justify-center items-center mt-4 mb-4">
          <h1 className="text-[#488B80] text-3xl">Query</h1>
        </div>
      </div>
      <div className="w-full">
        <Contactus />
      </div>
     
    </>
  );
};

export default CarrersPage
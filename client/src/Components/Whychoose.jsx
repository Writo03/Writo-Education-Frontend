import React,{useEffect} from 'react'
import { FaChalkboardTeacher, FaRegLightbulb, FaComments, FaClipboardList, FaUserGraduate } from 'react-icons/fa';
import Lower_footer from './Lower_footer';
import Contactus from './Contactus';

const Whychoose = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
       <div>
         <div className='flex flex-col items-center p-6 bg-gray-100'>
            <h2 className='text-[#184948] text-3xl font-bold mb-6'>Why Choose Writo in Education Institutions?</h2>
            <div className='w-full max-w-2xl'>
                <ul className='list-none text-gray-800 text-lg space-y-6'>
                    <p className='flex items-start'>
                        <FaChalkboardTeacher className='text-blue-500 text-2xl mr-4 mt-1'/>
                        <div>
                            <h3 className='font-semibold text-xl'>Improved collaboration between teachers and students:</h3>
                            <p className='leading-relaxed'>Writo provides tools and platforms that facilitate better interaction and teamwork between teachers and students, enhancing the overall learning experience.</p>
                        </div>
                    </p>
                    <p className='flex items-start'>
                        <FaRegLightbulb className='text-yellow-500 text-2xl mr-4 mt-1'/>
                        <div>
                            <h3 className='font-semibold text-xl'>Efficient management of educational resources:</h3>
                            <p className='leading-relaxed'>With Writo, educational institutions can streamline the organization and distribution of resources, making it easier for teachers to access and share materials.</p>
                        </div>
                    </p>
                    <p className='flex items-start'>
                        <FaComments className='text-green-500 text-2xl mr-4 mt-1'/>
                        <div>
                            <h3 className='font-semibold text-xl'>Enhanced communication and feedback:</h3>
                            <p className='leading-relaxed'>Writo allows for seamless communication channels between teachers and students, enabling timely and constructive feedback to support student growth and learning.</p>
                        </div>
                    </p>
                    <p className='flex items-start'>
                        <FaClipboardList className='text-red-500 text-2xl mr-4 mt-1'/>
                        <div>
                            <h3 className='font-semibold text-xl'>Streamlined assessment and grading process:</h3>
                            <p className='leading-relaxed'>The platform offers tools that simplify the creation, distribution, and grading of assessments, reducing the administrative burden on teachers and providing students with quicker feedback.</p>
                        </div>
                    </p>
                    <p className='flex items-start'>
                        <FaUserGraduate className='text-purple-500 text-2xl mr-4 mt-1'/>
                        <div>
                            <h3 className='font-semibold text-xl'>Personalized learning experiences:</h3>
                            <p className='leading-relaxed'>Writo supports personalized learning paths, allowing educators to tailor the educational experience to the needs and abilities of individual students, fostering a more effective learning environment.</p>
                        </div>
                    </p>
                </ul>
            </div>
           
        </div>
       <Contactus/>
       </div>
    )
}

export default Whychoose

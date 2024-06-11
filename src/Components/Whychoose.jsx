import React from 'react'

const Whychoose = () => {
    return (
        <div className='ali justify-center items-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'blue', fontSize: '24px' }}>Why Choose Writo in Education Institutions?</h2>
            <div>
                <ul className="list-disc ml-4" style={{ color: 'green', fontSize: '16px' }}>
                    <li>Improved collaboration between teachers and students</li>
                    <li>Efficient management of educational resources</li>
                    <li>Enhanced communication and feedback</li>
                    <li>Streamlined assessment and grading process</li>
                    <li>Personalized learning experiences</li>
                </ul>
            </div>
        </div>
    )
}

export default Whychoose

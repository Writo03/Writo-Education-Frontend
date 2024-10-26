import { Link } from "react-router-dom"

function Cart({ id = "66bcbf02c6fc8d227f01d422" }) {
  return (
    <div className="flex gap-3 px-3 flex-wrap items-center justify-center">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          // <div
          //   key={index}
          //   className="w-full md:w-[45%] lg:w-[30%] bg-white border border-black rounded-lg p-4"
          // >
          //   <h1 className="text-[#07744E] font-semibold text-lg">
          //     Physics Test
          //   </h1>
          //   <p className="text-black">25 Questions</p>
          //   <p className="text-black">Reattempted also available</p>
          //   <div className="flex flex-col gap-2 mt-2">
          //     <div className="text-black flex flex-row gap-4">
          //       <p className="font-semibold text-lg">Questions</p>
          //       <span>:</span>
          //       <span>100</span>
          //     </div>
          //     <div className="text-black flex flex-row gap-4">
          //       <p className="font-semibold text-lg">Time</p>
          //       <span className="ml-12">:</span>
          //       <span>100 minutes</span>
          //     </div>
          //   </div>
          //   <div className="flex justify-between mt-4">
          //     <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          //       GoTo Test
          //     </button>
          //     <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">
          //       View Details
          //     </button>
          //   </div>
          // </div>
          <div className="w-full md:w-[45%] lg:w-[30%] rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <h2 className="text-2xl font-bold text-[#07744E] mb-2">Physics</h2>
            <p className="text-black mb-1">25 Questions Papers</p>
            <p className="text-black mb-4">Reattempted also available</p>

            <div className="space-y-2 mb-6">
              <div className="flex ">
                <span className="font-semibold w-24">Questions</span>
                <span>: 100</span>
              </div>
              <div className="flex ">
                <span className="font-semibold w-24">Time</span>
                <span>: 100 Minutes</span>
              </div>
            </div>

            <div className="flex justify-between">
              <Link to={`/jee-all-india-test-series`}>
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
                  GoTo Test
                </button>
              </Link>
      
            </div>
          </div>
        ))}
    </div>
  )
}

export default Cart

import { Link } from "react-router-dom"

function Cart({data = []}) {
  return (
    <div className="flex gap-3 px-3 flex-wrap items-center justify-center">
      {data.map((test) => (
          <div className="w-full md:w-[45%] lg:w-[30%] rounded-lg overflow-hidden shadow-lg bg-white p-6">
            <h2 className="text-2xl font-bold text-[#07744E] mb-2">{test.test_name}</h2>
            <div className="space-y-2 mb-6">
              <div className="flex ">
                <span className="font-semibold w-24">Questions</span>
                <span>: {test.questionsCount}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-24">Time</span>
                <span>: 100 Minutes</span>
              </div>
            </div>

            <div className="flex justify-between">
              <Link to={`/neet-all-india-test-series/${test._id}`}>
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

import React from 'react'

const Community_nav = () => {
  return (
    <nav className="mt-4 mb-2 relative z-10">
    <div className="container mx-auto flex justify-between items-center nav-bar-container">
      <div className="flex space-x-4 text-xl">
        <a href="#" className="text-black hover:text-[#1BB896] item1">Community</a>
        
        <div className="relative">
          <button 
            className="text-black item2 hover:text-[#1BB896] flex items-center"
           
          >
            <span className="mr-1">About</span>
          </button>
        </div>

        <div className="relative">
          <button 
            className="text-black item2 hover:text-[#1BB896] flex items-center"
            
          >
            <span className="mr-1">FAQ</span>
            
          </button>

        </div>
        <a href="#" className="text-black hover:text-[#1BB896] ">Community Guidelines</a>
      </div>

      <div className="flex space-x-4">
        <button 
          className="text-black px-10 py-3 text-lg mr-10 rounded font-semibold item3 hover:bg-[#488B80] hover:text-white w-60"
          style={{
            border: '1px solid #C6C6C6', 
          }}
        >
          Search class
        </button>

        <button 
          className="bg-[#488B80] text-white px-4 py-2 rounded-lg hover:border-[#C6C6C6] hover:bg-transparent hover:text-[#488B80] ml-8"
          style={{
            border: '1px solid #C6C6C6', 
          }}
        >
          View Plans
        </button>
      </div>
    </div>

  </nav>
  )
}

export default Community_nav

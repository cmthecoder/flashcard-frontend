import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-lightBlue-500 py-4">
    <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Study In A Flash"
          className="h-8 w-8 mr-2"
        />
        <span className="text-white font-bold text-xl">Your Logo</span>
      </div>
      <button className="bg-white text-lightBlue-500 px-4 py-2 rounded-md font-medium">
        Log Out
      </button>
    </div>
  </nav>
  )
}

export default Navbar
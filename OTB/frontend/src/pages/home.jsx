import React from 'react';

const Homepage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Navbar */}


      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative" >
      <img src="./bgpage.jpg" alt="" className='h-full w-full object-fill' />
        <div className="text-center bg-black bg-opacity-60  rounded absolute inset-0">
        <header className="w-full flex justify-between items-center sticky top">
        <h1 className="text-white text-3xl font-bold">Turf Booking</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-white hover:text-gray-300 cursor-pointer">Home</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">About</li>
            <li className="text-white hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
         <div className='mt-60'>
         <h2 className="text-5xl md:text-7xl text-white font-bold">Book Your Turf Slot Easily</h2>
          <p className="mt-4 text-xl text-gray-300">Find and book the best sports venues near you</p>
          <div className="mt-6 space-x-4">
            <button className="border border-white px-6 py-3 text-white rounded-md hover:bg-white hover:text-black">Book Now</button>
            <button className="border border-white px-6 py-3 text-white rounded-md hover:bg-white hover:text-black">Get Listed</button>
          </div>
         </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white rounded shadow-md">
              <h4 className="text-xl font-semibold mb-4">Easy Booking</h4>
              <p>Book your favorite turf slots in just a few clicks!</p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h4 className="text-xl font-semibold mb-4">Real-Time Availability</h4>
              <p>Check availability and confirm slots instantly.</p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h4 className="text-xl font-semibold mb-4">Seamless Payment</h4>
              <p>Pay securely through multiple options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-16 bg-green-600 text-white text-center">
        <h3 className="text-3xl font-bold">Download the App</h3>
        <p className="mt-4">Get the best offers and book your turf slots on the go!</p>
        <div className="mt-6">
          <button className="bg-white text-green-600 px-6 py-3 rounded-md mx-2 hover:bg-gray-200">Google Play</button>
          <button className="bg-white text-green-600 px-6 py-3 rounded-md mx-2 hover:bg-gray-200">App Store</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2024 Turf Booking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;


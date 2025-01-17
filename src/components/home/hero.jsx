const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-gray-200 to-blue-600 py-44 px-28 lg:px-24">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-extrabold  text-[#ff5630] mb-6">
            Tiigsi Technology
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8">
            Empowering innovation through technology and creative solutions. Join us to build the future.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="mt-10 lg:mt-0 animate-bounce">
          <img 
            src="../../../public/logo.png" 
            alt="Tiigsi Technology Logo" 
            className="w-64 lg:w-96 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;
  
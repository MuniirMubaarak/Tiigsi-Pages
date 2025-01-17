
function ServicesPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#ff5630] to-blue-600 text-white p-12 text-center">
        <h1 className="text-4xl font-extrabold">
          Tiigsi Technology Services
        </h1>
        <p className="mt-4 text-lg">
          We offer cutting-edge technology solutions to drive your business forward.&quot;
        </p>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Our Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">
                Web Development
              </h3>
              <p className="text-gray-700 mb-4">
                We build scalable and high-performance websites to enhance your online presence.&quot;
              </p>
              <button className="bg-[#ff5630] text-white py-2 px-4 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">
                Mobile App Development
              </h3>
              <p className="text-gray-700 mb-4">
                Creating intuitive and seamless mobile applications that provide superior user experiences.&quot;
              </p>
              <button className="bg-[#ff5630] text-white py-2 px-4 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">
                Cloud Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                Tailored cloud solutions for your business to ensure security, flexibility, and scalability.&quot;
              </p>
              <button className="bg-[#ff5630] text-white py-2 px-4 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            What Our Clients Say
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                &quot;Tiigsi Technology transformed our digital infrastructure, and their team&quot;s expertise was invaluable!&quot;
              </p>
              <h4 className="font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-600">CEO, XYZ Corporation</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                &quot;Their cloud solutions improved our system&quot;s reliability and scalability, a game-changer for our business.&quot;
              </p>
              <h4 className="font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-gray-600">CTO, ABC Enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#ff5630] text-white py-8 text-center">
        <p>&copy; 2025 Tiigsi Technology. All Rights Reserved.&quot;</p>
      </footer>
    </div>
  );
}

export default ServicesPage;

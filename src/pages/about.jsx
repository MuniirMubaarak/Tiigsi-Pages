
function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#ff5630] to-blue-600 text-white p-12 text-center">
        <h1 className="text-4xl font-extrabold">About Tiigsi Technology</h1>
        <p className="mt-4 text-lg">
          Innovative solutions that drive digital transformation and empower businesses.
        </p>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Tiigsi Technology, we specialize in providing innovative technology solutions
            that empower businesses to achieve their full potential. From web development to
            cloud computing, we offer a wide range of services that help businesses thrive in
            the digital age. Our team of experts is dedicated to delivering high-quality
            services tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our mission is to drive digital transformation by providing cutting-edge technology
            solutions that are secure, scalable, and innovative. We aim to empower businesses to
            unlock their full potential and stay ahead of the competition in a fast-evolving
            digital landscape.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">Innovation</h3>
              <p className="text-gray-700">
                We believe in the power of innovation to drive progress. Our team constantly
                seeks out new ideas and technologies to create the best solutions for our clients.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">Integrity</h3>
              <p className="text-gray-700">
                We hold ourselves to the highest ethical standards. We believe in transparency,
                honesty, and integrity in everything we do.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">Customer Success</h3>
              <p className="text-gray-700">
                Our success is directly tied to the success of our clients. We are dedicated to
                delivering solutions that meet their needs and exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">James Lee</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#ff5630] text-white py-8 text-center">
        <p>&copy; 2025 Tiigsi Technology. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;


function ContactPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#ff5630] to-blue-600 text-white p-12 text-center">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-lg">
          We&quot;re here to help! Reach out to us for any inquiries or assistance.
        </p>
      </header>

      {/* Contact Information Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">Email</h3>
              <p className="text-gray-700 mb-4">contact@tiigsitech.com</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">Phone</h3>
              <p className="text-gray-700 mb-4">+1 (234) 567-8901</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#ff5630] mb-4">Address</h3>
              <p className="text-gray-700 mb-4">
                123 Tech Avenue, Silicon Valley, CA 94043
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Get in Touch</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5630]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5630]"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5630]"
                rows="6"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#ff5630] text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#ff5630]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#ff5630] text-white py-8 text-center">
        <p>&copy; 2025 Tiigsi Technology. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default ContactPage;

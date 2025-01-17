const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">Tiigsi Technology</h3>
            <p className="mt-4 text-gray-400">
              Empowering innovation through technology and creative solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-400">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-blue-400">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Email: support@tiigsitechnology.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: 123 Tech Avenue, Silicon City</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tiigsi Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
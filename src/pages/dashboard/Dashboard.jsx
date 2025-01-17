import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaBackward } from 'react-icons/fa';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // Sidebar state

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);  // Toggle function

  return (
    <div className="flex min-h-screen">
      {/* Toggle Button (Mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-3 text-2xl text-white bg-blue-900 fixed top-4 left-4 rounded-full shadow-lg z-50"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed  top-0 left-0 h-full bg-blue-900 text-white w-64 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="p-4">
          <h2 className="text-2xl text-center font-bold mb-5">Dashboard</h2>
          <ul className='cursor-pointer'>
            <li className="w-full hover:bg-white rounded-xl text-lg px-4 py-2 hover:text-blue-800 duration-300 transition-all">
              <Link onClick={() => setIsSidebarOpen(false)} to="/dashboard">Overview</Link>
            </li>
            <li className="w-full hover:bg-white rounded-xl text-lg px-4 py-2 hover:text-blue-800 duration-300 transition-all">
              <Link onClick={() => setIsSidebarOpen(false)} to="/dashboard/users">Users</Link>
            </li>
            <li className="w-full hover:bg-white rounded-xl text-lg px-4 py-2  hover:text-blue-800 duration-300 transition-all">
              <Link onClick={() => setIsSidebarOpen(false)} to="/dashboard/settings">Settings</Link>
            </li>

            <li className="w-full hover:bg-white rounded-xl text-lg px-4 py-2  hover:text-blue-800 duration-300 transition-all">
              <Link onClick={() => setIsSidebarOpen(false)} to="/dashboard/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100 ml-0 md:ml-64">
        <Outlet /> {/* Nested routes render here */}
      </main>
      <Link className='fixed top-5 text-xl py-3 px-4 hover:text-white hover:bg-blue-600 
      duration-500 transition-all rounded-xl  text-blue-600 right-8 ' to="../../"><FaBackward/></Link>
    </div>
  );
};

export default Dashboard;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-around p-5 items-center">
        <div className="logo">
          <h1 className="text-2xl text-[#ff5630] font-[700]">Tiigsi Technology</h1>
        </div>
        <div className="menus flex gap-4 items-center">
            <Link className="hover:text-blue-600 duration-150 transition-all" to="/">Home</Link>  
            <Link className="hover:text-blue-600 duration-150 transition-all" to="/about">About</Link> 
            <Link className="hover:text-blue-600 duration-150 transition-all" to="/services">Services</Link>  
            <Link className="hover:text-blue-600 duration-150 transition-all" to="/contact">Contact</Link> 
            <Link  to="/posts" className="bg-[#e05a3b] 
          hover:bg-[#ff3e13] duration-500 transition-all 
            px-4 py-3 text-white rounded-2xl text-xl"> Posts</Link>
            <Link  to="/dashboard" className="bg-blue-600 
          hover:bg-blue-800 duration-500 transition-all 
            px-4 py-3 text-white rounded-2xl text-xl"> Dashboard</Link>
        </div>
    </div>
  )
}

export default Header;
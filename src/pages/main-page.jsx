import { Outlet } from "react-router"
import Header from "../components/header"
import Footer from "../components/footer"

const MainPage = () => {
  return (
    <div className="flex  flex-col min-h-screen">
        <div className="flex-grow flex-1">
          <Header />
          <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default MainPage
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const WebsiteLayout = () => {
  return (
    <div className="minflex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200-h-screen flex flex-col bg-gray-50 text-gray-800 dark">
      <Navbar></Navbar>
      <header>
        <Link to="/"></Link>
      </header>

      <main className="grow">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default WebsiteLayout;

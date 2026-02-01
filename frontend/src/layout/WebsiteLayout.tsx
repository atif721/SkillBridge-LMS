import { Outlet, Link } from "react-router-dom";
import Footer from "../components/website/Footer";
import Navbar from "../components/website/Navbar";

const WebsiteLayout = () => {
  return (
    <div className="flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200-h-screen flex flex-col bg-gray-50 text-gray-800 dark">
      <nav>
        <Navbar></Navbar>
      </nav>

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

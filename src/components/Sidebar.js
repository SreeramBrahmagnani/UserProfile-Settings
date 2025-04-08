import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Settings } from "lucide-react"; // Import icons

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (page, path) => {
    setCurrentPage(page);
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Mobile Navbar */}
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center md:hidden dark:bg-gray-800">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src="/logo.png"
            alt="Application Logo"
            className="h-8 p-1 rounded bg-white border border-gray-300 shadow-md"
          />
          <span className="text-lg font-bold">HCP</span>
        </button>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center bg-blue-500 text-white p-4 fixed top-0 left-0 w-full z-10 dark:bg-gray-800">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 p-1 rounded bg-white border border-gray-300 shadow-md"
          />
          <span className="text-xl font-bold">HCP</span>
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden md:block w-1/4 lg:w-1/5 bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-md p-4 h-full fixed top-16">
        <ul className="space-y-4">
          <li
            onClick={() => handleNavigation("profile", "/")}
            className={`cursor-pointer flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 ${
              currentPage === "profile"
                ? "text-blue-600 dark:text-blue-400 font-bold"
                : ""
            }`}
          >
            <User size={20} /> User Profile
          </li>
          <li
            onClick={() => handleNavigation("settings", "/settings")}
            className={`cursor-pointer flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 ${
              currentPage === "settings"
                ? "text-blue-600 dark:text-blue-400 font-bold"
                : ""
            }`}
          >
            <Settings size={20} /> Settings
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-md z-50 md:hidden">
          <ul className="space-y-4 p-4">
            <li
              onClick={() => handleNavigation("profile", "/")}
              className={`cursor-pointer flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 ${
                currentPage === "profile"
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : ""
              }`}
            >
              <User size={20} /> User Profile
            </li>
            <li
              onClick={() => handleNavigation("settings", "/settings")}
              className={`cursor-pointer flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 ${
                currentPage === "settings"
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : ""
              }`}
            >
              <Settings size={20} /> Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

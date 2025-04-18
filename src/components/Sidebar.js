import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Settings } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Sidebar = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleNavigation = (page, path) => {
    setCurrentPage(page);
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Mobile Navbar - Now with distinct dark mode color */}
      <div className={`p-4 flex justify-between items-center md:hidden ${
        darkMode ? "bg-gray-800 border-b border-gray-700" : "bg-blue-500"
      } text-white`}>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src="/logo.png"
            alt="Application Logo"
            className={`h-8 p-1 rounded border shadow-md ${
              darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
            }`}
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

      {/* Desktop Header - Now more distinct in dark mode */}
      <div className={`hidden md:flex items-center p-4 fixed top-0 left-0 w-full z-10 ${
        darkMode ? "bg-gray-900 border-b border-gray-800" : "bg-blue-500"
      } text-white shadow-sm`}>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className={`h-10 p-1 rounded border shadow-md ${
              darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
            }`}
          />
          <span className="text-xl font-bold">HCP</span>
        </button>
      </div>

      {/* Sidebar for Desktop - Now with better separation */}
      <div className={`hidden md:block w-1/4 lg:w-1/5 rounded-r-lg shadow-xl p-4 h-full fixed top-16 ${
        darkMode ? "bg-gray-800 border-r border-gray-700" : "bg-white border-r border-gray-200"
      } ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        <ul className="space-y-4">
          <li
            onClick={() => handleNavigation("profile", "/")}
            className={`cursor-pointer flex items-center gap-2 p-2 rounded-lg transition-colors ${
              currentPage === "profile"
                ? darkMode 
                  ? "bg-gray-700 text-blue-400 font-bold" 
                  : "bg-blue-50 text-blue-600 font-bold"
                : darkMode 
                  ? "hover:bg-gray-700 hover:text-blue-400" 
                  : "hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <User size={20} /> User Profile
          </li>
          <li
            onClick={() => handleNavigation("settings", "/settings")}
            className={`cursor-pointer flex items-center gap-2 p-2 rounded-lg transition-colors ${
              currentPage === "settings"
                ? darkMode 
                  ? "bg-gray-700 text-blue-400 font-bold" 
                  : "bg-blue-50 text-blue-600 font-bold"
                : darkMode 
                  ? "hover:bg-gray-700 hover:text-blue-400" 
                  : "hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <Settings size={20} /> Settings
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Improved contrast */}
      {isMenuOpen && (
        <div className={`absolute top-16 left-0 w-full shadow-lg z-50 md:hidden ${
          darkMode ? "bg-gray-800 border-t border-gray-700" : "bg-white border-t border-gray-200"
        } ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
          <ul className="space-y-2 p-4">
            <li
              onClick={() => handleNavigation("profile", "/")}
              className={`cursor-pointer flex items-center gap-2 p-3 rounded-lg ${
                currentPage === "profile"
                  ? darkMode 
                    ? "bg-gray-700 text-blue-400 font-bold" 
                    : "bg-blue-50 text-blue-600 font-bold"
                  : darkMode 
                    ? "hover:bg-gray-700 hover:text-blue-400" 
                    : "hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <User size={20} /> User Profile
            </li>
            <li
              onClick={() => handleNavigation("settings", "/settings")}
              className={`cursor-pointer flex items-center gap-2 p-3 rounded-lg ${
                currentPage === "settings"
                  ? darkMode 
                    ? "bg-gray-700 text-blue-400 font-bold" 
                    : "bg-blue-50 text-blue-600 font-bold"
                  : darkMode 
                    ? "hover:bg-gray-700 hover:text-blue-400" 
                    : "hover:bg-blue-50 hover:text-blue-600"
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
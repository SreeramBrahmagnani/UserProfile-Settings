import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { ThemeProvider } from "./context/ThemeContext"; // ⬅️ Import the ThemeProvider

const App = () => {
  const [currentPage, setCurrentPage] = useState("profile");

  return (
    <ThemeProvider> {/* ⬅️ Wrap entire app in ThemeProvider */}
      <Router>
        <div className="flex flex-col md:flex-row min-h-screen bg-blue-100 dark:bg-gray-900">
          {/* Sidebar */}
          <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />

          {/* Main Content */}
          <div className="flex-1 p-4 md:ml-[25%] lg:ml-[20%] md:mt-16"> {/* Use md:mt-16 for desktop only */}
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

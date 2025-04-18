import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import LanguageDropdown from "../components/LanguageDropdown";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Lock, LogOut, Trash2 } from "lucide-react";

const SettingsPage = () => {
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=initGoogleTranslate";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate script.");
      };
      document.body.appendChild(script);
  
      window.initGoogleTranslate = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
          );
        } else {
          console.error("Google Translate is not available.");
        }
      };
    };
  
    addGoogleTranslateScript();
  
    return () => {
      const script = document.querySelector('script[src*="translate_a/element.js"]');
      if (script) script.remove();
      delete window.initGoogleTranslate;
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newMode ? "dark" : "light");
    }
  };

  const handleLanguageChange = (code) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event("change"));
    } else {
      console.warn("Google Translate widget not found.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    alert("You have been logged out.");
    navigate("/");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      alert("Your account has been deleted.");
      localStorage.clear();
      navigate("/");
    }
  };

  const handleChangePassword = () => {
    navigate("/change-password");
  };

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`max-w-2xl mx-auto p-6 rounded-lg shadow-lg transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}>
        <h1 className="text-3xl font-bold mb-8 text-center">Settings</h1>
        
        {/* Language Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
              A
            </span>
            Language Preferences
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
            <div>
              <p className="font-medium">Website Language</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Change the display language
              </p>
            </div>
            <LanguageDropdown
              onSelect={handleLanguageChange}
              className="min-w-[180px]"
              aria-label="Select a language"
            />
          </div>
        </div>

        {/* Appearance Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
              <Sun size={16} className={darkMode ? "hidden" : "block"} />
              <Moon size={16} className={darkMode ? "block" : "hidden"} />
            </span>
            Appearance
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {darkMode ? "Dark mode is on" : "Light mode is on"}
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-200 ${
                darkMode
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-purple-500 hover:bg-purple-600"
              } text-white`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              {darkMode ? "Switch to Light" : "Switch to Dark"}
            </button>
          </div>
        </div>

        {/* Account Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300">
              <Lock size={16} />
            </span>
            Account Settings
          </h2>
          
          {/* Change Password */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-700 mb-4">
            <div>
              <p className="font-medium">Change Password</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Update your account password
              </p>
            </div>
            <button
              onClick={handleChangePassword}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-2 transition-colors duration-200"
            >
              <Lock size={16} />
              Change
            </button>
          </div>

          {/* Logout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-700 mb-4">
            <div>
              <p className="font-medium">Logout</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sign out of your account
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 transition-colors duration-200"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>

          {/* Delete Account */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
            <div>
              <p className="font-medium text-red-600 dark:text-red-400">Delete Account</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Permanently remove your account
              </p>
            </div>
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 transition-colors duration-200"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
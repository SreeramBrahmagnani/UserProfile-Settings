import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import LanguageDropdown from "../components/LanguageDropdown";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Lock, LogOut, Trash2 } from "lucide-react"; // Import icons

const SettingsPage = () => {
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate script.");
      };
      document.body.appendChild(script);
  
      window.googleTranslateElementInit = () => {
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
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleLanguageChange = (code) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event("change")); // Trigger language change
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
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md text-black dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      {/* Theme Toggle */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-medium">Theme:</span>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2"
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Language Switcher */}
      <div className="flex items-center justify-between mb-6">
        <label className="font-medium" htmlFor="language-dropdown">
          Change Language:
        </label>
        <LanguageDropdown
          id="language-dropdown"
          onSelect={handleLanguageChange}
          aria-label="Select a language"
        />
      </div>

      {/* Change Password */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-medium">Change Password:</span>
        <button
          onClick={handleChangePassword}
          className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 flex items-center gap-2"
        >
          <Lock size={16} />
          Change Password
        </button>
      </div>

      {/* Logout Account */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-medium">Logout Account:</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* Delete Account */}
      <div className="flex items-center justify-between">
        <span className="font-medium">Delete Account:</span>
        <button
          onClick={handleDeleteAccount}
          className="px-4 py-2 rounded bg-red-700 text-white hover:bg-red-800 flex items-center gap-2"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;

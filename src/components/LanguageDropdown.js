import React, { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "ml", name: "Malayalam" },
  { code: "bn", name: "Bengali" },
  { code: "gu", name: "Gujarati" },
  { code: "mr", name: "Marathi" },
  { code: "kn", name: "Kannada" },
  { code: "pa", name: "Punjabi" },
  { code: "or", name: "Odia" },
  { code: "ur", name: "Urdu" },
  { code: "as", name: "Assamese" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
  { code: "zh-CN", name: "Chinese" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
  { code: "ja", name: "Japanese" },
];

const LanguageDropdown = ({ id, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    onSelect(lang.code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        id={id} // Add id for accessibility
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border rounded bg-white dark:bg-gray-700 text-black dark:text-white w-full"
      >
        Select Language ▾
      </button>
      {open && (
        <div className="absolute z-10 mt-1 max-h-52 w-full overflow-y-auto bg-white dark:bg-gray-700 border rounded shadow-lg text-black dark:text-white">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

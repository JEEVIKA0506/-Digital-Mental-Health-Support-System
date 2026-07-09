import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
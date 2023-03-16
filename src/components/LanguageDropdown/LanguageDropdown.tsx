import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const LanguageDropdown = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    setSelectedLang(language);
    i18n.changeLanguage(language);
  };

  return (
    <select
      value={selectedLang}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {["en", "hn", "te"].map((lng) => (
        <option key={lng} value={lng}>
          {lng}
        </option>
      ))}
    </select>
  );
};
export default LanguageDropdown;

"use client";

import { useState } from "react";

export default function LanguageSelect() {
  const optionsList = ["UK", "EN"];
  const [lang, setLang] = useState("");

  const options = optionsList.map((text, index) => {
    return (
      <option key={index} value={index}>
        {text}
      </option>
    );
  });
  return (
    <div>
      <select value={lang} onChange={(event) => setLang(event.target.value)}>
        {options}
      </select>
    </div>
  );
}

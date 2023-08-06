"use client";

import { useState } from "react";
import styles from "./LanguageSelect.module.css";

export default function LanguageSelect() {
  const optionsList = ["UK", "EN"];
  const [lang, setLang] = useState("");

  const options = optionsList.map((text, index) => {
    return (
      <option className={styles.option} key={index} value={index}>
        {text}
      </option>
    );
  });
  return (
    <select
      className={styles.select}
      value={lang}
      onChange={(event) => setLang(event.target.value)}
    >
      {options}
    </select>
  );
}

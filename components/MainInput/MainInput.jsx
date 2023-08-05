"use client";
import Image from "next/image";
import { useState } from "react";
import searchImage from "../../public/assets/search.png";
import cross from "../../public/assets/cross-small.png";
export default function MainInput() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by keywords"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onSubmit={handleSubmit}
      />
      <Image src={searchImage} alt="Find" width={24} height={24} />
      <button type="button" onClick={() => setKeyword("")}>
        <Image src={cross} alt="Find" width={24} height={24} />
      </button>
    </div>
  );
}

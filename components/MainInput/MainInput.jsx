"use client";
import Image from "next/image";
import useEventsStore from "@/store/zustand";
import searchImage from "../../public/assets/search.png";
import cross from "../../public/assets/cross-small.png";
export default function MainInput() {
  const [keyword, changeKeyword] = useEventsStore((state) => [
    state.keyword,
    state.changeKeyword,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    changeKeyword(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by keywords"
        value={keyword}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Image src={searchImage} alt="Find" width={24} height={24} />
      <button type="button" onClick={() => changeKeyword("")}>
        <Image src={cross} alt="Find" width={24} height={24} />
      </button>
    </div>
  );
}

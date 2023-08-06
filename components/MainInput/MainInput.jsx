"use client";
import Image from "next/image";
import useEventsStore from "@/store/zustand";
import searchImage from "../../public/assets/search.png";
import cross from "../../public/assets/cross-small.png";
import styles from "./MainInput.module.css";
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
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search by keywords"
        value={keyword}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Image
        src={searchImage}
        alt="Find"
        width={24}
        height={24}
        className={styles.img}
      />
      {keyword !== "" && (
        <button
          className={styles.button}
          type="button"
          onClick={() => changeKeyword("")}
        >
          <Image
            className={styles.cross}
            src={cross}
            alt="Find"
            width="auto"
            height="auto"
          />
        </button>
      )}
    </div>
  );
}

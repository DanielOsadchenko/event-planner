"use client";

import { useState } from "react";
import Link from "next/link";
import categories from "@/data/category";
import sortValues from "@/data/sortValues";
import styles from "./ControlPanel.module.css";

export default function ControlPanel({ filter, sort }) {
  const [filteredCategory, setFilteredCategory] = useState("");
  const [sortedCategory, setSortedCategory] = useState("");

  const handleFilterChange = (e) => {
    setFilteredCategory(e.target.value);
    filter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortedCategory(e.target.value);
    sort(e.target.value);
  };
  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        id="filter"
        name="filter"
        value={filteredCategory}
        onChange={handleFilterChange}
      >
        <option value="">Category</option>
        {categories &&
          categories.map((category) => {
            return (
              <option key={`${category}`} value={`${category}`}>
                {category}
              </option>
            );
          })}
      </select>

      <select
        className={styles.select}
        id="sort"
        name="sort"
        value={sortedCategory}
        onChange={handleSortChange}
      >
        <option value="">Sort by</option>
        {sortValues &&
          sortValues.map((sortValue) => {
            return (
              <option key={`${sortValue}`} value={`${sortValue}`}>
                by {sortValue}
              </option>
            );
          })}
      </select>
      <Link className={styles.link} href="/newEvent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 4V20M4 12L20 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

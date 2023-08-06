"use client";

import { useState } from "react";
import Link from "next/link";
import categories from "@/data/category";
import sortValues from "@/data/sortValues";

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
    <div>
      <select
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
      <Link href="/newEvent">Add new Event</Link>
    </div>
  );
}

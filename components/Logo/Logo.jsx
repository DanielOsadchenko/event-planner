"use client";

import styles from "./Logo.module.css";
import { useRouter } from "next/navigation";
export default function Logo() {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/");
  };
  return (
    <h1 className={styles.logo} onClick={handleClick}>
      Event Planner
    </h1>
  );
}

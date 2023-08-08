"use client";

import Link from "next/link";
import LeftArrow from "../svg/LeftArrow";
import styles from "./BackButton.module.css";

export default function BackButton({ back }) {
  return (
    <Link className={styles.link} href={back}>
      <LeftArrow className={styles.svg} />
      Back
    </Link>
  );
}

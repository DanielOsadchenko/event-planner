"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./EventCard.module.css";

export default function EventCard({
  title,
  desc,
  category,
  priority,
  date,
  time,
  location,
  image,
  id,
}) {
  const [isClicked, setIsClicked] = useState(false);

  var dateString = date;
  var dateParts = dateString.split("-");
  var formattedDate = dateParts[2] + "." + dateParts[1];

  return (
    <div className={styles.card} onClick={() => setIsClicked(true)}>
      <div className={styles.imgBox}>
        <Image
          className={styles.img}
          src={image}
          alt="Picture of an event"
          width="auto"
          height="auto"
        />
        <div className={styles.tagsBox}>
          <p className={styles.category}>{category}</p>
          <p className={`${styles.priority} ${priority}`}>{priority}</p>
        </div>
      </div>
      <div className={styles.textBox}>
        <div className={styles.dateBox}>
          <p className={styles.date}>
            {formattedDate} at {time}
          </p>
          <p className={styles.location}>{location}</p>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>

        <div className={styles.buttonBox}>
          <Link className={styles.button} href={`/${id}`}>
            More info
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import styles from "./DetailedEventCard.module.css";

export default function DetailedEventCard({ event, handleDeleteEvent }) {
  var dateString = event.date;
  var dateParts = dateString.split("-");
  var formattedDate = dateParts[2] + "." + dateParts[1];
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.title}>{event.title}</h2>

      <div className={styles.card}>
        <div className={styles.imgBox}>
          <Image
            src={event.image}
            alt="Event picture"
            width="auto"
            height="auto"
          />
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.desc}>{event.desc}</p>
          <div className={styles.tagsBox}>
            <p className={styles.tag}>{event.category}</p>
            <p className={`${styles.tag} ${event.priority}`}>
              {event.priority}
            </p>
            <p className={styles.tag}>{event.location}</p>
            <p className={`${styles.tag} ${styles.date}`}>
              {formattedDate} at {event.time}
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Link className={styles.edit} href={`/${event.id}/edit`}>
              Edit
            </Link>
            <Link
              className={styles.delete}
              href="/"
              onClick={handleDeleteEvent}
            >
              Delete event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

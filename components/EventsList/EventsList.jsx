import styles from "./EventsList.module.css";

export default function EventsList({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}

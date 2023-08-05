import Image from "next/image";
import styles from "./page.module.css";
import EventsList from "@/components/EventsList/EventsList";

export default function Home() {
  return (
    <main>
      <EventsList></EventsList>
    </main>
  );
}

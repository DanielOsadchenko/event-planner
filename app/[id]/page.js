"use client";

import useEventsStore from "@/store/zustand";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/Container/Container";
import DetailedEventCard from "@/components/DetailedEventCard/DetailedEventCard";

export default function DetailPage() {
  const pathname = usePathname();
  const [events, removeEvent] = useEventsStore((state) => [
    state.events,
    state.removeEvent,
  ]);
  const event = events
    .filter((e) => e.id === pathname.slice(1))
    .splice(0, 1)[0];

  const handleDeleteEvent = () => {
    removeEvent(event.id);
  };

  return (
    <Container>
      <Link href="/">Back</Link>

      {event && (
        <DetailedEventCard
          event={event}
          handleDeleteEvent={handleDeleteEvent}
        />
      )}
    </Container>
  );
}

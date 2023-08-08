"use client";

import useEventsStore from "@/store/zustand";

import { usePathname } from "next/navigation";
import Container from "@/components/Container/Container";
import DetailedEventCard from "@/components/DetailedEventCard/DetailedEventCard";
import BackButton from "@/components/BackButton/BackButton";

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
      <BackButton back={"/"} />
      {event && (
        <DetailedEventCard
          event={event}
          handleDeleteEvent={handleDeleteEvent}
        />
      )}
    </Container>
  );
}

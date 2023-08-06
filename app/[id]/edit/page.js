"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useEventsStore from "@/store/zustand";
import categories from "@/data/category";
import priorities from "@/data/priority";
import { usePathname } from "next/navigation";
import EventForm from "@/components/EventForm/EventForm";
import Container from "@/components/Container/Container";

export default function EditEvent() {
  const router = useRouter();
  const [events, editEvent] = useEventsStore((state) => [
    state.events,
    state.editEvent,
  ]);

  const pathname = usePathname();
  console.log(pathname);
  const event = events
    .filter((e) => e.id === pathname.slice(1, -5))
    .splice(0, 1)[0];

  const [newEvent, setNewEvent] = useState(event);

  const handleSubmit = (e) => {
    e.preventDefault();
    editEvent(newEvent);
    router.push(`/${event.id}`);
  };

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    console.log(newEvent);
    setNewEvent((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  return (
    <Container>
      <Link href="/">Back</Link>

      <div>
        <h2>Edit event</h2>

        <EventForm
          newEvent={newEvent}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          categories={categories}
          priorities={priorities}
        />
      </div>
    </Container>
  );
}

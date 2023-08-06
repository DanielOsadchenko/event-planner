"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useEventsStore from "@/store/zustand";
import categories from "@/data/category";
import priorities from "@/data/priority";
import Container from "@/components/Container/Container";
import EventForm from "@/components/EventForm/EventForm";
import eventTemplate from "@/data/eventTemplate";
export default function NewEvent() {
  const router = useRouter();
  const addEvent = useEventsStore((state) => state.addEvent);
  const [newEvent, setNewEvent] = useState(eventTemplate);

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent(newEvent);

    setNewEvent(eventTemplate);
    router.push("/");
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
        <h2>Create new event</h2>
      </div>

      <EventForm
        newEvent={newEvent}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        categories={categories}
        priorities={priorities}
      />
    </Container>
  );
}

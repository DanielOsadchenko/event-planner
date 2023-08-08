"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useEventsStore from "@/store/zustand";
import categories from "@/data/category";
import priorities from "@/data/priority";
import Container from "@/components/Container/Container";
import EventForm from "@/components/EventForm/EventForm";
import eventTemplate from "@/data/eventTemplate";
import BackButton from "@/components/BackButton/BackButton";
import Title from "@/components/Title/Title";
export default function NewEvent() {
  const router = useRouter();
  const addEvent = useEventsStore((state) => state.addEvent);
  const [newEvent, setNewEvent] = useState(eventTemplate);

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent(newEvent);

    setNewEvent(eventTemplate);
    router.replace("/");
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
      <BackButton back={"/"} />

      <div>
        <Title text={"Create new event"} />
      </div>

      <EventForm
        newEvent={newEvent}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        categories={categories}
        priorities={priorities}
        text={"Add event"}
      />
    </Container>
  );
}

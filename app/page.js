"use client";

import { useState } from "react";
import useEventsStore from "@/store/zustand";
import styles from "./page.module.css";
import EventsList from "@/components/EventsList/EventsList";
import EventCard from "@/components/EventCard/EventCard";
import ControlPanel from "@/components/ControlPanel/ControlPanel";
import sortValues from "@/data/sortValues";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";

export default function Home() {
  const [events, keyword] = useEventsStore((state) => [
    state.events,
    state.keyword,
  ]);

  const [sortValue, setSortValue] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  let visibleEvents = {};

  const sortEvents = (firstEvent, secondEvent) => {
    if (sortValue == sortValues[0]) {
      const titleA = firstEvent.title.toUpperCase();
      const titleB = secondEvent.title.toUpperCase();
      if (titleA > titleB) {
        return -1;
      }
      if (titleA < titleB) {
        return 1;
      }
      return 0;
    }
    if (sortValue == sortValues[1]) {
      const titleA = firstEvent.title.toUpperCase();
      const titleB = secondEvent.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    }
    if (sortValue == sortValues[2]) {
      const dateA = firstEvent.date;
      const dateB = secondEvent.date;
      if (dateA > dateB) {
        return -1;
      }
      if (dateA < dateB) {
        return 1;
      }
      return 0;
    }
    if (sortValue == sortValues[3]) {
      const dateA = firstEvent.date;
      const dateB = secondEvent.date;
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    }
    if (sortValue == sortValues[4]) {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      const priorityA = priorityOrder[firstEvent.priority];
      const priorityB = priorityOrder[secondEvent.priority];
      return priorityA - priorityB;
    }
    if (sortValue == sortValues[5]) {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      const priorityA = priorityOrder[firstEvent.priority];
      const priorityB = priorityOrder[secondEvent.priority];
      return priorityA - priorityB;
    }
  };

  if (events) {
    visibleEvents = events
      .filter((e) => e.title.toLowerCase().includes(keyword.toLowerCase()))
      .filter((e) =>
        e.category.toLowerCase().includes(filterCategory.toLowerCase())
      )
      .sort(sortEvents);
  }

  return (
    <Container>
      <ControlPanel
        sort={(value) => setSortValue(value)}
        filter={(value) => setFilterCategory(value)}
      />

      <Title text={"My events"} />
      <EventsList>
        {visibleEvents &&
          visibleEvents.map((e) => {
            return (
              <EventCard
                key={e.id}
                title={e.title}
                desc={e.desc}
                category={e.category}
                priority={e.priority}
                date={e.date}
                time={e.time}
                location={e.location}
                image={e.image}
                id={e.id}
              />
            );
          })}
      </EventsList>
    </Container>
  );
}

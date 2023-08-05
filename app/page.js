"use client";

import useEventsStore from "@/store/zustand";
import styles from "./page.module.css";
import EventsList from "@/components/EventsList/EventsList";
import EventCard from "@/components/EventCard/EventCard";
import ControlPanel from "@/components/ControlPanel/ControlPanel";

export default function Home() {
  const [events, keyword] = useEventsStore((state) => [
    state.events,
    state.keyword,
  ]);

  let visibleEvents = {};

  if (events) {
    visibleEvents = events.filter((e) =>
      e.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return (
    <main>
      <ControlPanel />
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
              />
            );
          })}
      </EventsList>
    </main>
  );
}

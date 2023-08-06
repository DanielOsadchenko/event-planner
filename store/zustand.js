import { create } from "zustand";
import { nanoid } from "nanoid";
import defaultImage from "../public/assets/cardImageDefault.png";

const useEventsStore = create((set) => ({
  events: [
    {
      id: "1",
      title: "Title1",
      desc: "Decription",
      date: "2023-08-15",
      time: "12:00",
      category: "Music",
      location: "Kyiv",
      image: defaultImage,
      priority: "Medium",
    },
    {
      id: "2",
      title: "Title2",
      desc: "Decription",
      date: "2023-08-16",
      time: "12:00",
      category: "Business",
      location: "Kyiv",
      image: defaultImage,
      priority: "Low",
    },
    {
      id: "3",
      title: "Title3",
      desc: "Decription",
      date: "2023-08-17",
      time: "12:00",
      category: "Business",
      location: "Kyiv",
      image: defaultImage,
      priority: "High",
    },
    {
      id: "4",
      title: "Title4",
      desc: "Decription",
      date: "2023-08-10",
      time: "12:00",
      category: "Music",
      location: "Kyiv",
      image: defaultImage,
      priority: "Low",
    },
    {
      id: "5",
      title: "Title5",
      desc: "Decription",
      date: "2023-08-15",
      time: "12:00",
      category: "Music",
      location: "Kyiv",
      image: defaultImage,
      priority: "Medium",
    },
  ],

  addEvent: (newEvent) =>
    set((state) => {
      const event = { ...newEvent, image: defaultImage, id: nanoid() };
      console.log(event);
      return { events: [...state.events, event] };
    }),

  removeEvent: (id) =>
    set((state) => {
      const newEvents = state.events.filter((e) => e.id !== id);
      return { events: [...newEvents] };
    }),

  editEvent: (changedEvent) =>
    set((state) => {
      const editEvent = { ...changedEvent, image: defaultImage };
      const newEvents = state.events.filter((e) => e.id !== changedEvent.id);
      return { events: [...newEvents, editEvent] };
    }),

  keyword: "",

  changeKeyword: (keyword) =>
    set(() => {
      return { keyword };
    }),
}));

export default useEventsStore;

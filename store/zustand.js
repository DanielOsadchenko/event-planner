import { create } from "zustand";
import { nanoid } from "nanoid";
import defaultImage from "../public/assets/cardImageDefault.png";

const useEventsStore = create((set) => ({
  events: [
    {
      id: 1,
      title: "Title1",
      desc: "Decription",
      date: "12.08",
      time: "12:00",
      category: "Business",
      location: "Kyiv",
      image: defaultImage,
      priority: "High",
    },
    {
      id: 2,
      title: "Title2",
      desc: "Decription",
      date: "12.08",
      time: "12:00",
      category: "Business",
      location: "Kyiv",
      image: defaultImage,
      priority: "High",
    },
    {
      id: 3,
      title: "Title3",
      desc: "Decription",
      date: "12.08",
      time: "12:00",
      category: "Business",
      location: "Kyiv",
      image: defaultImage,
      priority: "High",
    },
    {
      id: 4,
      title: "Title4",
      desc: "Decription",
      date: "12.08",
      time: "12:00",
      category: "Business",
      location: "Kyiv",
      image: defaultImage,
      priority: "High",
    },
    {
      id: 5,
      title: "Title5",
      desc: "Decription",
      date: "12.08",
      time: "12:00",
      category: "Business",
      location: "Kyiv",
      image: defaultImage,
      priority: "High",
    },
  ],

  addEvent: (newEvent) =>
    set((state) => {
      const event = { ...newEvent, image: defaultImage, id: nanoid() };
      console.log(event);
      return { events: [...state.events, event] };
    }),

  keyword: "",

  changeKeyword: (keyword) =>
    set(() => {
      return { keyword };
    }),
}));

export default useEventsStore;

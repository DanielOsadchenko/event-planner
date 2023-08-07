import { create } from "zustand";
import { nanoid } from "nanoid";
import defaultImage from "../public/assets/cardImageDefault.png";
import image1 from "../public/assets/cardImage1.png";
import image2 from "../public/assets/cardImage2.png";
import image3 from "../public/assets/cardImage3.png";
import image4 from "../public/assets/cardImage4.png";
import image5 from "../public/assets/cardImage5.png";
import image6 from "../public/assets/cardImage6.png";
import image10 from "../public/assets/image10.jpg";

const useEventsStore = create((set) => ({
  events: [
    {
      id: "10",
      title: "My Birthday",
      desc: "The best gift for me will be an internship at Soft Ryzen",
      date: "2023-08-10",
      time: "05:00",
      category: "Party",
      location: "Poland",
      image: image10,
      priority: "High",
    },
    {
      id: "1",
      title: "Galery Opening",
      desc: "Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.",
      date: "2023-07-12",
      time: "12:00",
      category: "Art",
      location: "Kyiv",
      image: image1,
      priority: "High",
    },
    {
      id: "2",
      title: "Innovation Summit",
      desc: "Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit. ",
      date: "2023-08-16",
      time: "15:00",
      category: "Conference",
      location: "Kyiv",
      image: image2,
      priority: "Medium",
    },
    {
      id: "3",
      title: "Empower Your Creativity",
      desc: "Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop. ",
      date: "2023-08-17",
      time: "12:00",
      category: "Workshop",
      location: "Kyiv",
      image: image3,
      priority: "High",
    },
    {
      id: "4",
      title: "Summer Soiree",
      desc: "Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.",
      date: "2023-08-15",
      time: "12:00",
      category: "Party",
      location: "Kyiv",
      image: image4,
      priority: "High",
    },
    {
      id: "5",
      title: "Leadership Conference",
      desc: "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
      date: "2023-08-25",
      time: "9:00",
      category: "Business",
      location: "Kyiv",
      image: image5,
      priority: "Medium",
    },
    {
      id: "6",
      title: "Tech Startup Showcase",
      desc: "Witness the future of technology as innovative startups showcase their groundbreaking ideas.",
      date: "2023-08-07",
      time: "17:00",
      category: "Business",
      location: "Kyiv",
      image: image6,
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
      const editEvent = { ...changedEvent };
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

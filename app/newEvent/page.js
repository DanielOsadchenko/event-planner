"use client";
import Link from "next/link";
import { useState } from "react";
import useEventsStore from "@/store/zustand";
import { redirect } from "next/dist/server/api-utils";

export default function NewEvent() {
  const addEvent = useEventsStore((state) => state.addEvent);
  const [newEvent, setNewEvent] = useState({
    title: "",
    desc: "",
    category: "",
    priority: "",
    date: "",
    time: "",
    location: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent(newEvent);
    setNewEvent({
      title: "",
      desc: "",
      category: "",
      priority: "",
      date: "",
      time: "",
      location: "",
      image: "",
    });
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
    <main>
      <Link href="/">Back</Link>

      <div>
        <h2>Create new event</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
          />

          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            name="description"
            value={newEvent.desc}
            onChange={handleChange}
          />

          <label htmlFor="date">Select date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={newEvent.date}
          />

          <label htmlFor="time">Select time</label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={handleChange}
            value={newEvent.time}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
            value={newEvent.location}
          />

          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            value={newEvent.category}
          >
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Party">Party</option>
            <option value="Sport">Sport</option>
          </select>

          <label htmlFor="image">Add picture</label>
          <select
            id="image"
            name="image"
            onChange={handleChange}
            value={newEvent.image}
          >
            <option value="Default image">Default image</option>
          </select>

          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            onChange={handleChange}
            value={newEvent.priority}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button type="submit">Add event</button>
        </form>
      </div>
    </main>
  );
}

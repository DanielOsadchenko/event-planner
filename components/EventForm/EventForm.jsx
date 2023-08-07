import styles from "./EventForm.module.css";

export default function EventForm({
  newEvent,
  handleChange,
  handleSubmit,
  categories,
  priorities,
  text,
}) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="title">Title</label>

      <input
        type="text"
        id="title"
        name="title"
        value={newEvent.title}
        onChange={handleChange}
        required
        min={3}
        max={30}
      />

      <label htmlFor="desc">Description</label>
      <textarea
        type="text"
        id="desc"
        name="description"
        value={newEvent.desc}
        onChange={handleChange}
        required
        min={10}
        max={100}
      />

      <label htmlFor="date">Select date</label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleChange}
        value={newEvent.date}
        required
      />

      <label htmlFor="time">Select time</label>
      <input
        type="time"
        id="time"
        name="time"
        onChange={handleChange}
        value={newEvent.time}
        required
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        onChange={handleChange}
        value={newEvent.location}
        required
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={newEvent.category}
        required
      >
        <option value="">Choose category</option>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category} value={`${category}`}>
                {category}
              </option>
            );
          })}
      </select>

      <label htmlFor="image">Add picture</label>
      <select
        id="image"
        name="image"
        onChange={handleChange}
        value={newEvent.image}
        required
        disabled
      >
        <option value="">Choose image</option>
        <option value="Default image">Default image</option>
      </select>

      <label htmlFor="priority">Priority</label>
      <select
        id="priority"
        name="priority"
        onChange={handleChange}
        value={newEvent.priority}
        required
      >
        <option value="">Choose priority</option>
        {priorities &&
          priorities.map((priority) => {
            return (
              <option key={priority} value={`${priority}`}>
                {priority}
              </option>
            );
          })}
      </select>

      <div className={styles.btnBox}>
        <button className={styles.submit} type="submit">
          {text}
        </button>
      </div>
    </form>
  );
}

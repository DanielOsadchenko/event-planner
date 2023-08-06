import Link from "next/link";
import Image from "next/image";

export default function DetailedEventCard({ event, handleDeleteEvent }) {
  return (
    <div>
      <h2>{event.title}</h2>

      <div>
        <Image src={event.image} alt="Event picture" />
        <div>
          <p>{event.desc}</p>
          <div>
            <p>{event.category}</p>
            <p>{event.priority}</p>
            <p>{event.location}</p>
            <p>
              {event.date} at {event.time}
            </p>
          </div>
          <div>
            <Link href={`/${event.id}/edit`}>Edit</Link>
            <Link href="/" onClick={handleDeleteEvent}>
              Delete event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

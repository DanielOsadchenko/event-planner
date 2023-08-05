"use client";

import Image from "next/image";
import { useState } from "react";

export default function EventCard({
  title,
  desc,
  category,
  priority,
  date,
  time,
  location,
  image,
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div onClick={() => setIsClicked(true)}>
        <Image src={image} alt="Picture of an event" width={272} height={336} />
        <div>
          <p>{category}</p>
          <p>{priority}</p>
        </div>
        <div>
          <p>
            {date} at {time}
          </p>
          <p>{location}</p>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

      {isClicked && (
        <div>
          <button>More info</button>
        </div>
      )}
    </div>
  );
}

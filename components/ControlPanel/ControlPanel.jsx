import Link from "next/link";

export default function ControlPanel() {
  return (
    <div>
      <button type="button">Filter</button>
      <button type="button">Sort</button>
      <Link href="/newEvent">+</Link>
    </div>
  );
}

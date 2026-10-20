"use client";

import { useEffect, useState } from "react";

const INTERVAL_MS = 2600;

const topTech = ["React", "Next.js", "TypeScript", "Vue", "Angular", "Node.js", "NestJS", "GraphQL", "Tailwind", "Vite"];
const bottomTech = ["PHP", "Laravel", "Python", "Django", "FastAPI", "Java", "Spring Boot", "C#/.NET", "PostgreSQL", "Docker", "AWS", "Kubernetes"];

function PopNote({ items, className, offset }: { items: string[]; className: string; offset: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      setIndex((i) => i + 1);
      timer = setInterval(() => setIndex((i) => i + 1), INTERVAL_MS);
    }, offset);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [offset]);

  return (
    <span key={index} className={`art-note tech-pop ${className}`}>
      {items[index % items.length]}
    </span>
  );
}

export default function TechPopups() {
  return (
    <>
      <PopNote items={topTech} className="note-top" offset={0} />
      <PopNote items={bottomTech} className="note-bottom" offset={INTERVAL_MS / 2} />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  siAngular,
  siDjango,
  siFastapi,
  siJavascript,
  siLaravel,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPython,
  siReact,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siVite,
  siVuedotjs,
} from "simple-icons";

const INTERVAL_MS = 2600;

type Tech = { name: string; path: string; bg: string; fg: string };

const brand = (icon: { title: string; path: string }, bg: string, fg = "#ffffff"): Tech => ({
  name: icon.title,
  path: icon.path,
  bg,
  fg,
});

const topTech: Tech[] = [
  brand(siReact, "#61dafb", "#0b1a22"),
  brand(siNextdotjs, "#000000"),
  brand(siTypescript, "#3178c6"),
  brand(siVuedotjs, "#4fc08d", "#0b1a22"),
  brand(siAngular, "#dd0031"),
  brand(siTailwindcss, "#06b6d4", "#0b1a22"),
  brand(siVite, "#9135ff"),
  brand(siJavascript, "#f7df1e", "#1a1a1a"),
];

const bottomTech: Tech[] = [
  brand(siLaravel, "#ff2d20"),
  brand(siPhp, "#777bb4"),
  brand(siPython, "#3776ab"),
  brand(siDjango, "#44b78b", "#0b1a22"),
  brand(siFastapi, "#009688"),
  brand(siSpringboot, "#6db33f", "#0b1a22"),
  brand(siNodedotjs, "#5fa04e", "#0b1a22"),
  brand(siNestjs, "#e0234e"),
];

function PopNote({ items, className, offset }: { items: Tech[]; className: string; offset: number }) {
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

  const tech = items[index % items.length];

  return (
    <span
      key={index}
      className={`art-note tech-pop ${className}`}
      style={{ background: tech.bg, color: tech.fg, boxShadow: `0 0 24px ${tech.bg}88` }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d={tech.path} />
      </svg>
      {tech.name}
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

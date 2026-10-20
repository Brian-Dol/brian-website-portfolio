"use client";

import { useEffect, useRef } from "react";

type Role = {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlight?: string;
};

export default function Timeline({ roles }: { roles: Role[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".timeline-item"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const reach = Math.min(Math.max(window.innerHeight * 0.6 - rect.top, 0), rect.height);
      root.style.setProperty("--timeline-progress", `${reach}px`);
      items.forEach((item) => item.classList.toggle("is-lit", item.offsetTop + 3 <= reach));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="timeline" ref={rootRef}>
      {roles.map((role) => (
        <article className="timeline-item" key={role.company}>
          <p className="timeline-date">{role.date}</p>
          <div>
            <h3>{role.title}</h3>
            <p className="timeline-company">
              {role.company} <span>· {role.location}</span>
            </p>
            <p>{role.description}</p>
            {role.highlight && <p className="timeline-highlight">{role.highlight}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}

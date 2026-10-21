"use client";

import { useEffect, useRef } from "react";

type Role = {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  bullets?: string[];
};

const OUTCOME = /(\d+(?:\.\d+)?(?:\+|%| ms)?(?: to \d+)?|zero downtime|4 languages)/gi;

function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split(OUTCOME).map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
      )}
    </>
  );
}

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
      const raw = window.innerHeight * 0.6 - rect.top;
      const reach = Math.min(Math.max(raw, 0), rect.height);
      root.style.setProperty("--timeline-progress", `${reach}px`);
      root.style.setProperty("--timeline-glow", raw > -40 && raw < rect.height + 40 ? "1" : "0");
      items.forEach((item) => {
        const flare = Math.max(0, 1 - Math.abs(item.offsetTop + 3 - reach) / 90);
        item.style.setProperty("--flare", flare.toFixed(3));
      });
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
            {role.bullets && (
              <ul className="timeline-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Highlighted text={bullet} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

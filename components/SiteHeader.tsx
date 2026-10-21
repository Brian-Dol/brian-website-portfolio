"use client";

import { useState } from "react";
import { CV_URL } from "@/lib/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Selected work" },
  { href: "#experience", label: "Experience" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Brian Dol, home">
        <span className="brand-mark" aria-hidden="true">
          b.
        </span>
        <span>BRIAN DOL&nbsp; / &nbsp;SOFTWARE ENGINEER</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        className={`site-nav${isOpen ? " is-open" : ""}`}
        id="site-nav"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="nav-cv"
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Download CV <span aria-hidden="true">↓</span>
        </a>
        <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

"use client";

import { useState } from "react";
import { Logo } from "./Icons";

const links = [
  ["#how", "How it works"],
  ["#screen", "The screen"],
  ["#targeting", "Targeting"],
  ["#measure", "Measurement"],
  ["#drivers", "For drivers"],
  ["#pricing", "Pricing"],
  ["#faq", "FAQ"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#top" aria-label="RideReach home">
          <Logo size={30} />
          <span className="brand-name">Ride<em>Reach</em></span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <div className={open ? "nav-links open" : "nav-links"}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
        <a className="btn btn-amber nav-cta" href="#pilot">Launch a pilot</a>
      </nav>
    </header>
  );
}

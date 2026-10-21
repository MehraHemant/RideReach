"use client";

import { useAudience } from "./AudienceContext";

const copy = {
  brand: {
    title: <>Your brand. Their <span className="hl">whole ride.</span></>,
    sub: <>RideReach puts entertainment-led screens in the back seats of India's cabs — targeted by <strong>neighbourhood, route and time of day</strong>, with proof of every play. One brand at a time, on the only screen in the car.</>,
    cta1: "Launch a pilot in your city", cta1href: "#pilot",
    cta2: "See how targeting works", cta2href: "#targeting",
  },
  driver: {
    title: <>Your cab. Your <span className="hl">second income.</span></>,
    sub: <>We fit a passenger screen in your cab <strong>free</strong> — screen, data, repairs and support on us — and pay you <strong>at least 25% of the ad revenue</strong> it earns, every week. The screen faces the back seat. You just drive.</>,
    cta1: "Get a free screen", cta1href: "#pilot",
    cta2: "See how payouts work", cta2href: "#drivers",
  },
};

export function Hero() {
  const { audience, setAudience } = useAudience();
  const c = copy[audience];

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="aud-toggle" role="group" aria-label="Choose your audience">
            <button type="button" aria-pressed={audience === "brand"} onClick={() => setAudience("brand")}>I'm a brand</button>
            <button type="button" aria-pressed={audience === "driver"} onClick={() => setAudience("driver")}>I drive / run a fleet</button>
          </div>
          <h1>{c.title}</h1>
          <p className="hero-sub">{c.sub}</p>
          <div className="hero-ctas">
            <a className="btn btn-amber" href={c.cta1href}>{c.cta1}</a>
            <a className="btn btn-ghost" href={c.cta2href}>{c.cta2}</a>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <b><span>27</span> min</b>
              <small>Average urban journey in India — a real window, not a 2-second glance</small>
            </div>
            <div className="hstat">
              <b>&gt;<span>100</span>s</b>
              <small>Average ad exposure Uber reported for its India in-cab pilot <span className="flag">Uber-reported</span></small>
            </div>
            <div className="hstat">
              <b><span>49</span>%</b>
              <small>Digital share of India's outdoor ad market by 2030, up from 34.5% in 2025</small>
            </div>
          </div>
          <p className="hero-note">Journey time: NSO National Household Travel Survey 2025–26 · Exposure: Uber Journey Ads India launch, 2023 · Market share: <a href="https://bestmediainfo.com/insights/indias-dooh-market-to-nearly-catch-physical-outdoor-by-2030-12457362" target="_blank" rel="noopener">PwC Global E&amp;M Outlook 2026–30</a></p>
        </div>
        <figure className="hero-photo">
          <img src="/images/hero.jpg" alt="A passenger screen mounted in a cab showing video content and ads to the back seat during a ride" fetchPriority="high" />
          <figcaption>In-cab passenger screen, live in a working taxi</figcaption>
        </figure>
      </div>
    </section>
  );
}

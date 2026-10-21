"use client";

import { useState } from "react";

const steps = {
  brand: [
    { h: "Pick your rides", p: "Choose the city, the neighbourhoods, the destinations and the hours. Your ad only plays on rides that match.", li: ["Zones, geofences & destination types", "Dayparts — airport runs, office peaks, nightlife", "One brand per ride, if you want the whole trip"] },
    { h: "Upload your creative", p: "A 15–90 second video, a companion banner, and a QR code that hands the offer to the passenger's own phone.", li: ["Dynamic creative for weather, events & scores", "Category exclusions & brand-safety review", "Live in as little as a day — no vehicle visits"] },
    { h: "Watch it perform", p: "Every play is logged with screen, time and location. Follow verified impressions, QR scans and redemptions as they happen.", li: ["Proof-of-play on every impression", "Scans, leads & coupon redemptions per zone", "Brand-lift and footfall studies on request"] },
  ],
  driver: [
    { h: "We fit the screen, free", p: "A 10-inch passenger screen in a locked, charging mount behind your front seat. Installed in minutes by our team — you pay nothing, ever.", li: ["Free screen, mount, data & maintenance", "Rear-facing — you never touch it while driving", "We repair or replace it if anything breaks"] },
    { h: "You just drive", p: "The screen wakes when a passenger sits down and looks after itself. Passengers control volume and can switch it off.", li: ["No change to how you drive or which apps you use", "Passengers get music, games, trip info & offers", "Support in your language, 7 days a week"] },
    { h: "You get paid weekly", p: "At least 25% of the ad revenue your screen earns goes to you — the standard New York City's taxi regulator wrote into law. Tracked per ride, paid every week.", li: ["Minimum 25% revenue share, guaranteed in writing", "See every rupee your screen earned, per ride", "Weekly payout to your bank or UPI"] },
  ],
};

export function HowItWorks() {
  const [tab, setTab] = useState<"brand" | "driver">("brand");

  return (
    <section id="how">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">How it works</div>
          <h2>Three steps, whichever side of the screen you're on</h2>
          <p>A cloud-managed screen on the back of the front seat. Entertainment keeps the passenger watching; ads fund the screen, the data plan and the driver's payout.</p>
        </div>
        <div className="tabs" role="tablist" aria-label="How it works by audience">
          <button type="button" role="tab" id="tab-brand" aria-selected={tab === "brand"} aria-controls="panel-brand" onClick={() => setTab("brand")}>For brands</button>
          <button type="button" role="tab" id="tab-driver" aria-selected={tab === "driver"} aria-controls="panel-driver" onClick={() => setTab("driver")}>For drivers &amp; fleets</button>
        </div>

        {(["brand", "driver"] as const).map((which) => (
          <div key={which} id={`panel-${which}`} role="tabpanel" aria-labelledby={`tab-${which}`} hidden={tab !== which}>
            <div className="steps">
              {steps[which].map((s, i) => (
                <article className="step reveal" key={s.h}>
                  <span className="num">Step 0{i + 1}</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                  <ul>
                    {s.li.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

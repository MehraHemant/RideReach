"use client";

import { useState } from "react";

const zones = [
  {
    id: "airport", name: "Airport runs", blurb: "The longest rides in the city, with travellers who have time to look.",
    icon: <path d="M2.5 19.5 21 5.2c.6-.5.2-1.5-.6-1.4L4 5.4c-.8.1-1 1.1-.3 1.5l5.6 3.8-1.4 4.6-2.4-1.2c-.7-.3-1.4.3-1.2 1l.6 2.3c.1.4.5.7.9.7l1.2-.2 13.5 1.6Z" fill="currentColor" opacity=".9" />,
    title: "The longest, richest window in the city",
    body: "Airport rides run 45–90 minutes in most Indian metros — several times the exposure of a typical city trip, with a passenger who is settled, seated and planning what happens at the other end: the flight, the hotel, the first meal.",
    show: "Travel, forex, lounges, hotels, duty-free, airport retail and the destination city's food and stays.",
    when: "Early-morning departures (4–9 am) and evening arrivals (6–11 pm).",
    act: "QR to a lounge pass, a forex card or a hotel offer they can redeem on landing.",
  },
  {
    id: "office", name: "Office parks", blurb: "Morning and evening peaks into tech corridors and business districts.",
    icon: <><rect x="5" y="3" width="14" height="18" rx="1.5" stroke="currentColor" strokeWidth="2" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    title: "Decision-makers, twice a day",
    body: "Weekday peaks carry professionals between home and India’s tech corridors — often the same riders on the same routes up to ten times a week. That repeat frequency is something a roadside board can never promise.",
    show: "B2B software, fintech, coworking, business hotels, airlines and premium services near the park.",
    when: "7–11 am inbound, 5–9 pm outbound, Monday to Friday.",
    act: "QR to book a demo, start a trial, or grab a lunch offer near the office.",
  },
  {
    id: "mall", name: "Malls & high streets", blurb: "Riders minutes from a purchase, shown offers they can use on arrival.",
    icon: <><path d="M4 8.5 5.5 4h13L20 8.5M4 8.5h16V20H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 20v-5h6v5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></>,
    title: "Minutes from the till",
    body: "These riders are literally on their way to spend. The screen knows the destination, so the offer can be timed to arrival — scanned in the cab, redeemed inside the store, and counted automatically.",
    show: "Retail and D2C brands, food & beverage, cinemas, salons and in-mall promotions.",
    when: "Weekend afternoons and evenings; festive-season peaks.",
    act: "QR coupon with a same-day expiry, redeemed at the till.",
  },
  {
    id: "hospital", name: "Hospitals & clinics", blurb: "Planned trips where pharmacies, diagnostics and care services are on the rider's mind.",
    icon: <><path d="M12 21s-7.5-4.6-9.3-9.2C1.4 8.4 3.6 5 7 5c2 0 3.7 1.1 5 3 1.3-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8C19.5 16.4 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 8v6M9 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    title: "Planned trips, practical needs",
    body: "Hospital rides are scheduled and unhurried. Passengers are already thinking about pharmacies, diagnostics, insurance and care for someone they love — helpful services, offered quietly, fit this ride.",
    show: "Pharmacies, diagnostic labs, health insurance, home-care and wellness services.",
    when: "Morning outpatient hours and evening visiting hours, all week.",
    act: "QR to book a test, order medicines, or save a care helpline.",
  },
  {
    id: "nightlife", name: "Nightlife districts", blurb: "Friday-night rides to the restaurant and club belts — food, drink and entertainment offers land exactly on time.",
    icon: <><path d="M19.5 14.5A8.5 8.5 0 1 1 9.5 4.5a7 7 0 1 0 10 10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M18 3.5l.6 1.7L20.3 5.8l-1.7.6L18 8l-.6-1.6-1.7-.6 1.7-.6L18 3.5Z" fill="currentColor" /></>,
    title: "The night out starts in the cab",
    body: "Thursday-to-Saturday rides into restaurant and club districts carry groups in a spending mood, with the whole evening still unplanned. Your offer arrives while the plan is being made.",
    show: "Restaurants, bars, live events, food delivery and late-night retail.",
    when: "7 pm–1 am, Thursday to Saturday.",
    act: "QR to reserve a table or unlock a first-drink offer.",
  },
  {
    id: "events", name: "Events & stadiums", blurb: "Match days, concerts and festivals concentrate thousands of rides into a few streets and hours.",
    icon: <><path d="M4 20v-6.5A8 8 0 0 1 20 13.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M2.5 20h19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M12 5.5V4M8.5 6.6 7.4 5.5M15.5 6.6l1.1-1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    title: "Thousands of rides, a few streets",
    body: "Match days, concerts and festivals compress a city’s demand into a handful of zones and hours — and nearly every one of those rides ends at the same gates.",
    show: "Event sponsors, food & beverage, ticketing, fan merchandise and nearby hospitality.",
    when: "Event windows — roughly three hours before to two hours after.",
    act: "QR to the after-party, the merch store, or a food-court offer.",
  },
];

export function TargetingExplorer() {
  const [active, setActive] = useState("airport");
  const z = zones.find((zone) => zone.id === active)!;

  return (
    <section id="targeting">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">Targeting</div>
          <h2>Neighbourhood media, not city media</h2>
          <p>A billboard hopes the right person drives past. A cab screen knows the ride: where it started, where it's going, and what time it is. Pick a ride type to see how a campaign thinks.</p>
        </div>
        <div className="zone-layout">
          <div className="zone-grid" role="group" aria-label="Ride types">
            {zones.map((zone) => (
              <button type="button" className="zone" key={zone.id} aria-pressed={zone.id === active} onClick={() => setActive(zone.id)}>
                <span className="z-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">{zone.icon}</svg></span>
                <b>{zone.name}</b>
                <span>{zone.blurb}</span>
              </button>
            ))}
          </div>
          <div className="zone-panel" aria-live="polite">
            <p className="zp-tag">Ride type · {z.name}</p>
            <h3>{z.title}</h3>
            <p>{z.body}</p>
            <dl>
              <div><dt>Show them</dt><dd>{z.show}</dd></div>
              <div><dt>Best dayparts</dt><dd>{z.when}</dd></div>
              <div><dt>Make it act</dt><dd>{z.act}</dd></div>
            </dl>
            <div className="chips" aria-label="Targeting layers">
              <span>Geofence</span><span>Destination type</span><span>Daypart</span><span>Live triggers</span><span>Share of voice</span>
            </div>
          </div>
        </div>
        <p className="src" style={{ marginTop: 26 }}>Targeting is contextual — zone, route, destination and time. We don't need to know who the passenger is, and we don't claim platform rider data. Live triggers (weather, traffic, match scores) can swap creative mid-campaign from the cloud CMS.</p>
      </div>
    </section>
  );
}

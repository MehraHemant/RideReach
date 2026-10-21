const items = [
  {
    icon: <><rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 21h6M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="11" r="2.4" fill="currentColor" /></>,
    h: "Passenger-only, by construction",
    p: "Rear-facing, behind the front seat, outside the driver's view and reach. The driver never needs to touch, hear or think about the screen while the car is moving.",
  },
  {
    icon: <><path d="M4 10v4h3l5 4.5v-13L7 10H4Z" fill="currentColor" /><path d="M15.5 9.5a4 4 0 0 1 0 5M18 7a7.5 7.5 0 0 1 0 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    h: "Quiet in the cabin",
    p: "Audio is rear-directed, starts low, and is controlled by the passenger. Frequency caps stop the same ad looping within a ride — the complaint that sank New York's first taxi screens.",
  },
  {
    icon: <><path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 8v4M12 15.5v.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></>,
    h: "DPDP-aligned data practice",
    p: "India's Digital Personal Data Protection Act, 2023 shapes our design: contextual targeting, consent before any lead capture, purpose limits, retention limits, a named grievance contact — and no passenger-level data is ever sold or shared.",
  },
  {
    icon: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="m9 8 1.8 1.8L14.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    h: "Every creative reviewed",
    p: "A closed network, not an open exchange: every ad is moderated before it plays, with category exclusions and no unsuitable content in family rides.",
  },
];

export function SafetyCompliance() {
  return (
    <section className="safety-sec" id="safety">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 34 }}>
          <div className="kicker">Safety &amp; compliance</div>
          <h2>Designed to the strictest standard we could find</h2>
        </div>
        <div className="safety-grid">
          {items.map((it) => (
            <div className="safety-item reveal" key={it.h}>
              <span className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">{it.icon}</svg></span>
              <h3>{it.h}</h3>
              <p>{it.p}</p>
            </div>
          ))}
        </div>
        <p className="safety-note reveal"><b>An honest note:</b> no India-specific rule for rear-passenger advertising screens exists yet, and rules differ by state and taxi permit. Before launch in each city, we take a formal legal review under the Motor Vehicles Act framework and local permit conditions, and we only fit screens in fleets whose contracts allow them. If a city says no, we don't fit screens there.</p>
      </div>
    </section>
  );
}

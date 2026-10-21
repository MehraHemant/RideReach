const feats = [
  {
    icon: <><path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12l2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    h: "No identity, no stored images",
    p: "Ads are chosen by neighbourhood, destination and time — never by who you are. The presence sensor checks that a seat is occupied, on the device itself; it stores nothing. Anything personal happens only if you scan a QR code and choose to share details on your own phone.",
  },
  {
    icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
    h: "Useful for the last mile of this trip",
    p: "Food near your destination, the store you're heading to, the lounge at your terminal. Relevance to where the ride is going — not ads shouted at everyone, everywhere.",
  },
  {
    icon: <><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.6A8.5 8.5 0 1 1 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8.5 10.5h7M8.5 13.5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    h: "A feedback channel on every screen",
    p: "Rate the content, report a screen, suggest what you'd rather watch. Annoyance killed this category once before — in New York, repetitive, unstoppable loops got taxi screens banned. We design against that failure from day one.",
  },
];

export function PassengerPromise() {
  return (
    <section id="passengers">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">The passenger promise</div>
          <h2>A better ride, not a louder one</h2>
          <p>Ads fund the screen — they don't own it. Passengers get free entertainment and useful local discovery, full control of the screen, and a privacy line we won't cross.</p>
        </div>
        <div className="pass-grid">
          <div className="reveal">
            <p className="privacy-quote">"We target the journey, not the person."</p>
            <div className="feat-list">
              {feats.map((f) => (
                <div className="feat" key={f.h}>
                  <span className="ic"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">{f.icon}</svg></span>
                  <div>
                    <h3>{f.h}</h3>
                    <p>{f.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <figure className="pass-photo reveal">
            <img src="/images/passenger.jpg" alt="A passenger smiling in the back seat of a cab, continuing an offer on her own phone after scanning the screen" loading="lazy" />
            <figcaption>The screen suggests. The phone decides.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

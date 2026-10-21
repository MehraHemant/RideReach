const tiers = [
  ["Pay per result", "Verified CPM", "Pay per thousand presence-verified impressions. Price moves with city, zone, daypart, share of voice and interactivity — airport mornings cost more than suburban afternoons, and you're told exactly why.", "Best for: national brands testing the channel"],
  ["Simple & local", "Per-car monthly", "A flat monthly fee per cab carrying your branding inside (and outside, if you add a wrap). Local businesses have bought media this way in India since the first auto-rickshaw tablets — one bill, your neighbourhood, all month.", "Best for: local chains, clinics, showrooms, coaching & retail"],
  ["Own the moment", "Zone & trip takeover", "One brand owns the whole screen — a full ride, a daypart, or every cab heading to one destination. The format Uber launched its in-car ads with, because an uncluttered screen is the rarest thing in media.", "Best for: launches, events, openings, match-day brands"],
  ["Bought like digital", "Programmatic DOOH", "Buy through the major DOOH exchanges and DSPs you already use, with audience, geo and time targeting, real-time reporting and dynamic creative triggers — the buying standard PwC expects to keep pulling outdoor budgets digital.", "Best for: agencies & always-on digital teams"],
];

export function PricingTiers() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">Pricing logic</div>
          <h2>Four ways to buy the back seat</h2>
          <p>Different brands need different shapes of media. Each model below is one the category already uses — what changes is the city, the zones and the share of the ride you take.</p>
        </div>
        <div className="price-grid">
          {tiers.map(([tag, h, p, best]) => (
            <article className="price-card reveal" key={h}>
              <p className="tag">{tag}</p>
              <h3>{h}</h3>
              <p>{p}</p>
              <p className="best">{best}</p>
            </article>
          ))}
        </div>
        <div className="price-note reveal">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flex: "none", color: "var(--amber)", marginTop: 2 }}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 11v5M12 8v.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
          <p><b>Straight talk on rates:</b> no published India in-cab rate card exists anywhere in this category yet — the only hard precedents are US CPMs ($15–30 in 2019 reporting) and Indian pilots priced per impression or per car. So pilot pricing is set with you, per city and fleet, and printed in the media kit before you spend a rupee.</p>
        </div>
      </div>
    </section>
  );
}

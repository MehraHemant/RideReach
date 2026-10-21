const cards = [
  ["~75,000", "Uber JourneyTV", "Tablet-equipped vehicles reported in the US at its 2025 New York launch — and an in-car tablet pilot has run in Delhi & Mumbai since 2023."],
  ["6,000+", "Lyft Media tablets", "In-car tablets across 12+ markets, reaching over a million rides a month, bundled with route tracking, tipping and music."],
  ["15,000+", "Curb TaxiTV screens", "Licensed-taxi video across 65+ US markets, sold programmatically with geo, daypart and point-of-interest targeting."],
  ["2012", "Tried in India first", "Mumbai's Tabcab ran 3G-networked tablets in ~1,000 cabs over a decade ago. Bengaluru's Trioo put touch tablets in autos in 2019."],
  ["66,000+", "AdOnMo, Hyderabad", "India's ambient-screen network began on cab roofs in 2016 and now runs programmatic screens across 27+ cities."],
];

export function ProofStrip() {
  return (
    <section className="proof">
      <div className="wrap">
        <h3>The model is already running on real streets</h3>
        <div className="proof-grid">
          {cards.map(([big, name, text]) => (
            <div className="proof-card" key={name}>
              <b className="big">{big}</b>
              <b>{name}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="proof-foot">Network sizes are as reported by each operator or the trade press covering them — they show the format works at scale, not our network size. RideReach is a new entrant; our own numbers will come from our pilot, published with city, fleet size and dates.</p>
      </div>
    </section>
  );
}

const qrSteps = [
  ["ON THE SCREEN", "Your ad plays, with a way out of the screen", "Video plus a companion QR. The passenger stays in control — watch, mute, browse, or pick up the phone."],
  ["ON THEIR PHONE", "One scan continues the story", "The offer opens on the passenger's own device: a booking, a coupon, a WhatsApp chat, an app install — with their consent, on a page you own."],
  ["IN YOUR REPORT", "Counted per campaign, zone and creative", "Unique codes per placement tie scans, landing visits and redemptions back to the exact screen, street and hour that produced them."],
];

const stats = [
  ["Verified impressions", "128,400", "Plays logged, passenger present"],
  ["Presence-verified", "96.2%", "Of plays with a seated passenger"],
  ["QR scans", "7,318", "By zone, hour and creative"],
  ["Redemptions", "2,940", "Coupons & bookings completed"],
];

// Illustrative plays by daypart, indexed to the morning peak.
const dpData = [
  { label: "6–9a", v: 100 },
  { label: "9a–12p", v: 64 },
  { label: "12–3p", v: 58 },
  { label: "3–6p", v: 72 },
  { label: "6–9p", v: 95 },
  { label: "9p–12a", v: 48 },
];

export function MeasurementDashboard() {
  return (
    <section className="measure-sec" id="measure">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">Interactivity &amp; measurement</div>
          <h2>Outdoor media with digital receipts</h2>
          <p>Roadside screens estimate an audience. A cab screen logs one: every play carries a screen ID, a timestamp and a GPS fix — and the QR code turns viewing into something you can count.</p>
        </div>
        <div className="qr-steps">
          {qrSteps.map(([n, h, p]) => (
            <div className="qr-step reveal" key={n}>
              <p className="n">{n}</p>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>

        <div className="dash reveal" role="img" aria-label="Illustrative campaign dashboard showing verified impressions, presence-verified plays, QR scans and redemptions, with plays indexed by daypart">
          <div className="dash-head">
            <b>Campaign reporting</b>
            <span className="flag">Illustrative example</span>
            <span className="live"><i></i>Live proof-of-play feed</span>
          </div>
          <div className="dash-body">
            {stats.map(([label, value, note]) => (
              <div className="dash-stat" key={label}><small>{label}</small><b>{value}</b><span>{note}</span></div>
            ))}
          </div>
          <div className="dash-chart">
            <h4>Plays by daypart — indexed, morning peak = 100 (illustrative)</h4>
            <svg viewBox="0 0 640 190" width="100%" style={{ height: "auto" }} role="presentation" aria-hidden="true">
              <line x1="44" y1="150" x2="624" y2="150" stroke="#3A4250" strokeWidth="1" />
              <line x1="44" y1="100" x2="624" y2="100" stroke="#262D38" strokeWidth="1" />
              <line x1="44" y1="50" x2="624" y2="50" stroke="#262D38" strokeWidth="1" />
              <text x="36" y="154" fill="#79818E" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="end">0</text>
              <text x="36" y="104" fill="#79818E" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="end">50</text>
              <text x="36" y="54" fill="#79818E" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="end">100</text>
              <g>
                {dpData.map((d, i) => {
                  const x = 70 + i * 92;
                  const y = 150 - d.v;
                  return (
                    <g key={d.label}>
                      <rect x={x} y={y} width="56" height={d.v} rx="5" fill={i === 0 ? "#F2B33D" : "#3D4656"} />
                      <text x={x + 28} y={y - 8} fill="#C6CBD4" fontSize="11" fontFamily="IBM Plex Mono" textAnchor="middle">{d.v}</text>
                      <text x={x + 28} y="168" fill="#79818E" fontSize="10.5" fontFamily="IBM Plex Mono" textAnchor="middle">{d.label}</text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <div className="def-box reveal">
          <p><b>What counts as one impression?</b> One complete play of your ad on a screen where our sensor confirms a passenger is seated — logged with screen ID, time and GPS. Muted plays still count (and still pay the driver). If nobody is in the back seat, nothing plays and nothing is billed.</p>
        </div>
        <p className="src" style={{ marginTop: 16 }}>Presence-verified playback follows the model Play Octopus described to Digiday in 2019 and Curb TaxiTV operates today. Brand-lift and footfall studies use exposed-vs-control panels, the same method Lyft Media used with Kantar.</p>
      </div>
    </section>
  );
}

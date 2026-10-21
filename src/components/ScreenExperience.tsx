const feats = [
  {
    icon: <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />,
    h: "A loop worth watching",
    p: "Short games and quizzes, city news and weather, music control, trip progress and ideas for where you're headed — publisher and creator content, not an ad reel.",
  },
  {
    icon: <><path d="M4 10v4h3l5 4.5v-13L7 10H4Z" fill="currentColor" /><path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    h: "Quiet by default, off in one tap",
    p: "Mute, volume, brightness and power controls sit on the screen at all times. Sound starts low. A passenger who does nothing still gets a calm ride — that rule is designed in, not bolted on.",
  },
  {
    icon: <><circle cx="12" cy="12" r="3.2" fill="currentColor" /><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
    h: "It only plays to a seated passenger",
    p: "A presence sensor confirms someone is actually in the back seat before anything plays — verified on the device, with no photos taken or stored. No passenger, no play, no charge.",
  },
  {
    icon: <><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" /><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" /><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" /><path d="M13 13h3v3h-3zM18 16h3v5h-5v-3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></>,
    h: "Every ad ends on their phone",
    p: "Each spot carries a QR code. One scan moves the offer — a booking, a coupon, a menu, a lead form — to the passenger's own phone, where the action happens and gets counted.",
  },
];

export function ScreenExperience() {
  return (
    <section className="screen-sec" id="screen">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">The passenger screen</div>
          <h2>Entertainment first. Ads that earn their place.</h2>
          <p>Every network that survived in this category learned the same lesson: passengers accept ads when the screen is worth watching. So the loop leads with things riders actually want — and the controls are always in their hands.</p>
        </div>
        <div className="screen-grid">
          <div className="reveal">
            <figure className="screen-photo">
              <img src="/images/screen.jpg" alt="A cab passenger reaching out to browse content on the touch screen mounted on the seat in front of her" loading="lazy" />
              <figcaption>Touch, browse, play — or switch it off</figcaption>
            </figure>
            <div className="screen-ui" aria-hidden="true">
              <div className="su-head"><span className="su-live"><i></i>PASSENGER SEATED</span><span>SCREEN BLR-0417</span></div>
              <p className="su-trip">Koramangala → Bengaluru Airport</p>
              <p className="su-sub">38 min left · Traffic clear on NH-44</p>
              <div className="su-bar"><i></i></div>
              <div className="su-ad">
                <small>Now playing · Your brand here</small>
                <p>15–90s video, one advertiser per ride</p>
              </div>
              <div className="su-row">
                {["Volume", "Brightness", "Games", "Music", "Off"].map((c) => <span className="su-chip" key={c}>{c}</span>)}
              </div>
            </div>
          </div>
          <div className="feat-list">
            {feats.map((f) => (
              <div className="feat reveal" key={f.h}>
                <span className="ic"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">{f.icon}</svg></span>
                <div>
                  <h3>{f.h}</h3>
                  <p>{f.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";

const brandFaqs = [
  ["How is an impression counted — and verified?", "One complete play of your ad while a presence sensor confirms a passenger is seated. Each play logs screen ID, timestamp, GPS and creative ID — that log is your invoice backup. Empty back seat means no play and no charge. Muted plays count as impressions (the screen is still seen) and we say so upfront."],
  ["Can I target one neighbourhood, or only airport rides?", "Yes to both. Targeting layers combine: geofenced zones, destination types (airports, malls, hospitals, office parks), dayparts and live triggers. A single-store advertiser can buy only rides within a few kilometres of the store; a travel brand can buy only airport-bound rides citywide."],
  ["Is the audio on? Will passengers hate my ad?", "Audio exists but starts low, is rear-directed, and the passenger controls volume, brightness and power at all times. The loop is entertainment-led with frequency caps, so your ad appears inside content people chose to keep on — the model every surviving network uses, and the opposite of the unstoppable loops that got New York's first taxi TVs banned."],
  ["How do QR leads reach my CRM?", "Each creative and zone gets a unique code. Scans land on your page (or one we host), tagged by screen, street and hour; leads flow to your CRM by webhook or scheduled export, with the passenger's consent captured on the landing page as India's DPDP Act requires."],
  ["How fast can a campaign go live?", "Content is pushed from a cloud CMS — no one visits the car. After creative approval and moderation, a campaign can be live across the fleet within a day, and creative can be swapped mid-flight for weather, events or score-triggered moments."],
  ["What brand-safety controls do I get?", "A closed, moderated network: every creative is reviewed before it plays, category exclusions keep competitors (or categories you'd rather avoid) off your rides, and nothing unvetted enters the loop from an open exchange."],
];

const driverFaqs = [
  ["Does it cost me anything?", "No. The screen, the locked charging mount, the data plan, installation, maintenance and replacement are all ours. If the screen is damaged, tell us and we fix or swap it — your earnings statement shows only what you made, never a repair bill."],
  ["How much will I earn, and when?", "You receive at least 25% of the gross ad revenue your screen earns — the floor New York City wrote into its taxi advertising law, adopted here voluntarily. Earnings depend on your rides and hours, so we show the exact basis (rides/week, city, active hours) in your offer rather than quoting a headline number. Payouts are weekly, to bank or UPI, with a per-ride statement."],
  ["Will it affect my app status or ratings?", "The screen demands nothing from you while driving — it wakes when a passenger sits down and manages itself. We only install in fleets and vehicles whose contracts permit in-cab screens, so your platform standing is never put at risk for our hardware."],
  ["What if a passenger complains?", "Passengers control the screen themselves — mute, brightness, off — and can report a screen or suggest content from the screen. Complaints come to us, not to your rating. If a passenger wants it off, off it goes; the ride matters more than the ad."],
  ["What data is collected from me?", "The screen logs its own plays: screen ID, time, location of the play and whether a passenger was present — that's what your payout is calculated from. It doesn't record passengers, store images, or track you off-shift; the screen sleeps when the car does."],
  ["What if I stop driving or change cars?", "We remove the screen free, and your final payout settles in the next weekly cycle. For fleets, screens can move between vehicles in your fleet as cars rotate — your fleet dashboard handles the bookkeeping per vehicle, shift or driver."],
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const answer = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setHeight(open ? 0 : answer.current?.scrollHeight ?? 0);
    setOpen(!open);
  };

  return (
    <div className={open ? "faq-item open" : "faq-item"}>
      <button type="button" className="faq-q" aria-expanded={open} onClick={toggle}>
        {q}
        <span className="arr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
      </button>
      <div className="faq-a" ref={answer} style={{ maxHeight: height }}><p>{a}</p></div>
    </div>
  );
}

export function FaqAccordion() {
  return (
    <section className="faq-sec" id="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">Questions</div>
          <h2>Asked by brands. Asked by drivers.</h2>
        </div>
        <div className="faq-cols">
          <div className="reveal">
            <h3>For brands &amp; agencies</h3>
            {brandFaqs.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}
          </div>
          <div className="reveal">
            <h3>For drivers &amp; fleets</h3>
            {driverFaqs.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Check } from "./Icons";

export function DriversSection() {
  return (
    <section className="drivers-sec" id="drivers">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">For drivers &amp; fleets</div>
          <h2>Earn from every ride. It costs you nothing.</h2>
          <p>The screen is ours — we buy it, fit it, insure it and fix it. The ride time is yours, so you get paid for it. That's the deal that filled cabs for every network that came before us; we've written the fair part into the contract.</p>
        </div>
        <div className="drivers-grid">
          <figure className="drivers-photo reveal">
            <img src="/images/driver.jpg" alt="A cab driver smiling from the driver's seat of his car" loading="lazy" />
            <figcaption>The screen faces the back seat. You just drive.</figcaption>
          </figure>
          <div className="reveal">
            <div className="pledge">
              <p className="p-big">At least <span>25% of ad revenue</span> goes to the driver. In writing.</p>
              <p>New York City's taxi regulator made ≥25% of gross in-car ad revenue the legal floor for drivers, with no deductions. We adopt the same floor voluntarily from day one — and in the US, drivers on a comparable free-tablet network were offered up to $100/month, while an Australian network expects drivers to clear A$1,000+ a year. <span className="flag">International precedents</span></p>
              <p className="src">Source: NYC Taxi &amp; Limousine Commission interior advertising rule · <a href="https://www.bers.nyc.gov/assets/tlc/downloads/pdf/interior_advertising_provider_rule.pdf" target="_blank" rel="noopener">bers.nyc.gov</a></p>
            </div>
            <ul className="check-list">
              <li><span className="ck"><Check size={13} strokeWidth={3} /></span><p><b>₹0 to start.</b> <span>Screen, mount, data plan and installation are free; maintenance and replacement are on us.</span></p></li>
              <li><span className="ck"><Check size={13} strokeWidth={3} /></span><p><b>Paid weekly.</b> <span>Your share is calculated per verified play, visible ride-by-ride in your statement, settled every week to bank or UPI.</span></p></li>
              <li><span className="ck"><Check size={13} strokeWidth={3} /></span><p><b>Nothing changes about your driving.</b> <span>The screen is behind you, for passengers. No interaction while moving, no effect on your app, ratings or trips.</span></p></li>
              <li><span className="ck"><Check size={13} strokeWidth={3} /></span><p><b>Happier passengers, better rides.</b> <span>Music, games and trip info give riders something to enjoy — Lyft reported tablet drivers earning 10%+ more in tips. <span className="flag">Lyft-reported</span></span></p></li>
              <li><span className="ck"><Check size={13} strokeWidth={3} /></span><p><b>Fleet owners:</b> <span>one contract, fitted across your vehicles, with a fleet dashboard for payouts per car, shift or driver — your choice.</span></p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

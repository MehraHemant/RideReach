import { Logo } from "./Icons";

const links = [
  ["#how", "How it works"],
  ["#screen", "The passenger screen"],
  ["#targeting", "Targeting"],
  ["#measure", "Measurement"],
  ["#market", "The opportunity"],
  ["#drivers", "For drivers & fleets"],
  ["#pricing", "Pricing logic"],
  ["#faq", "FAQ"],
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top" aria-label="RideReach home">
              <Logo size={28} />
              <span className="brand-name">Ride<em>Reach</em></span>
            </a>
            <p>The ride-time media network for urban India. Entertainment-led cab screens that pay the drivers who carry them.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="foot-links">
              {links.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4>Where our numbers come from</h4>
            <ul className="foot-src">
              <li><b>India DOOH &amp; digital share</b> — PwC Global E&amp;M Outlook 2026–30, via <a href="https://bestmediainfo.com/insights/indias-dooh-market-to-nearly-catch-physical-outdoor-by-2030-12457362" target="_blank" rel="noopener">BestMediaInfo</a></li>
              <li><b>India outdoor ad spend</b> — dentsu-e4m Advertising Report 2026, via <a href="https://everythingexperiential.com/article/with-4-share-and-rs-4-724-crore-adex-ooh-stays-steady-in-2025-593308" target="_blank" rel="noopener">EverythingExperiential</a></li>
              <li><b>Global DOOH</b> — <a href="https://www.grandviewresearch.com/industry-analysis/digital-out-of-home-advertising-market-report" target="_blank" rel="noopener">Grand View Research</a>, 2025–2030 report</li>
              <li><b>Journey times</b> — NSO National Household Travel Survey 2025–26, via <a href="https://www.indulgexpress.com/msociety/2026/Oct/06/indias-first-travel-survey-reveals-how-we-commute-to-work-average-monthly-cost-travel-time-and-more" target="_blank" rel="noopener">Indulge Express</a></li>
              <li><b>In-cab precedents</b> — <a href="https://www.socialsamosa.com/2023/06/uber-journey-ads-india/" target="_blank" rel="noopener">Uber's India tablet pilot (Social Samosa, 2023)</a>, <a href="https://digiday.com/future-of-tv/octopus-lets-advertisers-reach-uber-lyft-passengers/" target="_blank" rel="noopener">Play Octopus (Digiday, 2019)</a>, <a href="https://www.bers.nyc.gov/assets/tlc/downloads/pdf/interior_advertising_provider_rule.pdf" target="_blank" rel="noopener">NYC TLC interior advertising rule</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 RideReach. A new entrant — pilot cities onboarding now.</span>
          <span>Vendor-reported figures are labelled wherever they appear.</span>
        </div>
      </div>
    </footer>
  );
}

const PWC_URL = "https://bestmediainfo.com/insights/indias-dooh-market-to-nearly-catch-physical-outdoor-by-2030-12457362";

const axis = { fill: "var(--ink-3)", fontSize: 11, fontFamily: "IBM Plex Mono", textAnchor: "end" } as const;
const value = { fill: "var(--ink)", fontSize: 17, fontWeight: 700, fontFamily: "Bricolage Grotesque", textAnchor: "middle" } as const;
const year = { fill: "var(--ink-2)", fontSize: 13, fontFamily: "IBM Plex Mono", textAnchor: "middle" } as const;

export function MarketOpportunity() {
  return (
    <section id="market">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="kicker">The opportunity</div>
          <h2>Digital is taking outdoor's share — and transit is where the new screens are</h2>
          <p>Under every major forecast, digital out-of-home is outgrowing static outdoor in India. The new inventory isn't only on buildings — it's in the vehicles moving between them.</p>
        </div>
        <div className="market-grid">
          <div>
            <div className="chart-card reveal">
              <h3>India digital out-of-home (DOOH), US$ millions</h3>
              <p className="sub">PwC Global Entertainment &amp; Media Outlook 2026–30, India perspective</p>
              <svg viewBox="0 0 560 250" width="100%" style={{ height: "auto" }} role="img" aria-label="Bar chart: India DOOH grows from 193 million US dollars in 2025 to 318.5 million in 2030 (PwC)">
                <line x1="52" y1="200" x2="540" y2="200" stroke="var(--line)" strokeWidth="1.5" />
                <line x1="52" y1="150" x2="540" y2="150" stroke="var(--line)" strokeWidth="1" />
                <line x1="52" y1="100" x2="540" y2="100" stroke="var(--line)" strokeWidth="1" />
                <line x1="52" y1="50" x2="540" y2="50" stroke="var(--line)" strokeWidth="1" />
                <text x="44" y="204" {...axis}>0</text>
                <text x="44" y="154" {...axis}>100</text>
                <text x="44" y="104" {...axis}>200</text>
                <text x="44" y="54" {...axis}>300</text>
                <rect x="150" y="103.5" width="110" height="96.5" rx="5" fill="#C8CDD6" />
                <rect x="340" y="40.75" width="110" height="159.25" rx="5" fill="#F2B33D" />
                <text x="205" y="90" {...value}>$193M</text>
                <text x="395" y="27" {...value}>$318.5M</text>
                <text x="205" y="222" {...year}>2025</text>
                <text x="395" y="222" {...year}>2030</text>
              </svg>
              <p className="src">Source: <a href={PWC_URL} target="_blank" rel="noopener">PwC via BestMediaInfo</a> · Bars start at zero; endpoints only — the source does not publish a yearly path, so we don't invent one.</p>
            </div>
            <div className="chart-card reveal">
              <h3>Digital share of India's total outdoor market</h3>
              <p className="sub">Digital screens vs all outdoor advertising, PwC 2026–30 outlook</p>
              <svg viewBox="0 0 560 210" width="100%" style={{ height: "auto" }} role="img" aria-label="Bar chart: digital share of India outdoor advertising rises from 34.5 percent in 2025 to about 49 percent in 2030 (PwC)">
                <line x1="52" y1="160" x2="540" y2="160" stroke="var(--line)" strokeWidth="1.5" />
                <line x1="52" y1="110" x2="540" y2="110" stroke="var(--line)" strokeWidth="1" />
                <line x1="52" y1="60" x2="540" y2="60" stroke="var(--line)" strokeWidth="1" />
                <text x="44" y="164" {...axis}>0%</text>
                <text x="44" y="114" {...axis}>25%</text>
                <text x="44" y="64" {...axis}>50%</text>
                <rect x="150" y="91" width="110" height="69" rx="5" fill="#C8CDD6" />
                <rect x="340" y="62" width="110" height="98" rx="5" fill="#0C7A64" />
                <text x="205" y="78" {...value}>34.5%</text>
                <text x="395" y="49" {...value}>~49%</text>
                <text x="205" y="182" {...year}>2025</text>
                <text x="395" y="182" {...year}>2030</text>
              </svg>
              <p className="src">Source: <a href={PWC_URL} target="_blank" rel="noopener">PwC via BestMediaInfo</a> — "digital nearly catches physical outdoor by 2030."</p>
            </div>
          </div>
          <div>
            <div className="stat-tiles">
              <div className="tile reveal">
                <b>₹4,724 <span>crore</span></b>
                <p>India's total outdoor ad spend in 2025 (up from ₹4,256 crore in 2024) — about 4% of all advertising, with transit and digital screens named as the growth engine.</p>
                <span className="src">dentsu-e4m Advertising Report 2026 · <a href="https://everythingexperiential.com/article/with-4-share-and-rs-4-724-crore-adex-ooh-stays-steady-in-2025-593308" target="_blank" rel="noopener">EverythingExperiential</a></span>
              </div>
              <div className="tile reveal">
                <b>$20.7B <span>→ $39.1B</span></b>
                <p>Global DOOH, 2024 to 2030 — a 10.7% compound annual growth rate. In-cab screens ride inside the fastest-moving part of that market: transit environments.</p>
                <span className="src">Grand View Research, DOOH Market Report 2025–2030 · <a href="https://www.grandviewresearch.com/industry-analysis/digital-out-of-home-advertising-market-report" target="_blank" rel="noopener">grandviewresearch.com</a></span>
              </div>
              <div className="tile reveal">
                <b>25–27 <span>minutes</span></b>
                <p>The average Indian commute — 25 minutes overall, 27 in urban areas. That is the seated, single-screen window a cab ad works with, versus seconds for a roadside board.</p>
                <span className="src">NSO National Household Travel Survey 2025–26 · <a href="https://www.indulgexpress.com/msociety/2026/Oct/06/indias-first-travel-survey-reveals-how-we-commute-to-work-average-monthly-cost-travel-time-and-more" target="_blank" rel="noopener">Indulge Express</a> (all journey modes, not cabs alone)</span>
              </div>
            </div>
            <div className="caveat reveal">
              <b>A note on market numbers</b>
              <p>Research firms define "DOOH" differently, so published India estimates differ widely — one widely-quoted series puts it near $2.2B by counting far more than screens. We cite one consistent source (PwC) wherever we compare years, and we'd rather show you a smaller number we can defend than a bigger one we can't.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

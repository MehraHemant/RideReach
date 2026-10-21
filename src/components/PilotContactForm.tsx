"use client";

import { useState } from "react";
import { useAudience } from "./AudienceContext";
import { Check } from "./Icons";

const types = { brand: "A brand / advertiser", agency: "An agency", driver: "A driver", fleet: "A fleet owner" };
const scales = { pilot: "Pilot campaign / a few cars", city: "One city, full coverage", multi: "Multiple cities", fleet100: "Fleet of 100+ vehicles" };

export function PilotContactForm() {
  const { audience } = useAudience();
  const [type, setType] = useState<keyof typeof types>(audience);
  const [syncedAudience, setSyncedAudience] = useState(audience);
  const [status, setStatus] = useState<{ text: string; color: string }>({ text: "", color: "" });

  // The hero audience toggle presets "I am", as the reference page does.
  if (audience !== syncedAudience) {
    setSyncedAudience(audience);
    setType(audience);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name")).trim();
    const city = String(data.get("city")).trim();
    if (!name || !city) {
      setStatus({ text: "Add your name and city, and we'll prepare the enquiry.", color: "#F2B33D" });
      return;
    }
    const typeText = types[type];
    const scaleText = scales[data.get("scale") as keyof typeof scales];
    const msg = String(data.get("message")).trim();
    const subject = "RideReach pilot enquiry — " + typeText + ", " + city;
    const body = "Name: " + name + "\nCity: " + city + "\nI am: " + typeText +
      "\nScale: " + scaleText +
      (msg ? "\n\nPlanning:\n" + msg : "") +
      "\n\nPlease send the pilot kit (rates, coverage, measurement definitions).";
    setStatus({ text: "Opening your email app with the enquiry ready to send…", color: "#7CE3C3" });
    window.location.href = "mailto:hello@ridereach.in?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  };

  return (
    <section className="cta-sec" id="pilot">
      <div className="cta-bg"><img src="/images/cta.jpg" alt="" aria-hidden="true" loading="lazy" /></div>
      <div className="wrap cta-inner">
        <div className="cta-grid">
          <div>
            <h2>Be on the screen when your city gets its first network.</h2>
            <p className="lead">We're onboarding pilot cities now. Brands get launch zones at pilot pricing with full measurement; fleets and drivers get free screens and the 25% revenue floor in writing.</p>
            <ul className="cta-points">
              <li><span className="ck"><Check size={12} strokeWidth={3.2} /></span><p><b>Brands:</b>&nbsp;pilot media kit with rates, coverage and measurement definitions.</p></li>
              <li><span className="ck"><Check size={12} strokeWidth={3.2} /></span><p><b>Drivers &amp; fleets:</b>&nbsp;eligibility check and a free install slot in your city.</p></li>
              <li><span className="ck"><Check size={12} strokeWidth={3.2} /></span><p><b>No invented numbers:</b>&nbsp;your pilot results — city, dates, sample — get published with the campaign.</p></li>
            </ul>
          </div>
          <form className="pilot" noValidate onSubmit={onSubmit}>
            <h3>Request the pilot kit</h3>
            <p className="fsub">Tell us who you are and what you'd like to run. We reply with the media kit or an install slot — no spam, no obligation.</p>
            <div className="f-row">
              <div className="f-field">
                <label htmlFor="fName">Your name</label>
                <input id="fName" name="name" type="text" autoComplete="name" placeholder="e.g. Asha Rao" required />
              </div>
              <div className="f-field">
                <label htmlFor="fCity">City</label>
                <input id="fCity" name="city" type="text" autoComplete="address-level2" placeholder="e.g. Bengaluru" required />
              </div>
            </div>
            <div className="f-row">
              <div className="f-field">
                <label htmlFor="fType">I am</label>
                <select id="fType" name="type" value={type} onChange={(e) => setType(e.target.value as keyof typeof types)}>
                  {Object.entries(types).map(([v, label]) => <option key={v} value={v}>{label}</option>)}
                </select>
              </div>
              <div className="f-field">
                <label htmlFor="fScale">Scale</label>
                <select id="fScale" name="scale">
                  {Object.entries(scales).map(([v, label]) => <option key={v} value={v}>{label}</option>)}
                </select>
              </div>
            </div>
            <div className="f-field">
              <label htmlFor="fMsg">What are you planning?</label>
              <textarea id="fMsg" name="message" placeholder="e.g. Launching a cloud kitchen in South Bengaluru — want rides within 5 km of our outlets, evenings."></textarea>
            </div>
            <button type="submit" className="btn btn-amber" style={{ width: "100%" }}>Prepare my enquiry</button>
            <p className="form-status" role="status" style={status.color ? { color: status.color } : undefined}>{status.text}</p>
            <p className="form-alt">Prefer email? Write to <a href="mailto:hello@ridereach.in?subject=RideReach%20pilot%20enquiry">hello@ridereach.in</a></p>
          </form>
        </div>
      </div>
    </section>
  );
}

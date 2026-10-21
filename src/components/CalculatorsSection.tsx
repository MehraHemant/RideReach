"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Users, Smartphone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export function CalculatorsSection() {
  const [calcTab, setCalcTab] = useState<"driver" | "brand">("driver");

  // Driver Calculator State
  const [cabsCount, setCabsCount] = useState(1);
  const [ridesPerDay, setRidesPerDay] = useState(12);
  const [avgRideTime, setAvgRideTime] = useState(25);

  // Calculations for Driver
  // Est revenue per ride = ₹8 base ad play value (based on 2-3 ads per ride)
  const dailyAdRevenuePerCab = ridesPerDay * (avgRideTime / 15) * 3.5;
  const monthlyGrossPerCab = dailyAdRevenuePerCab * 26; // 26 driving days
  const driverMonthlyPayoutPerCab = Math.round(monthlyGrossPerCab * 0.25);
  const driverAnnualPayoutPerCab = driverMonthlyPayoutPerCab * 12;
  const fleetTotalMonthly = driverMonthlyPayoutPerCab * cabsCount;

  // Brand Campaign Calculator State
  const [targetRides, setTargetRides] = useState(50000);
  const [selectedCity, setSelectedCity] = useState("Bengaluru");
  const [adDuration, setAdDuration] = useState<15 | 30>(15);
  const [campaignDays, setCampaignDays] = useState(14);

  // Brand calculations
  // CPM varies by city tier: BLR/MUM (₹180 for 15s, ₹280 for 30s)
  const baseCpm = adDuration === 15 ? 180 : 280;
  const estimatedCost = Math.round((targetRides / 1000) * baseCpm);
  const estimatedQrScans = Math.round(targetRides * 0.043); // ~4.3% scan rate
  const totalHoursExposure = Math.round((targetRides * 25) / 60);

  return (
    <section id="calculators" className="py-24 bg-[#0B0E13] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="font-mono text-xs font-semibold tracking-widest text-[#F2B33D] uppercase flex items-center justify-center gap-2">
            <span className="w-6 h-[2px] bg-[#F2B33D]" />
            INTERACTIVE ESTIMATORS
            <span className="w-6 h-[2px] bg-[#F2B33D]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate your <span className="text-[#F2B33D]">impact & earnings</span>
          </h2>
          <p className="text-[#A9B0BC] text-lg">
            Use our live interactive calculators to project driver revenue payouts or plan brand campaign reach.
          </p>

          {/* Calculator Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="bg-[#12161D] p-1.5 rounded-2xl border border-[#262D38] inline-flex items-center gap-2 shadow-xl">
              <button
                onClick={() => setCalcTab("driver")}
                className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  calcTab === "driver"
                    ? "bg-[#F2B33D] text-[#0B0E13] shadow-md"
                    : "text-[#A9B0BC] hover:text-white"
                }`}
              >
                Driver & Fleet Payout Calculator
              </button>
              <button
                onClick={() => setCalcTab("brand")}
                className={`px-6 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  calcTab === "brand"
                    ? "bg-[#F2B33D] text-[#0B0E13] shadow-md"
                    : "text-[#A9B0BC] hover:text-white"
                }`}
              >
                Brand Campaign Estimator
              </button>
            </div>
          </div>
        </div>

        {/* DRIVER CALCULATOR */}
        {calcTab === "driver" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#12161D] border border-[#262D38] p-6 sm:p-10 rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
                  <label className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#F2B33D]" /> Number of Cabs in Fleet
                  </label>
                  <span className="font-mono text-base text-[#F2B33D] font-bold bg-[#1A2029] px-3 py-1 rounded-lg border border-[#262D38]">
                    {cabsCount} {cabsCount === 1 ? "Cab" : "Cabs"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={cabsCount}
                  onChange={(e) => setCabsCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#1A2029] rounded-lg appearance-none cursor-pointer accent-[#F2B33D]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#79818E] mt-1">
                  <span>1 Cab (Solo Driver)</span>
                  <span>50 Cabs</span>
                  <span>100 Cabs (Fleet)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
                  <label>Average Passenger Rides Per Day</label>
                  <span className="font-mono text-base text-white font-bold bg-[#1A2029] px-3 py-1 rounded-lg border border-[#262D38]">
                    {ridesPerDay} Rides / day
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  value={ridesPerDay}
                  onChange={(e) => setRidesPerDay(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#1A2029] rounded-lg appearance-none cursor-pointer accent-[#F2B33D]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
                  <label>Average Trip Duration (minutes)</label>
                  <span className="font-mono text-base text-white font-bold bg-[#1A2029] px-3 py-1 rounded-lg border border-[#262D38]">
                    {avgRideTime} mins
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={avgRideTime}
                  onChange={(e) => setAvgRideTime(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#1A2029] rounded-lg appearance-none cursor-pointer accent-[#F2B33D]"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#1A2029] border border-[#262D38] text-xs font-mono text-[#A9B0BC] space-y-1">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7CE3C3]" />
                  RideReach Revenue Floor Guarantee
                </div>
                <p>
                  You get <strong>≥25% of gross ad revenue</strong> generated on your backseat screen. Screen, SIM data, mounting & maintenance are 100% FREE.
                </p>
              </div>
            </div>

            {/* Right Payout Results Card */}
            <div className="lg:col-span-6 bg-[#161B24] border-2 border-[#F2B33D]/40 p-8 rounded-2xl shadow-xl space-y-6">
              <div className="font-mono text-xs font-bold text-[#F2B33D] uppercase tracking-wider">
                ESTIMATED DRIVER EARNINGS
              </div>

              <div>
                <div className="text-xs text-[#A9B0BC] font-mono mb-1">Monthly Payout Per Cab:</div>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#F2B33D]">
                  ₹{driverMonthlyPayoutPerCab.toLocaleString("en-IN")}{" "}
                  <span className="text-sm text-[#A9B0BC] font-sans font-normal">/ month</span>
                </div>
                <div className="text-xs text-[#7CE3C3] font-mono mt-1">
                  Est. Annual: ₹{driverAnnualPayoutPerCab.toLocaleString("en-IN")} / year
                </div>
              </div>

              {cabsCount > 1 && (
                <div className="pt-4 border-t border-[#262D38]">
                  <div className="text-xs text-[#A9B0BC] font-mono mb-1">Total Fleet Monthly Payout ({cabsCount} Cabs):</div>
                  <div className="font-display font-extrabold text-3xl text-white">
                    ₹{fleetTotalMonthly.toLocaleString("en-IN")}{" "}
                    <span className="text-xs text-[#7CE3C3] font-mono">/ month total</span>
                  </div>
                </div>
              )}

              <a
                href="#pilot"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F2B33D] hover:bg-[#ffc355] text-[#0B0E13] font-bold text-base py-3.5 rounded-xl transition-all shadow-lg"
              >
                Claim Free Screen Installation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ) : (
          /* BRAND CALCULATOR */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#12161D] border border-[#262D38] p-6 sm:p-10 rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
                  <label>Target Verified Rides / Plays</label>
                  <span className="font-mono text-base text-[#F2B33D] font-bold bg-[#1A2029] px-3 py-1 rounded-lg border border-[#262D38]">
                    {targetRides.toLocaleString("en-IN")} Rides
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="250000"
                  step="5000"
                  value={targetRides}
                  onChange={(e) => setTargetRides(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#1A2029] rounded-lg appearance-none cursor-pointer accent-[#F2B33D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-[#A9B0BC] block mb-2">Target Metro City</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-[#1A2029] border border-[#262D38] text-white rounded-xl p-3 text-sm focus:border-[#F2B33D] outline-none"
                  >
                    <option value="Bengaluru">Bengaluru (Tech & Airport)</option>
                    <option value="Mumbai">Mumbai (Financial & BKC)</option>
                    <option value="Delhi-NCR">Delhi-NCR (Gurugram & Noida)</option>
                    <option value="Hyderabad">Hyderabad (HITEC City)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-[#A9B0BC] block mb-2">Ad Spot Length</label>
                  <div className="flex bg-[#1A2029] p-1 rounded-xl border border-[#262D38]">
                    <button
                      onClick={() => setAdDuration(15)}
                      className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg ${
                        adDuration === 15 ? "bg-[#F2B33D] text-[#0B0E13]" : "text-[#A9B0BC]"
                      }`}
                    >
                      15 Seconds
                    </button>
                    <button
                      onClick={() => setAdDuration(30)}
                      className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg ${
                        adDuration === 30 ? "bg-[#F2B33D] text-[#0B0E13]" : "text-[#A9B0BC]"
                      }`}
                    >
                      30 Seconds
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1A2029] border border-[#262D38] text-xs font-mono text-[#A9B0BC] space-y-1">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7CE3C3]" /> Included in Every Campaign:
                </div>
                <p>
                  Zero empty-seat charges, geofenced route targeting, daypart schedules, companion QR attribution, and real-time dashboard analytics.
                </p>
              </div>
            </div>

            {/* Right Brand Campaign Estimate Card */}
            <div className="lg:col-span-6 bg-[#161B24] border-2 border-[#F2B33D]/40 p-8 rounded-2xl shadow-xl space-y-6">
              <div className="font-mono text-xs font-bold text-[#F2B33D] uppercase tracking-wider">
                ESTIMATED CAMPAIGN INVESTMENT & IMPACT
              </div>

              <div>
                <div className="text-xs text-[#A9B0BC] font-mono mb-1">Estimated Campaign Budget:</div>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#F2B33D]">
                  ₹{estimatedCost.toLocaleString("en-IN")}{" "}
                  <span className="text-xs text-[#A9B0BC] font-sans font-normal">+ GST</span>
                </div>
                <div className="text-xs text-[#7CE3C3] font-mono mt-1">
                  Effective CPM: ₹{baseCpm} per 1,000 verified plays
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#262D38]">
                <div>
                  <div className="text-xs text-[#A9B0BC] font-mono">Est. Phone QR Scans:</div>
                  <div className="font-display font-extrabold text-2xl text-white">
                    {estimatedQrScans.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[11px] text-[#7CE3C3] font-mono">~4.3% Conversion Rate</div>
                </div>

                <div>
                  <div className="text-xs text-[#A9B0BC] font-mono">Total Passenger Exposure:</div>
                  <div className="font-display font-extrabold text-2xl text-white">
                    {totalHoursExposure.toLocaleString("en-IN")} Hours
                  </div>
                  <div className="text-[11px] text-[#A9B0BC] font-mono">Undivided Attention</div>
                </div>
              </div>

              <a
                href="#pilot"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F2B33D] hover:bg-[#ffc355] text-[#0B0E13] font-bold text-base py-3.5 rounded-xl transition-all shadow-lg"
              >
                Request Pilot Campaign Rates
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

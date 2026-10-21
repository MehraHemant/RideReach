import { AudienceProvider } from "@/components/AudienceContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { ScreenExperience } from "@/components/ScreenExperience";
import { TargetingExplorer } from "@/components/TargetingExplorer";
import { MeasurementDashboard } from "@/components/MeasurementDashboard";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { DriversSection } from "@/components/DriversSection";
import { PassengerPromise } from "@/components/PassengerPromise";
import { SafetyCompliance } from "@/components/SafetyCompliance";
import { PricingTiers } from "@/components/PricingTiers";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PilotContactForm } from "@/components/PilotContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <AudienceProvider>
      <Navbar />
      <Hero />
      <ProofStrip />
      <HowItWorks />
      <ScreenExperience />
      <TargetingExplorer />
      <MeasurementDashboard />
      <MarketOpportunity />
      <DriversSection />
      <PassengerPromise />
      <SafetyCompliance />
      <PricingTiers />
      <FaqAccordion />
      <PilotContactForm />
      <Footer />
    </AudienceProvider>
  );
}

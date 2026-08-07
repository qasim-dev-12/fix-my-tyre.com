import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import StatsBar from "@/components/Home/StatsBar";
import TrustIntro from "@/components/Home/TrustIntro";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesGrid from "@/components/Home/ServicesGrid";
import BrandsShowcase from "@/components/Home/BrandsShowcase";
import HowItWorks from "@/components/Home/HowItWorks";
import BulletSection from "@/components/Home/BulletSection";
import VehicleTypes from "@/components/Home/VehicleTypes";
import WarningSigns from "@/components/Home/WarningSigns";
import AreasCovered from "@/components/Home/AreasCovered";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Home/FAQ";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fix My Tyre | Tyre Repair Dubai",
  description:
    "Fastest on-site tyre repair in Dubai. Michelin, Bridgestone, Pirelli & more delivered and fitted in 20-30 minutes, 24/7.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <BrandsShowcase />
      <HowItWorks />
      <VehicleTypes />
      <StatsBar />
      <TrustIntro />
      <WhyChooseUs />
      <ServicesGrid />
      <BulletSection
        eyebrow="Tyre Care Tips"
        title="Extend Your Tyre Life in Dubai"
        bullets={[
          "Check tyre pressure at least once a month",
          "Rotate tyres regularly for even wear",
          "Get wheel alignment and balancing checked periodically",
          "Avoid overloading your vehicle beyond its rated capacity",
          "Schedule a free tyre health check every 6 months with Fix My Tyre",
        ]}
      />
      <WarningSigns />
      <AreasCovered />
      <Testimonials />
      <FAQ />
      <EmergencyCTA />
    </>
  );
}

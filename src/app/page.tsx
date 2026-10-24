import { SiteHeader } from "@/components/site-header";
import { ScrollMotion } from "@/components/scroll-motion";
import {
  AboutSection,
  ContactSection,
  FaqSection,
  HeroSection,
  IndustriesSection,
  ProcessSection,
  ProjectsSection,
  RealEstateSection,
  ServiceDetailSection,
  ServicesSection,
  SiteFooter,
} from "@/components/site-sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <ScrollMotion />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ServiceDetailSection />
        <RealEstateSection />
        <ProjectsSection />
        <IndustriesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

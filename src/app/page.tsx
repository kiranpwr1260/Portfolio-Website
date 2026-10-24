import { SiteHeader } from "@/components/site-header";
import { ScrollMotion } from "@/components/scroll-motion";
import {
  AboutSection,
  CompanyFootprintSection,
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
        <ServicesSection />
        <ProcessSection />
        <ServiceDetailSection />
        <RealEstateSection />
        <ProjectsSection />
        <IndustriesSection />
        <AboutSection />
        <CompanyFootprintSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

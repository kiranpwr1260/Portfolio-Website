import { SiteHeader } from "@/components/site-header";
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

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  Handshake,
  MapPin,
  MoveUpRight,
  ShieldCheck,
  Warehouse,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import {
  faqs,
  industries,
  clientLogos,
  clientProjects,
  processSteps,
  realEstateCapabilities,
  serviceDetails,
  servicePillars,
  siteConfig,
} from "@/content/site";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${light ? "text-[#e3a06f]" : "text-[#bd6b36]"}`}>
      <span className={`h-px w-7 ${light ? "bg-[#e3a06f]" : "bg-[#bd6b36]"}`} />
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`text-3xl font-semibold leading-[1.14] tracking-[-0.04em] sm:text-4xl lg:text-[52px] ${light ? "text-white" : "text-[#172e38]"}`}>
        {title}
      </h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${light ? "text-white/65" : "text-[#68767a]"}`}>{description}</p>}
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative isolate min-h-[680px] overflow-hidden bg-[#10242d] text-white lg:min-h-[740px]">
      <Image
        src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2200&q=85"
        alt="Modern industrial facility with production machinery"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#0e232c] via-[#0e232c]/85 to-[#0e232c]/25" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-[#10242d]/90 via-transparent to-[#10242d]/20" />
      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center px-5 py-24 sm:px-8 lg:min-h-[740px] lg:grid-cols-[1fr_0.6fr] lg:px-12">
        <div className="max-w-3xl">
          <Eyebrow light>Industrial · Techno-legal · Infrastructure</Eyebrow>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
            Navigate industrial growth <span className="text-[#e3a06f]">with confidence.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            DS Associate supports businesses with industrial land, regulatory coordination, infrastructure approvals, and project advisory—from planning through execution.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact">
              <ButtonHero>Discuss your project <ArrowUpRight className="size-4" /></ButtonHero>
            </a>
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a06f]"
            >
              Explore our services <ArrowDown className="size-4" />
            </a>
          </div>
        </div>
        <div className="hidden items-end justify-end self-end pb-4 lg:flex">
          <div className="max-w-[265px] border-l border-[#e3a06f] pl-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e3a06f]">One connected view</p>
            <p className="mt-3 text-sm leading-6 text-white/75">Land, approvals, infrastructure, and industrial property support coordinated around your project needs.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-5 right-5 border-t border-white/15 py-5 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/65 sm:grid-cols-4 sm:text-xs">
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#e3a06f]" /> Land & techno-legal</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#e3a06f]" /> Infrastructure</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#e3a06f]" /> Industrial support</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#e3a06f]" /> Industrial real estate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ButtonHero({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#d17b3f] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#bb6832] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#e3a06f]">
      {children}
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#f8f7f4] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
        <div className="relative min-h-[390px] overflow-hidden rounded-2xl sm:min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
            alt="Contemporary commercial and industrial district"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10242d]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">DS Associate</p>
              <p className="mt-2 max-w-xs text-xl font-medium leading-7">Practical guidance for complex industrial projects.</p>
            </div>
            <span className="hidden rounded-full border border-white/40 p-3 sm:block"><MoveUpRight className="size-5" /></span>
          </div>
        </div>
        <div>
          <SectionTitle
            eyebrow="About DS Associate"
            title="Clear direction for the work behind industrial growth."
            description="From identifying suitable land to coordinating approvals and industrial support services, DS Associate works alongside businesses to help move projects forward with clarity and practical coordination."
          />
          <p className="mt-5 text-sm leading-7 text-[#68767a]">
            The techno-legal presentation says DS Associate started in {siteConfig.startYear} as a Pune venture supporting small and medium enterprises with liaisoning services. It describes the business developing into a multidisciplinary consultancy supporting startups and established companies with MIDC land allotment, approvals, sanctions, incentives, and licences.
          </p>
          <div className="mt-6 rounded-xl border-l-2 border-[#d17b3f] bg-white px-5 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#bd6b36]">Core objective</p>
            <p className="mt-2 text-sm leading-6 text-[#35474c]">&ldquo;{siteConfig.coreObjective}&rdquo;</p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {siteConfig.values.map((title) => (
              <div className="flex gap-3 rounded-xl border border-[#e6e2dc] bg-white p-4" key={title}>
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f4e7dc] text-[#b76532]"><Check className="size-4" /></span>
                <div>
                  <h3 className="text-sm font-semibold text-[#172e38]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#68767a]">A value described in the company presentation.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-[#e6e2dc] bg-white p-5 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bd6b36]">Founder</p>
            <h3 className="mt-2 text-lg font-semibold text-[#172e38]">{siteConfig.founder.name}</h3>
            <p className="mt-1 text-xs font-medium text-[#68767a]">{siteConfig.founder.title}</p>
            <p className="mt-3 text-sm leading-6 text-[#68767a]">{siteConfig.founder.bio}</p>
            <p className="mt-3 text-xs leading-5 text-[#68767a]">{siteConfig.founder.education}</p>
            <p className="mt-3 text-xs font-semibold leading-5 text-[#526267]">Career details as stated across the presentations:</p>
            <ul className="mt-1 space-y-1">
              {siteConfig.founder.careerDetails.map((detail) => <li key={detail} className="text-xs leading-5 text-[#68767a]">• {detail}</li>)}
            </ul>
            <p className="mt-2 text-[11px] leading-5 text-[#8a9291]">The decks give different career-history and experience descriptions. No experience figure or single chronology is stated here pending confirmation.</p>
            <p className="mt-3 text-[11px] leading-5 text-[#8a9291]">Draft biography from the company presentation; approve wording and details before publication.</p>
          </div>
          <p className="mt-4 text-xs leading-5 text-[#869091]">Historical company details and the founder biography require DSA review before publication.</p>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="What we do"
            title="Integrated support across the industrial project journey."
            description="Explore DS Associate's techno-legal, infrastructure, industrial support, specialised consultancy, and industrial real estate capabilities."
          />
          <a href="#contact" className="mb-1 inline-flex items-center gap-2 text-sm font-semibold text-[#172e38] hover:text-[#bd6b36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17b3f]">
            Discuss your requirement <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicePillars.map((service) => (
            <a href={service.href} key={service.number} className="group">
              <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:border-[#d9b294] hover:shadow-[0_16px_45px_rgba(23,46,56,0.08)]">
                <CardContent className="flex h-full min-h-[310px] flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.15em] text-[#bd6b36]">{service.number}</span>
                    <span className="rounded-full border border-[#e8e4de] p-2 text-[#172e38] transition-colors group-hover:border-[#d17b3f] group-hover:bg-[#d17b3f] group-hover:text-white"><ArrowUpRight className="size-4" /></span>
                  </div>
                  <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#172e38]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#68767a]">{service.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {service.tags.map((tag) => <span className="rounded-full bg-[#f5f3ef] px-3 py-1.5 text-[10px] font-medium text-[#68767a]" key={tag}>{tag}</span>)}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-[#10242d] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <SectionTitle
            eyebrow="How we work"
            title="A considered process. Clear next steps."
            description="A collaborative framework to bring structure to the many moving parts of an industrial project."
            light
          />
          <div className="grid gap-0 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div className="border-t border-white/15 py-6 sm:p-6 sm:first:pl-0" key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#e3a06f]">0{index + 1}</span>
                  <span className="h-px w-10 bg-white/25" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailSection() {
  return (
    <section id="service-details" className="scroll-mt-20 bg-[#f8f7f4] py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionTitle
          eyebrow="Service detail"
          title="Specialist support, grouped around your needs."
          description="A selection of coordination and advisory workstreams listed in the company presentation. Scope and applicable requirements are confirmed for each project."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {serviceDetails.map((service) => (
            <Card key={service.id} id={service.id} className="scroll-mt-28">
              <CardContent className="p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bd6b36]">{service.label}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#172e38]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#68767a]">{service.summary}</p>
                <div className="mt-7 grid gap-6 sm:grid-cols-3">
                  {service.groups.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-xs font-bold text-[#172e38]">{group.title}</h4>
                      <ul className="mt-3 space-y-2.5">
                        {group.items.map((item) => (
                          <li className="flex items-start gap-2 text-xs leading-5 text-[#68767a]" key={item}>
                            <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-[#bd6b36]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-[#7e8889]">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#bd6b36]" />
          Policy and incentive information is indicative and subject to current government rules, eligibility, documentation, qualified professional advice, and approval by the competent authority. Formal legal opinions and statutory decisions must come from authorised professionals and authorities.
        </p>
      </div>
    </section>
  );
}

export function RealEstateSection() {
  return (
    <section id="real-estate" className="scroll-mt-20 overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-12">
        <div className="relative order-2 min-h-[420px] overflow-hidden rounded-2xl bg-[#d6d6d2] lg:order-1 lg:min-h-[610px]">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85"
            alt="Industrial workspace and production equipment"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10242d]/65 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-[#10242d]/75 p-5 text-white backdrop-blur-sm sm:bottom-8 sm:left-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e3a06f]">DS Associate</p>
            <p className="mt-2 text-lg font-semibold">Industrial Real Estate Division</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionTitle
            eyebrow="Industrial real estate"
            title="Find the right space to move your business forward."
            description="Property sourcing and transaction support for industrial land and facilities—across outright purchase, sale, lease, and rental requirements."
          />
          <div className="mt-8 space-y-5">
            {realEstateCapabilities.map((item) => {
              const Icon = item.icon === "shed" ? Warehouse : item.icon === "land" ? MapPin : Building2;
              return (
              <div key={item.title} className="flex gap-4 border-b border-[#e8e4de] pb-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f4e7dc] text-[#b76532]"><Icon className="size-5" /></span>
                <div>
                  <h3 className="text-base font-semibold text-[#172e38]">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#526267]">{item.range}</p>
                  <p className="mt-1.5 text-sm leading-6 text-[#68767a]">{item.description}</p>
                </div>
              </div>
              );
            })}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Buyer support", "Seller support", "Document coordination", "Property management"].map((item) => (
              <span key={item} className="rounded-full border border-[#dfddd8] px-3.5 py-2 text-xs font-medium text-[#526267]">{item}</span>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#8a9291]">These ranges and capabilities are stated in the company presentation. Confirm current availability, geographic coverage, investor participation, and property-specific facilities before relying on them.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#172e38] hover:text-[#bd6b36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17b3f]">
            Discuss a property requirement <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const previousProjects = clientProjects.filter((project) => project.status === "Previous reference");
  const ongoingProjects = clientProjects.filter((project) => project.status === "Ongoing project");

  function ProjectCards({ projects }: { projects: typeof clientProjects }) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.name}
            data-motion-item
            style={{ transitionDelay: `${(index % 6) * 70}ms` }}
            className="overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="flex h-28 items-center justify-center border-b border-[#e8e4de] bg-white px-6 py-4">
                <Image
                  src={project.logo}
                  alt={project.logoLabel ?? `${project.name} logo`}
                  width={240}
                  height={96}
                  className="max-h-16 w-full object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h4 className="text-base font-semibold text-[#172e38]">{project.name}</h4>
                  <span className="rounded-full bg-[#f4e7dc] px-3 py-1 text-[10px] font-semibold text-[#a6562d]">{project.status}</span>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-[#e8e4de] pt-4 text-xs">
                  <div>
                    <dt className="text-[#899291]">Location</dt>
                    <dd className="mt-1 font-medium text-[#35474c]">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-[#899291]">Total area</dt>
                    <dd className="mt-1 font-medium text-[#35474c]">{project.area}</dd>
                  </div>
                  <div>
                    <dt className="text-[#899291]">Headquarters</dt>
                    <dd className="mt-1 font-medium text-[#35474c]">{project.headquarters}</dd>
                  </div>
                  <div>
                    <dt className="text-[#899291]">Engagement</dt>
                    <dd className="mt-1 font-medium text-[#35474c]">{project.engagement}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-[#899291]">Contact number</dt>
                    <dd className="mt-1 font-medium text-[#35474c]">{project.contact}</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <section id="projects" className="scroll-mt-20 bg-[#f8f7f4] py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionTitle
            eyebrow="Projects & clients"
            title="Industrial relationships across sectors."
            description="Selected client/project details and client logos reproduced from the supplied DS Associate presentations."
          />
          <div className="rounded-2xl border border-[#e2ded7] bg-white p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#bd6b36]">Presented client references</p>
            <p className="mt-3 text-sm leading-6 text-[#68767a]">Engagement details are presented as listed in the source materials. Client relationships are not endorsements. The source spells one company name &ldquo;Kenyes technology&rdquo; and shows a Kaynes Technology logo; both are preserved for DSA verification.</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#172e38] hover:text-[#bd6b36]">
              Ask about relevant experience <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="client-logo-marquee mt-12 overflow-hidden rounded-2xl border border-[#e8e4de] bg-white py-5" aria-label="Client logos shown in the DS Associate presentation">
          <div className="client-logo-track flex w-max">
            {[0, 1].map((set) => (
              <div className="flex shrink-0 items-center gap-4 px-2 sm:gap-6 sm:px-3" key={set} aria-hidden={set === 1}>
                {clientLogos.map((client) => (
                  <div className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-[#efede8] bg-white px-4 py-3 sm:w-44" key={client.name}>
                    <Image
                      src={client.logo}
                      alt={set === 0 ? client.name : ""}
                      width={200}
                      height={80}
                      className="max-h-14 w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-[#899291]">Logos and names are reproduced from the supplied presentation; DSA has confirmed permission for publication. Inclusion does not imply endorsement.</p>

        <h3 className="mb-5 mt-12 text-xl font-semibold tracking-tight text-[#172e38]">Previous client references</h3>
        <ProjectCards projects={previousProjects} />

        <h3 className="mb-5 mt-12 text-xl font-semibold tracking-tight text-[#172e38]">Ongoing projects</h3>
        <ProjectCards projects={ongoingProjects} />
        <p className="mt-5 text-xs leading-5 text-[#7e8889]">Contact numbers were marked &ldquo;Available on Request&rdquo; in the presentation and are not published here. Confirm names, locations, areas, engagement terms, and current project status before launch.</p>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
        <div>
          <SectionTitle
            eyebrow="Industries"
            title="Industrial context across diverse sectors."
            description="Sectors listed in the DS Associate presentation as areas it can support. This is not a list of client relationships."
          />
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-[#f8f7f4] p-4 text-xs leading-5 text-[#68767a]">
            <Handshake className="mt-0.5 size-4 shrink-0 text-[#bd6b36]" />
            Project requirements and applicable expertise are discussed individually.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {industries.map((industry, index) => (
            <div key={industry} className="group flex min-h-[108px] flex-col justify-between rounded-xl border border-[#e8e4de] p-4 transition-colors hover:border-[#d8ad8f] hover:bg-[#fbf8f4] sm:min-h-[130px] sm:p-5">
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#bd6b36]">0{index + 1}</span>
              <span className="text-sm font-semibold leading-5 text-[#172e38]">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-[#f8f7f4] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
        <SectionTitle
          eyebrow="Common questions"
          title="Clarity before the conversation."
          description="Some requirements vary by project, policy, and authority. Here are a few helpful starting points."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={faq.question}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#10242d] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20 lg:px-12">
        <div className="pt-3">
          <SectionTitle
            eyebrow="Contact DS Associate"
            title="Planning an industrial project?"
            description="Tell us about your land, facility, approval, or industrial support requirements. The team can discuss a practical next step."
            light
          />
          <div className="mt-10 space-y-6 border-t border-white/15 pt-7">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e3a06f]">Call us</p>
              <div className="mt-2 flex flex-col gap-1">
                {siteConfig.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="w-fit text-sm text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a06f]">+91 {phone}</a>)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e3a06f]">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-sm text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a06f]">{siteConfig.email}</a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e3a06f]">Pune office listed in company materials</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">{siteConfig.address}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e3a06f]">Other locations listed in company materials</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">{siteConfig.offices.slice(1).join(" · ")}</p>
              <p className="mt-1 text-[11px] leading-5 text-white/45">Office status and addresses require confirmation.</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e3a06f]">Additional email</p>
              <a href={`mailto:${siteConfig.secondaryEmail}`} className="mt-2 inline-block text-sm text-white/85 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3a06f]">{siteConfig.secondaryEmail}</a>
            </div>
            <p className="text-xs leading-5 text-white/45">Contact information is reproduced from company materials and must be confirmed before launch.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0b1b22] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg border border-[#d17b3f]/60 text-sm font-bold text-[#e3a06f]">DS</span>
              <span className="text-sm font-semibold tracking-[0.14em]">DS ASSOCIATE</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">Industrial land, techno-legal coordination, infrastructure, and industrial real estate support.</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">Explore</p>
            <div className="mt-4 grid gap-3 text-sm text-white/65">
              {siteConfig.navItems.map((item) => <a key={item.href} href={item.href} className="w-fit hover:text-white">{item.label}</a>)}
              <a href="#service-details" className="w-fit hover:text-white">Service details</a>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">Important note</p>
            <p className="mt-4 text-xs leading-6 text-white/55">Services are subject to project scope, current rules, eligibility, and decisions by competent authorities. No approval or incentive outcome is guaranteed.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DS Associate. All rights reserved.</p>
          <p>Website content requires DSA review before publication.</p>
        </div>
      </div>
    </footer>
  );
}

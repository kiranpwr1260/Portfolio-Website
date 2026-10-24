export const siteConfig = {
  name: "DS Associate",
  shortName: "DSA",
  description:
    "DS Associate provides techno-legal, infrastructure, industrial support, plantation-related, and industrial real estate services.",
  startYear: 2010,
  coreObjective:
    "To advise, assist and achieve the set goals and help our clients run their businesses seamlessly.",
  division: "Industrial Real Estate Division",
  email: "info.dsassociate@gmail.com",
  secondaryEmail: "deepak.dsassociate@gmail.com",
  phones: ["9011073442", "9637673442"],
  address: "Sai Siddhi, Near Congress Bhavan, Shivajinagar, Pune – 411 005",
  offices: [
    "Pune Head Office",
    "Mumbai (Belapur)",
    "Ratnagiri (Rajapur)",
    "Satara",
    "Thane",
    "Kolhapur",
  ],
  // TODO: confirm before launch: all contact details, operating address, and current office locations.
  founder: {
    name: "Deepak Thorat",
    title: "Founder & Managing Director; Real Estate & Industrial Consultant",
    bio: "Deepak Thorat is the Founder of DS Associate, specialising in industrial and commercial real estate, government consultancy, and strategic advisory. His work includes land sales, leasing and investment sales, identifying land opportunities, property transactions, and advice on industrial policies, development schemes, and incentives.",
    education: "Bachelor of Commerce, University of Pune (as stated in one presentation).",
    careerDetails: [
      "One presentation lists prior work as a Director of Thorat Associates.",
      "The other lists prior work at Shree Gajanan Corporation India Pvt. Ltd. and an association with PCPL.",
    ],
    // TODO: confirm founder biography, education, experience, career chronology, and preferred public wording. The decks give differing experience figures.
  },
  values: ["Integrity", "Teamwork", "Innovation", "Relationships", "Value addition", "Social awareness"],
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industrial Real Estate", href: "#real-estate" },
    { label: "Projects", href: "#projects" },
    { label: "Industries", href: "#industries" },
  ],
};

export const servicePillars = [
  {
    number: "01",
    title: "Techno-Legal & Land",
    description:
      "Practical coordination for land identification, due diligence workstreams, records, registrations, and planning permissions.",
    href: "#land-services",
    tags: ["Land selection", "Records & registration", "Planning approvals"],
  },
  {
    number: "02",
    title: "Infrastructure",
    description:
      "Support coordinating project-specific infrastructure requirements, clearances, inspections, and applications.",
    href: "#infrastructure-services",
    tags: ["Factory licensing", "Fire & environment", "Infrastructure clearances"],
  },
  {
    number: "03",
    title: "Industrial Support",
    description:
      "Assistance with industrial establishment processes, scheme applications, and related regulatory coordination.",
    href: "#support-services",
    tags: ["Industrial applications", "Incentive coordination", "Compliance support"],
  },
  {
    number: "04",
    title: "Specialised & Plantation Services",
    description:
      "Project advisory for industrial and logistics park concepts, scheme-related processes, and the plantation service area listed in the company presentation.",
    href: "#specialised-services",
    tags: ["IIA", "ILP", "PSI", "Plantations"],
  },
];

export const serviceDetails = [
  {
    id: "land-services",
    label: "01 / Land",
    title: "Techno-legal & land services",
    summary:
      "Organise the land and planning workstreams that help industrial projects move from initial search toward a clear next step.",
    groups: [
      {
        title: "Site discovery & assessment",
        items: ["Land selection, allotment and pre-feasibility", "Land aggregation and broker–farmer networking", "Land identification and demarcation", "Land valuation coordination"],
      },
      {
        title: "Records & transactions",
        items: ["Land acquisition documentation", "Land records procurement and title search/certificate coordination", "Pre- and post-registration services and adjudication", "Tenancy, mortgage and loan-related clearance coordination"],
      },
      {
        title: "Planning & permissions",
        items: ["Demarcation coordination at TILR offices", "Collector N.A. and zone conversion workstreams", "Building completion, plan sanction and plan approval", "NOCs and approvals from MIDC, MMRDA and other planning authorities"],
      },
    ],
  },
  {
    id: "infrastructure-services",
    label: "02 / Infrastructure",
    title: "Infrastructure & approvals",
    summary:
      "Coordinate relevant project applications and specialist workstreams for site development, construction, and operations.",
    groups: [
      {
        title: "Facility readiness",
        items: ["Factory licence and plan coordination", "Factories Act matters", "Fire NOC coordination", "Third-party inspections"],
      },
      {
        title: "Environment & safety",
        items: ["MPCB approval coordination", "EIA study coordination", "Forest permission workstreams", "Hazardous-material storage clearances"],
      },
      {
        title: "Site infrastructure",
        items: ["Highway and crossing-over permissions", "Petroleum product storage permissions", "Authority-specific infrastructure clearances"],
      },
    ],
  },
  {
    id: "support-services",
    label: "03 / Industrial support",
    title: "Industrial support services",
    summary:
      "Support industrial setup and expansion through documentation, application coordination, and scheme-related work.",
    groups: [
      {
        title: "Industrial setup",
        items: ["Land purchase under Section 63 (presentation terminology)", "Industrial processing approval / IEM coordination", "Mega status application support"],
      },
      {
        title: "Schemes & duties",
        items: ["Industrial incentive application coordination", "Stamp duty matters", "Electrical duty clearances"],
      },
      {
        title: "Specialist coordination",
        items: ["GST and service tax matters (presentation terminology)", "Incentive coordination with various ministries", "Professional referrals where required"],
      },
    ],
  },
  {
    id: "specialised-services",
    label: "04 / Specialised",
    title: "Specialised project advisory",
    summary:
      "DS Associate's listed specialised service areas include industrial and logistics park concepts and scheme-related support.",
    groups: [
      {
        title: "Industrial development",
        items: ["Integrated Industrial Area (IIA)", "Industrial project planning coordination", "Authority application coordination"],
      },
      {
        title: "Logistics development",
        items: ["Integrated Logistics Park (ILP)", "Logistics facility workstreams", "Infrastructure coordination"],
      },
      {
        title: "Scheme coordination",
        items: ["Package Scheme of Incentives (PSI)", "Documentation support", "Eligibility and process coordination"],
      },
      {
        title: "Other listed service area",
        items: ["Plantations (listed in the techno-legal presentation; scope to be confirmed)"],
      },
    ],
  },
];

export const realEstateCapabilities = [
  {
    icon: "shed",
    title: "Industrial sheds",
    range: "5,000 to 2,00,000 sq. ft.",
    description: "Ready-to-use or Built-to-Suit sourcing stated in the presentation. Facilities such as RCC office, power, water, security, and crane provision vary by property.",
  },
  {
    icon: "land",
    title: "Industrial / MIDC land",
    range: "10,000 sq. ft. to 100 acres",
    description: "The presentation describes sourcing support across India. Current coverage, property availability, and suitability are confirmed per requirement.",
  },
  {
    icon: "bts",
    title: "Built-to-Suit factories",
    range: "Land sizes of 1 to 20 acres",
    description: "The presentation describes investor-backed BTS possibilities. This is a stated capability, not a promise of funding or investor availability.",
  },
];

export const projectReferences = [
  { location: "Chakan", area: "86,000 sq. ft.", engagement: "Lease", sourceName: "Supreme Treves" },
  { location: "Chakan", area: "28,000 sq. ft.", engagement: "Lease", sourceName: "Tenneco" },
  { location: "Hinjewadi", area: "30,000 sq. ft.", engagement: "Lease", sourceName: "TSS" },
  { location: "Chakan", area: "40,000 sq. ft.", engagement: "Lease", sourceName: "Deebu Automotive Seat Pvt Ltd" },
  { location: "Chakan", area: "80,000 sq. ft.", engagement: "Lease", sourceName: "Teconnex" },
  {
    location: "Chakan",
    area: "160,000 sq. ft.",
    engagement: "Mergers & Acquisition · ongoing in the presentation",
    sourceName: "Kenyes technology",
  },
];

export const industries = [
  "Automobile",
  "Engineering",
  "Pharmaceutical",
  "Petroleum & gas",
  "Infrastructure",
  "Chemical",
  "Institutions",
  "Robotics",
  "Shipyards",
  "Entertainment",
  "Plantations",
  "Logistics",
  "Warehousing",
  "Industrial parks",
  "Data centres",
];

export const processSteps = [
  {
    title: "Understand the requirement",
    description: "Clarify project goals, location, facility needs, and likely approval workstreams.",
  },
  {
    title: "Assess and plan",
    description: "Map the scope, documentation, stakeholders, and dependencies together.",
  },
  {
    title: "Coordinate and execute",
    description: "Support documentation, follow-ups, and coordination with relevant professionals and authorities.",
  },
  {
    title: "Close out and support",
    description: "Track agreed completion documents, handover needs, and follow-up work.",
  },
];

export const faqs = [
  {
    question: "What services does DS Associate provide?",
    answer:
      "DS Associate lists techno-legal and land services, infrastructure, industrial support, specialised IIA/ILP/PSI advisory, plantations, and industrial real estate services.",
  },
  {
    question: "Can DSA assist with MIDC land and transfer processes?",
    answer:
      "DS Associate lists MIDC land allotment and approval support among its service areas. The scope, current process, and any statutory decision depend on the project and the competent authority.",
  },
  {
    question: "Can DSA help with industrial sheds, land leasing, and Built-to-Suit facilities?",
    answer:
      "Industrial property sourcing, sale, lease, rental, and Built-to-Suit coordination are listed capabilities. Availability and project suitability must be confirmed for each requirement.",
  },
  {
    question: "What types of industrial approvals can DSA help coordinate?",
    answer:
      "Depending on the project, support may include factory, planning, fire, environmental, and infrastructure-related applications. Final requirements and approvals are determined by current rules and relevant authorities.",
  },
  {
    question: "Does DSA support projects outside Pune?",
    answer:
      "The presentation describes a Maharashtra footprint and wider industrial real estate sourcing capability. Please contact DS Associate to discuss the location and confirm current coverage.",
  },
  {
    question: "Are industrial incentives or approvals guaranteed?",
    answer:
      "No. Eligibility and decisions depend on current government policies, the application and supporting documents, and the competent authority. DS Associate can assist with coordination and the application process, but cannot guarantee an outcome.",
  },
];

export const launchChecklist = [
  "Confirm official business name, approved logo, and public positioning.",
  "Confirm founder biography, education, previous employers and PCPL association, and resolve the conflicting experience descriptions in the presentations.",
  "Verify all phone numbers, email addresses, Pune address, and office locations.",
  "Confirm current property sourcing capabilities, availability, and Built-to-Suit network.",
  "Approve client names, project details, logos, and photographs before publication.",
  "Review current policy, statutory, scheme, and incentive terminology with a qualified reviewer.",
  "Approve all imagery, privacy wording, and consent language.",
  "Configure a backend form provider and spam protection if enquiries should be delivered without the visitor's email app.",
];

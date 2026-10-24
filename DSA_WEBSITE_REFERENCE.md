# DS Associate Website --- Claude Agent Build Brief & Reference Specification

**Purpose:** Build a polished, responsive website for **DS Associate
(DSA)** using `https://mnca.in/` as a design and
information-architecture reference, while using the two supplied DS
Associate PowerPoint presentations as the source of truth for DS
Associate's identity, services, credentials, projects, and contact
details.

> Important: Recreate the reference site's *general quality, structure,
> and interaction patterns*, not its exact branding, text, testimonials,
> imagery, or proprietary assets. Do not present Mehta Naviwala &
> Company / MNCA information as DS Associate information. Do not invent
> facts. Where details are missing or inconsistent between the
> presentations, flag them for confirmation and make the content easy to
> update.

------------------------------------------------------------------------

## 1. Master prompt for Claude Code / Claude Agent

You are a senior product designer, UX architect, SEO specialist, and
full-stack engineer. Build a production-quality marketing website for
**DS Associate --- Maharashtra's techno-legal consultancy for industrial
development**, using the reference website https://mnca.in/ for
high-level inspiration.

### First actions

1.  Inspect the existing repository before changing anything. Identify
    framework, scripts, conventions, existing components, assets, tests,
    and deployment configuration.
2.  Read this entire `DSA_WEBSITE_REFERENCE.md` file before coding.
3.  If a codebase already exists, extend it consistently rather than
    replacing it blindly.
4.  Review `https://mnca.in/` in a browser if browser access is
    available. Observe its visual hierarchy and broad patterns: strong
    hero, company introduction, services, process, trust/social proof,
    leadership, FAQs, resources, and contact conversion. Do not copy its
    text, logos, exact layout, or proprietary media.
5.  Extract usable images/logos from the supplied presentations if they
    are available in the repository. Otherwise use licensed stock images
    relevant to industrial parks, manufacturing, logistics, warehouses,
    land development, and professional consulting. Do not use unrelated
    generic handshake imagery as the main visual.
6.  Produce a short implementation plan, then implement the website
    end-to-end. Do not stop after producing a plan or mockup.

### Business and audience

DS Associate (DSA) serves companies, investors, developers, landowners,
manufacturers, logistics/warehousing businesses, and industrial project
owners. The website must communicate trust, regulatory knowledge,
industrial understanding, transparent execution, and end-to-end support
across land, permissions, infrastructure, industrial support, and
specialised industrial/logistics park projects.

### Desired outcomes

-   Help a visitor understand DSA's service capabilities quickly.
-   Generate qualified enquiries and consultation requests.
-   Present the founder and company story professionally.
-   Make complex services scannable and understandable.
-   Provide clear calls to action throughout the site.
-   Build a credible corporate identity suitable for large
    manufacturers, MSMEs, developers, and investors.

### Visual direction

Create a premium, modern B2B consultancy website. Use the reference site
as a broad benchmark for content richness and conversion flow, not as a
pixel-perfect target.

-   Style: clean, confident, high-trust, industrial/corporate, spacious,
    modern.
-   Palette suggestion: deep navy / charcoal for authority, warm
    white/light neutral backgrounds, and a restrained amber/gold or
    copper accent. Keep contrast accessible.
-   Typography: contemporary sans-serif with strong headings, readable
    body text, clear hierarchy.
-   Imagery: high-quality, relevant images of industrial estates,
    manufacturing facilities, logistics parks, warehouses,
    infrastructure, and business leaders. Use image overlays only where
    text contrast remains strong.
-   Use a consistent spacing scale, grid, border radius, shadows, and
    icon style.
-   Avoid excessive gradients, clutter, oversized animations,
    stock-photo clichés, or visual effects that reduce credibility.
-   Include subtle motion only where useful; respect
    `prefers-reduced-motion`.
-   Use actual DSA brand assets if available. If no logo is provided,
    create a restrained typographic wordmark placeholder labelled DS
    ASSOCIATE; do not invent an official registered logo.

### Information architecture and pages

Build the following pages or sections. A single-page site with anchor
navigation is acceptable for the initial version, but structure
components and routes so individual service detail pages can be added
cleanly.

1.  **Home**

    -   Sticky or compact header with logo, navigation, and prominent
        "Discuss Your Project" / "Contact Us" CTA.
    -   Hero: position DSA as a techno-legal and industrial consultancy
        helping businesses navigate industrial land, approvals,
        infrastructure, and industrial support in Maharashtra.
    -   Hero CTAs: "Explore Services" and "Talk to Our Team".
    -   Use a relevant industrial estate / manufacturing visual.
    -   Trust strip with verified company facts only. Do not copy MNCA's
        "2K happy clients", "14+ years", or ratings.
    -   Short company overview and core objective.
    -   Service category cards.
    -   "How We Work" four-step process.
    -   Industrial real estate capability feature.
    -   Selected sectors served.
    -   Selected client/project references, only with appropriate
        permission and accurate details.
    -   Founder/leadership section.
    -   FAQ accordion.
    -   Strong contact CTA and full footer.

2.  **About DSA**

    -   Company background and evolution.
    -   Founder profile for Deepak Thorat.
    -   Mission/core objective and values.
    -   Emphasise integrity, teamwork, innovation, relationships, value
        addition, and social awareness, as stated in the presentation.
    -   Do not make unsupported claims such as "market leader" unless
        approved.

3.  **Services overview** Present four major service pillars:

    -   Techno-Legal Services / Land
    -   Infrastructure Services
    -   Industrial Support Services
    -   Specialised Services Include Industrial Real Estate as a related
        capability: industrial sheds, industrial/MIDC land,
        lease/rent/sale support, and Built-to-Suit (BTS) solutions. Each
        category card should link or scroll to a detail section/page.

4.  **Service detail pages/sections**

    -   Land and techno-legal services
    -   Infrastructure and approvals
    -   Industrial support and incentives
    -   Integrated Industrial Area (IIA), Integrated Logistics Park
        (ILP), and Package Scheme of Incentives (PSI)
    -   Industrial real estate: industrial sheds, industrial land, BTS
        factory solutions
    -   Buyer/seller support for property transactions Make pages easy
        to scan using short intros, grouped service lists, process,
        benefits, and CTA. Clearly indicate that final eligibility and
        approvals depend on current rules and competent authorities.

5.  **Projects / Clients**

    -   Present selected references as clean cards or a table with
        client, location, area, and engagement type where the
        presentation provides those details.
    -   Do not imply endorsements. Use client names/logos only when
        authorised.
    -   Separate completed/previous client references from ongoing
        projects.
    -   If any client detail is sensitive or permission is uncertain,
        show anonymised case studies or hide the name until confirmed.

6.  **Industries** Include the sectors listed in the presentation:
    automobile, engineering, pharmaceutical, petroleum and gas,
    infrastructure, chemical, institutions, robotics, shipyards,
    entertainment, plantations, logistics, warehousing, industrial
    parks, and data centres. Present them as sectors DSA can support; do
    not imply a client relationship in every sector.

7.  **Locations / Geography** The presentation lists Pune HO, Mumbai
    (Belapur), Ratnagiri (Rajapur), Satara, Thane, and Kolhapur, and
    states "6 offices in Maharashtra." Confirm current office addresses
    and operating status before publishing detailed address cards. Until
    verified, use a Maharashtra footprint graphic or text list marked
    for review.

8.  **Insights / Resources (optional phase 2)**

    -   Downloadable industrial/region reports or policy explainers only
        if DSA has approved source documents.
    -   Avoid republishing old policy tables as current legal guidance.
    -   Add publication date, source, and disclaimer to any
        policy/resource article.

9.  **Contact**

    -   Contact details supplied in the presentation: 9011073442 /
        9637673442; info.dsassociate@gmail.com;
        deepak.dsassociate@gmail.com.
    -   Office listed: Sai Siddhi, near Congress Bhavan, Shivajinagar,
        Pune -- 411 005.
    -   Verify these details before launch.
    -   Contact form fields: name, company, email, phone, service of
        interest, project location, message, and consent checkbox.
    -   Validate inputs, show accessible success/error messages, and
        protect against spam.
    -   Do not pretend a form has been submitted if there is no backend.
        If no backend is configured, implement a clearly documented
        integration point and local validation, or provide a mailto
        fallback.
    -   Do not expose secrets in frontend code.

### Navigation

Recommended header links: - Home - About Us - Services (dropdown) -
Industrial Real Estate - Projects - Industries - Contact

Optional links: Insights, FAQs. On mobile use an accessible menu with
keyboard support and visible focus states.

### Interaction requirements

-   Smooth anchor navigation where appropriate.
-   Accessible service accordions / FAQ accordion.
-   Functional mobile navigation.
-   CTA buttons scroll to or open the relevant contact path.
-   Contact form validation and feedback.
-   Clickable email and phone links.
-   Optional WhatsApp CTA only if a verified number and approved link
    are configured.
-   Avoid fake counters, fake ratings, fake testimonials, dead links,
    and decorative buttons that do nothing.

### Engineering requirements

-   Follow the repository's current stack if one exists. If starting
    from scratch, use a maintainable modern React-based setup (prefer
    Next.js with TypeScript if suitable), reusable components, and a
    clean project structure.
-   Use semantic HTML and accessible components.
-   Responsive at mobile, tablet, laptop, and wide desktop sizes.
-   Good performance: responsive/compressed images, lazy loading below
    the fold, avoid unnecessary dependencies, minimise layout shift.
-   SEO: meaningful page titles/descriptions, canonical URL placeholder,
    Open Graph metadata, semantic headings, sitemap/robots where
    appropriate, and LocalBusiness/Organization structured data only
    with verified details.
-   Security: validate/sanitise form input server-side when a backend is
    used; no secrets in client bundles.
-   Add a `.env.example` for required configuration, without real
    secrets.
-   Add loading, empty, error, and success states where relevant.
-   Add unit/component tests for important interactive behaviour if the
    repo supports tests.
-   Run available lint, type-check, build, and tests. Fix issues
    introduced by the implementation.
-   Do not claim tests passed unless they were actually run.
-   Include README instructions for local setup, environment
    configuration, deployment, content editing, and form integration.

### Content and factual accuracy rules

-   The two DS Associate presentations are the primary content source.
-   The MNCA website is only a reference for general UX and section
    patterns.
-   Do not copy MNCA's brand, address, phone, email, statistics,
    reviews, client quotations, associate companies, or exact copy.
-   Do not invent DSA project outcomes, client testimonials, years of
    experience, employee count, certifications, awards, ratings, or
    government relationships.
-   The presentations contain historical policy material (including
    Maharashtra Industrial Policy 2019) and inconsistent
    founder-experience descriptions (12 years in one deck; "over 15
    years" in another service slide). Do not publish a precise current
    experience figure until DSA confirms it.
-   Preserve the distinction between DSA's industrial real estate
    division and the broader techno-legal consultancy capabilities.
-   Do not publish a guarantee of approvals or incentives. Use wording
    such as "assistance with applications, documentation, coordination
    and regulatory processes".
-   Add a discreet disclaimer on policy/incentive pages: information is
    indicative and subject to current government rules, eligibility, and
    authority approval.

### Content workflow

Create content in a central typed data/config file where possible
(e.g. `src/content/site.ts`) so names, services, contact details, FAQs,
and project references can be edited without changing layout code. Mark
unverified facts with `TODO: confirm before launch` in code and README.

### Deliverables

1.  Working website in the repository.
2.  Responsive, polished home page and core service/about/contact pages.
3.  Reusable UI components and central content data.
4.  A README with setup, build, deployment, and content-editing steps.
5.  A launch checklist listing all facts, images, legal statements,
    client names, contact details, and integrations requiring DSA
    approval.
6.  A concise summary of files created/changed, commands run, test/build
    results, and remaining tasks.

Begin by inspecting the repository, then implement the site. Do not
merely explain how to do it.

------------------------------------------------------------------------

## 2. DS Associate source-of-truth content

### Company identity

-   Name: **DS Associate (DSA)**
-   Descriptor in the industrial real estate presentation: **DS
    Associate -- Industrial Real Estate Division**
-   Positioning in the techno-legal presentation: **Maharashtra's
    leading techno-legal consultancy** (treat "leading" as presentation
    wording; confirm before using as a public claim).
-   Service themes: Techno-Legal Services, Infrastructure, Industrial
    Support, Plantations; industrial real estate, industrial land and
    Built-to-Suit factory solutions.

### Founder

**Deepak Thorat --- Founder & Managing Director; Real Estate &
Industrial Consultant.**

The presentations describe experience in commercial/industrial real
estate, land transactions, leasing, investment sales, industrial
consultancy, government advisory, MIDC land allotment and approvals,
incentives, and industrial/logistics sectors. One presentation says he
graduated from the University of Pune with a Bachelor's degree in
Commerce and mentions prior work as Director of Thorat Associates; the
other mentions prior work at Shree Gajanan Corporation India Pvt.
Ltd. and association with PCPL. Confirm the final biography and
dates/employers with the founder before publishing.

Suggested draft bio (verify before publication): "Deepak Thorat is the
Founder and Managing Director of DS Associate. His work spans industrial
and commercial real estate, land transactions, industrial consultancy,
and techno-legal coordination. He supports businesses in evaluating land
opportunities, navigating industrial approvals, and understanding
relevant government policies and incentives for business setup and
expansion."

### About DSA

The presentation says DSA began in 2010 as a small venture supporting
small and medium enterprises in Pune with liaisoning services. It
describes growth into a multidisciplinary techno-legal consultancy with
a footprint across Maharashtra, providing advisory and liaisoning
services across industries. It supports startups and established
businesses with MIDC land allotment, approvals, sanctions, incentives,
and licences for current or future plans.

Suggested company introduction: "DS Associate helps businesses navigate
industrial land, infrastructure approvals, regulatory coordination, and
industrial support requirements. Combining techno-legal understanding
with practical project coordination, DSA works with businesses at
different stages---from land identification and setup planning to
approvals and operational readiness."

### Core objective and values

-   Core objective: "To advise, assist and achieve the set goals and
    help our clients run their businesses seamlessly."
-   Values: Integrity; Teamwork; Innovate/Innovation; Relationships;
    Value Addition; Social Awareness.

### Main service pillars

#### I. Techno-Legal Services / Land

The presentation lists: - Land selection, allotment and
pre-feasibility - Land aggregation - Broker--farmer networking - Land
acquisition documentation - Legal clearances, including tenancy,
mortgage and loan matters - Land valuations - Pre- and post-registration
services - Adjudication - Land records procurement - Title search and
certificate - Land identification and demarcation - Demarcations at TILR
office - Collector N.A. - Zone conversions - Building completion work -
Plan sanctions and plan approval - NOCs from concerned authorities -
Sanctions and approvals from planning authorities - Approvals from MIDC,
MMRDA and other planning authorities

Group these into visitor-friendly subcategories rather than displaying a
wall of bullets. Use careful language around legal/title matters and
clarify that formal legal opinions and statutory decisions come from
authorised professionals/authorities.

#### II. Infrastructure Services

The presentation lists: - Factories Act matters - Factory licence -
Factories Act plan approval - MPCB approval - Fire NOCs - EIA studies -
Third-party inspections - Forest permissions - Crossing-over
permissions - National/state highway clearances - Petroleum product
storage permissions - Hazardous-material storage clearances

#### III. Industrial Support Services

The presentation lists: - Purchase of land under Section 63 - Mega
status approvals - Approval of industrial processing -- IEM - Industrial
incentive work/approvals - Stamp duty issues and clearances - GST and
service tax matters - Electrical duty clearances - Incentives from
various ministries

Treat named statutes, tax regimes, and schemes as source-provided
service labels, not confirmation that the exact rules remain current.
Have a qualified DSA reviewer update the terminology before launch.

#### IV. Specialised Services

-   Integrated Industrial Area (IIA)
-   Integrated Logistics Park (ILP)
-   Package Scheme of Incentives (PSI)

The presentation includes a comparison table for IIA and ILP and
historical eligibility information from Maharashtra Industrial Policy
2019. Do not publish its numeric thresholds, FSI, stamp duty, zone
rules, investment thresholds, or incentive percentages as current
guidance without legal/policy review. If these details are needed, place
them in an explicitly dated, reviewed resource rather than static
marketing copy.

### Industrial real estate division

The first presentation says DSA's industrial real estate business
focuses on sale/outright transactions, lease, and renting of industrial
properties. Services include sourcing the right property, property legal
clearance support, property management, and after-sales support, with an
emphasis on transparency and understanding client requirements.

#### Industrial sheds

The deck states that DSA can source industrial sheds from **5,000 sq.
ft. to 2,00,000 sq. ft.**, ready-to-use or built to suit, potentially
including RCC office, power, water, security, and crane facilities.
Confirm current availability and avoid implying every facility is
included at every property.

#### Industrial land

The deck states that DSA can help source Industrial/MIDC land from
**10,000 sq. ft. to 100 acres across India**. Confirm current capability
and availability before publishing as a firm guarantee.

#### Built-to-Suit (BTS) factories

The deck says DSA can help clients with BTS solutions and has investors
who may invest in projects with land sizes from **1 to 20 acres**.
Confirm current investor availability and present this as a capability,
not a guarantee of funding.

#### Buyer services

-   Screen prospective sellers
-   Inspect the business/property
-   Coordinate scrutiny of documents and ownership verification with a
    legal advisor
-   Price and terms negotiation
-   Prepare legal documentation
-   Execute documents

#### Seller services

-   Advertise property
-   Screen prospective buyers
-   Price and terms negotiation
-   Legal documentation
-   Execute documents

#### Transaction support

The presentation describes assistance with document verification and
scrutiny, title/ownership review, drafting agreements for sale, and
advice on tax effects and legal aspects of renting/leasing. Make clear
that legal/tax advice is delivered by qualified professionals where
required.

### Selected client references in the deck

Treat these as references for a draft portfolio only; confirm
permission, spelling, confidentiality and current status before public
use. The deck says contact numbers are "Available on Request."

  ---------------------------------------------------------------------------
  Client name in Location      Headquarter                Area Term /
  presentation                 noted in deck                   engagement
  -------------- ------------- ------------- ----------------- --------------
  Supreme Treves Chakan        Mumbai           86,000 sq. ft. Lease

  Tenneco        Chakan        US               28,000 sq. ft. Lease

  TSS            Hinjewadi     Pune, India      30,000 sq. ft. Lease

  Deebu          Chakan        South Korea      40,000 sq. ft. Lease
  Automotive                                                   
  Seat Pvt Ltd                                                 

  Teconnex       Chakan        US               80,000 sq. ft. Lease

  Kenyes         Chakan        Mysore, India   160,000 sq. ft. Mergers &
  technology                                                   Acquisition;
  (spelling as                                                 shown under
  shown in deck;                                               ongoing
  verify)                                                      projects
  ---------------------------------------------------------------------------

Do not silently correct "Kenyes technology"; verify the intended
legal/company name. Consider using anonymised case studies if client
approvals are not available.

### Leadership / relationship photographs

The presentation captions include: - Hon. Industry Minister Shri Uday
Samant; Industry Secretary Mr Harshdeep Kamble; MIDC CEO Mr Bipin
Sharma; Jt. CEO -- Maliknear; O2 Power VP Prakash Surve; DSA Founder
Deepak Thorat. - Kaynes Technology VP Mr Dilip Nambiar; O.L.C.I.
Director Mrs Manisha Sable; George Antony; Mrs Mithula Agarwal; Mrs
Anagha; DSA Founder Deepak Thorat.

These are photo-caption references from the presentation, not permission
to imply endorsement or official partnership. Use only if DSA confirms
names, roles, image rights, and appropriate context.

### Sectors listed

-   Automobile
-   Engineering
-   Pharmaceutical
-   Petroleum and gas
-   Infrastructure
-   Chemical
-   Institutions
-   Robotics
-   Shipyards
-   Entertainment
-   Plantations
-   Logistics
-   Warehousing
-   Industrial parks
-   Data centres

### Geography

The presentation lists: - Pune Head Office - Mumbai (Belapur office) -
Ratnagiri (Rajapur office) - Satara office - Thane office - Kolhapur
office - "6 offices in Maharashtra"

Confirm current locations and exact addresses before displaying map pins
or office details. The supplied address is for Pune only.

### Contact information from presentation --- confirm before launch

-   Phone: **9011073442 / 9637673442**
-   Email: **info.dsassociate@gmail.com**
-   Email: **deepak.dsassociate@gmail.com**
-   Office: **Sai Siddhi, Near Congress Bhavan, Shivajinagar, Pune --
    411 005**

------------------------------------------------------------------------

## 3. Reference website observations: mnca.in

The public reference site presents Mehta Naviwala Group and is useful as
inspiration for the following broad patterns: - Strong hero headline and
clear service positioning. - Prominent service-exploration CTA. - About
section with concise expertise messaging. - Service categories and
dedicated service-detail pages. - Step-by-step "How We Work" section. -
Client testimonials and trust-building content. - Leadership profiles. -
FAQ section. - Reports/resources. - Associate company/firm area. -
Contact information and enquiry form. - Buyer/seller enquiry pathway.

For DS Associate, adapt the patterns that fit the business. Do not copy
MNCA-specific content such as its "2K Happy Client" statistic, "14+
years" statement, testimonials, staff names, office at Orville Business
Port, phone number +91 7378878811, emails at mnca.in, associate
companies, or any client quotes. DSA should use its own verified
information and a distinct visual identity.

Reference URL: https://mnca.in/

------------------------------------------------------------------------

## 4. Suggested page content / draft copy

### Homepage hero

**Eyebrow:** INDUSTRIAL • TECHNO-LEGAL • INFRASTRUCTURE\
**Headline:** Navigate Industrial Growth With Confidence\
**Subheading:** DS Associate supports businesses with industrial land,
regulatory coordination, infrastructure approvals, and industrial
project advisory---helping simplify complex processes from planning to
execution.\
**Primary CTA:** Discuss Your Project\
**Secondary CTA:** Explore Our Services

Do not add unverified numerical claims to the hero.

### About intro

**Headline:** Practical Guidance for Complex Industrial Projects\
**Copy:** From identifying suitable land to coordinating approvals and
industrial support services, DS Associate works alongside businesses to
help them move forward with clarity, transparency, and a practical
understanding of project requirements.

### Service intro

**Headline:** Integrated Support Across the Industrial Project Journey\
**Copy:** Explore DSA's techno-legal, infrastructure, industrial
support, specialised consultancy, and industrial real estate
capabilities.

### How we work

1.  **Understand the Requirement** --- Clarify the business objective,
    project location, land or facility needs, and approval requirements.
2.  **Assess and Plan** --- Identify likely workstreams, documentation,
    stakeholders, and dependencies. Confirm scope and timelines with the
    client.
3.  **Coordinate and Execute** --- Support documentation, follow-ups,
    and coordination with relevant professionals and authorities.
4.  **Close Out and Support** --- Help track completion documents,
    handover requirements, and agreed follow-up work.

These are proposed process descriptions based on the services presented;
confirm internally before publication.

### CTA

**Headline:** Planning an Industrial Project?\
**Copy:** Tell us about your land, facility, approval, or industrial
support requirements. Our team can discuss the next steps with you.\
**CTA:** Contact DS Associate

### FAQ suggestions

1.  What services does DS Associate provide?
2.  Can DSA assist with MIDC land allotment and transfer processes?
3.  Can DSA help with industrial sheds, land leasing, and Built-to-Suit
    facilities?
4.  What types of industrial approvals can DSA help coordinate?
5.  Does DSA support projects outside Pune?
6.  How do I begin a consultation?
7.  Can DSA help with IIA and ILP project approvals?
8.  Are industrial incentives guaranteed?

For the final FAQ, answer clearly that eligibility and approval depend
on current policies, submitted documentation, and the competent
authority; DSA can assist with the process but should not promise
outcomes.

------------------------------------------------------------------------

## 5. SEO and metadata suggestions

-   Home title: `DS Associate | Industrial & Techno-Legal Consultancy`
-   Home description:
    `DS Associate supports industrial land, infrastructure approvals, techno-legal coordination, industrial support, and Built-to-Suit solutions for businesses.`
-   About title: `About DS Associate | Industrial Project Advisory`
-   Services title: `Industrial Consultancy Services | DS Associate`
-   Industrial real estate title:
    `Industrial Land, Sheds & Built-to-Suit Solutions | DS Associate`
-   Contact title:
    `Contact DS Associate | Discuss Your Industrial Project`

Use descriptive alt text. Do not keyword-stuff. Add the final production
domain and verified business information before launch.

------------------------------------------------------------------------

## 6. Launch checklist --- do not skip

-   [ ] Confirm official business name, preferred tagline, and approved
    logo.
-   [ ] Approve founder bio, previous employers, education, and
    experience wording.
-   [ ] Confirm all phone numbers, emails, Pune address, and office
    locations.
-   [ ] Confirm current availability of industrial sheds, land
    inventory, and BTS investor network.
-   [ ] Confirm which client names, logos, project details, and
    photographs may be published.
-   [ ] Confirm the correct spelling/legal identity of "Kenyes
    technology".
-   [ ] Review all historical policy/incentive content with a qualified
    subject-matter reviewer.
-   [ ] Confirm whether the company wants public wording such as
    "Maharashtra's leading".
-   [ ] Obtain licences/permissions for all images, fonts, logos, and
    photography.
-   [ ] Configure and test contact form delivery, spam protection,
    privacy notice, and consent.
-   [ ] Add privacy policy and terms if appropriate.
-   [ ] Check mobile layout, keyboard navigation, contrast, forms,
    links, page speed, SEO metadata, and accessibility.
-   [ ] Run build, lint, type checks, and tests; report actual results.
-   [ ] Replace every TODO/unverified placeholder before launch.

## 7. Acceptance criteria

The task is complete only when: - The site runs locally using documented
commands. - Main pages/sections and navigation work. - Mobile and
desktop layouts are polished and usable. - Services are sourced from the
DS Associate decks and grouped clearly. - No MNCA-specific facts, copy,
testimonials, branding, or contact details are misattributed to DSA. -
Missing facts are marked for confirmation rather than invented. -
Contact form behaviour is honest and functional or clearly documented as
awaiting backend integration. - SEO/accessibility basics are in place. -
README and launch checklist are included. - Actual build/test results
and outstanding work are reported.

## 8. Website setup, content editing, and deployment

The current implementation is a Next.js App Router application using
TypeScript, Tailwind CSS v4, reusable shadcn/ui-style components, Radix
UI primitives, and Lucide icons.

### Local development

Requirements: Node.js 20.9 or newer and npm.

On Windows PowerShell:

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

Open `http://localhost:3000`. `.env.local` is optional for local
development. Available validation and production commands:

```powershell
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

ESLint is not configured in this project, so no lint command is currently
provided. TypeScript validation and the production build are available.

### Content and configuration

- Edit company contact details, navigation, service descriptions,
  sectors, FAQs, and the launch checklist in `src/content/site.ts`.
- Edit reusable page sections in `src/components/site-sections.tsx`.
- The current enquiry form is in `src/components/contact-form.tsx`.
- Set `NEXT_PUBLIC_SITE_URL` to the approved HTTPS production URL. The
  example URL in `.env.example` must be replaced before launch.
- `README.md` contains the setup, editing, enquiry-form integration, and
  deployment notes.
- The supplied PowerPoint presentations are the source for the updated
  company start year, objective, founder biography details, service
  labels, industrial real estate ranges, anonymised project references,
  office locations, and contact details. Conflicting founder career and
  experience descriptions are not reconciled into a single claim; DSA
  must confirm the approved biography.
- No approved logo or photography assets are configured in the site.
  It uses a typographic placeholder and illustrative industrial
  photography from Unsplash. Confirm image licensing and replace with
  approved assets before publication.

### Enquiry form and privacy

The form validates required fields in the browser and prepares a
`mailto:` draft; it does not submit to or store data on a server. The
visitor must review and send the draft from their email application.
There is no configured backend, server-side validation, or spam
protection. To enable direct delivery, select a provider, implement
server-side validation and spam controls, store credentials only in
server-side environment variables, and update the privacy and consent
wording to match DSA's approved data practices.

### Deployment

Deploy to a Node.js host with Next.js support. Install dependencies, run
`npm run build`, set `NEXT_PUBLIC_SITE_URL` to the production domain,
and start with `npm run start` (or use the platform's native Next.js
integration). Configure any form provider separately; do not expose
private keys through `NEXT_PUBLIC_*` variables. Verify the canonical
domain, metadata, sitemap, robots file, contact links, responsive
layouts, and every launch approval against the checklist above.

### Implementation review checklist

- [ ] Confirm names, approved company positioning, founder education,
  biography and career-history discrepancy, contact details, office
  status, and property availability.
- [ ] Approve or remove the anonymised client/project references; the
  six source names remain in `src/content/site.ts` for matching and
  must not be published without DSA approval.
- [ ] Confirm the listed property ranges and the current availability of
  facilities and Built-to-Suit investors.
- [ ] Confirm image licensing and replace illustrative imagery with
  approved assets if available.
- [ ] Review statutory, incentive, and policy terminology with a
  qualified subject-matter reviewer.
- [ ] Confirm consent/privacy wording and configure server-side enquiry
  delivery if required.
- [ ] Replace the placeholder site URL and verify all metadata on the
  deployed domain.

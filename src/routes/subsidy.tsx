import { createFileRoute } from "@tanstack/react-router";
import {
  BadgePercent,
  Building2,
  CheckCircle2,
  FileText,
  Home as HomeIcon,
  Landmark,
  ScrollText,
  Wallet,
} from "lucide-react";
import { CtaBanner, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/subsidy")({
  head: () => ({
    meta: [
      { title: "Solar Subsidy & Incentive Information | Verdasol Energy" },
      {
        name: "description",
        content:
          "Understand solar subsidies, tax credits and rebate programmes for homes and businesses, who qualifies, what documents are needed and how to apply.",
      },
      { property: "og:title", content: "Solar Subsidy Information | Verdasol Energy" },
      {
        property: "og:description",
        content: "Incentives, eligibility and the step-by-step application process explained.",
      },
    ],
  }),
  component: SubsidyPage,
});

const incentives = [
  {
    icon: BadgePercent,
    title: "Federal Investment Tax Credit",
    amount: "30% of system cost",
    text: "A credit against federal income tax covering equipment, labour, permitting and interconnection costs for eligible installations.",
  },
  {
    icon: HomeIcon,
    title: "Residential Rebate Programme",
    amount: "Up to $4,000",
    text: "State and utility rebates for qualifying rooftop systems on primary residences, typically applied per installed kilowatt.",
  },
  {
    icon: Building2,
    title: "Commercial Depreciation Benefit",
    amount: "Accelerated write-off",
    text: "Businesses can recover a large share of the system cost in the first year through accelerated depreciation on solar assets.",
  },
  {
    icon: Wallet,
    title: "Net Metering Credits",
    amount: "Ongoing bill credits",
    text: "Excess generation exported to the grid earns credits on your electricity bill, improving payback over the system's lifetime.",
  },
];

const eligibility = [
  "You own the property, or have written authorisation from the owner",
  "The system is new equipment installed by a certified installer",
  "The roof or ground area meets structural and shading requirements",
  "The installation is grid-connected and utility approved",
  "The property has an active electricity account in the applicant's name",
];

const documents = [
  "Proof of property ownership or authorisation letter",
  "Recent electricity bills (last three months)",
  "Government-issued identification",
  "Signed installation contract and system specification",
  "Interconnection and commissioning certificates",
];

const steps = [
  {
    title: "Eligibility Check",
    text: "We review your property, electricity usage and ownership documents to confirm which programmes you qualify for.",
  },
  {
    title: "Documentation",
    text: "Our team prepares and verifies the full application pack so nothing is rejected on a technicality.",
  },
  {
    title: "Application Submission",
    text: "We file the application with the relevant authority or utility and track it on your behalf.",
  },
  {
    title: "Installation & Inspection",
    text: "Once approved, we install the system and coordinate the required inspection and interconnection approvals.",
  },
  {
    title: "Subsidy Disbursement",
    text: "We submit the commissioning evidence and follow the claim through to credit or payout.",
  },
];

function SubsidyPage() {
  return (
    <>
      <PageHero
        eyebrow="Subsidy Information"
        title="Solar Incentives Made Simple"
        text="Solar incentives can cut a significant share of your upfront cost. Here is what is available, who qualifies and how we handle the paperwork for you."
      />

      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="Available Support"
          title="Incentives You May Qualify For"
          text="Programme values vary by state, utility and property type. We confirm exact figures during your assessment."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {incentives.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent">
                  <item.icon className="size-6 text-primary" />
                </span>
                <p className="mt-6 text-2xl font-extrabold tracking-tight text-primary">
                  {item.amount}
                </p>
                <h3 className="mt-2 text-lg font-extrabold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-accent/40 py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-card">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <Landmark className="size-6 text-primary" />
              </span>
              <h2 className="heading-2 mt-6 text-2xl">Eligibility Criteria</h2>
              <ul className="mt-6 space-y-4">
                {eligibility.map((e) => (
                  <li key={e} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-card">
              <span className="flex size-12 items-center justify-center rounded-xl bg-solar/15">
                <FileText className="size-6 text-solar" />
              </span>
              <h2 className="heading-2 mt-6 text-2xl">Documents Required</h2>
              <ul className="mt-6 space-y-4">
                {documents.map((d) => (
                  <li key={d} className="flex gap-3 text-sm">
                    <ScrollText className="mt-0.5 size-5 shrink-0 text-solar" />
                    <span className="text-muted-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="The Application Process"
          text="We manage each stage so you are not left chasing forms, approvals or utility departments."
        />
        <ol className="mt-14 grid gap-6 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-base font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-accent/40 py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Subsidy Enquiry</p>
            <h2 className="heading-2 mt-3">Check What You Qualify For</h2>
            <p className="mt-4 text-muted-foreground">
              Send us a few details about your property and current electricity usage. We will come
              back with the incentives available to you and an estimate of your net system cost
              after subsidies.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "No obligation eligibility review",
                "Clear breakdown of net cost after incentives",
                "Full paperwork handled by our team",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm
              variant="subsidy"
              title="Subsidy Eligibility Enquiry"
              submitLabel="Check My Eligibility"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Programme Applies?"
        text="Talk to our team and we will map your property against every incentive currently available."
        buttonLabel="Talk to an Advisor"
        to="/contact"
      />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Solar Enquiry | Verdasol Energy" },
      {
        name: "description",
        content:
          "Contact Verdasol Energy for a free solar assessment. Call, email or send an enquiry and our advisors will respond within one business day.",
      },
      { property: "og:title", content: "Contact & Enquiry | Verdasol Energy" },
      {
        property: "og:description",
        content: "Get a free solar quote for your home, business or industrial facility.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+1 (555) 018-4420", "Mon to Sat, 8:00 - 18:00"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["hello@verdasolenergy.com", "quotes@verdasolenergy.com"],
  },
  {
    icon: MapPin,
    label: "Office",
    lines: ["1420 Bay Ridge Ave, Suite 200", "San Diego, CA 92101"],
  },
  {
    icon: Clock,
    label: "Response Time",
    lines: ["Enquiries answered within", "one business day"],
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Enquiry"
        title="Let's Talk About Your Solar Project"
        text="Whether you are exploring solar for the first time or comparing quotes, our advisors are happy to walk you through the numbers."
      />

      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d, i) => (
            <Reveal key={d.label} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent">
                  <d.icon className="size-6 text-primary" />
                </span>
                <h2 className="mt-6 text-sm font-bold tracking-wide text-muted-foreground uppercase">
                  {d.label}
                </h2>
                {d.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm font-semibold">
                    {line}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-accent/40 py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Free Assessment</p>
            <h2 className="heading-2 mt-3">Request Your Solar Quote</h2>
            <p className="mt-4 text-muted-foreground">
              Share a few details about your property and current electricity usage. We will prepare
              a proposal covering recommended system size, expected annual generation, available
              incentives and estimated payback.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "Site and usage review",
                  text: "We assess roof space, orientation, shading and your recent bills.",
                },
                {
                  title: "Tailored system design",
                  text: "You receive a system size and layout matched to your actual demand.",
                },
                {
                  title: "Transparent costing",
                  text: "Clear pricing with incentives applied, so you see the real net cost.",
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MessageSquare className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-bold">{b.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm title="Send Us an Enquiry" submitLabel="Request Free Quote" />
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-24">
        <SectionHeading
          eyebrow="Visit Us"
          title="Our San Diego Office"
          text="Drop by during business hours or book an appointment and we will keep time aside for you."
        />
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Verdasol Energy office location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-117.19%2C32.68%2C-117.11%2C32.75&layer=mapnik"
              loading="lazy"
              className="h-[420px] w-full"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

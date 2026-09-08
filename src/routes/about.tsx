import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, Handshake, Lightbulb, Leaf, Target, Check } from "lucide-react";
import teamImage from "@/assets/team-solar.jpg";
import { CtaBanner, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Verdasol Energy | Clean Energy Specialists" },
      {
        name: "description",
        content:
          "Verdasol Energy is a professional solar provider focused on quality installation, reliable technology and long-term customer relationships.",
      },
      { property: "og:title", content: "About Verdasol Energy" },
      {
        property: "og:description",
        content: "Our mission, values and the team helping properties switch to solar energy.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Quality", text: "We believe every solar installation should meet high standards." },
  { icon: Handshake, title: "Transparency", text: "Clear recommendations, pricing and communication." },
  { icon: Lightbulb, title: "Innovation", text: "We use modern solar technologies and efficient solutions." },
  { icon: Leaf, title: "Sustainability", text: "We are committed to accelerating the transition to clean energy." },
];

const trust = [
  { title: "Experienced Team", text: "Certified designers and installers with a decade of field experience." },
  { title: "Quality Components", text: "Tier-1 panels and inverters selected for durability and output." },
  { title: "Professional Installation", text: "Safe, code-compliant workmanship on every roof we touch." },
  { title: "Ongoing Support", text: "Monitoring, servicing and responsive aftercare once you are live." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Powering Progress Through Clean Energy"
        text="We help homes and businesses make the transition to reliable, affordable and sustainable solar energy."
      />

      <section className="container-page grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Who We Are</p>
          <h2 className="heading-2 mt-3">A Solar Partner Built on Engineering Discipline</h2>
          <p className="mt-5 text-muted-foreground">
            Verdasol Energy is a professional solar energy provider serving residential, commercial
            and industrial customers. We design and install systems that are sized to real
            consumption data, built with proven components, and supported long after commissioning
            day.
          </p>
          <p className="mt-4 text-muted-foreground">
            Every project runs through the same disciplined process: an honest energy assessment, a
            transparent proposal, careful installation by our own certified crews, and a
            maintenance plan that protects performance for decades. We would rather turn down a
            project than install a system that will not perform.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={teamImage}
              alt="Solar technicians installing panels on a rooftop"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-9 shadow-card">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <Target className="size-6 text-primary" />
              </span>
              <h2 className="heading-3 mt-6">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To make clean, reliable and affordable solar energy accessible to more homes and
                businesses.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-border bg-card p-9 shadow-card">
              <span className="flex size-12 items-center justify-center rounded-xl bg-solar/20">
                <Eye className="size-6 text-primary" />
              </span>
              <h2 className="heading-3 mt-6">Our Vision</h2>
              <p className="mt-4 text-muted-foreground">
                A future powered by smarter, cleaner and more sustainable energy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="Our Values"
          title="What Guides Every Installation"
          text="Four principles that shape how we design, quote and build."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent">
                  <v.icon className="size-6 text-primary" />
                </span>
                <h3 className="heading-3 mt-6">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Trust"
            title="Why Customers Trust Us"
            text="Solar is a 25-year decision. We work like it."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-7 shadow-card">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <Check className="size-4 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's Build a Cleaner Future Together"
        text="Our team is ready to assess your property and recommend the right solar solution."
        buttonLabel="Talk to Our Team"
        to="/contact"
      />
    </>
  );
}

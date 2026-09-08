import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Factory,
  Home as HomeIcon,
  Leaf,
  PiggyBank,
  ShieldCheck,
  Wrench,
  TrendingDown,
} from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import { projects } from "@/lib/site-data";
import {
  ButtonLink,
  Counter,
  CtaBanner,
  Reveal,
  SectionHeading,
  btnStyles,
} from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdasol Energy | Smarter Solar, Cleaner Energy, Lower Bills" },
      {
        name: "description",
        content:
          "Reliable solar energy solutions for homes and businesses. Reduce energy costs with professionally installed residential, commercial and industrial solar systems.",
      },
      { property: "og:title", content: "Verdasol Energy | Smarter Solar, Cleaner Energy" },
      {
        property: "og:description",
        content:
          "Solar systems designed to lower energy costs and move your property toward cleaner power.",
      },
    ],
  }),
  component: HomePage,
});

const benefits = [
  {
    icon: TrendingDown,
    title: "Lower Energy Costs",
    text: "Reduce your dependence on traditional electricity and lower long-term energy expenses.",
  },
  {
    icon: Leaf,
    title: "Clean & Renewable",
    text: "Generate clean electricity while reducing your environmental impact.",
  },
  {
    icon: PiggyBank,
    title: "Long-Term Savings",
    text: "Solar systems are designed as a long-term investment in your property.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Independence",
    text: "Take greater control of your energy generation and consumption.",
  },
];

const solutions = [
  {
    icon: HomeIcon,
    title: "Residential Solar",
    text: "Rooftop systems sized around your household usage, roof layout and long-term savings goals.",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    text: "Solar for offices, retail and warehouses, designed around daytime demand and roof capacity.",
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    text: "Large-scale installations engineered for facilities with heavy, continuous energy loads.",
  },
  {
    icon: Wrench,
    title: "Solar Maintenance",
    text: "Inspection, cleaning and performance checks that keep your system producing as designed.",
  },
];

const steps = [
  { n: "01", title: "Consultation", text: "We review your energy bills, goals and property details." },
  { n: "02", title: "Site Assessment", text: "Our team assesses roof condition, shading and system fit." },
  { n: "03", title: "System Installation", text: "Certified installers complete the build and commissioning." },
  { n: "04", title: "Start Saving", text: "Your system is activated and monitored from day one." },
];

const stats = [
  { value: 500, suffix: "+", label: "Solar Installations" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "MW Clean Energy Generated" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <Reveal>
            <p className="eyebrow text-solar">Powering a Cleaner Future</p>
            <h1 className="heading-1 mt-5 text-primary-foreground">
              Smarter Solar. Cleaner Energy. Lower Bills.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">
              Reliable solar energy solutions designed to help homes and businesses reduce energy
              costs and move toward a cleaner, more sustainable future.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="solar">
                Get a Free Quote <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink to="/services" variant="ghostLight">
                Explore Our Services
              </ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-solar" /> Certified installers
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-solar" /> Tier-1 components
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-solar" /> Ongoing support
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <img
                  src={heroImage}
                  alt="Solar panels installed on a modern rooftop under clear sunlight"
                  width={1600}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 hidden rounded-xl bg-card px-6 py-4 shadow-lift sm:block">
                <p className="text-2xl font-extrabold text-primary">25+ MW</p>
                <p className="text-xs font-semibold text-muted-foreground">
                  Clean energy generated
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="Why Choose Solar"
          title="Make the Switch to Smarter Energy"
          text="Solar is no longer an experiment. It is a proven way to control energy costs and reduce emissions."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent">
                  <b.icon className="size-6 text-primary" />
                </span>
                <h3 className="heading-3 mt-6">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Solar Solutions"
            title="Complete Solar Services, End to End"
            text="From the first energy assessment to long-term maintenance, we handle every stage in-house."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <s.icon className="size-6 text-primary" />
                  </span>
                  <h3 className="heading-3 mt-6">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.text}</p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-transform hover:translate-x-1"
                  >
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="A Clear Path From Enquiry to Energy"
          text="Four simple steps, with a dedicated project contact throughout."
        />
        <div className="relative mt-14">
          <div className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative">
                  <span className="relative z-10 flex size-14 items-center justify-center rounded-xl bg-primary text-lg font-extrabold text-primary-foreground shadow-card">
                    {s.n}
                  </span>
                  <h3 className="heading-3 mt-6">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Systems Already Generating Clean Power"
            text="A snapshot of recent residential, commercial and industrial installations."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <Link
                  to="/projects/$projectId"
                  params={{ projectId: p.id }}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} solar installation in ${p.location}`}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="eyebrow">{p.type}</p>
                    <h3 className="heading-3 mt-3">{p.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      {p.location} · {p.capacity}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{p.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink to="/projects" variant="outline">
              View All Projects <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20">
        <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center">
                <p className="text-5xl font-extrabold text-solar">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold text-primary-foreground/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to Start Your Solar Journey?"
        text="Talk to our solar experts and discover the right solution for your property."
        buttonLabel="Request a Free Consultation"
        to="/contact"
      />
    </>
  );
}

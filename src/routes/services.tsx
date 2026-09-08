import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  ClipboardList,
  Factory,
  Home as HomeIcon,
  HardHat,
  Wrench,
} from "lucide-react";
import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import industrial from "@/assets/project-industrial.jpg";
import installation from "@/assets/service-installation.jpg";
import maintenance from "@/assets/service-maintenance.jpg";
import consultation from "@/assets/service-consultation.jpg";
import { CtaBanner, PageHero, Reveal, btnStyles } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Solar Services | Residential, Commercial & Industrial Solar" },
      {
        name: "description",
        content:
          "Complete solar energy services: residential and commercial system design, industrial installations, professional installation, maintenance and consultation.",
      },
      { property: "og:title", content: "Solar Services | Verdasol Energy" },
      {
        property: "og:description",
        content: "From rooftop systems to large-scale industrial solar, delivered end to end.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: HomeIcon,
    title: "Residential Solar",
    image: residential,
    description:
      "Customized rooftop solar systems designed to reduce household electricity costs and improve energy independence. We size every system around your actual consumption, roof orientation and shading conditions.",
    benefits: ["System Design", "Rooftop Installation", "Energy Assessment", "Monitoring"],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    image: commercial,
    description:
      "Solar solutions for offices, retail spaces, warehouses and commercial properties. Commercial load usually peaks during sunlight hours, which makes solar an efficient way to offset daytime demand charges.",
    benefits: ["Load Analysis", "Roof & Structural Review", "Phased Installation", "Performance Reporting"],
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    image: industrial,
    description:
      "Large-scale solar solutions designed for high energy consumption and industrial facilities. Engineered arrays, robust mounting systems and string-level monitoring built for demanding environments.",
    benefits: ["High-Capacity Arrays", "Structural Engineering", "Grid Compliance", "Long-Term O&M"],
  },
  {
    icon: HardHat,
    title: "Solar Installation",
    image: installation,
    description:
      "Professional installation using modern equipment and industry best practices. Our own certified crews handle mounting, wiring, inverter setup, safety testing and commissioning.",
    benefits: ["Certified Crews", "Safe Mounting Systems", "Electrical Compliance", "Full Commissioning"],
  },
  {
    icon: Wrench,
    title: "Solar Maintenance",
    image: maintenance,
    description:
      "System inspection, cleaning, performance checks and maintenance support. Regular servicing protects output and catches small faults before they affect your generation.",
    benefits: ["Scheduled Inspections", "Panel Cleaning", "Performance Diagnostics", "Repair Support"],
  },
  {
    icon: ClipboardList,
    title: "Solar Consultation",
    image: consultation,
    description:
      "Personalized consultation to understand energy usage, property requirements and suitable solar solutions. You get clear numbers and honest recommendations before committing to anything.",
    benefits: ["Bill Analysis", "Site Suitability Review", "Savings Projection", "Incentive Guidance"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Solar Solutions Designed Around You"
        text="From residential rooftops to large commercial installations, we provide complete solar energy solutions."
      />

      <section className="container-page space-y-20 py-20 sm:space-y-24 sm:py-24">
        {services.map((s, i) => (
          <Reveal key={s.title}>
            <article
              className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <img
                  src={s.image}
                  alt={`${s.title} service`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent">
                  <s.icon className="size-6 text-primary" />
                </span>
                <h2 className="heading-2 mt-6">{s.title}</h2>
                <p className="mt-5 text-muted-foreground">{s.description}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="flex size-5 items-center justify-center rounded-md bg-primary/10">
                        <Check className="size-3 text-primary" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`${btnStyles.primary} mt-9`}>
                  Enquire About {s.title} <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBanner
        title="Not Sure Which Solution Fits?"
        text="Send us a recent electricity bill and we will recommend the right system size and service."
        buttonLabel="Get a Solar Assessment"
        to="/contact"
      />
    </>
  );
}

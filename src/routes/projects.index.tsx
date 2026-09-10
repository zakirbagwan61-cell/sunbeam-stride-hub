import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MapPin, Zap } from "lucide-react";
import { CtaBanner, PageHero, Reveal } from "@/components/site/primitives";
import { projects, type ProjectCategory } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Solar Projects Gallery | Installations by Verdasol Energy" },
      {
        name: "description",
        content:
          "Browse completed residential, commercial and industrial solar installations with system capacity, location and annual generation details.",
      },
      { property: "og:title", content: "Solar Projects Gallery | Verdasol Energy" },
      {
        property: "og:description",
        content: "Real solar installations across homes, offices and industrial facilities.",
      },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Residential", "Commercial", "Industrial"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter(
    (p) => active === "All" || p.category === (active as ProjectCategory),
  );

  return (
    <>
      <PageHero
        eyebrow="Projects Gallery"
        title="Solar Installations We've Delivered"
        text="A closer look at systems we have designed, installed and commissioned across residential, commercial and industrial properties."
      />

      <section className="container-page py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-xl border px-5 py-2.5 text-sm font-bold transition-all",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground shadow-card"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} solar installation in ${p.location}`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit rounded-lg bg-accent px-3 py-1 text-xs font-bold text-primary uppercase">
                    {p.category}
                  </span>
                  <h2 className="mt-4 text-xl font-extrabold tracking-tight">{p.name}</h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.short}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 shrink-0 text-primary" />
                      <span className="font-semibold">{p.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="size-4 shrink-0 text-solar" />
                      <span className="font-semibold">{p.capacity}</span>
                    </div>
                  </dl>
                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: p.id }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                  >
                    View Project <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Want a System Like These?"
        text="Tell us about your property and we will design a solar system sized to your energy use."
        buttonLabel="Request a Free Quote"
        to="/contact"
      />
    </>
  );
}

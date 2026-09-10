import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarCheck, Gauge, MapPin, Sun, Zap } from "lucide-react";
import { CtaBanner, Reveal, btnStyles } from "@/components/site/primitives";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project Not Found | Verdasol Energy" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const description = `${project.capacity} ${project.type.toLowerCase()} installation in ${project.location} generating ${project.generation}.`;
    return {
      meta: [
        { title: `${project.name} | Verdasol Energy Solar Project` },
        { name: "description", content: description },
        { property: "og:title", content: `${project.name} | Verdasol Energy` },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <section className="container-page py-28 text-center">
      <h1 className="heading-2">Project not found</h1>
      <p className="mt-4 text-muted-foreground">
        This project may have been moved. Browse all of our completed installations instead.
      </p>
      <Link to="/projects" className={`${btnStyles.primary} mt-8`}>
        Back to Projects
      </Link>
    </section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  const specs = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Sun, label: "System Type", value: project.type },
    { icon: Zap, label: "Capacity", value: project.capacity },
    { icon: Gauge, label: "Annual Generation", value: project.generation },
    { icon: CalendarCheck, label: "Installation", value: project.installation },
  ];

  return (
    <>
      <section className="bg-forest">
        <div className="container-page py-14">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-solar hover:gap-3 transition-all"
          >
            <ArrowLeft className="size-4" /> All Projects
          </Link>
          <p className="eyebrow mt-8 text-solar">{project.category} Project</p>
          <h1 className="heading-1 mt-4 max-w-3xl text-primary-foreground">{project.name}</h1>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={project.image}
              alt={`${project.name} solar installation`}
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <h2 className="heading-2">Project Overview</h2>
            <p className="mt-5 text-muted-foreground">{project.overview}</p>
            <p className="mt-4 text-muted-foreground">
              Every installation is preceded by a site survey, structural review and production
              model, so the delivered system performs the way it was promised on paper. After
              commissioning, the site is enrolled in our monitoring and maintenance programme.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h2 className="text-lg font-extrabold tracking-tight">System Details</h2>
              <dl className="mt-6 space-y-5">
                {specs.map((s) => (
                  <div key={s.label} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent">
                      <s.icon className="size-4 text-primary" />
                    </span>
                    <div>
                      <dt className="text-xs font-bold text-muted-foreground uppercase">
                        {s.label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold">{s.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <Link to="/contact" className={`${btnStyles.primary} mt-8 w-full`}>
                Enquire About a Similar System
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Start Your Own Solar Project"
        text="Share your property details and energy usage, and we will prepare a tailored proposal."
        buttonLabel="Get a Free Quote"
        to="/contact"
      />
    </>
  );
}

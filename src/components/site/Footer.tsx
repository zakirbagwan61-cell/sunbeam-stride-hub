import { Link } from "@tanstack/react-router";
import { Sun, Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/subsidy", label: "Subsidy Information" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Residential Solar",
  "Commercial Solar",
  "Industrial Solar",
  "Installation",
  "Maintenance",
];

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary">
              <Sun className="size-5 text-solar" strokeWidth={2.4} />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-primary-foreground">
              Verdasol Energy
            </span>
          </div>
          <p className="mt-5 text-sm">
            A solar energy company helping homes, businesses and industrial facilities generate
            cleaner power with reliable, professionally installed solar systems.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="flex size-9 items-center justify-center rounded-lg border border-primary-foreground/15 transition-colors hover:border-solar hover:text-solar"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-solar">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-solar">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-primary-foreground uppercase">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-solar" />
              <span>+1 (555) 018-4420</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-solar" />
              <span>hello@verdasolenergy.com</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-solar" />
              <span>1420 Bay Ridge Ave, Suite 200, San Diego, CA 92101</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Verdasol Energy. All rights reserved.</p>
          <p>Clean energy solutions for residential, commercial and industrial properties.</p>
        </div>
      </div>
    </footer>
  );
}

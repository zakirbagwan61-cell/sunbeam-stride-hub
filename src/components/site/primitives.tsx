import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export const btnStyles = {
  primary: cn(btnBase, "bg-primary text-primary-foreground shadow-card hover:bg-forest hover:shadow-lift"),
  solar: cn(btnBase, "bg-solar text-solar-foreground shadow-card hover:brightness-105 hover:shadow-lift"),
  outline: cn(
    btnBase,
    "border border-border bg-card text-foreground hover:border-primary hover:text-primary",
  ),
  ghostLight: cn(
    btnBase,
    "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
  ),
};

export function ButtonLink({
  to,
  variant = "primary",
  children,
  className,
}: {
  to: string;
  variant?: keyof typeof btnStyles;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(btnStyles[variant], className)}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("eyebrow", light && "text-solar")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("heading-2 mt-3", light && "text-primary-foreground")}>{title}</h2>
      {text ? (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg",
            light ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 85% 0%, rgba(245,184,46,0.20), transparent 60%), radial-gradient(50% 70% at 0% 100%, rgba(11,107,58,0.55), transparent 65%)",
        }}
      />
      <div className="container-page relative py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow text-solar">{eyebrow}</p>
          <h1 className="heading-1 mt-4 max-w-3xl text-primary-foreground">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBanner({
  title,
  text,
  buttonLabel,
  to,
}: {
  title: string;
  text: string;
  buttonLabel: string;
  to: string;
}) {
  return (
    <section className="container-page py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl bg-forest px-6 py-14 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(50% 90% at 50% 0%, rgba(245,184,46,0.22), transparent 65%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="heading-2 text-primary-foreground">{title}</h2>
            <p className="mt-4 text-primary-foreground/75">{text}</p>
            <div className="mt-8 flex justify-center">
              <ButtonLink to={to} variant="solar">
                {buttonLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { z } from "zod";
import { btnStyles } from "./primitives";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your full name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  location: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your city or area" })
    .max(120, { message: "Location must be less than 120 characters" }),
  propertyType: z.enum(["Residential", "Commercial", "Industrial"], {
    errorMap: () => ({ message: "Please choose a property type" }),
  }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please tell us a little about your requirement" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";

export function EnquiryForm({
  title = "Send Us an Enquiry",
  submitLabel = "Send Enquiry",
  variant = "contact",
}: {
  title?: string;
  submitLabel?: string;
  variant?: "contact" | "subsidy";
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      location: form.get("location"),
      propertyType: form.get("propertyType"),
      message: form.get("message"),
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-card">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
          <CheckCircle2 className="size-7 text-primary" />
        </span>
        <h3 className="mt-6 text-xl font-extrabold tracking-tight">Thank you for reaching out</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {variant === "subsidy"
            ? "We have received your subsidy enquiry. Our team will review your eligibility and respond within one business day."
            : "We have received your enquiry. One of our solar advisors will contact you within one business day."}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className={cn(btnStyles.outline, "mt-8")}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-8 shadow-card sm:p-10"
    >
      <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill in your details and we will get back to you with a tailored recommendation.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input name="name" type="text" maxLength={100} placeholder="Jane Doe" className={fieldClass} />
        </Field>
        <Field label="Email Address" error={errors.email}>
          <input
            name="email"
            type="email"
            maxLength={255}
            placeholder="jane@example.com"
            className={fieldClass}
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            name="phone"
            type="tel"
            maxLength={20}
            placeholder="+1 (555) 000-0000"
            className={fieldClass}
          />
        </Field>
        <Field label="City / Area" error={errors.location}>
          <input
            name="location"
            type="text"
            maxLength={120}
            placeholder="San Diego, CA"
            className={fieldClass}
          />
        </Field>
        <Field label="Property Type" error={errors.propertyType} className="sm:col-span-2">
          <select name="propertyType" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a property type
            </option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </Field>
        <Field
          label={variant === "subsidy" ? "Your Requirement" : "Message"}
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            name="message"
            rows={5}
            maxLength={1000}
            placeholder={
              variant === "subsidy"
                ? "Tell us about your property, roof space and average monthly electricity bill."
                : "Tell us about your property and what you would like to achieve with solar."
            }
            className={cn(fieldClass, "resize-y")}
          />
        </Field>
      </div>

      <button type="submit" className={cn(btnStyles.primary, "mt-8 w-full")}>
        {submitLabel} <Send className="size-4" />
      </button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        We use your details only to respond to this enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs font-bold tracking-wide text-foreground uppercase">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs font-semibold text-destructive">{error}</span> : null}
    </label>
  );
}

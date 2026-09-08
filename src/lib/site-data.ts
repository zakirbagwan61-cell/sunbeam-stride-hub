import residential from "@/assets/project-residential.jpg";
import commercial from "@/assets/project-commercial.jpg";
import industrial from "@/assets/project-industrial.jpg";

export type ProjectCategory = "Residential" | "Commercial" | "Industrial";

export type Project = {
  id: string;
  name: string;
  location: string;
  category: ProjectCategory;
  type: string;
  capacity: string;
  generation: string;
  installation: string;
  short: string;
  overview: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "modern-residential-rooftop",
    name: "Modern Residential Rooftop",
    location: "California",
    category: "Residential",
    type: "Residential Solar",
    capacity: "8.5 kW",
    generation: "~13,200 kWh / year",
    installation: "Pitched roof, rail-mounted array",
    short: "A full rooftop array designed to cover the majority of a family home's annual usage.",
    overview:
      "A single-family home in California with high afternoon consumption. We designed a 8.5 kW rooftop array with high-efficiency modules and micro-inverters to handle partial shading from nearby trees, paired with a monitoring app so the family can track production daily.",
    image: residential,
  },
  {
    id: "commercial-office-solar",
    name: "Commercial Office Solar",
    location: "San Diego",
    category: "Commercial",
    type: "Commercial Solar",
    capacity: "75 kW",
    generation: "~118,000 kWh / year",
    installation: "Flat roof, ballasted mounting",
    short: "A rooftop system offsetting daytime load for a multi-tenant office building.",
    overview:
      "A multi-tenant office building where peak demand aligns closely with peak sun hours. The 75 kW ballasted rooftop system was installed without roof penetrations and commissioned in phases to avoid disrupting tenants.",
    image: commercial,
  },
  {
    id: "industrial-warehouse-solar",
    name: "Industrial Warehouse Solar",
    location: "Los Angeles",
    category: "Industrial",
    type: "Industrial Solar",
    capacity: "250 kW",
    generation: "~392,000 kWh / year",
    installation: "Metal roof, clamp-mounted array",
    short: "A large-scale array supporting continuous industrial energy demand.",
    overview:
      "A logistics warehouse with round-the-clock refrigeration load. The 250 kW clamp-mounted array covers a significant share of daytime demand, with string-level monitoring and a scheduled maintenance plan to protect long-term performance.",
    image: industrial,
  },
];

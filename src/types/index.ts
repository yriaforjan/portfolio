import type React from "react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  link: string;
}

export interface SubEntry {
  year: string;
  role: string;
  entity: string;
  type: "education" | "work";
}

export interface CareerEntry {
  year: string;
  role: string;
  entity: string;
  type: "education" | "work" | "cert";
  description?: string;
  subEntries?: SubEntry[];
}

export interface Love {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
}

export interface Social {
  name: string;
  url: string;
}

export interface Certification {
  name: string;
  badge: string;
  url: string;
  inProgress?: boolean;
}

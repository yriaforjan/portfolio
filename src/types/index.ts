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

export interface TimelineEntry {
  year: string;
  role: string;
  entity: string;
  type: "education" | "work" | "cert";
  description?: string;
  subEntries?: SubEntry[];
}

export interface Love {
  name: string;
  emoji: string;
}

export interface Social {
  name: string;
  url: string;
}

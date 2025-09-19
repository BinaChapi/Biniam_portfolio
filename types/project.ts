export interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  github: string;

  // New fields for better UI rendering
  type?: "web" | "mobile" | "other"; // helps UI decide layout
  liveUrl?: string;
  status?: "live" | "in-progress" | "prototype" | "archived";
  thumbnail?: string;
  excerpt?: string;
}

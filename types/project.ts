export interface Project {
  title: string;
  description: string;
  problem: string;
  role: string;
  challenge: string;
  images: string[];
  tech: string[];
  github: string;
  type?: "web" | "mobile" | "other";
  liveUrl?: string;
  status?: "live" | "in-progress" | "prototype" | "archived";
  thumbnail?: string;
  excerpt?: string;
}

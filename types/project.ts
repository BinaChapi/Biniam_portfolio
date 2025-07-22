export interface Project {
  title: string;
  description: string;
  images: string[];     // <-- explicitly typed as array of strings
  tech: string[];       // <-- explicitly typed as array of strings
  github: string;
}

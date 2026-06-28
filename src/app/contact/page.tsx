import type { Metadata } from "next";
import ClientContactPage from "./ClientContactPage";

export const metadata: Metadata = {
  title: "Contact | Biniam Mulugeta",
  description:
    "Get in touch with Biniam Mulugeta, Full Stack Developer. Contact via email, GitHub, LinkedIn, Telegram, or phone.",
};

export default function ContactPage() {
  return <ClientContactPage />;
}

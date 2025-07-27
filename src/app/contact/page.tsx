"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Linkedin, Github, Twitter, Send } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { userData } from "../../../lib/utils";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("movldgdr");
  const [email, setEmail] = useState("");
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("submittedEmail");
    if (savedEmail) {
      setAlreadySubmitted(true);
    }
  }, []);

  useEffect(() => {
    if (state.succeeded && email) {
      localStorage.setItem("submittedEmail", email);
      setAlreadySubmitted(true);
    }
  }, [state.succeeded, email]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-br from-white to-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            Feel free to reach out, and I’ll get back to you as soon as possible.
          </p>

          {alreadySubmitted ? (
            <p className="text-green-600 text-lg">
              You’ve already submitted a message. Thanks!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  disabled={state.submitting}
                  className="text-black w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state.submitting}
                  className="text-black w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  disabled={state.submitting}
                  className="text-black w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-600 text-white px-6 py-2 text-sm rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {state.submitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-8 border-t pt-6 text-sm text-gray-700">
            <p><strong>Email:</strong> {userData.email}</p>
            <p className="mt-1"><strong>Phone:</strong> {userData.phoneNo}</p>

            <div className="flex gap-4 mt-4 text-gray-700 text-lg">
              <a href={userData.linkedin} aria-label="LinkedIn" className="hover:text-black"><Linkedin size={20} /></a>
              <a href={userData.github} aria-label="GitHub" className="hover:text-black"><Github size={20} /></a>
              <a href={userData.x} aria-label="Twitter" className="hover:text-black"><Twitter size={20} /></a>
              <a href={userData.telegram} aria-label="Telegram" className="hover:text-black"><Send size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

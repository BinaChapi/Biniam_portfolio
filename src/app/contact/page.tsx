"use client";
import { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub,FaTelegramPlane  } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { userData } from "../../../lib/utils";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle form submission logic here (e.g. send to backend or email service)
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
       <div className="bg-white min-h-screen">
      <Navbar />
    <div className="bg-gradient-to-br from-white to-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. 
          Feel free to reach out, and I’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 border-t pt-6 text-sm text-gray-700">
          <p><strong>Email:</strong> bmulugeta452@email.com</p>
          <p className="mt-1"><strong>Phone:</strong> +25179911145</p>

          <div className="flex gap-4 mt-4 text-xl text-gray-600">
            <a href={userData.linkedin} aria-label="LinkedIn" className="hover:text-black"><FaLinkedin /></a>
            <a href={userData.github} aria-label="GitHub" className="hover:text-black"><FaGithub /></a>
            <a href={userData.x} aria-label="Twitter" className="hover:text-black"><FaTwitter /></a>
            <a href={userData.telegram} aria-label="Telegram" className="hover:text-black"><FaTelegramPlane  /></a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

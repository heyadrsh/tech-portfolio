"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function Contact() {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className={`relative flex size-full min-h-screen flex-col ${isDark ? 'bg-black' : 'bg-gray-50'} group/design-root overflow-x-hidden`}>
      <div className="layout-container flex h-full grow flex-col">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className={`${isDark ? 'text-white' : 'text-[#101418]'} tracking-light text-[32px] font-bold leading-tight`}>
                  Get in Touch
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-[#5c728a]'} text-sm font-normal leading-normal`}>
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to reach out, and I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className={`${isDark ? 'text-white' : 'text-[#101418]'} text-base font-medium leading-normal pb-2`}>
                    Name
                  </p>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl ${isDark ? 'text-white bg-gray-900 border-gray-600 focus:border-gray-500' : 'text-[#101418] bg-gray-50 border-[#d4dbe2] focus:border-[#d4dbe2]'} focus:outline-0 focus:ring-0 border h-14 placeholder:text-[#5c728a] p-[15px] text-base font-normal leading-normal`}
                  />
                </label>
              </div>
              
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className={`${isDark ? 'text-white' : 'text-[#101418]'} text-base font-medium leading-normal pb-2`}>
                    Email
                  </p>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl ${isDark ? 'text-white bg-gray-900 border-gray-600 focus:border-gray-500' : 'text-[#101418] bg-gray-50 border-[#d4dbe2] focus:border-[#d4dbe2]'} focus:outline-0 focus:ring-0 border h-14 placeholder:text-[#5c728a] p-[15px] text-base font-normal leading-normal`}
                  />
                </label>
              </div>
              
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className={`${isDark ? 'text-white' : 'text-[#101418]'} text-base font-medium leading-normal pb-2`}>
                    Message
                  </p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl ${isDark ? 'text-white bg-gray-900 border-gray-600 focus:border-gray-500' : 'text-[#101418] bg-gray-50 border-[#d4dbe2] focus:border-[#d4dbe2]'} focus:outline-0 focus:ring-0 border min-h-36 placeholder:text-[#5c728a] p-[15px] text-base font-normal leading-normal`}
                  />
                </label>
              </div>
              
              <div className="flex px-4 py-3 justify-start">
                <button
                  type="submit"
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-[#dce7f3] text-[#101418] hover:bg-[#c8d5e6]'} text-sm font-bold leading-normal tracking-[0.015em] transition-colors`}
                >
                  <span className="truncate">Send Message</span>
                </button>
              </div>
            </form>
            
            {isSubmitted && (
              <p className={`${isDark ? 'text-green-400' : 'text-green-600'} text-sm font-normal leading-normal pb-3 pt-1 px-4`}>
                Thank you! Your message has been sent.
              </p>
            )}
            
            <h2 className={`${isDark ? 'text-white' : 'text-[#101418]'} text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5`}>
              Connect
            </h2>
            
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <a
                  href="https://linkedin.com/in/aadarshkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-[#eaedf1] text-[#101418] hover:bg-[#d8dde3]'} text-sm font-bold leading-normal tracking-[0.015em] transition-colors`}
                >
                  <span className="truncate">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/aadarshkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-[#eaedf1] text-[#101418] hover:bg-[#d8dde3]'} text-sm font-bold leading-normal tracking-[0.015em] transition-colors`}
                >
                  <span className="truncate">GitHub</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
                <a
                  href="https://heyadrsh.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-[#eaedf1] text-[#101418] hover:bg-[#d8dde3]'} text-sm font-bold leading-normal tracking-[0.015em] transition-colors`}
                >
                  <span className="truncate">Portfolio Website</span>
                </a>
                <a
                  href="mailto:heyadrsh@gmail.com"
                  className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-[#eaedf1] text-[#101418] hover:bg-[#d8dde3]'} text-sm font-bold leading-normal tracking-[0.015em] transition-colors`}
                >
                  <span className="truncate">Email Me</span>
                </a>
              </div>
            </div>
            
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
                <Link href="/" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-[#5c728a] hover:text-[#0c77f2]'} text-base font-normal leading-normal min-w-40 transition-colors`}>
                  Home
                </Link>
                <Link href="/about" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-[#5c728a] hover:text-[#0c77f2]'} text-base font-normal leading-normal min-w-40 transition-colors`}>
                  About
                </Link>
                <Link href="/projects" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-[#5c728a] hover:text-[#0c77f2]'} text-base font-normal leading-normal min-w-40 transition-colors`}>
                  Projects
                </Link>
                <Link href="/contact" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-[#5c728a] hover:text-[#0c77f2]'} text-base font-normal leading-normal min-w-40 transition-colors`}>
                  Contact
                </Link>
              </div>
              <p className={`${isDark ? 'text-gray-400' : 'text-[#5c728a]'} text-base font-normal leading-normal`}>
                © Aadarsh Kumar 2025
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
} 
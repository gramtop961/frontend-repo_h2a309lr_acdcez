import React from 'react';
import { Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold">V</div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold tracking-tight">Velodent</span>
            <span className="text-xs text-neutral-500">AI for Modern Dental Clinics</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#cases" className="hover:opacity-70 transition-opacity">Case Studies</a>
          <a href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</a>
          <a href="#faq" className="hover:opacity-70 transition-opacity">FAQ</a>
        </nav>
        <a
          href="https://cal.com/velodent-ogbkfv/20min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm md:text-base font-semibold hover:opacity-90 transition-opacity"
        >
          <Calendar size={18} />
          Book Now
        </a>
      </div>
    </header>
  );
}

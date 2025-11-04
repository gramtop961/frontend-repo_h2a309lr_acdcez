import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <section className="max-w-7xl mx-auto px-6 py-14 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">Schedule a Private Demo or Strategy Call</h3>
        <p className="mt-2 text-neutral-700">Pick a time that fits your day. We’ll map your automation blueprint.</p>
        <a
          href="https://cal.com/velodent-ogbkfv/20min"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90"
        >
          Open Booking
        </a>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600">
        <div>© 2025 Velodent. All rights reserved.</div>
        <a href="mailto:Velodent.ia@gmail.com" className="hover:opacity-70">Velodent.ia@gmail.com</a>
      </div>
    </footer>
  );
}

import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-black">
            AI Automation for Modern Dental Clinics
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-700 max-w-xl">
            Velodent streamlines front-desk ops, patient onboarding, and recall systems using safe, compliant AI.
          </p>
          <div className="mt-6">
            <p className="text-sm text-neutral-600">Book a 20-Minute Discovery Call — Choose a Time That Works for You</p>
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>

          <div className="mt-10">
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200">
              <iframe
                title="Velodent Overview"
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Nw478YoO3og?si=Tlq4mQe0x2RlSpPJ&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-6">
              <h3 className="text-base md:text-lg font-semibold">Built for high-performing dental teams</h3>
              <p className="mt-2 text-neutral-700">
                We automate front desk workflows end-to-end — from first contact to post-visit follow-ups. Our AI receptionist answers, schedules, verifies insurance, and keeps your calendar fully optimized. Privacy-first by design.
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-3 rounded-lg border border-neutral-200">
                  <dt className="text-xs text-neutral-500">Efficiency ROI</dt>
                  <dd className="text-xl font-semibold">2×</dd>
                </div>
                <div className="p-3 rounded-lg border border-neutral-200">
                  <dt className="text-xs text-neutral-500">Coverage</dt>
                  <dd className="text-xl font-semibold">24/7</dd>
                </div>
                <div className="p-3 rounded-lg border border-neutral-200">
                  <dt className="text-xs text-neutral-500">Uptime</dt>
                  <dd className="text-xl font-semibold">99.9%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative h-[380px] md:h-[520px] w-full">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

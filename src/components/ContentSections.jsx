import React, { useState } from 'react';
import { Phone, Calendar, ShieldCheck, CreditCard, Mail, BarChart3, ChevronRight } from 'lucide-react';

function Services() {
  const items = [
    { icon: Phone, title: 'AI Receptionist', desc: 'Answering, triage, and intelligent handoff with natural, compliant voice.' },
    { icon: Calendar, title: 'Appointment & Recall', desc: 'Smart booking, rescheduling, and 6-month hygiene recalls.' },
    { icon: ShieldCheck, title: 'Insurance Verification', desc: 'Eligibility checks and pre-auth support before visits.' },
    { icon: CreditCard, title: 'Payment & Claims', desc: 'Secure payment links and claim assistance with status updates.' },
    { icon: Mail, title: 'Lead Follow-up', desc: 'Convert ad leads and revive inactive patients automatically.' },
    { icon: BarChart3, title: 'Dashboard & Analytics', desc: 'Live KPIs, utilization, and campaign ROI in one view.' },
  ];
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
        <p className="mt-2 text-neutral-700">Velodent’s AI automation suite, delivered with an enterprise-grade experience.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="group p-6 rounded-2xl border border-neutral-200 bg-white hover:shadow-sm transition-shadow">
              <s.icon className="h-6 w-6 text-black" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const [active, setActive] = useState(null);
  const studies = [
    {
      name: 'Urban Dental | 3-location DSO',
      stats: '+41% completed hygiene visits, −28% no-show rate, 2.3× productivity',
      details: 'Urban Dental automated inbound calls, eligibility checks, and recall campaigns. Lifted hygiene completions by 41% and reduced no-shows by 28% across 3 locations.'
    },
    {
      name: 'BrightSmile Pediatrics',
      stats: 'Insurance checks cut from 7 min → 90 sec, 24/7 call capture (96% CSAT), +$38k production',
      details: 'BrightSmile deployed AI verification and after-hours triage. Insurance verification dropped to 90 seconds and monthly production increased by $38k.'
    },
    {
      name: 'OrthoPlus Aligners',
      stats: '+52% lead-to-start conversion, automated braces tighten reminders, full HIPAA audit trail',
      details: 'OrthoPlus used AI lead follow-up and automated reminders to raise conversion by 52%, maintaining a full HIPAA-compliant audit trail.'
    }
  ];
  return (
    <section id="cases" className="bg-white py-16 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Case Studies</h2>
        <p className="mt-2 text-neutral-700">Measurable outcomes from real clinics powered by Velodent.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((c, idx) => (
            <div key={c.name} className="p-6 rounded-2xl border border-neutral-200">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-neutral-700">{c.stats}</p>
              <button
                onClick={() => setActive(idx)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>

        {active !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6" onClick={() => setActive(null)}>
            <div className="max-w-xl w-full rounded-2xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
              <h4 className="text-lg font-semibold">{studies[active].name}</h4>
              <p className="mt-2 text-neutral-700">{studies[active].details}</p>
              <button className="mt-6 inline-flex rounded-full bg-black text-white px-4 py-2 text-sm font-semibold" onClick={() => setActive(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialsAndFAQ() {
  const testimonials = [
    { name: 'Dr. A. Nguyen', role: 'Owner, Urban Dental', quote: 'Velodent became our always-on front desk. We gained capacity without adding headcount.', verified: true },
    { name: 'Maya R.', role: 'Office Manager', quote: 'Insurance checks are instant now. Patients notice the difference.', verified: true },
    { name: 'Dr. K. Patel', role: 'Orthodontist', quote: 'Lead follow-up finally runs itself. Starts increased substantially.', verified: true },
    { name: 'J. Chen', role: 'Regional Ops', quote: 'The dashboard gives us real-time visibility across locations.', verified: true },
    { name: 'Sarah T.', role: 'Hygiene Coordinator', quote: 'Recall campaigns are fully automated and respectful. Schedules stay full.', verified: true },
    { name: 'Luis M.', role: 'Pediatric Dentist', quote: '24/7 coverage with high CSAT. Parents love the experience.', verified: true },
  ];

  const faqs = [
    { q: 'How long does setup take?', a: 'Most clinics launch in 7–14 days. We handle integration, configuration, and testing with your team.' },
    { q: 'What’s included in my subscription?', a: 'AI receptionist, appointment & recall, insurance verification, secure payments, and analytics. Enterprise support included.' },
    { q: 'Is Velodent HIPAA-compliant?', a: 'Yes. We sign BAAs and follow strict encryption, access controls, and audit logging.' },
    { q: 'How does AI handle patient data securely?', a: 'Data is encrypted in transit and at rest. Access is monitored and audited with least-privilege policies.' },
    { q: 'What if my team needs training?', a: 'We provide onboarding, live training sessions, and ongoing success reviews.' },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">What Our Clients Say</h2>
        <p className="mt-2 text-neutral-700">Authentic feedback from practices we power every day.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-neutral-200 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-neutral-600">{t.role}</p>
                </div>
                {t.verified && (
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-900 text-white">Verified Client</span>
                )}
              </div>
              <p className="mt-3 text-neutral-800">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      <div id="faq" className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
          {faqs.map((item, idx) => (
            <div key={item.q}>
              <button
                className="w-full text-left px-5 py-4 hover:bg-neutral-50 transition-colors"
                onClick={() => setOpen(open === idx ? -1 : idx)}
                aria-expanded={open === idx}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.q}</span>
                  <span className={`transition-transform ${open === idx ? 'rotate-90' : ''}`}>
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </div>
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-neutral-700">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContentSections() {
  return (
    <>
      <Services />
      <CaseStudies />
      <TestimonialsAndFAQ />
    </>
  );
}

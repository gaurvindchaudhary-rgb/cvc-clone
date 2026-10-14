"use client";
import { useState } from "react";
import { nav, site } from "@/lib/content";

function Dropdown({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="group relative">
      <button className="py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink hover:text-primary">
        {label}
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 bg-surface py-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
        {items.map((i) => (
          <a key={i} href="#services" className="block px-5 py-2 text-sm text-ink-soft hover:bg-surface-alt hover:text-primary">
            {i}
          </a>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4 text-left font-heading text-2xl text-ink">
        {label}
        <span className="text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-4 pl-3">
          {items.map((i) => (
            <a key={i} href="#services" onClick={() => {}} className="block py-2 text-sm text-ink-soft">{i}</a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-6 sm:px-10">
        <a href="/" aria-label={site.name} className="leading-tight">
          <span className="block font-heading text-2xl text-ink sm:text-[1.7rem]">Dr. Maya Reynolds</span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-primary">Clinical Psychologist · Santa Monica</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#about" className="text-xs font-medium uppercase tracking-[0.15em] text-ink hover:text-primary">About</a>
          <Dropdown label="Services" items={nav.services} />
          <Dropdown label="Approach" items={nav.approach} />
          <a href="#office" className="text-xs font-medium uppercase tracking-[0.15em] text-ink hover:text-primary">Our Office</a>
          <a href="#faqs" className="text-xs font-medium uppercase tracking-[0.15em] text-ink hover:text-primary">FAQs</a>
          <a href="#schedule" className="text-xs font-medium uppercase tracking-[0.15em] text-ink hover:text-primary">Contact</a>
        </nav>

        <button className="lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-7 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-7 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-7 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto bg-surface px-6 pb-8 lg:hidden">
          <a href="#about" onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 font-heading text-2xl text-ink">About</a>
          <MobileGroup label="Services" items={nav.services} />
          <MobileGroup label="Approach" items={nav.approach} />
          <a href="#office" onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 font-heading text-2xl text-ink">Our Office</a>
          <a href="#faqs" onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 font-heading text-2xl text-ink">FAQs</a>
          <a href="#schedule" onClick={() => setOpen(false)} className="block py-4 font-heading text-2xl text-ink">Contact</a>
        </div>
      )}
    </header>
  );
}

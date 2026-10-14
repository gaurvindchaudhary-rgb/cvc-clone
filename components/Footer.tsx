import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-14 text-surface sm:px-10 lg:py-20">
      <div className="mx-auto max-w-page">
        <p className="max-w-2xl font-heading text-2xl italic text-surface sm:text-3xl">
          We want to make getting started simple. Visit my private office in Santa Monica or schedule a secure telehealth session from anywhere in California, whatever works best for you.
        </p>

        <div className="mt-12 grid gap-10 border-t border-surface/30 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h5 className="mb-4 text-xs font-medium uppercase tracking-[0.18em]">Navigate</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#office">Our Office</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#schedule">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-medium uppercase tracking-[0.18em]">Office</h5>
            <address className="space-y-1 text-sm not-italic">
              <div className="font-medium">{site.name}</div>
              {site.address.map((l) => <div key={l}>{l}</div>)}
            </address>
            <p className="mt-4 text-xs italic !leading-relaxed text-surface/80">{site.serving}</p>
          </div>
          <div>
            <h5 className="mb-4 text-xs font-medium uppercase tracking-[0.18em]">Approach</h5>
            <ul className="space-y-2 text-sm">
              {nav.approach.map((t) => <li key={t}><a href="#approach">{t}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-surface/30 pt-6 text-xs text-surface/80 sm:flex-row sm:justify-between">
          <p className="!text-xs"><a href="#">Terms</a> | <a href="#">Privacy Policy</a> | <a href="#">Disclaimer</a></p>
          <p className="!text-xs">© Dr. Maya Reynolds, PsyD</p>
        </div>
      </div>
    </footer>
  );
}

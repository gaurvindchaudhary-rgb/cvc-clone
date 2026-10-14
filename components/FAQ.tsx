import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <section id="faqs" className="section bg-secondary/40">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <h2>
          Frequently asked <em>questions</em>
        </h2>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/20 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-2xl text-ink">
                {f.q}
                <span className="text-xl text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

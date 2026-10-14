import { approaches, images } from "@/lib/content";

export default function Specialties() {
  return (
    <section id="approach" className="section bg-surface-alt">
      <div className="container-page">
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2>
              Evidence-based tools, <em>tailored</em> to you.
            </h2>
            <h3 className="mt-8">
              My <em>approach</em> includes…
            </h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.specialties} alt="Gentle teal ocean waves, a calming image for anxiety therapy" className="aspect-[16/10] w-full object-cover" />
        </div>
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
          {approaches.map((s) => (
            <article key={s.title} className="border-t border-ink/20 pt-6">
              <h4>{s.title}</h4>
              <p className="mt-3">{s.text}</p>
              <a href="#schedule" className="link-more mt-5 inline-block">Learn more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

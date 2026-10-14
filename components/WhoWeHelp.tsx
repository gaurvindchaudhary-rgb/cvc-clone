import { images, services } from "@/lib/content";

export default function WhoWeHelp() {
  return (
    <section id="services" className="section bg-surface">
      <div className="container-page">
        <h2 className="mb-12 text-center lg:mb-16">
          How I can <em>help</em>
        </h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {services.map((c) => (
            <article key={c.title} className="text-center md:text-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.alt} className="mb-6 aspect-[4/5] w-full object-cover" />
              <h3 className="!text-2xl">{c.title}</h3>
              <p className="mt-3">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={images.banner} alt="" aria-hidden="true" className="mx-auto mt-16 hidden h-40 w-full max-w-page object-cover sm:block lg:mt-24" />
    </section>
  );
}

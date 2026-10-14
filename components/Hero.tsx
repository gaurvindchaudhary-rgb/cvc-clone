import { images } from "@/lib/content";

export default function Hero() {
  return (
    <section className="section bg-surface pt-10 sm:pt-14 lg:pt-16">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow italic normal-case tracking-[0.12em]">ANXIETY, TRAUMA &amp; BURNOUT THERAPY IN SANTA MONICA, CA</p>
          <h1>
            Anxiety &amp; trauma therapy in Santa Monica, CA, so you can finally feel <em>at ease</em> again.
          </h1>
          <p className="mt-6 max-w-md text-lg">
            Dr. Maya Reynolds, PsyD helps high-achieving adults move beyond overthinking, burnout, and the lingering effects of past experiences. In-person in Santa Monica or secure telehealth across California.
          </p>
          <a href="#schedule" className="btn mt-8">Book a Consultation</a>
        </div>

        <div className="relative mx-auto grid w-full max-w-xl grid-cols-2 gap-4 sm:gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.heroA} alt="Sunset over the Pacific coast near Santa Monica" className="aspect-[3/4] w-full object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.heroB} alt="Balanced stacked stones symbolizing calm and grounding" className="mt-12 aspect-[3/4] w-full object-cover sm:mt-16" />
        </div>
      </div>
    </section>
  );
}

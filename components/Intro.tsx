import { images } from "@/lib/content";

export default function Intro() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2>You look like you have it all together. Inside, you’re exhausted.</h2>
          <p className="mt-6 font-heading text-2xl italic text-accent">
            Therapy with Dr. Reynolds is a space to slow down and feel safe in your own life again.
          </p>
          <p className="mt-6">
            Many of the adults I work with in Santa Monica are high-achieving, thoughtful, and self-aware, yet quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.
          </p>
          <p className="mt-4">
            Others are navigating earlier life experiences that continue to affect their relationships, confidence, or sense of safety. Whatever brought you here, you don’t have to keep pushing through it alone. Together we can build practical tools and a stronger relationship with yourself.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images.intro} alt="Soft sand dunes under a pale sky, a quiet and calming scene" className="aspect-[4/5] w-full object-cover lg:order-first" />
      </div>
    </section>
  );
}

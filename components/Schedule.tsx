import { images } from "@/lib/content";

export default function Schedule() {
  return (
    <section id="schedule" className="section bg-surface">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">SCHEDULE A CONSULTATION</p>
          <h2>
            Find out if we’re the right fit for <em>you</em>.
          </h2>
          <p className="mt-6">
            If you’re looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit. Therapy with me works best when you feel respected, understood, and actively involved in the process.
          </p>
          <p className="mt-4">Click the button below to get started with anxiety, trauma, or burnout therapy in Santa Monica.</p>
          <a href="#" className="btn mt-8">Book now</a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.scheduleA} alt="Sun rising over a calm sea" className="aspect-[3/4] w-full object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.scheduleB} alt="Teal leaves on a sand-colored background" className="mt-10 aspect-[3/4] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

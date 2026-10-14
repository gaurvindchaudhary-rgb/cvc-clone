import { images, site } from "@/lib/content";

export default function Office() {
  return (
    <section id="office" className="section bg-surface">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="eyebrow">OUR OFFICE</p>
          <h2>
            A calm space for <em>healing</em> in Santa Monica
          </h2>
          <p className="mt-6">
            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.office1} alt="Therapy office in Santa Monica with a gray sofa, armchair, and large sunlit windows" className="aspect-[4/3] w-full object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.office2} alt="Calm counseling room with soft seating, a bookshelf, and natural light" className="aspect-[4/3] w-full object-cover" />
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 text-center sm:grid-cols-2 sm:text-left">
          <div className="border-t border-ink/20 pt-5">
            <h4>In-person</h4>
            <p className="mt-2">{site.address[0]}, {site.address[1]}</p>
          </div>
          <div className="border-t border-ink/20 pt-5">
            <h4>Telehealth</h4>
            <p className="mt-2">Secure online sessions for clients located in California.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

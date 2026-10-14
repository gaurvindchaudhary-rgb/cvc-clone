import { expertise } from "@/lib/content";

export default function Expertise() {
  return (
    <section className="section bg-secondary/40">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2>
            You deserve a space to slow down, reconnect, and be understood.{" "}
            <em>Practical tools and real depth, side by side.</em>
          </h2>
        </div>
        <div>
          <h3 className="mb-6">
            Areas of <em>expertise</em>
          </h3>
          <ul>
            {expertise.map((e) => (
              <li key={e} className="border-b border-ink/20 py-3 font-heading text-3xl italic text-primary sm:text-4xl">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

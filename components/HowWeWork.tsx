import { images } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section id="about" className="section bg-surface">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images.maya} alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA" className="aspect-[4/5] w-full object-cover object-top" />
        <div>
          <p className="eyebrow">ABOUT DR. MAYA REYNOLDS, PSYD</p>
          <h2>Warm, collaborative, and grounded therapy.</h2>
          <p className="mt-6 font-heading text-2xl italic text-accent">
            I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
          </p>
          <p className="mt-6">
            My work often focuses on anxiety, panic, trauma, and burnout. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of what you’re experiencing.
          </p>
          <p className="mt-4">
            I believe therapy works best when you feel respected, understood, and actively involved. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
          </p>
          <a href="#schedule" className="btn-outline mt-8">Work with Dr. Reynolds</a>
        </div>
      </div>
    </section>
  );
}

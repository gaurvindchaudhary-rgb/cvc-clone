import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import Expertise from "@/components/Expertise";
import HowWeWork from "@/components/HowWeWork";
import Specialties from "@/components/Specialties";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Expertise />
        <HowWeWork />
        <Specialties />
        <Office />
        <FAQ />
        <Schedule />
      </main>
      <Footer />
    </>
  );
}

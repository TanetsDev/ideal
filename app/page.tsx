import AboutBox from "@/components/Sections/AboutBox";
import Benefits from "@/components/Sections/Benefits";
import HeroSection from "@/components/Sections/HeroSection";
import Insta from "@/components/Sections/Insta";
import TeamSection from "@/components/Sections/TeamSection";
import IdealProposition from "@/components/Sections/IdealProposition";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <IdealProposition />
      <AboutBox />
      <Benefits />
      <TeamSection />
      <Insta />
    </main>
  );
}

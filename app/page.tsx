import ButtonGradient from "@/public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";
import Connect from "@/components/Connect";
// import Roadmap from "@/components/Philosophy";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Philosophy/>
        <Connect/>
        <Footer/>
      </div>
      <ButtonGradient />

    </>
  );
}

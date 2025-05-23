import ButtonGradient from "@/public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />

    </>
  );
}

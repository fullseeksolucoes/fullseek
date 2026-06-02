import About from "@/components/sections/About";
import Cta from "@/components/sections/Cta";
import Faq from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import SocialProof from "@/components/sections/SocialProof";
import WhatsappButton from "@/components/sections/WhatsappButton";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <WhyChooseUs />
      <Portfolio />
      <Services />
      <HowItWorks />
      <About />
      <Faq />
      <Cta />
      <WhatsappButton />
    </>
  );
}

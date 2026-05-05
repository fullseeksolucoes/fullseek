import Cta from "@/components/sections/Cta";
import Faq from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import WhatsappButton from "@/components/sections/WhatsappButton";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <Faq />
      <Cta />
      <WhatsappButton />
    </>
  );
}

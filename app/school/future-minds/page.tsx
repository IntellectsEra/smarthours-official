import FutureMinds from "@/modules/school/future-minds";
import StatsSection from "@/modules/school/StatsSection";
import LearnSection from "@/modules/school/learn";
import WhyAISkillsSection from "@/modules/school/why-ai-skills";
import TestimonialSection from "@/modules/school/TestimonialSection";
import { FAQSection } from "@/modules/course/faq-section";
import FooterCTA from "@/modules/school/FooterCTA";

import { faqs } from "@/modules/school/faq";

export default function Page() {
  return (
    <>
      <FutureMinds />
      <StatsSection />
      <LearnSection />
      <WhyAISkillsSection />
      <TestimonialSection />
      <FAQSection faqs={faqs} /> 
      <FooterCTA />
    </>
  );
}

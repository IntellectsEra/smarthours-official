"use client";
import { courses } from "@/data/program";
import { BenefitsSection } from "@/modules/course/benefits-section";
import { FAQSection } from "@/modules/course/faq-section";
import { FeaturesSection } from "@/modules/course/features-section";
import { HeroSection } from "@/modules/course/hero-section";
import Partners from "@/modules/course/partners";
import { PricingSection } from "@/modules/course/pricing-section";
import { StatsSection } from "@/modules/course/stats-section";
import { StickyEnrollBar } from "@/modules/course/sticky-enroll-bar";
import { TestimonialsSection } from "@/modules/course/testimonials-section";
import { Leads } from "@/modules/enroll/lead-dialog";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { LearnBuildSection } from "@/modules/course/learn-build-section";
import { InternshipPlanSection } from "@/modules/course/internship-section";
import { WhoShouldApplySection } from "@/modules/course/who-should-apply-section";
import { CompletionBenefitsSection } from "@/modules/course/completion-benefits-section";

export default function ProgramPage() {
  const params = useParams();

  const course = courses.find((c) => c.slug === params.slug);

  console.log("coursepage ");
  if (!course) return <div>Course not found</div>;

  const [open, setOpen] = useState(false);
  console.log(
    course?.internshipDetails && course?.internshipDetails.whyStandOut
  );
  console.log(course);
  return (
    <main className="min-h-screen bg-background/50">
      <HeroSection data={course.hero} open={open} setOpen={setOpen} />
      <StatsSection />
      <BenefitsSection benefits={course.benefits || []} />
      {course.features && (
        <FeaturesSection
          features={course.features}
          tools={course.tools}
          title={course.pricing.planName}
        />
      )}

      {/*THIS BLOCK IS NEW */}

      {course.internshipDetails && (
        <>
          <LearnBuildSection data={course.internshipDetails.learnAndBuild} />
          <InternshipPlanSection
            data={course.internshipDetails.internshipPlan}
          />
          <WhoShouldApplySection
            data={course.internshipDetails.whoShouldApply}
          />
          <CompletionBenefitsSection
            data={course.internshipDetails.completionBenefits}
          />
        </>
      )}

      <Partners />
      {course.testimonials && (
        <TestimonialsSection testimonials={course.testimonials} />
      )}

      <PricingSection pricing={course.pricing} setOpen={setOpen} />
      <div className="pb-12">
        {course.faqs && <FAQSection faqs={course.faqs} />}
      </div>
      <StickyEnrollBar
        price={course.pricing}
        data={course.hero}
        title={course.courseTitle}
        setOpen={setOpen}
      />

      <Leads open={open} setOpen={setOpen} />
    </main>
  );
}

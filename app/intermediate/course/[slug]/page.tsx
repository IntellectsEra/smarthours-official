'use client';

// import { courses } from '@/data/course';
import { intermediateCourses } from '@/data/intermediateCourse';
import { BenefitsSection } from '@/modules/course/benefits-section';
import { FAQSection } from '@/modules/course/faq-section';
import { FeaturesSection } from '@/modules/course/features-section';
import { HeroSection } from '@/modules/course/hero-section';
import Partners from '@/modules/course/partners';
import { PricingSection } from '@/modules/course/pricing-section';
import { StatsSection } from '@/modules/course/stats-section';
import { StickyEnrollBar } from '@/modules/course/sticky-enroll-bar';
import { TestimonialsSection } from '@/modules/course/testimonials-section';
import { Leads } from '@/modules/enroll/lead-dialog';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

export default function CoursePage() {
  const params = useParams();

  const course = intermediateCourses.find((c) => c.slug === params.slug);
  if (!course) return <div>Course not found</div>;

  const [open, setOpen] = useState(false);

  return (
    <main className='min-h-screen bg-background/50'>
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
      <Partners />
      {course.testimonials && (
        <TestimonialsSection testimonials={course.testimonials} />
      )}

      <PricingSection pricing={course.pricing}  setOpen={setOpen} />
      <div className='pb-12'>
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

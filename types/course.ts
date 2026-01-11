import type { LucideIcon } from "lucide-react";

// hero-section.tsx or types/course.ts
export type HeroInfo = {
  startAt: string;
  duration: string;
};

export type HeroData = {
  badge: string;
  titleHighlight: string;
  titleMain: string;
  description: string;
  primaryCta: { label: string; link: string };
  secondaryCta: { label: string; link: string };
  info: HeroInfo;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type PricingData = {
  planName: string;
  price: number;
  originalPrice: number;
  monthlyInstallment?: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
  ctaLink?: string;
  note?: string;
};

export type FeatureCategory = {
  category: string;
  skills: string[];
  projects: string[];
};

export type BenefitData = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  content: string;
};

export type CourseData = {
  slug: string;
  courseTitle: string;
  courseBanner: string;
  hero: HeroData;
  faqs?: FAQ[];
  testimonials?: Testimonial[];
  pricing: PricingData;
  features?: FeatureCategory[];
  benefits?: BenefitData[];
  tools: string[];
internshipDetails?: {
  learnAndBuild: string[];
  whyStandOut: string[];
  internshipPlan: {
    week: string;
    title: string;
    desc: string;
  }[];
  whoShouldApply: string[];
  completionBenefits: string[];
};
};

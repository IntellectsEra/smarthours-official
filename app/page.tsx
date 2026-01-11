import PublicHeader from '@/common/public-header';
import { CallToAction } from '@/modules/home/call-to-action';
import Courses from '@/modules/home/courses';
import { Faqs } from '@/modules/home/faqs';
import Features from '@/modules/home/features';
import Footer from '@/modules/home/footer';
import Hero from '@/modules/home/hero-section';
import Newsletter from '@/modules/home/newsletter';
import SuccessSteps from '@/modules/home/success-steps';
import { Testimonials } from '@/modules/home/testimonials';

export default function Home() {
  return (
    <div>
      {/* <Showcase /> */}
      <PublicHeader />
      <Hero />
      <Courses />
      <Features />
      <SuccessSteps />
      <Testimonials />
      <CallToAction />
      <Faqs />
      <Newsletter />
      <Footer />
    </div>
  );
}

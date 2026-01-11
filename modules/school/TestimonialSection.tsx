"use client";

import Image from "next/image";
import { useState } from "react";

function ArrowLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function TestimonialSection() {

  const testimonials = [
    {
      name: "Anita R",
      role: "Parent",
      image: "/assets/school/icons/TestimonialImage.png",
      message:
        "Future Minds has completely transformed how my daughter learns. She now creates presentations, videos, and AI-generated content with so much confidence. This program made her excited about technology, and the capstone project was truly impressive!",
    },
    // {
    //   name: "Rahul K",
    //   role: "Parent",
    //   image: "/assets/school/icons/TestimonialImage.png",
    //   message:
    //     "My son absolutely loves the program. The hands-on approach and real projects helped him gain confidence and creativity with AI tools.",
    // },
    // {
    //   name: "Meena S",
    //   role: "Parent",
    //   image: "/assets/school/icons/TestimonialImage.png",
    //   message:
    //     "A very well-structured program. My child now understands AI concepts and applies them practically in school projects.",
    // },
  ];

  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const prev = () =>
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const next = () =>
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-visible">
      {/* ===== TOP WAVE BORDER ===== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 14" preserveAspectRatio="none" className="w-full h-[16px]">
          <path
            d="M0,4 L10,2 L20,4 L30,2 L40,4 L50,2 L60,4 L70,2 L80,4
               L90,2 L100,4 L110,2 L120,4 L130,2 L140,4 L150,2 L160,4
               L170,2 L180,4 L190,2 L200,4 L210,2 L220,4 L230,2 L240,4
               L250,2 L260,4 L270,2 L280,4 L290,2 L300,4 L310,2 L320,4
               L330,2 L340,4 L350,2 L360,4 L370,2 L380,4 L390,2 L400,4
               L410,2 L420,4 L430,2 L440,4 L450,2 L460,4 L470,2 L480,4
               L490,2 L500,4 L510,2 L520,4 L530,2 L540,4 L550,2 L560,4
               L570,2 L580,4 L590,2 L600,4 L610,2 L620,4 L630,2 L640,4
               L650,2 L660,4 L670,2 L680,4 L690,2 L700,4 L710,2 L720,4
               L730,2 L740,4 L750,2 L760,4 L770,2 L780,4 L790,2 L800,4
               L810,2 L820,4 L830,2 L840,4 L850,2 L860,4 L870,2 L880,4
               L890,2 L900,4 L910,2 L920,4 L930,2 L940,4 L950,2 L960,4
               L970,2 L980,4 L990,2 L1000,4 L1010,2 L1020,4 L1030,2 L1040,4
               L1050,2 L1060,4 L1070,2 L1080,4 L1090,2 L1100,4 L1110,2 L1120,4
               L1130,2 L1140,4 L1150,2 L1160,4 L1170,2 L1180,4 L1190,2 L1200,4
               L1210,2 L1220,4 L1230,2 L1240,4 L1250,2 L1260,4 L1270,2 L1280,4
               L1290,2 L1300,4 L1310,2 L1320,4 L1330,2 L1340,4 L1350,2 L1360,4
               L1370,2 L1380,4 L1390,2 L1400,4 L1410,2 L1420,4 L1430,2 L1440,4"
            fill="none"
            stroke="#6C757D"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="section-inner">
          {/* HEADING */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1F2432] leading-tight">
              What Our Learners Say About <br />
              <span>Future Minds Impact and Value</span>
            </h2>
          </div>

      
          <div className="relative max-w-5xl mx-auto">
           
            <div className="hidden md:block absolute inset-x-0 inset-y-3 bg-white border border-gray-200 rounded-[28px] -translate-x-3 z-0" />
            <div className="hidden md:block absolute inset-x-0 inset-y-3 bg-white border border-gray-200 rounded-[28px] translate-x-3 z-[1]" />
            <div className="hidden md:block absolute inset-x-0 inset-y-4 bg-white border border-gray-200 rounded-[28px] translate-x-6 z-[2]" />

      
            <div className="relative z-10 bg-white border border-gray-200 rounded-[28px] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              {/* LEFT ARROW */}
              <button
                onClick={prev}
                className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2
                w-11 h-11 rounded-full border border-[#03594E]
                flex items-center justify-center text-[#03594E]
                hover:bg-[#03594E] hover:text-white transition bg-white"
              >
                <ArrowLeft />
              </button>

              {/* IMAGE */}
              <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={260}
                  height={260}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 text-center md:text-left">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#4C505B" className="mb-4 mx-auto md:mx-0">
                  <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6v-6H5.17A3.17 3.17 0 018.34 8H7.17V6zm9 0A5.17 5.17 0 0011 11.17V18h6v-6h-2.83A3.17 3.17 0 0117.34 8h-1.17V6z" />
                </svg>

                <p className="text-base md:text-lg leading-relaxed text-[#1F2432] mb-6 font-bold">
                  {current.message}
                </p>

                <h4 className="text-lg font-semibold text-[#1F2432]">
                  {current.name}
                </h4>
                <span className="text-sm text-[#6C757D]">{current.role}</span>
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={next}
                className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2
                w-11 h-11 rounded-full border border-[#03594E]
                flex items-center justify-center text-[#03594E]
                hover:bg-[#03594E] hover:text-white transition bg-white"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

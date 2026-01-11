import { Check } from "lucide-react";
import Image from "next/image";

export default function WhyAISkillsSection() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-inner max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative grid grid-cols-2 gap-6 lg:gap-8 items-center justify-items-center">
            {/* LEFT IMAGE STACK */}
            <div className="relative w-fit">
              <div className="absolute -top-10 -left-10 z-0">
                <Image
                  src="/assets/school/image.png"
                  alt="Decorative circle"
                  width={160}
                  height={160}
                />
              </div>

              <div className="relative z-10 mt-6 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/school/image 1.png"
                  alt="Students Group"
                  width={350}
                  height={520}
                  className="object-cover w-[160px] sm:w-[200px] lg:w-[350px]"
                />
              </div>
            </div>

            <div className="relative flex flex-col items-start gap-5">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/school/image 2.png"
                  alt="Student"
                  width={320}
                  height={420}
                  className="object-cover w-[140px] sm:w-[180px] lg:w-[320px]"
                />
              </div>
              <div
                className="bg-[#1F2432] text-white rounded-2xl shadow-lg flex items-center px-4 py-3 gap-3sm:px-6 sm:py-4 lg:px-8 lg:py-6 lg:gap-4"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  100+
                </h3>

                <span className="text-xs sm:text-sm lg:text-base leading-tight opacity-90">
                  Students <br /> Trained by us
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE TEXT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-[#1F2432] leading-snug mb-6">
              Why AI Skills Matter for <br />
              Your Child’s Future
              <span className="block w-40 h-1 bg-[#1F2432] mt-2"></span>
            </h2>

            <p className="text-[#6C757D] leading-relaxed mb-8 max-w-xl">
              AI skills empower your child to thrive in a world where technology
              drives every industry. Learning early builds creativity,
              problem-solving ability, and a strong competitive edge for future
              career opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {[
                "Academic Advantage",
                "Advanced Digital Tools",
                "Critical-thinking Skills",
                "Future Careers",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-[#F4C430] stroke-[3]" />
                  <p className="font-semibold text-[#1F2432]">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="bg-[#2D4AF1] text-white font-semibold rounded-xl shadow flex items-center gap-2 w-fit px-6 py-2 text-sm sm:px-8 sm:py-2.5 sm:text-base lg:px-10 lg:py-3 lg:text-lg"
            >
              Enroll Now – ₹4,999 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

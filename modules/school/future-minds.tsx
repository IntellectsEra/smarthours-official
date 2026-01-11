import Image from "next/image";

export default function FutureMinds() {
  return (
    <section className="relative w-full bg-[#F9FAFB] pt-24 md:pt-28 pb-24 md:pb-32 overflow-hidden school-hero-image">
      <div className="container mx-auto px-6 relative">
        <Image
          src="/assets/school/hero-assets/google.png"
          alt="Google"
          width={60}
          height={60}
          className="hidden md:block absolute left-[28%] top-6 rotate-[-12deg]"
        />

        <Image
          src="/assets/school/hero-assets/ai.png"
          alt="Perplexity"
          width={70}
          height={70}
          className="hidden md:block absolute right-[28%] top-8 rotate-[12deg]"
        />

        <Image
          src="/assets/school/hero-assets/gpt.png"
          alt="ChatGPT"
          width={70}
          height={70}
          className="hidden md:block absolute right-[36%] bottom-[-15%] rotate-[-8deg]"
        />

        <Image
          src="/assets/school/hero-assets/cloud.png"
          alt="Cloud"
          width={80}
          height={80}
          className="hidden md:block absolute left-[35%] bottom-[-15%]"
        />

        {/* ================= MAIN CONTENT ================= */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* LEFT — GIRL */}
          <div className="relative w-full md:w-1/3 flex justify-center">
            <div className="absolute bottom-0 w-[220px] h-[220px] md:w-[260px] md:h-[260px] bg-[#4462FF] rounded-xl -z-10"></div>
            <Image
              src="/assets/school/Hero left.png"
              alt="Girl Student"
              width={260}
              height={360}
              className="relative z-10 md:translate-y-10"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="text-center w-full md:w-1/3 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#1B1F24]">
              Future Minds: Advanced <br /> AI Skills Program
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-600">
              Future Minds introduces students to cutting-edge AI technologies,
              Generative AI tools, and real project-based learning in a fun,
              beginner-friendly way.
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-3 text-base md:text-lg rounded-xl shadow">
              Enroll Now – ₹4,999 →
            </button>
          </div>

          {/* RIGHT — BOY */}
          <div className="relative w-full md:w-1/3 flex justify-center">
            <div className="absolute bottom-0 w-[220px] h-[220px] md:w-[260px] md:h-[260px] bg-[#4462FF] rounded-xl -z-10"></div>
            <Image
              src="/assets/school/Hero right.png"
              alt="Boy Student"
              width={260}
              height={360}
              className="relative z-10 md:-translate-y-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

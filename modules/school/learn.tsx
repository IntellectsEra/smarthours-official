
import Image from "next/image";

export default function LearnSection() {
 
  const learnItems = [
    {
      title: "Content Generation",
      icon: "/assets/school/icons/backlog 1.png",
      border: "#03594E",
      bg: "#F0F4F5",
    },
    {
      title: "Image & Video Gen",
      icon: "/assets/school/icons/content 1.png",
      border: "#2F57EF",
      bg: "#ECEBFF",
    },
    {
      title: "Presentation with AI",
      icon: "/assets/school/icons/presentation 1.png",
      border: "#FF4D4F",
      bg: "#FFEBEC",
    },
    {
      title: "Capstone Projects",
      icon: "/assets/school/icons/content-writing 1.png",
      border: "#92AF12",
      bg: "#FFF9E8",
    },
    {
      title: "Generative AI",
      icon: "/assets/school/icons/ai 1.png",
      border: "#3D97FE",
      bg: "#E9F3FE",
    },
    {
      title: "AI for Coding",
      icon: "/assets/school/icons/code 1.png",
      border: "#8E56FF",
      bg: "#F7F3FF",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-6 md:px-12">
        <div className="section-inner max-w-6xl mx-auto py-16">

         
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1F2432] mb-12">
            What They'll Learn in the <br /> Future Minds Program
          </h2>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border-4 p-8 flex flex-col items-center text-center"
                style={{
                  borderColor: item.border,
                  backgroundColor: item.bg,
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mb-6"
                />

                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="bg-[#2D4AF1] hover:bg-blue-700 text-white text-lg font-semibold px-10 py-3 rounded-xl shadow flex items-center gap-2"
            >
              Enroll Now – ₹4,999 →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

import {
  Gauge,
  Presentation,
  MonitorPlay,
  UserRoundCheck,
} from "lucide-react";

export default function StatsSection() {

  const stats = [
    {
      label: "10 – 17",
      description: "Suitable for these ages",
      icon: Gauge,
    },
    {
      label: "13+",
      description: "AI Tools Covered",
      icon: Presentation,
    },
    {
      label: "Experts",
      description: "Led by Industry People",
      icon: MonitorPlay,
    },
    {
      label: "100+",
      description: "Total Students Enrolled",
      icon: UserRoundCheck,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#0A4DB3] to-[#063A8C]">
      <div className="container mx-auto px-6">
        <div className="section-inner max-w-7xl mx-auto">

          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              divide-y
              sm:divide-y-0
              sm:divide-x
              divide-white/20
            "
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 py-8 px-6 text-white"
                >
                
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-white/15 rounded-full"></div>
                   <Icon className="relative w-14 h-14 lg:w-16 lg:h-16" />

                  </div>

                 
                  <div>
                    <p className="text-3xl font-semibold">{item.label}</p>
                    <p className="opacity-80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

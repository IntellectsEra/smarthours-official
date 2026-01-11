'use client';

type InternshipPlan = {
  week: string;
  title: string;
  desc: string;
};

type InternshipPlanSectionProps = {
  data?: InternshipPlan[];
};

export const InternshipPlanSection = ({ data = [] }: InternshipPlanSectionProps) => {
  if (data.length === 0) {
    return (
      <section className="py-24 bg-background text-center text-muted-foreground">
        <p>Internship schedule will be available soon.</p>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-inner max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            6-Week Learning Path
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
            Structured curriculum based on your selected program
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-white/5 border border-border rounded-2xl p-7 shadow hover:shadow-lg transition"
              >
                {/*  Gradient Bar */}
                <div className="absolute top-0 left-0 w-full h-[4px] rounded-t-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />

                {/* Week Bubble */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                    {item.week.replace('Week ', '')}
                  </div>
                  <span className="text-xs uppercase font-semibold text-muted-foreground">
                    {item.week}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

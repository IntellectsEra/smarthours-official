'use client';

import {
  BookOpen,
  Zap,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

export function WhoShouldApplySection({
  data,
}: {
  data: string[];
}) {
  const icons = [BookOpen, Zap, Briefcase, TrendingUp];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="section-inner max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
            Who This Internship Is For
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={index}
                  className="flex items-start gap-5 p-8 rounded-2xl 
                  bg-white/5 border border-white/10 
                  hover:border-blue-500/50 transition"
                >
                  <div className="p-3 rounded-xl bg-blue-500/15 text-blue-500">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This program is designed for {item.toLowerCase()} who want to become career-ready with AI skills.
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

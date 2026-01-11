'use client';

import {
  Award,
  Code,
  Users,
  Briefcase,
  Zap,
} from 'lucide-react';

type CompletionBenefitsSectionProps = {
  data: string[];
};

export const CompletionBenefitsSection = ({
  data,
}: CompletionBenefitsSectionProps) => {
  if (!data || data.length === 0) return null;

  const icons = [Award, Zap, Code, Briefcase, Users];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="section-inner max-w-7xl mx-auto">

         
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-14">
            What You Get on Completion
          </h2>

          {/*CARDS GRID */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {data.map((item, i) => {
              const Icon = icons[i % icons.length];

              return (
                <div
                  key={i}
                  className="relative rounded-2xl p-6
                  bg-gradient-to-br from-[#0d1025] via-[#14113a] to-[#1a0f3f]
                  border border-[#2b2f55] hover:border-[#6a6cff]
                  transition-all duration-300 shadow-[0_0_25px_#000]"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl bg-[#1f3b7a] flex items-center justify-center mb-4">
                    <Icon className="text-[#7aa2ff]" size={22} />
                  </div>

                  
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {item}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    You will receive this benefit after successful program completion.
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

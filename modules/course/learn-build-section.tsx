"use client";

import { BookOpen, Zap, Sparkles, Award } from "lucide-react";

type LearnBuildItem = string;

export const LearnBuildSection = ({ data }: { data: LearnBuildItem[] }) => {
  if (!data || data.length === 0) return null;

  const icons = [BookOpen, Zap, Sparkles, Award];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-inner max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What You&apos;ll Learn & Build
            </h2>
            <p className="text-muted-foreground text-lg">
              Skills and projects based on your selected program
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {data.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div key={index} className="flex items-start gap-5">
                  <div className="w-16 h-14 min-w-13 min-h-11 flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item}</h3>
                    <p className="text-muted-foreground">
                      This module focuses on {item.toLowerCase()} with hands-on
                      practice.
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
};

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ArrowUpRight, CalendarClock, Award, MonitorPlay } from "lucide-react";

import { CourseData } from "@/types/course";

export default function CourseCard({ course }: { course: CourseData }) {
  const active = course.status === "active";

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group overflow-hidden rounded-2xl border bg-white transition-all

      ${
        active
          ? "border-blue-200 hover:border-blue-500 hover:shadow-xl"
          : "border-slate-200 opacity-90 hover:opacity-100"
      }
      `}
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={course.courseBanner}
          alt={course.courseTitle}
          fill
          className={`object-cover transition duration-500 group-hover:scale-105

          ${active ? "" : "brightness-90 grayscale-[20%]"}
          `}
        />

        {/* Badge */}

        <div
          className={`absolute top-4 left-4 rounded-full px-4 py-1 text-xs font-semibold

          ${active ? "bg-green-500 text-white" : "bg-violet-600 text-white"}
          `}
        >
          {active ? "Enrollment Open" : "Registration Closed"}
        </div>
      </div>

      {/* Body */}

      <div className="p-5 space-y-5">
        <h3 className="text-xl font-bold leading-snug text-gray-900">
          {course.courseTitle}
        </h3>

        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex flex-col items-center gap-1 rounded-lg bg-slate-50 py-3">
            <CalendarClock size={18} />

            <span>{course.hero.info.duration}</span>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-lg bg-slate-50 py-3">
            <Award size={18} />

            <span>Certificate</span>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-lg bg-slate-50 py-3">
            <MonitorPlay size={18} />

            <span>Online</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 line-clamp-3">
          {course.hero.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className={`font-semibold

            ${active ? "text-blue-600" : "text-violet-600"}
            `}
          >
            {active ? "Explore Program" : "Registration will open soon"}
          </span>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-white

            ${active ? "bg-blue-600" : "bg-violet-600"}
            `}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SectionTitlebar from "@/common/section-titlebar";
import CourseCard from "@/common/course-card";

import { courses } from "@/data/program";
import { CourseData } from "@/types/course";

export default function Courses() {
  const headingId = "explore-courses-title";

  const activeCourses = courses.filter((course) => course.status === "active");

  const inactiveCourses = courses.filter(
    (course) => course.status === "inactive",
  );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="explore-courses"
      className="py-12 lg:py-16"
      aria-labelledby={headingId}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between">
            <SectionTitlebar
              title="Explore Our Programs"
              description="Industry-ready programs designed to accelerate your career."
              align="left"
            />

            <Link href="/enroll">
              <Button className="hidden md:flex">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <div className="flex mb-2">
              <TabsList
                className="
      h-16!
      rounded-full
      bg-white/80
      backdrop-blur-xl
      border
      border-gray-200
      shadow-lg
      p-2
      gap-2
    "
              >
                <TabsTrigger
                  value="active"
                  className="
        rounded-full
        px-8
        h-12
        text-base
        font-semibold
        transition-all
        duration-300
        data-[state=active]:bg-gradient-to-r
        data-[state=active]:from-blue-600
        data-[state=active]:to-indigo-600
        data-[state=active]:text-white
        data-[state=active]:shadow-lg
        hover:bg-gray-100
      "
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Live Programs
                  <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-sm">
                    {activeCourses.length}
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="inactive"
                  className="
        rounded-full
        px-8
        h-12
        text-base
        font-semibold
        transition-all
        duration-300
        data-[state=active]:bg-gradient-to-r
        data-[state=active]:from-red-500
        data-[state=active]:to-orange-500
        data-[state=active]:text-white
        data-[state=active]:shadow-lg
        hover:bg-gray-100
      "
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Registration Closed
                  <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-sm">
                    {inactiveCourses.length}
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ACTIVE */}

            <TabsContent value="active">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              >
                {activeCourses.map((course: CourseData) => (
                  <motion.div key={course.slug} variants={cardVariants}>
                    <Link href={`/program/${course.slug}`}>
                      <CourseCard course={course} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* COMING SOON */}

            <TabsContent value="inactive">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              >
                {inactiveCourses.map((course: CourseData) => (
                  <motion.div key={course.slug} variants={cardVariants}>
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

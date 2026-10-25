import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  BriefcaseBusiness,
  Palette,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const learningPaths = [
  {
    number: "01",
    title: "Digital & Technology",
    description:
      "Web development, software, data, AI and other digital skills.",
    icon: Code2,
    accent: "text-violet-600",
    line: "bg-violet-500",
    iconBg: "bg-violet-100",
  },
  {
    number: "02",
    title: "Business & Professional",
    description:
      "Project management, digital marketing, business operations and other professional skills.",
    icon: BriefcaseBusiness,
    accent: "text-orange-600",
    line: "bg-orange-500",
    iconBg: "bg-orange-100",
  },
  {
    number: "03",
    title: "Creative Skills",
    description:
      "Graphic design, video editing, content creation and other creative disciplines.",
    icon: Palette,
    accent: "text-emerald-700",
    line: "bg-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    number: "04",
    title: "Emerging Skills",
    description:
      "New and developing areas of knowledge and capability as opportunities evolve.",
    icon: Sparkles,
    accent: "text-blue-600",
    line: "bg-blue-500",
    iconBg: "bg-blue-100",
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="learning-paths"
      className="relative isolate overflow-hidden bg-[#FBF8F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Section introduction */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start"
          >
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-violet-700 sm:text-sm">
              <span className="h-px w-8 bg-violet-500" />
              LEARNING PATHS
            </span>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#20231F] sm:text-5xl lg:text-6xl">
              Choose What You Want to Learn
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#62675F] sm:text-lg">
              Explore practical learning paths designed around skills that can
              be applied beyond the classroom.
            </p>

            <motion.a
              href="/programs"
              whileHover={shouldReduceMotion ? undefined : { x: 5 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#252922] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F6EF]"
            >
              Explore All Programs
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>

            <div
              aria-hidden="true"
              className="mt-12 hidden h-px w-32 bg-gradient-to-r from-violet-400 via-orange-300 to-transparent lg:block"
            />
          </motion.div>

          {/* Learning path list */}
          <div className="divide-y divide-[#D9DED3]">
            {learningPaths.map((path, index) => {
              const Icon = path.icon;

              return (
                <motion.article
                  key={path.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className="group relative py-7 first:pt-0 last:pb-0 sm:py-8"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span
                      className={`mt-1 shrink-0 text-sm font-semibold tabular-nums ${path.accent}`}
                    >
                      {path.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold leading-snug tracking-tight text-[#252922] transition-colors duration-300 group-hover:text-violet-700 sm:text-2xl">
                          {path.title}
                        </h3>

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${path.iconBg} transition-transform duration-300 ${
                            shouldReduceMotion
                              ? ""
                              : "group-hover:-translate-y-1 group-hover:rotate-3"
                          }`}
                        >
                          <Icon
                            size={21}
                            strokeWidth={1.8}
                            className={path.accent}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#62675F] sm:text-base sm:leading-8">
                        {path.description}
                      </p>

                      <div className="mt-5 h-1 w-10 overflow-hidden rounded-full bg-[#E1E5DC]">
                        <div
                          className={`h-full w-full origin-left rounded-full ${path.line} transition-transform duration-500 ${
                            shouldReduceMotion
                              ? ""
                              : "scale-x-50 group-hover:scale-x-100"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
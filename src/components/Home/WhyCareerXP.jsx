import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  BookOpenCheck,
  Route,
  FolderKanban,
  BadgeCheck,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Practical Learning",
    description:
      "Learn through activities designed around application, not just theory.",
    icon: BookOpenCheck,
    color: "text-sky-700",
    iconBackground: "bg-sky-100",
  },
  {
    number: "02",
    title: "Guided Experience",
    description:
      "Understand how tasks, projects and workflows are approached with guidance along the way.",
    icon: Route,
    color: "text-violet-700",
    iconBackground: "bg-violet-100",
  },
  {
    number: "03",
    title: "Real Project Exposure",
    description:
      "Where suitable, apply your skills by contributing to meaningful projects.",
    icon: FolderKanban,
    color: "text-emerald-700",
    iconBackground: "bg-emerald-100",
  },
  {
    number: "04",
    title: "Evidence of Contribution",
    description:
      "Build a record of practical work and contributions that can demonstrate what you have actually done.",
    icon: BadgeCheck,
    color: "text-orange-700",
    iconBackground: "bg-orange-100",
  },
  {
    number: "05",
    title: "Continuous Development",
    description:
      "Keep learning, applying and developing as your skills and experience grow.",
    icon: TrendingUp,
    color: "text-rose-700",
    iconBackground: "bg-rose-100",
  },
];

export default function WhyCareerXP() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="why-career-xp"
      className="relative isolate overflow-hidden bg-[#F0F7FA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 -z-10 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-sky-800 sm:text-sm">
            <span className="h-px w-8 bg-sky-600" />
            WHY CAREER XP
            <span className="h-px w-8 bg-sky-600" />
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-[#20272D] sm:text-5xl lg:text-6xl">
            More Than Another Online Course
          </h2>
        </motion.div>

        {/* Reasons */}
        <div className="relative mt-16 sm:mt-20">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-gradient-to-b from-sky-300 via-violet-300 to-rose-300 sm:block lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-5 sm:space-y-7">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.article
                  key={reason.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                  }}
                  className={`relative grid items-center gap-5 sm:grid-cols-[56px_1fr] sm:gap-7 lg:grid-cols-[1fr_72px_1fr] lg:gap-8 ${
                    isRight ? "lg:[&>div:first-child]:order-3" : ""
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="relative z-10 hidden sm:flex sm:h-14 sm:w-14 sm:items-center sm:justify-center sm:rounded-2xl sm:border sm:border-white sm:bg-white/80 sm:shadow-sm lg:col-start-2 lg:row-start-1 lg:mx-auto lg:h-16 lg:w-16">
                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      className={reason.color}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`group relative rounded-3xl border border-white/80 bg-white/65 p-6 shadow-[0_8px_30px_rgba(42,67,83,0.035)] transition-all duration-300 hover:border-sky-200 hover:bg-white hover:shadow-[0_16px_40px_rgba(42,67,83,0.07)] sm:p-7 lg:row-start-1 ${
                      isRight
                        ? "lg:col-start-3"
                        : "lg:col-start-1 lg:text-right"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-4 ${
                        isRight ? "" : "lg:flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:hidden ${reason.iconBackground}`}
                      >
                        <Icon
                          size={23}
                          strokeWidth={1.8}
                          className={reason.color}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div
                          className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${
                            isRight ? "" : "lg:flex-row-reverse"
                          }`}
                        >
                          <span
                            className={`text-xs font-bold tracking-[0.16em] ${reason.color}`}
                          >
                            {reason.number}
                          </span>

                          <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#27313A] sm:text-xl">
                            {reason.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-[#64717A] sm:text-base sm:leading-8">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Opposite-side decorative marker */}
                  <div
                    aria-hidden="true"
                    className={`hidden items-center lg:flex lg:row-start-1 ${
                      isRight
                        ? "lg:col-start-1 lg:justify-end"
                        : "lg:col-start-3 lg:justify-start"
                    }`}
                  >
                    <span className="h-px w-10 bg-gradient-to-r from-sky-300 to-transparent" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing accent */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 flex justify-center sm:mt-16"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-sky-400" />
            <span className="h-1.5 w-5 rounded-full bg-violet-400" />
            <span className="h-1.5 w-3 rounded-full bg-rose-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
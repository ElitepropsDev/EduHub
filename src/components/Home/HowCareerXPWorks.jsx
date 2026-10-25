import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  BookOpen,
  Target,
  GitBranch,
  Award,
  ArrowUpRight,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build useful knowledge and skills through structured learning designed around practical outcomes.",
    icon: BookOpen,
    color: "#7161D8",
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Put what you learn into practice through exercises, assignments and real guided activities.",
    icon: Target,
    color: "#138B9B",
  },
  {
    number: "03",
    title: "Contribute",
    description:
      "Where suitable, learners can contribute to real projects and practical tasks under guidance.",
    icon: GitBranch,
    color: "#9660C8",
  },
  {
    number: "04",
    title: "Gain Experience",
    description:
      "Develop a better understanding of how work is actually carried out while building evidence of practical contribution and experience.",
    icon: Award,
    color: "#38835A",
  },
];

export default function HowCareerXPWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="relative isolate overflow-hidden bg-[#F3F6EF] bg-violet-300/20 px-5 py-20 text-[#171722] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-300/20 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-200/30 blur-[130px]" />

        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-100/30 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center sm:mb-24"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#7161D8] sm:text-sm">
            HOW CAREER XP WORKS
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            From Learning{" "}
            <span className="bg-gradient-to-r from-[#7161D8] via-[#9A65BD] to-[#D8874C] bg-clip-text text-transparent">
              to Experience
            </span>
          </h2>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#7161D8] via-[#B17BC2] to-[#E6A16B]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-[#7161D8]/50 via-[#55A7A6]/60 to-[#38835A]/50 md:block"
          />

          {/* Mobile connecting line */}
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-[27px] top-7 w-px bg-gradient-to-b from-[#7161D8]/50 via-[#55A7A6]/60 to-[#38835A]/50 md:hidden"
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-7 lg:gap-10">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.number}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 24 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className="relative flex gap-5 md:flex-col md:gap-0"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white/90 shadow-[0_4px_20px_rgba(35,28,60,0.07)] md:mb-9">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      style={{ color: stage.color }}
                    />

                    <span
                      className="absolute -right-1 -top-1 h-3 w-3 rounded-full ring-4 ring-[#FBF8F3]"
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1 pb-2 md:pb-0">
                    <p
                      className="mb-3 text-sm font-semibold tracking-[0.2em]"
                      style={{ color: stage.color }}
                    >
                      {stage.number}
                    </p>

                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#171722] sm:text-3xl md:min-h-[4.5rem] lg:text-[1.7rem]">
                      {stage.title}
                    </h3>

                    <p className="max-w-sm text-base leading-7 text-[#62616B]">
                      {stage.description}
                    </p>

                    <div
                      className="mt-6 h-px w-12"
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>

                  {/* Desktop arrow */}
                  {index < stages.length - 1 && (
                    <ArrowUpRight
                      aria-hidden="true"
                      size={17}
                      className="absolute right-0 top-[19px] hidden text-[#A6A1B0] md:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
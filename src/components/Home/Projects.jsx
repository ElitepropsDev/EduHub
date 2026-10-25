import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Megaphone,
  Palette,
  Clapperboard,
  Database,
  Users,
  ArrowUpRight,
} from "lucide-react";

const projectAreas = [
  {
    name: "Web Development",
    icon: Code2,
    color: "text-violet-700",
    background: "bg-violet-100",
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    color: "text-emerald-700",
    background: "bg-emerald-100",
  },
  {
    name: "Graphic Design",
    icon: Palette,
    color: "text-orange-700",
    background: "bg-orange-100",
  },
  {
    name: "Content & Media",
    icon: Clapperboard,
    color: "text-rose-700",
    background: "bg-rose-100",
  },
  {
    name: "Data & Technology",
    icon: Database,
    color: "text-blue-700",
    background: "bg-blue-100",
  },
  {
    name: "Project Management",
    icon: Users,
    color: "text-teal-700",
    background: "bg-teal-100",
  },
];

export default function Projects() {
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
      id="projects"
      className="relative isolate overflow-hidden bg-[#F7F4FB] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-violet-700 sm:text-sm">
              <span className="h-px w-8 bg-violet-500" />
              PROJECTS
            </span>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#20231F] sm:text-5xl lg:text-6xl">
              Work on Something Meaningful
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#626675] sm:text-lg">
              Learning becomes different when there is something real to
              contribute to.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#626675] sm:text-base sm:leading-8">
              Career XP projects give learners opportunities, where
              appropriate, to apply their skills within practical project
              environments and understand how ideas move from planning to
              execution.
            </p>

            <div
              aria-hidden="true"
              className="mt-8 h-1.5 w-32 rounded-full bg-gradient-to-r from-violet-400 to-emerald-300"
            />
          </motion.div>

          {/* Visual illustration */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-[3rem] bg-violet-200/50 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/70 p-4 shadow-[0_24px_80px_rgba(75,55,110,0.10)] sm:p-6">
              <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-emerald-200/50 blur-2xl" />

              <div className="relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EAE3F8] via-[#F7F2FA] to-[#DDEFE5] p-6 sm:min-h-[350px] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                    <Code2
                      size={30}
                      strokeWidth={1.7}
                      className="text-violet-700"
                    />
                  </div>

                  <div className="rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-medium text-[#555568] shadow-sm">
                    Learn by doing
                  </div>
                </div>

                <div className="relative mx-auto my-8 flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
                  <div className="absolute inset-0 rounded-full border border-violet-300/60" />
                  <div className="absolute inset-3 rounded-full border border-dashed border-emerald-400/70" />
                  <div className="absolute inset-6 rounded-full bg-white/70 shadow-inner" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[#292534] text-white shadow-xl sm:h-24 sm:w-24">
                    <Code2 size={42} strokeWidth={1.5} />
                  </div>

                  <div className="absolute -right-1 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
                    <Users size={20} />
                  </div>

                  <div className="absolute -bottom-1 -left-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 shadow-sm">
                    <Palette size={20} />
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-700">
                      Career XP
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#292534] sm:text-xl">
                      Skills in action
                    </p>
                  </div>

                  <div className="flex -space-x-2">
                    <span className="h-8 w-8 rounded-full border-2 border-white bg-violet-200" />
                    <span className="h-8 w-8 rounded-full border-2 border-white bg-emerald-200" />
                    <span className="h-8 w-8 rounded-full border-2 border-white bg-orange-200" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project areas */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <h3 className="text-xl font-semibold tracking-tight text-[#292534] sm:text-2xl">
            Projects may involve areas such as:
          </h3>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.name}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.07,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-[#E7E1EF] bg-white/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-[0_12px_30px_rgba(75,55,110,0.07)] sm:gap-5 sm:p-5"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${area.background} transition-transform duration-300 ${
                      shouldReduceMotion ? "" : "group-hover:scale-105"
                    }`}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      className={area.color}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-sm font-medium leading-6 text-[#373744] sm:text-base">
                    {area.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing copy and CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex flex-col items-start gap-7 sm:mt-10"
        >
          <p className="max-w-3xl text-sm leading-7 text-[#626675] sm:text-base sm:leading-8">
            As our project network grows, learners will be able to discover the
            types of projects they can contribute to and the skills involved.
          </p>

          <motion.a
            href="/projects"
            whileHover={shouldReduceMotion ? undefined : { x: 5 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="group inline-flex items-center gap-3 rounded-full bg-[#292534] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F4FB]"
          >
            Explore Projects
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
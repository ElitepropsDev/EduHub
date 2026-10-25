import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Handshake,
  GraduationCap,
  ArrowUpRight,
  BriefcaseBusiness,
  BookOpen,
} from "lucide-react";

const partnerships = [
  {
    id: "project-partners",
    label: "FOR PROJECT PARTNERS",
    title: "Bring a Project. Create an Opportunity to Learn.",
    description:
      "Businesses, organisations, schools and professionals often have projects, tasks and challenges that can become valuable learning opportunities.",
    detail:
      "Career XP works with suitable partners to create practical project environments where learners can apply their skills while receiving appropriate guidance and supervision.",
    button: "Become a Project Partner",
    href: "/contact",
    icon: Handshake,
    secondaryIcon: BriefcaseBusiness,
    accent: "text-orange-700",
    iconBackground: "bg-orange-100",
    glow: "bg-orange-200/35",
    number: "01",
  },
  {
    id: "institutional-partners",
    label: "FOR INSTITUTIONS",
    title: "Extend Learning Beyond the Classroom",
    description:
      "Schools, universities, training organisations and other institutions can work with Career XP to give learners access to structured practical learning and project-based experiences.",
    detail: "",
    button: "Explore Institutional Partnerships",
    href: "/contact",
    icon: GraduationCap,
    secondaryIcon: BookOpen,
    accent: "text-violet-700",
    iconBackground: "bg-violet-100",
    glow: "bg-violet-200/35",
    number: "02",
  },
];

export default function Partnerships() {
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
      id="partnerships"
      className="relative isolate overflow-hidden bg-[#F2F0EC] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-orange-200/25 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-violet-200/25 blur-3xl"
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
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#6C6258] sm:text-sm">
            <span className="h-px w-8 bg-orange-500" />
            Partnerships
            <span className="h-px w-8 bg-violet-500" />
          </span>
        </motion.div>

        {/* Partnership pathways */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {partnerships.map((partnership, index) => {
            const Icon = partnership.icon;
            const SecondaryIcon = partnership.secondaryIcon;

            return (
              <motion.article
                key={partnership.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_12px_40px_rgba(50,43,35,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(50,43,35,0.08)] sm:p-8 lg:p-10"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full ${partnership.glow} blur-3xl transition-transform duration-500 ${
                    shouldReduceMotion ? "" : "group-hover:scale-125"
                  }`}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#777168] sm:text-xs">
                    <span
                      className={`h-2 w-2 rounded-full ${partnership.accent.replace(
                        "text-",
                        "bg-"
                      )}`}
                    />
                    {partnership.label}
                  </span>

                  <span className="text-sm font-medium tabular-nums text-[#A19A90]">
                    {partnership.number}
                  </span>
                </div>

                {/* Icon illustration */}
                <div className="relative mt-9 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[1.35rem] ${partnership.iconBackground} transition-transform duration-300 ${
                      shouldReduceMotion ? "" : "group-hover:rotate-3"
                    }`}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.7}
                      className={partnership.accent}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-[#D9D3CA]" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E9E4DC] bg-white text-[#82796D]">
                      <SecondaryIcon size={18} strokeWidth={1.7} />
                    </div>
                  </div>
                </div>

                <h2 className="relative mt-7 max-w-lg text-2xl font-semibold leading-tight tracking-tight text-[#282821] sm:text-3xl lg:text-[2.15rem]">
                  {partnership.title}
                </h2>

                <p className="relative mt-5 text-sm leading-7 text-[#6A675F] sm:text-base sm:leading-8">
                  {partnership.description}
                </p>

                {partnership.detail && (
                  <p className="relative mt-4 text-sm leading-7 text-[#6A675F] sm:text-base sm:leading-8">
                    {partnership.detail}
                  </p>
                )}

                <div className="relative mt-8 flex flex-1 items-end">
                  <a
                    href={partnership.href}
                    className={`group/link inline-flex max-w-full items-center gap-3 rounded-full px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      index === 0
                        ? "bg-[#302B25] hover:bg-orange-700 focus-visible:ring-orange-600"
                        : "bg-[#302B25] hover:bg-violet-700 focus-visible:ring-violet-600"
                    }`}
                  >
                    <span>{partnership.button}</span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>

                <div
                  aria-hidden="true"
                  className={`absolute bottom-0 left-8 right-8 h-1 origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100 sm:left-10 sm:right-10 ${
                    index === 0
                      ? "bg-orange-400"
                      : "bg-violet-400"
                  }`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Cpu,
  Database,
  Factory,
  GraduationCap,
  Layers3,
  Megaphone,
  Palette,
  Play,
  Settings2,
  Sparkles,
  Video,
  Wrench,
} from "lucide-react";
import assets from "../assets/assets";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const programGroups = [
  {
    title: "DIGITAL & TECHNOLOGY",
    number: "01",
    description: "Digital skills for a changing world.",
    color: "bg-[#E8F0FF]",
    accent: "text-[#355DCA]",
    image: assets.program_webdev,
    programs: [
      {
        title: "Web Development",
        description:
          "Learn how to design, build and deploy websites and web applications through structured learning and practical project work.",
        image: assets.program_webdev,
        icon: Code2,
      },
      {
        title: "Data & Analytics",
        description:
          "Develop practical data skills and learn how to work with information to support business and project decisions.",
        image: assets.program_datasci,
        icon: Database,
      },
      {
        title: "AI & Emerging Technology",
        description:
          "Build knowledge and practical capability in artificial intelligence and emerging technologies through guided learning and application.",
        image: assets.program_ai,
        icon: Cpu,
      },
    ],
  },
  {
    title: "BUSINESS & PROFESSIONAL SKILLS",
    number: "02",
    description: "Skills that help work move forward.",
    color: "bg-[#F1EAFE]",
    accent: "text-[#7850B7]",
    image: assets.program_pm,
    programs: [
      {
        title: "Project Management",
        description:
          "Develop practical project management skills and learn how projects are planned, coordinated, executed and delivered.",
        image: assets.program_pm,
        icon: ChartNoAxesCombined,
      },
      {
        title: "Digital Marketing",
        description:
          "Build practical skills in social media, digital campaigns, content strategy, SEO and online marketing.",
        image: assets.program_digitalmarketing,
        icon: Megaphone,
      },
      {
        title: "Business Operations",
        description:
          "Develop practical skills for managing processes, tasks, systems and day-to-day business activities.",
        image: assets.program_teaching,
        icon: BriefcaseBusiness,
      },
    ],
  },
  {
    title: "CREATIVE & MEDIA",
    number: "03",
    description: "Turn creative ideas into practical skills.",
    color: "bg-[#FCE9DF]",
    accent: "text-[#B65D35]",
    image: assets.program_uiux,
    programs: [
      {
        title: "Graphic Design",
        description:
          "Develop practical design skills for digital content, branding and professional communication.",
        image: assets.program_uiux,
        icon: Palette,
      },
      {
        title: "Video Editing",
        description:
          "Learn how to create and edit engaging video content for digital platforms and professional use.",
        image: assets.program_hero,
        icon: Video,
      },
      {
        title: "Content Creation",
        description:
          "Develop practical skills for planning, producing and managing digital content.",
        image: assets.program_digitalmarketing,
        icon: Layers3,
      },
    ],
  },
];

const industrialAreas = [
  {
    number: "01",
    title: "Engineering & Technical Operations",
    icon: Settings2,
  },
  {
    number: "02",
    title: "Industrial Maintenance",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Instrumentation & Control",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Facilities & Industrial Equipment",
    icon: Factory,
  },
  {
    number: "05",
    title: "Process, Production & Energy Services",
    icon: ChartNoAxesCombined,
  },
];

const participants = [
  {
    title: "University Students",
    description:
      "Explore a potential career field and gain insight into how professionals work in the industry.",
    icon: GraduationCap,
  },
  {
    title: "Graduates",
    description:
      "Complement your academic background with practical industry exposure.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Career Explorers",
    description:
      "Experience an industry first-hand before deciding whether it is the right direction for you.",
    icon: Sparkles,
  },
  {
    title: "Working Professionals",
    description:
      "Deepen your practical knowledge and gain exposure to relevant equipment, systems and technical environments.",
    icon: Settings2,
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build the knowledge and skills required for your chosen area.",
    icon: GraduationCap,
    color: "bg-[#E8F0FF]",
    accent: "text-[#355DCA]",
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Put what you learn into practice through exercises, assignments, practical tasks or guided activities.",
    icon: Code2,
    color: "bg-[#F1EAFE]",
    accent: "text-[#7850B7]",
  },
  {
    number: "03",
    title: "Experience",
    description:
      "Where an appropriate opportunity exists, apply your skills through projects or gain exposure to professional environments.",
    icon: Factory,
    color: "bg-[#FCE9DF]",
    accent: "text-[#B65D35]",
  },
];

const projectAreas = [
  "Web Development",
  "Digital Marketing",
  "Graphic Design",
  "Video & Content",
  "Data & Technology",
  "Project Management",
];

const Programs = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF8F3] text-[#10243E]">
      {/* HERO */}
      <section
        id="programs-hero"
        className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:px-20 lg:pt-28"
      >
        <div className="pointer-events-none absolute -right-36 -top-32 -z-10 h-[440px] w-[440px] rounded-full bg-[#DCE8F9] opacity-70 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-48 left-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#F5DCCB] opacity-60 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE2E8] bg-white/75 px-4 py-2 text-sm font-medium text-[#52647A] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#718C68]" />
              Career XP Programs
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Career XP Programs
              <span className="mt-2 block text-[#526DAA]">
                Learn Skills. Apply What You Learn.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#657184] sm:text-lg">
              Explore practical learning programmes designed to help you
              develop useful skills and apply them through guided activities,
              projects and experience opportunities.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#program-categories"
                className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#243D5B]"
              >
                Explore Programs
                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#how-programs-work"
                className="inline-flex min-h-14 items-center gap-2 rounded-full border border-[#D9DDE3] bg-white/70 px-6 py-4 text-sm font-semibold text-[#10243E] transition hover:border-[#10243E]"
              >
                <Play size={15} />
                See How It Works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[600px]"
          >
            <div className="absolute -left-3 top-12 h-24 w-24 rounded-full border border-[#D7C6B6] sm:-left-8 sm:h-32 sm:w-32" />
            <div className="absolute -bottom-5 -right-3 h-36 w-36 rounded-full bg-[#DDE8D7] sm:-right-8 sm:h-48 sm:w-48" />

            <div className="relative overflow-hidden rounded-[32px] bg-[#E8E9E5] shadow-[0_28px_80px_rgba(16,36,62,0.13)] sm:rounded-[40px]">
              <img
                src={assets.Hero}
                alt=""
                className="h-[330px] w-full object-cover sm:h-[440px] lg:h-[490px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 left-3 max-w-[265px] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:-left-7 sm:bottom-8 sm:max-w-[290px] sm:p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F0FF] text-[#355DCA]">
                  <Sparkles size={16} />
                </span>
              </div>
              <p className="text-sm font-semibold leading-6 text-[#10243E]">
                Learn the skill. Apply the skill.
              </p>
            </div>

            <div className="absolute -right-1 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10243E] text-white shadow-lg sm:-right-5 sm:top-10 sm:h-16 sm:w-16">
              <ArrowUpRight size={28} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAM INTRODUCTION */}
      <section
        id="program-categories"
        className="bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
          >
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#718C68]">
                OUR PROGRAMS
              </p>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Practical Learning for Different Goals
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-8 text-[#657184] sm:text-lg">
                Career XP offers programmes across digital, professional,
                creative and technical fields.
              </p>
              <p className="mt-4 text-base leading-8 text-[#657184] sm:text-lg">
                Every programme is built around a simple principle:
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-[#526DAA] sm:text-3xl">
                Learn the skill. Apply the skill.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#657184] sm:text-base">
                How that application happens depends on the programme. Some
                learners may apply their skills through guided exercises and
                projects, while others may have opportunities to contribute to
                practical projects or gain exposure to professional
                environments.
              </p>
            </div>
          </motion.div>

          {/* PROGRAMME CATEGORIES */}
          <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24">
            {programGroups.map((group, groupIndex) => (
              <motion.section
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={reveal}
                className="relative"
              >
                <div className="mb-8 flex flex-col justify-between gap-3 border-b border-[#E7E9EC] pb-5 sm:flex-row sm:items-end">
                  <div>
                    <p className={`mb-3 text-xs font-bold tracking-[0.18em] ${group.accent}`}>
                      {group.title}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {group.description}
                    </h3>
                  </div>
                  <span className="text-5xl font-semibold tracking-[-0.06em] text-[#E0E4E8] sm:text-6xl">
                    {group.number}
                  </span>
                </div>

                {groupIndex === 0 ? (
                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {group.programs.map((program, index) => {
                      const Icon = program.icon;
                      return (
                        <article
                          key={program.title}
                          className={`group overflow-hidden rounded-[26px] border border-[#E9E9E6] bg-[#FBF8F3] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,36,62,0.09)] ${
                            index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                          }`}
                        >
                          <div className="relative h-52 overflow-hidden bg-[#E8E9E5]">
                            <img
                              src={program.image}
                              alt=""
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/45 to-transparent" />
                            <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#355DCA] shadow-lg">
                              <Icon size={21} />
                            </span>
                          </div>
                          <div className="p-6 sm:p-7">
                            <h4 className="text-xl font-semibold tracking-tight">
                              {program.title}
                            </h4>
                            <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#657184]">
                              {program.description}
                            </p>
                            <a
                              href="/contact"
                              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#355DCA] transition-colors hover:text-[#10243E]"
                            >
                              Learn More
                              <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </a>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ) : groupIndex === 1 ? (
                  <div className="grid gap-4 lg:grid-cols-3">
                    {group.programs.map((program, index) => {
                      const Icon = program.icon;
                      return (
                        <article
                          key={program.title}
                          className="group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[26px] border border-[#E9E5EF] bg-[#F8F5FC] p-6 transition duration-300 hover:border-[#D6C8EA] hover:shadow-[0_18px_40px_rgba(83,57,122,0.08)] sm:p-8"
                        >
                          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#EDE4F9] transition-transform duration-500 group-hover:scale-125" />
                          <div className="relative">
                            <div className="mb-7 flex items-center justify-between">
                              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7850B7] shadow-sm">
                                <Icon size={22} />
                              </span>
                              <span className="text-sm font-semibold text-[#B3A6C8]">
                                0{index + 4}
                              </span>
                            </div>
                            <h4 className="max-w-[250px] text-2xl font-semibold tracking-tight">
                              {program.title}
                            </h4>
                            <p className="mt-3 text-sm leading-7 text-[#657184]">
                              {program.description}
                            </p>
                          </div>
                          <a
                            href="/contact"
                            className="relative mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#7850B7]"
                          >
                            Learn More
                            <ArrowRight size={16} />
                          </a>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#FCE9DF] sm:min-h-[360px]">
                      <img
                        src={group.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/65 via-[#10243E]/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#B65D35]">
                          <Palette size={23} />
                        </span>
                        <h4 className="max-w-sm text-2xl font-semibold text-white sm:text-3xl">
                          {group.title}
                        </h4>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {group.programs.map((program) => {
                        const Icon = program.icon;
                        return (
                          <article
                            key={program.title}
                            className="group flex flex-col rounded-[24px] border border-[#EEE7E1] bg-[#FBF8F3] p-6 transition duration-300 hover:border-[#E3C8B7] hover:shadow-[0_15px_35px_rgba(16,36,62,0.06)]"
                          >
                            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCE9DF] text-[#B65D35]">
                              <Icon size={21} />
                            </span>
                            <h4 className="text-lg font-semibold">
                              {program.title}
                            </h4>
                            <p className="mt-3 flex-1 text-sm leading-7 text-[#657184]">
                              {program.description}
                            </p>
                            <a
                              href="/contact"
                              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B65D35]"
                            >
                              Learn More
                              <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </a>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAL EXPOSURE */}
      <section className="relative overflow-hidden bg-[#10243E] px-5 py-20 text-white sm:px-10 sm:py-28 lg:px-20">
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#526DAA]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-48 left-0 h-[400px] w-[400px] rounded-full bg-[#718C68]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
          >
            <div>
              <p className="mb-5 text-xs font-bold tracking-[0.22em] text-[#B8C8ED]">
                INDUSTRIAL & TECHNICAL EXPOSURE
              </p>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                Experience the Industry First-Hand
              </h2>
              <div className="mt-7 space-y-5 text-sm leading-8 text-white/75 sm:text-base">
                <p>
                  Not everyone gets the opportunity to experience a
                  professional industrial environment before starting or
                  progressing in their career.
                </p>
                <p>
                  Some students want to explore a career before deciding where
                  to specialise. Some graduates complete their education
                  without gaining meaningful industry exposure. Others are
                  curious about a particular field and want to experience it
                  first-hand. Working professionals may also want to deepen
                  their practical technical knowledge.
                </p>
                <p>
                  Career XP creates structured opportunities for participants
                  to gain exposure to professional technical and industrial
                  environments through selected host organisations.
                </p>
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#10243E] transition hover:bg-[#E8F0FF]"
              >
                Explore Industrial Exposure Programs
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-5 sm:p-8">
              <div className="mb-7 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#B8C8ED]">
                  <Factory size={23} />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Industrial Exposure Programs
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Depending on the programme and host organisation,
                    participants may gain exposure to areas such as:
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {industrialAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.number}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.08] sm:px-5"
                    >
                      <span className="text-xs font-semibold text-[#AABCE2]">
                        {area.number}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-[#B8C8ED]">
                        <Icon size={19} />
                      </span>
                      <span className="flex-1 text-sm font-medium leading-6 text-white/90 sm:text-base">
                        {area.title}
                      </span>
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="mt-20 border-t border-white/15 pt-12 sm:mt-24 sm:pt-16"
          >
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Who Can Participate?
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {participants.map((participant, index) => {
                const Icon = participant.icon;
                return (
                  <article
                    key={participant.title}
                    className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:bg-white/[0.08] sm:p-6"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#B8C8ED]">
                        <Icon size={21} />
                      </span>
                      <span className="text-xs font-semibold text-white/35">
                        0{index + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold">
                      {participant.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {participant.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <p className="mt-7 max-w-4xl text-sm leading-7 text-white/60">
              The structure, duration, activities, level of participation and
              access available depend on the specific programme and host
              organisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW PROGRAMS WORK */}
      <section
        id="how-programs-work"
        className="bg-[#F0F4EE] px-5 py-20 sm:px-10 sm:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#718C68]">
              HOW OUR PROGRAMS WORK
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Learning With Application in Mind
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#657184] sm:text-lg">
              Career XP programmes are designed to help learners move from
              understanding a skill to using it.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-3 md:gap-0">
            <div className="absolute left-[16%] right-[16%] top-12 hidden border-t border-dashed border-[#C5D0C1] md:block" />

            {learningSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  className="relative flex flex-col items-center px-3 text-center sm:px-8"
                >
                  <div
                    className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-[30px] ${step.color} ${step.accent} shadow-sm`}
                  >
                    <Icon size={33} strokeWidth={1.7} />
                  </div>
                  <span className="mt-6 text-xs font-bold tracking-[0.2em] text-[#8A98A5]">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#657184]">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-[#657184]">
            Different programmes use different forms of application and
            experience.
          </p>

          <div className="mt-7 text-center">
            <a
              href="/#how-it-works"
              className="group inline-flex items-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#243D5B]"
            >
              See How Career XP Works
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT OPPORTUNITIES */}
      <section className="bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#718C68]">
              PROJECT OPPORTUNITIES
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Put Your Skills to Use
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#657184] sm:text-lg">
              Career XP creates opportunities for suitable learners to
              contribute to practical projects and experience how work is
              planned, executed and delivered.
            </p>
            <p className="mt-6 text-sm font-semibold text-[#10243E]">
              Projects may involve areas such as:
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {projectAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-3 border-b border-[#E8EAEC] py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F0FF] text-xs font-bold text-[#355DCA]">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium text-[#34465C]">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#657184]">
              Project participation depends on the learner&apos;s skills,
              programme, project requirements and available opportunities.
            </p>

            <a
              href="/projects"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#243D5B]"
            >
              Explore Projects
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#E7EDE2] sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#F6E3D8] sm:-bottom-7 sm:-left-7 sm:h-36 sm:w-36" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#E8E9E5]">
              <img
                src={assets.program_webdev}
                alt=""
                loading="lazy"
                className="h-[350px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/55 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPANDING PROGRAMS */}
      <section className="bg-[#F7F4FB] px-5 py-16 sm:px-10 sm:py-20 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto grid max-w-7xl gap-7 rounded-[30px] border border-[#E9E2F1] bg-white/70 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:p-14"
        >
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#7850B7]">
              EXPANDING PROGRAMS
            </p>
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              More Skills. More Opportunities.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[#657184]">
              Career XP will continue to introduce new programmes as new
              skills, project opportunities and industry partnerships become
              available.
            </p>
            <p className="mt-4 text-base leading-8 text-[#657184]">
              Our catalogue is designed to grow with the needs of learners and
              the opportunities available to them.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section
        id="programs-cta"
        className="relative isolate overflow-hidden bg-[#FBF8F3] px-5 py-20 sm:px-10 sm:py-28 lg:px-20"
      >
        <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-[#DCE8F9] opacity-70 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-[#F5DCCB] opacity-70 blur-[100px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#526DAA] shadow-sm">
            <Sparkles size={26} />
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
            Choose Your Learning Path
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#657184] sm:text-lg">
            Find a programme that matches the skills you want to develop, the
            experience you want to gain or the field you want to explore.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#program-categories"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#10243E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#243D5B]"
            >
              Explore Programs
              <ArrowRight size={17} />
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#D7DCE2] bg-white/80 px-7 py-4 text-sm font-semibold text-[#10243E] transition hover:border-[#10243E]"
            >
              Contact Career XP
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Programs;
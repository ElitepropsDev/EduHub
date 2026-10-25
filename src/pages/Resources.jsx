
import React from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import assets from "../assets/assets";

const categories = [
  {
    number: "01",
    title: "Career Guides",
    description:
      "Practical advice for CVs, interviews, career planning and professional development.",
    image: assets.resources1,
    icon: BookOpen,
    background: "bg-[#F3F6EF]",
    accent: "#526B43",
  },
  {
    number: "02",
    title: "Industry Insights",
    description:
      "Understand different industries, roles and career paths before you commit to them.",
    image: assets.partnership,
    icon: Lightbulb,
    background: "bg-[#F7F4FB]",
    accent: "#7960A2",
  },
  {
    number: "03",
    title: "Learning Resources",
    description:
      "Useful learning materials, tools and recommendations to help you build your skills.",
    image: assets.program_teaching,
    icon: GraduationCap,
    background: "bg-[#F0F7FA]",
    accent: "#3D7187",
  },
  {
    number: "04",
    title: "Opportunities",
    description:
      "Selected internships, competitions, scholarships and other opportunities worth exploring.",
    image: assets.work_mobile_app,
    icon: BriefcaseBusiness,
    background: "bg-[#FCF1E9]",
    accent: "#B5683D",
  },
];

const featuredItems = [
  {
    number: "01",
    title: "Career Guides",
    image: assets.resources1,
    icon: BookOpen,
    background: "bg-[#E8EEDF]",
    accent: "#526B43",
  },
  {
    number: "02",
    title: "Industry Insights",
    image: assets.program_ai,
    icon: Lightbulb,
    background: "bg-[#EAE2F5]",
    accent: "#7960A2",
  },
  {
    number: "03",
    title: "Learning Resources",
    image: assets.program_teaching,
    icon: GraduationCap,
    background: "bg-[#DCECF2]",
    accent: "#3D7187",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Resources() {
  const scrollToFeatured = () => {
    document.getElementById("featured-resources")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-[#FBF8F3] text-[#10243E]">
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#EAE2F5]/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#E2EBD9]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-10"
          >

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Resources for Your{" "}
              <span className="font-serif font-normal italic text-[#4933c5]">
                Career Journey
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5D6875] sm:text-lg sm:leading-9">
              Practical guides, useful tools, industry insights and selected
              opportunities to help you make better career decisions and keep
              moving forward.
            </p>

            <button
              type="button"
              onClick={scrollToFeatured}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#263F5C] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8A704F] focus:ring-offset-4"
            >
              Featured Resources
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative mr-3 overflow-hidden rounded-[2rem] sm:mr-5">
              <img
                src={assets.resources1}
                alt="Learning resources"
                className="h-[330px] w-full object-cover sm:h-[440px] lg:h-[510px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/80 via-[#10243E]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                  <BookOpen size={23} />
                </div>
                <div className="h-1 w-12 rounded-full bg-[#E8C8A9]" />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-1 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E8C8A9] text-[#10243E] shadow-xl sm:-right-2 sm:h-24 sm:w-24">
              <ArrowDownRight size={34} strokeWidth={1.5} />
            </div>

            <div className="absolute -left-4 -top-4 -z-0 h-24 w-24 rounded-full border border-[#D8CBB9] sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
          </motion.div>
        </div>
      </section>

      {/* RESOURCE CATEGORIES */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.09 }}
                  className="group overflow-hidden rounded-[1.6rem] border border-[#10243E]/[0.06] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#10243E]/[0.07]"
                >
                  <div className="relative h-48 overflow-hidden sm:h-52">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/45 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#10243E]">
                      {item.number}
                    </span>

                    <div
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm"
                      style={{ color: item.accent }}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className={`flex h-full flex-col p-6 ${item.background}`}>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#5D6875]">
                      {item.description}
                    </p>

                    <div className="mt-6 flex justify-end">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#10243E]/10 transition-all duration-300 group-hover:bg-[#10243E] group-hover:text-white"
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED RESOURCES */}
      <section
        id="featured-resources"
        className="scroll-mt-24 bg-[#F3F1EB] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-10 flex items-end justify-between gap-5 sm:mb-14"
          >
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Featured Resources
            </h2>
            <div className="hidden h-px max-w-xs flex-1 bg-[#10243E]/15 md:block" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-12">
            {featuredItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className={`group overflow-hidden rounded-[1.75rem] bg-white ${
                    index === 0 ? "md:col-span-7" : "md:col-span-5"
                  }`}
                >
                  <div
                    className={`relative h-56 overflow-hidden sm:h-64 ${
                      index === 0 ? "md:h-80" : "md:h-64"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/60 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#10243E]">
                      {item.number}
                    </span>
                    <div
                      className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white"
                      style={{ color: item.accent }}
                    >
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-6 sm:p-7">
                    <div
                      className={`h-10 w-1 shrink-0 rounded-full`}
                      style={{ backgroundColor: item.accent }}
                    />
                    <h3 className="text-lg font-semibold sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#10243E] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -right-5 -top-10 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />
          <div className="pointer-events-none absolute -bottom-24 left-[35%] h-56 w-56 rounded-full bg-[#8A704F]/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-3xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#E8C8A9]">
                <BriefcaseBusiness size={23} />
              </div>

              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Looking for an opportunity?
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                We occasionally share selected internships, industry exposure
                opportunities, competitions and other opportunities relevant
                to our learners.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <a
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#E8C8A9] px-7 py-4 text-sm font-semibold text-[#10243E] transition-all duration-300 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#10243E]"
              >
                Explore Opportunities
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

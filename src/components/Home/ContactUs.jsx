import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export default function ContactUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact-us"
      className="relative isolate overflow-hidden bg-[#FBF8F3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-300/25 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-orange-200/30 blur-[100px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[2rem] border border-[#E8E0D6] bg-white/75 px-6 py-12 shadow-[0_30px_100px_rgba(64,48,30,0.07)] backdrop-blur-sm sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* Decorative ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-violet-300/30 sm:-right-12 sm:-top-32 sm:h-96 sm:w-96"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 top-16 h-48 w-48 rounded-full border border-orange-300/25 sm:right-8 sm:top-12 sm:h-64 sm:w-64"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Main copy */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-violet-200 bg-violet-50 px-4 py-2.5">
                <Sparkles
                  size={15}
                  className="text-violet-600"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-800 sm:text-xs">
                  START YOUR CAREER XP JOURNEY
                </span>
              </div>

              <h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-[#252720] sm:text-5xl lg:text-7xl">
                Don't Just Learn a Skill.
                <span className="mt-2 block bg-gradient-to-r from-violet-700 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Learn How to Use It.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#66665F] sm:text-base sm:leading-8 lg:text-lg">
                Explore a learning path, develop your skills and discover
                opportunities to gain practical experience along the way.
              </p>

              {/* Action buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <motion.a
                  href="/programs"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F3]"
                >
                  Explore Programs
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#D9D2C8] bg-white/70 px-6 py-4 text-sm font-semibold text-[#252720] transition-colors duration-300 hover:border-violet-300 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F3]"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Contact Us
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              </div>
            </div>

            {/* Decorative visual */}
            <motion.div
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : 0.15,
              }}
              className="relative mx-auto flex h-48 w-48 items-center justify-center sm:h-60 sm:w-60 lg:h-64 lg:w-64"
              aria-hidden="true"
            >
              <div className="absolute inset-0 rounded-full border border-violet-300/40" />

              <div className="absolute inset-5 rounded-full border border-dashed border-orange-300/60" />

              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-violet-400/30 to-orange-300/30 blur-xl" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/80 bg-white/80 shadow-[0_0_60px_rgba(139,92,246,0.12)] backdrop-blur-md sm:h-32 sm:w-32">
                <Sparkles
                  size={52}
                  strokeWidth={1.2}
                  className="text-violet-600"
                />
              </div>

              <div className="absolute right-1 top-7 h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.4)] sm:right-3 sm:top-10" />

              <div className="absolute bottom-7 left-1 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.5)] sm:bottom-10 sm:left-3" />

              <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-amber-400 sm:left-8 sm:top-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
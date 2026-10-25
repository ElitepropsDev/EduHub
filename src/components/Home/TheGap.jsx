import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  BookOpen,
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
} from 'lucide-react'

const TheGap = () => {
  const shouldReduceMotion = useReducedMotion()

  const steps = [
    { icon: BookOpen, color: '#7C3AED', position: 'left-[2%] top-[12%]' },
    { icon: Code2, color: '#4F46E5', position: 'left-[39%] top-[0%]' },
    { icon: BriefcaseBusiness, color: '#EA580C', position: 'right-[0%] top-[17%]' },
  ]

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="the-gap"
      className="relative isolate w-full overflow-hidden bg-[#FBF8F3] px-5 py-20 text-[#202139] dark:bg-[#11111B] dark:text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-24"
    >
      {/* Warm editorial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-orange-300/15 blur-[110px] dark:bg-orange-500/[0.07]" />

        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-[120px] dark:bg-violet-500/[0.10]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">

        {/* Editorial text */}
        <div className="relative z-10 max-w-2xl">

          {/* Section label */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-7 inline-flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-gradient-to-r from-violet-600 to-orange-500" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300 sm:text-sm">
              THE GAP WE'RE SOLVING
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-bold leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl xl:text-[66px]"
          >
            Learning a Skill Is Only the{' '}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Beginning
            </span>
          </motion.h2>

          {/* Supporting content */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.16 }}
            className="mt-8 space-y-5 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-8"
          >
            <p>
              Completing a course does not automatically prepare someone for the realities of applying that skill.
            </p>

            <p>
              Many learners understand the theory, complete exercises and even build portfolio projects, yet still lack the confidence and experience that comes from working through real tasks, workflows and challenges.
            </p>

            {/* Visual text divider */}
            <div
              aria-hidden="true"
              className="flex items-center gap-2 py-1"
            >
              <span className="h-1 w-12 rounded-full bg-violet-600" />
              <span className="h-1 w-5 rounded-full bg-orange-400" />
            </div>

            <p className="text-gray-700 dark:text-gray-200">
              Career XP is designed to bridge that gap.
            </p>

            <p>
              We combine structured learning with practical application and, where suitable, opportunities to contribute to meaningful projects under guidance.
            </p>
          </motion.div>
        </div>

        {/* Visual learning progression — no cards */}
        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 28,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: 'easeOut',
          }}
          className="hidden md:block relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          {/* Large abstract visual */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-300/40 via-indigo-200/30 to-orange-200/40 blur-3xl dark:from-violet-600/20 dark:via-indigo-600/10 dark:to-orange-500/10"
          />

          <div className="relative aspect-[4/4.2] w-full">

            {/* Decorative orbital rings */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[54%] h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/50 dark:border-violet-400/20"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[54%] h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-300/50 dark:border-orange-400/20"
            />

            {/* Central abstract glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[54%] h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/15 to-orange-400/20 blur-xl"
            />

            {/* Connecting path */}
            <svg
              viewBox="0 0 500 430"
              fill="none"
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gapPathGradient" x1="40" y1="300" x2="460" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7C3AED" />
                  <stop offset="0.55" stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#EA580C" />
                </linearGradient>
              </defs>

              <path
                d="M 48 155 C 120 80, 155 265, 245 205 S 360 65, 440 135"
                stroke="url(#gapPathGradient)"
                strokeWidth="2.5"
                strokeDasharray="7 8"
                strokeLinecap="round"
              />

              <path
                d="M 428 119 L 440 135 L 420 138"
                stroke="#EA580C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Learning stages */}
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.position}
                  initial={{
                    opacity: 0,
                    scale: shouldReduceMotion ? 1 : 0.8,
                  }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : 0.2 + index * 0.15,
                  }}
                  className={`absolute ${step.position} z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/90 bg-white/90 shadow-[0_12px_35px_rgba(40,35,90,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-[#20202D]/90 sm:h-[78px] sm:w-[78px]`}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14"
                    style={{
                      backgroundColor: `${step.color}12`,
                      color: step.color,
                    }}
                  >
                    <Icon size={26} strokeWidth={1.7} />
                  </div>
                </motion.div>
              )
            })}

            {/* Decorative arrow */}
            <div className="absolute bottom-[8%] right-[8%] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 sm:h-14 sm:w-14">
              <ArrowUpRight size={26} />
            </div>

            {/* Accent dots */}
            <div
              aria-hidden="true"
              className="absolute bottom-[18%] left-[7%] grid grid-cols-4 gap-2 opacity-60"
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-orange-400"
                />
              ))}
            </div>

            {/* Floating decorative line */}
            <div
              aria-hidden="true"
              className="absolute right-[7%] top-[40%] h-20 w-px rotate-[30deg] bg-gradient-to-b from-transparent via-violet-400/70 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TheGap
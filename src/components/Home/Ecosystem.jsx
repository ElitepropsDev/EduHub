import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  GraduationCap,
  Compass,
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
  Network,
} from 'lucide-react'

const Ecosystem = () => {
  const shouldReduceMotion = useReducedMotion()

  const ecosystemItems = [
    {
      name: 'Excel Career Plus',
      desc: 'Educational & career development',
      icon: GraduationCap,
      color: '#5044E5',
      glow: 'from-indigo-500/15',
    },
    {
      name: 'Excel Navigo',
      desc: 'Student platforms & navigation',
      icon: Compass,
      color: '#3984E8',
      glow: 'from-blue-500/15',
    },
    {
      name: 'Omsix',
      desc: 'Technology & digital initiatives',
      icon: Code2,
      color: '#8B5CF6',
      glow: 'from-violet-500/15',
    },
    {
      name: 'Engevion',
      desc: 'Professional solutions',
      icon: BriefcaseBusiness,
      color: '#0D9488',
      glow: 'from-teal-500/15',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="ecosystem"
      className="relative isolate w-full overflow-hidden bg-[#F8F9FF] px-4 py-20 text-gray-800 transition-colors duration-500 dark:bg-[#090D19] dark:text-white sm:px-8 sm:py-24 lg:px-16 xl:px-24"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main indigo glow */}
        <div className="absolute -top-48 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-400/15 blur-[120px] dark:bg-indigo-600/15" />

        {/* Side glows */}
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-blue-400/10 blur-[100px] dark:bg-blue-500/10" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-400/10 blur-[120px] dark:bg-violet-500/10" />

        {/* Fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.055]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'linear-gradient(to bottom, black, transparent 90%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black, transparent 90%)',
          }}
        />

        {/* Top and bottom edges */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:gap-14">

        {/* Section header */}
        <div className="flex max-w-3xl flex-col items-center text-center">

          {/* Decorative network symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
            }}
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-200/70 bg-white/80 text-indigo-600 shadow-lg shadow-indigo-500/10 backdrop-blur-xl dark:border-indigo-400/20 dark:bg-white/[0.04] dark:text-indigo-300"
          >
            <Network size={25} strokeWidth={1.7} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
            }}
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Part of a{' '}
            <span className="bg-gradient-to-r from-[#5044E5] via-[#6559ED] to-[#4d8cea] bg-clip-text text-transparent">
              Growing Ecosystem
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.12,
            }}
            className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8"
          >
            Career XP is part of a growing ecosystem of education, technology and professional initiatives creating new opportunities to learn, apply skills and gain experience.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="mt-8 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea]"
          />
        </div>

        {/* Ecosystem cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5"
        >
          {ecosystemItems.map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.name}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -7,
                        transition: { duration: 0.25 },
                      }
                }
                className="group relative isolate flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200/80 bg-white/75 px-5 py-8 text-center shadow-sm backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-indigo-300/80 hover:shadow-xl hover:shadow-indigo-950/[0.07] dark:border-white/[0.09] dark:bg-white/[0.035] dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.055] dark:hover:shadow-indigo-950/30 sm:px-4 lg:min-h-[245px] lg:px-3 xl:px-5"
              >
                {/* Card gradient */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-12 -top-16 -z-10 h-40 w-40 rounded-full bg-gradient-to-br ${item.glow} to-transparent opacity-70 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100`}
                />

                {/* Bottom accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-indigo-500/80 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* Icon */}
                <div
                  className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md dark:border-white/10 dark:from-white/[0.08] dark:to-white/[0.02]"
                  style={{
                    color: item.color,
                  }}
                >
                  <Icon size={27} strokeWidth={1.7} />

                  <div
                    aria-hidden="true"
                    className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ring-4 ring-white dark:ring-[#111827]"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </div>

                {/* Name */}
                <h3 className="text-base font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-300 sm:text-[15px] xl:text-base">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-[230px] text-xs leading-6 text-gray-500 dark:text-gray-400 sm:text-[11px] xl:text-xs">
                  {item.desc}
                </p>

                {/* Hover indicator */}
                <div
                  aria-hidden="true"
                  className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200/80 bg-white/80 text-gray-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-indigo-200 group-hover:text-indigo-600 group-hover:opacity-100 dark:border-white/10 dark:bg-white/5 dark:text-gray-500 dark:group-hover:text-indigo-300"
                >
                  <ArrowUpRight size={15} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosystem
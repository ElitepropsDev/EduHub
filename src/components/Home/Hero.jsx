import React from 'react'
import assets from '../../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='relative flex flex-col items-center gap-8 py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

      {/* Ambient Gradient Glow Background */}
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-[#5044E5]/15 via-[#4d8cea]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10' />

      {/* Small Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className='inline-flex items-center gap-2 border border-indigo-200 dark:border-indigo-900/50 px-5 py-2 rounded-full bg-indigo-50/50 dark:bg-indigo-950/30 backdrop-blur-md shadow-sm'>
          <span className='w-2 h-2 rounded-full bg-[#5044E5] animate-ping' />
          <p className='text-xs sm:text-sm font-bold tracking-wider text-indigo-900 dark:text-indigo-300'>
            LEARN • APPLY • EXPERIENCE
          </p>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className='text-4xl sm:text-6xl md:text-7xl xl:text-[84px] font-bold xl:leading-[95px] max-w-5xl tracking-tight'>
        Building Skills Through <span className='bg-gradient-to-r from-[#5044E5] via-[#4d8cea] to-indigo-400 bg-clip-text text-transparent'>Real Projects</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className='text-base sm:text-xl font-normal text-gray-600 dark:text-gray-300 max-w-2xl'>
        Learn practical skills, apply what you learn and gain experience by contributing to meaningful projects.
      </motion.p>

      {/* Hero Image Container with Floating UI Cards */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className='relative my-6 w-full flex justify-center'>
          
          <div className='relative p-2 rounded-3xl bg-gradient-to-b from-gray-200/60 to-transparent dark:from-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 shadow-2xl backdrop-blur-xl'>
            <img src={assets.hero2} alt="Hero" className='w-full max-w-5xl rounded-2xl'/>
          </div>

          <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>

          {/* Floating UI Widget 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className='hidden sm:flex absolute top-10 -left-6 lg:left-4 items-center gap-3 px-5 py-3.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-left'>
            <div className='w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-[#5044E5] font-bold text-lg'>🚀</div>
            <div>
              <p className='text-xs font-bold text-gray-900 dark:text-white'>Real-World Growth</p>
              <p className='text-[10px] text-gray-500 dark:text-gray-400'>Hands-on collaboration</p>
            </div>
          </motion.div>

          {/* Floating UI Widget 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className='hidden sm:flex absolute bottom-10 -right-6 lg:right-4 items-center gap-3 px-5 py-3.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-left'>
            <div className='w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950/50 flex items-center justify-center text-green-600 font-bold text-lg'>✨</div>
            <div>
              <p className='text-xs font-bold text-gray-900 dark:text-white'>Meaningful Impact</p>
              <p className='text-[10px] text-gray-500 dark:text-gray-400'>Contribute actively</p>
            </div>
          </motion.div>
      </motion.div>

      {/* Call To Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        viewport={{ once: true }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-2'>
          <a 
            href="programs" 
            className='group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-indigo-500/30'>
            <span>Explore Programs</span>
            <span className='group-hover:translate-x-1.5 transition-transform duration-200'>→</span>
          </a>
          <a 
            href="contact" 
            className='px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 font-semibold hover:border-[#5044E5] dark:hover:border-[#4d8cea] hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300'>
            How It Works
          </a>
      </motion.div>
      
    </div>
  )
}

export default Hero
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import assets from "../assets/assets";
import { BarChart3, Video, Cpu, Users } from "lucide-react";

const projectData = [
  {
    title: "Tech & Innovation Bootcamp",
    description:
      "Empowering learners through modern digital tools and real-world product design.",
    image: assets.work_mobile_app,
  },
  {
    title: "Career Accelerator Project",
    description:
      "Helping graduates transition into tech roles with guided mentorship and teamwork.",
    image: assets.work_dashboard_management,
  },
  {
    title: "Vocational Skills Program",
    description:
      "Practical learning tailored for local industry and hands-on mastery.",
    image: assets.work_fitness_app,
  },
  {
    title: "EduHub AI Platform",
    description:
      "A digital ecosystem built for skill growth and education accessibility.",
    image: assets.work_ai,
  },
  {
    title: "Creative Studio App",
    description:
      "A project showcasing design systems, UI prototyping, and motion design.",
    image: assets.work_creative,
  },
  {
    title: "Community Impact Drive",
    description:
      "Bridging technology and human development through local partnerships.",
    image: assets.work_community,
  },
];

const StatsCard = ({ icon, target, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const step = 20;
      const increment = target / (duration / step);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, step);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl py-10 px-6 flex flex-col items-center gap-4 shadow-lg border border-white/20 transition-all duration-300"
    >
      <div className="bg-white/20 p-3 rounded-full text-[#4d8cea]">{icon}</div>
      <h3 className="text-5xl font-bold text-[#4d8cea]">{count}+</h3>
      <p className="text-lg opacity-90">{label}</p>
    </motion.div>
  );
};

const Projects = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <div className="relative min-h-screen text-gray-700 dark:text-white overflow-hidden bg-gradient-to-br from-[#EEF3FF] via-white to-[#E6EFFF] dark:from-[#0A0A14] dark:via-[#111827] dark:to-[#0F172A]">
      {/* HERO SECTION */}
      <div className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
        >
          <img className="w-20" src={assets.group_profile} alt="" />
          <p className="text-xs font-medium">Projects trusted by 10k+ learners</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[78px] font-medium xl:leading-[90px] max-w-5xl"
        >
          Turning{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            ideas
          </span>{" "}
          into impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-xl pb-3"
        >
          Explore how we transform creativity into real solutions — from concept
          to community impact.
        </motion.p>
      </div>

      {/* PROJECT GRID */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-12 lg:px-24 xl:px-40 pb-20"
      >
        {projectData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="hover:scale-[1.02] duration-500 transition-all cursor-pointer bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-md hover:shadow-xl"
          >
            <img
              src={project.image}
              className="w-full rounded-xl object-cover"
              alt={project.title}
            />
            <h3 className="mt-4 mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="text-sm opacity-70 mb-4">{project.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-[#4d8cea] to-[#5044E5] text-white rounded-full shadow hover:shadow-lg transition-all duration-300"
            >
              View Project
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* OUTRO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent"
      >
        <h2 className="text-3xl sm:text-4xl font-medium mb-3">
          Every project tells a story.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our journey is about building bridges between creativity, innovation,
          and education — one real-world project at a time.
        </p>
      </motion.div>

      {/* VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center bg-gradient-to-br from-[#eef3ff]/50 to-[#e6efff]/20 dark:from-[#0A0A14]/40 dark:to-[#111827]/60"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
          Watch how we build impact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Step inside our creative process and see how each project goes from
          concept to launch with teamwork, design, and innovation.
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/pb7_YJp9bVA"
    title="EduHub Project Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

      </motion.div>

      {/* STATS SECTION */}
      <motion.div
  ref={statsRef}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="py-24 px-2 sm:px-12 lg:px-24 xl:px-40 text-center bg-gradient-to-t from-[#eef3ff]/80 to-transparent dark:from-[#111827]/70"
>
  <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
    Our Learning Impact
  </h2>

  <div
    className="
      grid 
      grid-cols-2               /* ✅ 2 per row on mobile */
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-4                     /* smaller gap for mobile */
      max-w-6xl mx-auto 
      px-2                      /* ✅ adds left/right margin on mobile */
    "
  >
    <StatsCard
      icon={<Video size={28} />}  /* smaller icons for compact look */
      target={700}
      label="Live Classes per Month"
      inView={statsInView}
    />
    <StatsCard
      icon={<BarChart3 size={28} />}
      target={550}
      label="On-Demand Skills"
      inView={statsInView}
    />
    <StatsCard
      icon={<Cpu size={28} />}
      target={120}
      label="Hands-on Projects"
      inView={statsInView}
    />
    <StatsCard
      icon={<Users size={28} />}
      target={300}
      label="Instructors & Mentors"
      inView={statsInView}
    />
  </div>
</motion.div>

    </div>
  );
};

export default Projects;

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import assets from "../assets/assets";
import { Users, BookOpen, Building2, Globe } from "lucide-react";

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

const Capacity = () => {
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
          <p className="text-xs font-medium">
            Building institutional excellence
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[78px] font-medium xl:leading-[90px] max-w-5xl"
        >
          Capacity{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            Development
          </span>{" "}
          for Sustainable Growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-xl pb-3"
        >
          Empowering faculty and institutions through innovation, collaboration,
          and real-world learning impact.
        </motion.p>
      </div>

      {/* THREE FEATURE SECTIONS */}
      <section className="space-y-24 px-4 sm:px-12 lg:px-24 xl:px-40 pb-24">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={assets.faculty}
            alt="Faculty Development"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">Faculty Training & Growth</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Through specialized bootcamps, mentorships, and technical
              upskilling programs, we strengthen the teaching capacity of
              educators and mentors.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our focus: digital transformation, innovative pedagogy, and
              leadership for 21st-century learning.
            </p>
          </motion.div>
        </div>

        {/* 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <motion.img
            src={assets.partnership}
            alt="Institutional Partnerships"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">
              Institutional Partnerships
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We collaborate with universities, NGOs, and global agencies to
              promote knowledge exchange and co-create impactful programs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Each partnership expands opportunities, innovation, and
              sustainable institutional development.
            </p>
          </motion.div>
        </div>

        {/* 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={assets.research}
            alt="Research and Innovation"
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">Research & Innovation</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Our capacity programs inspire faculty-led research, encourage
              innovation, and foster the creation of scalable learning solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We bridge ideas and impact by transforming insights into practical
              educational advancements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.3 }}
  viewport={{ once: true }}
  className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center bg-gradient-to-br from-[#eef3ff]/50 to-[#e6efff]/20 dark:from-[#0A0A14]/40 dark:to-[#111827]/60"
>
  <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
    Watch Our Capacity Journey
  </h2>
  <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
    Experience how our faculty development programs and partnerships are transforming education across communities.
  </p>
  <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/06jkszpdNGc?mute=1"
      title="Capacity Development Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
          <StatsCard
            icon={<BookOpen size={28} />}
            target={25}
            label="Faculty Trained Annually"
            inView={statsInView}
          />
          <StatsCard
            icon={<Building2 size={28} />}
            target={10}
            label="Partner Institutions"
            inView={statsInView}
          />
          <StatsCard
            icon={<Globe size={28} />}
            target={5}
            label="Global Collaborations"
            inView={statsInView}
          />
          <StatsCard
            icon={<Users size={28} />}
            target={100}
            label="Commitment to Growth (%)"
            inView={statsInView}
          />
        </div>
      </motion.div>
      <motion.div
  className="w-full text-center py-20 bg-gradient-to-r from-blue-50 to-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
    Partner With Us to Drive Innovation
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto mb-8">
    Join hands with EduHub to empower institutions and faculty through
    transformative training, partnerships, and technology-driven learning
    initiatives.
  </p>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg font-semibold"
  >
    Partner With Us
  </motion.button>
</motion.div>

    </div>
  );
};

export default Capacity;

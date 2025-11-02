import { motion } from "framer-motion";
import assets from "../assets/assets";

export default function Resources() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full overflow-hidden text-gray-800">
      {/* HERO SECTION */}
      {/* HERO SECTION */}
<div className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
  >
    <img className="w-20" src={assets.group_profile} alt="Resource Group" />
    <p className="text-xs font-medium">Learning. Access. Collaboration.</p>
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl md:text-6xl xl:text-[78px] font-medium xl:leading-[90px] max-w-5xl"
  >
    Explore{" "}
    <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
      Resources
    </span>{" "}
    that Inspire Growth.
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1 }}
    viewport={{ once: true }}
    className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-xl pb-3"
  >
    Access curated videos, insightful articles, and project showcases that
    strengthen institutional capacity and lifelong learning.
  </motion.p>
</div>

      {/* INTRO SECTION */}
<section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-20 bg-white">
  <motion.img
    src={assets.resources1}
    alt="Learning Resources"
    className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  />
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="w-full md:w-1/2"
  >
    <h2 className="text-3xl font-bold mb-4">Empowering Through Access</h2>
    <p className="text-gray-600 leading-relaxed mb-4">
      Our Resources Hub connects learners, educators, and partners to curated
      content that inspires innovation and continuous growth.
    </p>
    <p className="text-gray-600 leading-relaxed">
      From video highlights to research articles and digital libraries, we
      bridge the gap between learning and real-world application.
    </p>
  </motion.div>
</section>


      {/* GRID SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              type: "video",
              title: "Faculty Innovation Workshop",
              desc: "A short clip showcasing our hands-on faculty training session.",
              img: assets.faculty,
            },
            {
              type: "blog",
              title: "Building Partnerships for Growth",
              desc: "Read how institutional collaboration drives innovation and capacity.",
              img: assets.partnership,
            },
            {
              type: "video",
              title: "Student Project Demo",
              desc: "Watch how creative student projects evolve through guided mentorship.",
              img: assets.work_mobile_app,
            },
            {
              type: "blog",
              title: "Digital Learning Trends 2025",
              desc: "Insights on how modern tools are reshaping the future of education.",
              img: assets.program_ai,
            },
            {
              type: "video",
              title: "Campus Tech Bootcamp",
              desc: "Highlights from our recent tech bootcamp for faculty and students.",
              img: assets.program_nursing,
            },
            {
              type: "blog",
              title: "Sustainable Teaching Strategies",
              desc: "Discover how educators integrate sustainability into learning methods.",
              img: assets.program_teaching,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="h-52 md:h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 flex-grow">{item.desc}</p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="mt-4 text-blue-700 font-medium"
                >
                  {item.type === "video" ? "Watch Video →" : "Read More →"}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMING SOON / FUTURE FEATURE */}
      <section className="bg-indigo-50 py-20 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Coming Soon: Learning Content Library
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-700 text-lg"
        >
          This space will soon host student-accessible courses, digital guides,
          and training modules connected to user logins.
        </motion.p>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white text-center px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Partner or Collaborate With Us
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-lg mb-8"
        >
          Have ideas or materials to share? Reach out and be part of our growing
          network of innovators and educators.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
}

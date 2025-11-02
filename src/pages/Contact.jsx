import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import assets from "../assets/assets";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full overflow-hidden text-gray-800">
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
          <p className="text-xs font-medium">We’d love to hear from you</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[78px] font-medium xl:leading-[90px] max-w-5xl"
        >
          Contact{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            EduHub
          </span>{" "}
          Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-xl pb-3"
        >
          For inquiries, collaborations, or institutional partnerships — reach
          out and let’s grow together.
        </motion.p>
      </div>

      {/* CONTACT GRID */}
      <section className="flex flex-col md:flex-row gap-10 px-6 md:px-16 py-20 bg-white">
        {/* LEFT INFO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We’re open to conversations about projects, collaborations, or any
            questions about our programs. Let’s connect.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <p>info@eduhub.org</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <p>+234 800 123 4567</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-blue-50 p-8 rounded-2xl shadow-md space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {[
            {
              q: "How can I become a partner?",
              a: "Reach out via our contact form — our partnership team will follow up with you promptly.",
            },
            {
              q: "Do you offer online training?",
              a: "Yes. We provide a growing library of on-demand workshops and live instructor-led sessions.",
            },
            {
              q: "Can institutions request tailored programs?",
              a: "Absolutely. EduHub specializes in custom programs to meet institutional development goals.",
            },
            {
              q: "Where can I find study resources?",
              a: "Visit our Resources page for curated videos, project demos, and educational blog posts.",
            },
            {
              q: "Is there a cost for accessing EduHub resources?",
              a: "Most materials are free, with premium learning tracks launching soon.",
            },
            {
              q: "Can individuals enroll in EduHub programs?",
              a: "Yes, both individuals and institutions can participate in selected programs.",
            },
            {
              q: "Do you offer certifications?",
              a: "Some of our advanced workshops come with verified certificates of completion.",
            },
            {
              q: "How long does it take to process partnership requests?",
              a: "Usually within 3–5 business days, depending on your proposal type.",
            },
            {
              q: "Is EduHub open to international collaborations?",
              a: "Yes, we collaborate globally on innovation-focused educational projects.",
            },
            {
              q: "Can I volunteer or contribute content?",
              a: "We welcome collaborations! Use the contact form to express interest in contributing.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <details
                className="group"
                onClick={(e) => {
                  const all = document.querySelectorAll("details");
                  all.forEach(
                    (el) => el !== e.currentTarget && el.removeAttribute("open")
                  );
                }}
              >
                <summary className="cursor-pointer text-lg font-semibold text-blue-700 dark:text-blue-400 flex justify-between items-center">
                  {faq.q}
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3">{faq.a}</p>
              </details>
            </motion.div>
          ))}
        </div>
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
          Partner With Us to Drive Educational Impact
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-lg mb-8"
        >
          Together, we can strengthen institutions and empower educators through
          innovation and technology.
        </motion.p>
        <motion.a
          href="/partner"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          Partner With Us
        </motion.a>
      </section>
    </div>
  );
}

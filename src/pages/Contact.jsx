
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import assets from "../assets/assets";

const enquiryTypes = [
  {
    title: "Programme Enquiries",
    description:
      "Questions about our programmes, enrolment, duration, requirements or fees.",
    icon: GraduationCapIcon,
  },
  {
    title: "Industry & Career Opportunities",
    description:
      "Interested in internships, industrial exposure, practical experience or other career opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "School & Institutional Enquiries",
    description:
      "Schools and institutions interested in programmes or opportunities for their students.",
    icon: Building2,
  },
  {
    title: "Corporate & Industry Partnerships",
    description:
      "Companies and organisations interested in training, talent development, projects or collaboration.",
    icon: Handshake,
  },
  {
    title: "General Enquiries",
    description: "Something else? Tell us what you have in mind.",
    icon: MessageCircle,
  },
];

function GraduationCapIcon(props) {
  return <Users {...props} />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const contactDetails = [
  {
    title: "Email",
    value: "info@joincareerxp.com",
    icon: Mail,
    href: "mailto:info@joincareerxp.com",
  },
  {
    title: "Phone / WhatsApp",
    value: "+4917662828919",
    icon: Phone,
    href: "https://wa.me/4917662828919",
  },
  {
    title: "Location",
    value: "Lagos, Nigeria I Germany",
    icon: MapPin,
    href: null,
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    name: "FB",
    href: "https://www.facebook.com/",
  },
];

export default function Contact() {
  const [selectedEnquiry, setSelectedEnquiry] = useState("");
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(
      selectedEnquiry
        ? `${selectedEnquiry} — Career XP enquiry`
        : "Career XP enquiry"
    );

    const body = encodeURIComponent(
      `Your Name: ${name}\nEmail Address: ${email}\nPhone / WhatsApp: ${phone || "Not provided"}\nEnquiry Type: ${selectedEnquiry || "General Enquiries"}\n\nMessage:\n${message}`
    );

    setFormStatus("opening");
    window.location.href = `mailto:info@joincareerxp.com?subject=${subject}&body=${body}`;

    setTimeout(() => setFormStatus("idle"), 2500);
  };

  return (
    <main className="overflow-hidden bg-[#FBF8F3] text-[#10243E]">
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-[#EAE2F5]/65 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-20 h-72 w-72 rounded-full bg-[#E2EBD9]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >


            <p className="mb-3 text-sm font-medium tracking-wide text-[#8A704F]">
              We’d Love to Hear From You
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.35rem]">
              Contact{" "}
              <span className="font-serif font-normal italic text-[#4947d1]">
                Career XP
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5D6875] sm:text-lg sm:leading-9">
              Whether you are interested in a programme, looking for practical
              experience, exploring an industry opportunity, or interested in
              working with Career XP, we’d be happy to hear from you.
            </p>

            <a
              href="#contact-form"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#263F5C] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8A704F] focus:ring-offset-4"
            >
              Get in Touch
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[#E8E1D7]">
              <img
                src={assets.partnership}
                alt=""
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[470px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/80 via-[#10243E]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                  <MessageCircle size={23} />
                </div>
                <div className="h-1 w-12 rounded-full bg-[#E8C8A9]" />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E8C8A9] text-[#10243E] shadow-xl sm:-left-5 sm:h-24 sm:w-24">
              <Handshake size={34} strokeWidth={1.5} />
            </div>

            <div className="absolute -right-4 -top-4 -z-0 h-24 w-24 rounded-full border border-[#D8CBB9] sm:-right-6 sm:-top-6 sm:h-32 sm:w-32" />
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="mb-5 h-1 w-12 rounded-full bg-[#B5683D]" />
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <h3 className="mt-5 text-xl font-medium sm:text-2xl">
              Let’s Start a Conversation
            </h3>
            <p className="mt-4 text-base leading-8 text-[#5D6875]">
              We’re open to conversations with learners, students,
              professionals, schools, businesses, training organisations and
              other partners.
            </p>
            <p className="mt-3 text-base leading-8 text-[#5D6875]">
              Whether you have a question about our programmes or want to
              explore an opportunity, partnership or collaboration, send us a
              message and our team will get back to you.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8EEDF] text-[#526B43]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[#8A704F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 break-words text-base font-medium leading-7 text-[#10243E]">
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRight
                      size={18}
                      className="ml-auto shrink-0 text-[#8C929A]"
                    />
                  )}
                </>
              );

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex h-full min-h-[130px] items-start gap-4 rounded-3xl border border-[#10243E]/[0.07] bg-[#FBF8F3] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D8CBB9] hover:shadow-lg sm:p-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex h-full min-h-[130px] items-start gap-4 rounded-3xl border border-[#10243E]/[0.07] bg-[#FBF8F3] p-5 sm:p-6">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <p className="mt-7 max-w-4xl text-sm leading-7 text-[#687381]">
            Career XP operates through a growing network of partners and
            collaborators. Additional meeting points or representatives may
            be available depending on the programme or location.
          </p>
        </div>
      </section>

      {/* ENQUIRY TYPES */}
      <section className="bg-[#F3F1EB] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#8A704F]">
              <MessageCircle size={23} />
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              How Can We Help?
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5D6875]">
              Please select the reason for your enquiry:
            </p>
          </motion.div>

          <div className="space-y-3">
            {enquiryTypes.map((item, index) => {
              const Icon = item.icon;
              const selected = selectedEnquiry === item.title;

              return (
                <motion.button
                  type="button"
                  key={item.title}
                  onClick={() => {
                    setSelectedEnquiry(item.title);
                    document.getElementById("contact-form")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.06 }}
                  className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition duration-300 sm:gap-5 sm:p-6 ${
                    selected
                      ? "border-[#10243E] bg-white shadow-md"
                      : "border-[#10243E]/[0.07] bg-white/65 hover:border-[#D8CBB9] hover:bg-white"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      selected
                        ? "bg-[#10243E] text-white"
                        : "bg-[#E8EEDF] text-[#526B43]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-6 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#687381]">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      selected
                        ? "border-[#10243E] bg-[#10243E] text-white"
                        : "border-[#10243E]/20 text-transparent group-hover:border-[#8A704F]"
                    }`}
                  >
                    <Check size={14} />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:pt-5"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F4FB] text-[#7960A2]">
              <Send size={22} />
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Send Us a Message
            </h2>

            <div className="mt-7 h-1 w-12 rounded-full bg-[#B5683D]" />

            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-[#F3F6EF] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#526B43]">
                <Mail size={21} />
              </div>
              <p className="text-sm leading-7 text-[#5D6875]">
                <a
                  href="mailto:info@joincareerxp.com"
                  className="font-semibold text-[#10243E] underline decoration-[#D8CBB9] underline-offset-4"
                >
                  info@joincareerxp.com
                </a>
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={fadeUp}
            className="rounded-[1.75rem] border border-[#10243E]/[0.07] bg-[#FBF8F3] p-5 sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-[#D9D8D2] bg-white px-4 py-3.5 text-sm text-[#10243E] outline-none transition placeholder:text-[#9AA0A8] focus:border-[#8A704F] focus:ring-2 focus:ring-[#8A704F]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-[#D9D8D2] bg-white px-4 py-3.5 text-sm text-[#10243E] outline-none transition placeholder:text-[#9AA0A8] focus:border-[#8A704F] focus:ring-2 focus:ring-[#8A704F]/15"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-phone"
                className="mb-2 block text-sm font-semibold"
              >
                Phone / WhatsApp
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone / WhatsApp"
                className="w-full rounded-xl border border-[#D9D8D2] bg-white px-4 py-3.5 text-sm text-[#10243E] outline-none transition placeholder:text-[#9AA0A8] focus:border-[#8A704F] focus:ring-2 focus:ring-[#8A704F]/15"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-enquiry"
                className="mb-2 block text-sm font-semibold"
              >
                Please select the reason for your enquiry:
              </label>
              <div className="relative">
                <select
                  id="contact-enquiry"
                  name="enquiry"
                  value={selectedEnquiry}
                  onChange={(event) =>
                    setSelectedEnquiry(event.target.value)
                  }
                  className="w-full appearance-none rounded-xl border border-[#D9D8D2] bg-white px-4 py-3.5 pr-11 text-sm text-[#10243E] outline-none transition focus:border-[#8A704F] focus:ring-2 focus:ring-[#8A704F]/15"
                >
                  <option value="">Select an enquiry type</option>
                  {enquiryTypes.map((item) => (
                    <option key={item.title} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#687381]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Message"
                className="w-full resize-y rounded-xl border border-[#D9D8D2] bg-white px-4 py-3.5 text-sm leading-7 text-[#10243E] outline-none transition placeholder:text-[#9AA0A8] focus:border-[#8A704F] focus:ring-2 focus:ring-[#8A704F]/15"
              />
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#263F5C] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8A704F] focus:ring-offset-4"
            >
              Send Message
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {formStatus === "opening" && (
              <p
                role="status"
                className="mt-4 text-sm leading-6 text-[#526B43]"
              >
                Your email application should open with your message prepared.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* ORGANISATIONS & PARTNERS */}
      <section className="bg-[#F3F1EB] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#8A704F]">
              <Handshake size={23} />
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              For Organisations &amp; Partners
            </h2>

            <h3 className="mt-5 text-xl font-medium sm:text-2xl">
              Have an Opportunity or Idea?
            </h3>

            <p className="mt-5 text-base leading-8 text-[#5D6875]">
              Career XP works with organisations, schools, businesses and
              industry partners to create opportunities for learning,
              practical application and career development.
            </p>

            <p className="mt-4 text-base leading-8 text-[#5D6875]">
              If you have a training opportunity, internship, industry exposure
              opportunity, project, partnership idea or another opportunity
              that could benefit learners and professionals, we would be
              interested in hearing from you.
            </p>

            <a
              href="#contact-form"
              onClick={() => setSelectedEnquiry("Corporate & Industry Partnerships")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#10243E] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:bg-[#263F5C] hover:shadow-lg"
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={assets.partnership}
                alt=""
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[390px]"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8C8A9] text-[#10243E] shadow-lg sm:-left-5 sm:h-20 sm:w-20">
              <Globe2 size={29} strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Stay Connected
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#687381] sm:text-base">
              Follow Career XP for programme announcements, opportunities,
              useful career resources and updates.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#10243E]/15 px-5 py-3 text-sm font-medium transition duration-300 hover:border-[#10243E] hover:bg-[#10243E] hover:text-white"
              >
                {social.name}
                <ArrowUpRight size={15} className="ml-2" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

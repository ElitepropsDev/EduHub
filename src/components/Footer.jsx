import { useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Programs", to: "/programs" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Resources", to: "/resources" },
    { label: "Contact", to: "/contact" },
  ];

  const learnerLinks = [
    { label: "Explore Programs", to: "/programs" },
    { label: "Explore Projects", to: "/projects" },
   { label: "How It Works", href: "#how-it-works" },
  ];

  const partnerLinks = [
    { label: "Project Partnerships", to: "/contact" },
    { label: "Institutional Partnerships", to: "/contact" },
    { label: "Contact", to: "/contact" },
  ];

  const linkStyle =
    "group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors duration-200 hover:text-white";

  const scrollToHowItWorks = useCallback((event) => {
    event.preventDefault();

    document.getElementById("how-it-works")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#10243E] text-white">
      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-400/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-10 lg:pb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-sm"
          >
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-sky-400 text-lg font-bold text-[#10243E] shadow-lg shadow-violet-500/10">
                CX
              </span>

              <span className="text-xl font-semibold tracking-tight">
                Career <span className="text-violet-300">XP</span>
              </span>
            </Link>

            <p className="mt-5 text-sm font-medium text-slate-300">
              Learning by Experience
            </p>

            <p className="mt-2 text-2xl font-semibold leading-snug tracking-tight">
              Learn. Apply.
              <span className="block bg-gradient-to-r from-violet-300 to-sky-300 bg-clip-text text-transparent">
                Gain Experience.
              </span>
            </p>
          </motion.div>

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            links={quickLinks}
            onHowItWorksClick={scrollToHowItWorks}
          />

          {/* For Learners */}
          <FooterColumn title="For Learners" links={learnerLinks} />

          {/* For Partners */}
          <FooterColumn title="For Partners" links={partnerLinks} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Career XP. All rights reserved.</p>

          <p className="flex flex-wrap items-center gap-1">
            A project by{" "}
            <a
              href="https://www.omsix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-slate-200 no-underline transition-colors duration-200 hover:text-violet-300"
            >
              OMSIX Digital
              <ArrowUpRight size={13} strokeWidth={1.8} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const linkStyle =
  "group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors duration-200 hover:text-white";

const FooterColumn = ({ title, links, onHowItWorksClick }) => (
  <div>
    <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
      {title}
    </h3>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={`${title}-${link.label}-${link.to || link.href}`}>
          {link.href ? (
            <a
              href={link.href}
              onClick={
                link.href === "#how-it-works"
                  ? onHowItWorksClick
                  : undefined
              }
              className={linkStyle}
            >
              <span>{link.label}</span>
              <ArrowRight
                size={13}
                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          ) : (
            <Link to={link.to} className={linkStyle}>
              <span>{link.label}</span>
              <ArrowRight
                size={13}
                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
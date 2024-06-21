"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const textArray = [
    "Hey",
    "there!",
    "👋",
    "I'm",
    "Axel,",
    "a",
    "Junior",
    "Frontend",
    "Developer",
    "from",
    "Germany",
    "passionate",
    "about",
    "crafting",
    "intuitive",
    "Landing",
    "pages",
    "and",
    "web",
    "applications.",
    "I'm",
    "working",
    "with",
    "HTML,",
    "CSS,",
    "JavaScript,",
    "React,",
    "NextJS",
    "and",
    "Tailwind",
    "CSS.",
    "Additionally,",
    "I'm",
    "proficient",
    "in",
    "Webflow",
    "and",
    "always",
    "on",
    "the",
    "lookout",
    "for",
    "new",
    "challenges",
    "or",
    "things",
    "I",
    "can",
    "learn!",
    "🙂",
  ];

  const introText = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    hidden: { opacity: 0 },
  };

  const introWord = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
    hidden: { opacity: 0, translateY: 5 },
  };

  return (
    <main className="flex flex-col px-10 md:px-24 mx-auto max-w-screen-lg">
      <section>
        <h1 className="xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 heading relative inline-block p-2">
          Frontend Developer
        </h1>
        <motion.p
          className="ml-1 text-sm leading-relaxed md:text-base md:leading-loose"
          initial="hidden"
          animate="visible"
          variants={introText}
        >
          {textArray.map((word: string, index: number) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={introWord}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </section>
      <section className="mt-16 mb-6">
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring", delay: 0 }}
        >
          Latest Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="rounded-lg overflow-hidden cursor-pointer border max-h-60 md:max-h-52"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            <Link
              href="https://www.rohmilch-kaufen.de"
              target="_blank"
              aria-label="Rohmilch kaufen"
            >
              <motion.img
                src="/images/rohmilchkaufen.webp"
                alt=""
                whileHover={{ opacity: 0.5, scale: 1.1 }}
              />
            </Link>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden cursor-pointer border max-h-60 md:max-h-52"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.8 }}
          >
            <Link
              href="https://www.thefrontendquiz.com"
              target="_blank"
              aria-label="The Frontend Quiz"
            >
              <motion.img
                src="/images/frontendquiz.webp"
                alt=""
                whileHover={{ opacity: 0.5, scale: 1.1 }}
              />
            </Link>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden cursor-pointer border max-h-60 md:max-h-52"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 1.1 }}
          >
            <Link
              href="https://meisteraxel.github.io/age-calculator-app-main/"
              target="_blank"
              aria-label="Calculator App"
            >
              <motion.img
                src="/images/calculator.webp"
                alt=""
                whileHover={{ opacity: 0.5, scale: 1.1 }}
              />
            </Link>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden cursor-pointer border max-h-60 md:max-h-52"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 1.6 }}
          >
            <Link
              href="https://expenses-tracker-axmst.netlify.app/"
              target="_blank"
              aria-label="Expenses Tracker"
            >
              <motion.img
                src="/images/tracker.webp"
                alt=""
                whileHover={{ opacity: 0.5, scale: 1.1 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>
      <motion.div
        className="lg:hidden flex text-sm gap-5 transition items-center mb-6 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <Link
          href="https://www.linkedin.com/in/axelmeister/"
          target="_blank"
          className="nav-link relative p-1"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/meisteraxel"
          target="_blank"
          className="nav-link relative p-1"
        >
          Github
        </Link>
        <Link
          href="mailto:meister.axel@gmail.com"
          target="_blank"
          className="nav-link relative p-1"
        >
          Contact
        </Link>
      </motion.div>
    </main>
  );
}

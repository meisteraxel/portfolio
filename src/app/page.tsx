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
        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring", delay: 0 }}
        >
          Latest Projects
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="rounded-lg overflow-hidden cursor-pointer border max-h-60 md:max-h-52"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            <Link href="https://www.rohmilch-kaufen.de" target="_blank">
              <motion.img
                src="/images/rohmilchkaufen.png"
                alt=""
                whileHover={{ opacity: 0.5 }}
              />
            </Link>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden cursor-pointer border max-h-60 md:max-h-52"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.8 }}
          >
            <Link href="https://www.thefrontendquiz.com" target="_blank">
              <motion.img
                src="/images/frontendquiz.png"
                alt=""
                whileHover={{ opacity: 0.5 }}
              />
            </Link>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden cursor-pointer border max-h-60 md:max-h-52"
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 1.2 }}
          >
            <Link
              href="https://meisteraxel.github.io/age-calculator-app-main/"
              target="_blank"
            >
              <motion.img
                src="/images/calculator.png"
                alt=""
                whileHover={{ opacity: 0.5 }}
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
            >
              <motion.img
                src="/images/tracker.png"
                alt=""
                whileHover={{ opacity: 0.5 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

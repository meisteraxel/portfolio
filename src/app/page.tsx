import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col px-24 mx-auto max-w-screen-lg">
      <section>
        <h1 className="text-6xl font-semibold mb-2">Frontend Developer</h1>
        <p className=" leading-loose ml-1">
          Hey there! 👋 <br /> I'm Axel, a Junior Frontend Developer passionate
          about crafting intuitive Landing pages and web applications. I'm
          working with HTML, CSS, JavaScript, React, NextJS and Tailwind CSS.
          Additionally, I'm proficient in Webflow and always on the lookout for
          new challenges or things I can learn! 🙂
        </p>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Latest Projects</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden cursor-pointer border max-h-52 transition-all duration-500 time hover:opacity-75">
            <Link href="https://www.rohmilch-kaufen.de" target="_blank">
              <img src="/images/rohmilchkaufen.png" alt="" />
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden cursor-pointer border max-h-52 transition-all duration-500 hover:opacity-75">
            <Link href="https://www.thefrontendquiz.com" target="_blank">
              <img src="/images/frontendquiz.png" alt="" />
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden cursor-pointer border max-h-52 transition-all duration-500 hover:opacity-75">
            <Link
              href="https://meisteraxel.github.io/age-calculator-app-main/"
              target="_blank"
            >
              <img src="/images/calculator.png" alt="" />
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden cursor-pointer border max-h-52 transition-all duration-500 hover:opacity-75">
            <Link
              href="https://expenses-tracker-axmst.netlify.app/"
              target="_blank"
            >
              <img src="/images/tracker.png" alt="" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

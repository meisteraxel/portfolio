import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 mx-auto max-w-screen-lg">
      <nav className="flex gap-5 items-center mb-10">
        <Avatar className="size-16">
          <AvatarImage
            src="/images/axel.jpg"
            alt="Axel"
            className="object-cover"
          />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <h2 className="text-slate-600 grow">Axel Meister</h2>
        <div className="flex gap-5 text-slate-600 transition">
          <Link
            href="https://stackoverflow.com/"
            target="_blank"
            className="transition-all hover:text-slate-900"
          >
            LinkedIn
          </Link>
          <Link
            href="https://stackoverflow.com/"
            target="_blank"
            className="transition-all hover:text-slate-900"
          >
            Github
          </Link>
          <Link
            href="mailto:meister.axel@gmail.com"
            target="_blank"
            className="transition-all hover:text-slate-900"
          >
            Contact
          </Link>
        </div>
      </nav>
      <section>
        <h1 className="text-6xl font-semibold mb-2">Frontend Developer</h1>
        <p className="text-slate-600 leading-loose ml-1">
          Hey there! 👋 <br /> I'm Axel, a Junior Frontend Developer passionate
          about crafting intuitive Landing pages and web applications. I'm
          working with HTML, CSS, JavaScript, React, NextJS and Tailwind CSS.
          Additionally, I'm proficient in Webflow and always on the lookout for
          new challenges or things I can learn! 🙂
        </p>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Latest Projects</h3>
      </section>
    </main>
  );
}

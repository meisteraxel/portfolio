import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./modetoggle";

export default function Navbar() {
  return (
    <nav className="relative flex gap-5 items-center mb-10 px-10 md:px-24 pt-10 mx-auto max-w-screen-lg">
      <Avatar className="size-8 md:size-14">
        <AvatarImage src="/images/axel.webp" alt="Axel" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <h2 className="grow text-sm md:text-base">Axel Meister</h2>
      <div className="lg:flex gap-5 transition items-center hidden">
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
      </div>
      <ModeToggle />
    </nav>
  );
}

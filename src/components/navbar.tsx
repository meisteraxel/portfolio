import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./modetoggle";

export default function Navbar() {
  return (
    <nav className="flex gap-5 items-center mb-10 px-24 pt-10 mx-auto max-w-screen-lg">
      <Avatar className="size-14">
        <AvatarImage src="/images/axel.png" alt="Axel" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <h2 className=" grow">Axel Meister</h2>
      <div className="flex gap-5 transition items-center">
        <Link
          href="https://www.linkedin.com/in/axelmeister/"
          target="_blank"
          className="nav-link relative"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/meisteraxel"
          target="_blank"
          className="nav-link relative"
        >
          Github
        </Link>
        <Link
          href="mailto:meister.axel@gmail.com"
          target="_blank"
          className="nav-link relative"
        >
          Contact
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

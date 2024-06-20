"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./modetoggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  function toggleNav() {
    setOpenNav(!openNav);
  }

  return (
    <nav className="relative flex gap-5 items-center mb-10 px-10 md:px-24 pt-10 mx-auto max-w-screen-lg">
      <Avatar className="size-8 md:size-14">
        <AvatarImage src="/images/axel.png" alt="Axel" />
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
      <div className="lg:hidden flex items-center">
        {!openNav ? <Menu onClick={toggleNav} /> : <X onClick={toggleNav} />}
      </div>
      <ModeToggle />
      <motion.div
        className={`flex flex-col gap-8 absolute w-full top-24 left-0 py-6 text-center bg-[hsl(var(--background))] z-50 transition-all duration-300 ${
          openNav ? "scale-100" : "scale-0"
        } origin-top`}
      >
        <Link href="https://www.linkedin.com/in/axelmeister/" target="_blank">
          LinkedIn
        </Link>
        <Link href="https://github.com/meisteraxel" target="_blank">
          Github
        </Link>
        <Link href="mailto:meister.axel@gmail.com" target="_blank">
          Contact
        </Link>
      </motion.div>
    </nav>
  );
}

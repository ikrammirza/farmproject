"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/model", label: "Our Model" },
    { href: "/impact", label: "Impact" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="text-green-900 px-6 py-4 flex justify-between items-center relative font-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png" // place logo in /public folder
          alt="AgriGrid Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-2xl font-bold tracking-wide text-green-800 hover:text-green-600 transition-colors">
          AgriGrid
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden font-bold md:flex space-x-8  text-lg">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="hover:text-green-600 transition-colors relative after:block after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full after:absolute after:bottom-0 after:left-0"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl font-bold text-green-800"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 right-6 bg-green-800 text-white rounded-xl shadow-lg p-5 flex flex-col space-y-4 md:hidden z-50">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-green-200 text-lg font-semibold transition-colors"
              onClick={() => setOpen(false)} // close menu on click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

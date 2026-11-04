import Image from "next/image";
import Link from "next/link";
//import React from "react";

export default function Navbar() {
    return(
        <header className="flex h-14 items-center justify-between border-b border-zinc-200 px-4 sm:px-6">
          <Link href="/dashboard" className=" flex items-center text-xl gap-3 font-semibold">
            <Image src="/next.svg" alt="" width={89} height={18} priority />
          </Link>
              <nav className="gap-4 flex items-center text-sm font-medium">
              <Link href="/dashboard" className="hover:text-blue-600">
                Home
              </Link>

              <Link href="/profile" className="hover:text-blue-600">
                Profile
              </Link>

              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>

              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>

              <Link href="/auth/signup" className="hover:text-blue-600">
                Signup
              </Link>
              </nav>
            </header>
    )
}
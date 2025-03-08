import Link from "next/link";
import { Handshake } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DashboardBtn from "./DashboardBtn";
import { ModeToggle } from "./ui/ModeToggle";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-sans hover:opacity-80 transition-opacity"
        >
          <Handshake className="size-8 text-blue-400" />
          <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            Talent-Meet
          </span>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <div className="flex items-center space-x-4 ml-auto">
          <ModeToggle />
          <SignedIn>
            <DashboardBtn />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

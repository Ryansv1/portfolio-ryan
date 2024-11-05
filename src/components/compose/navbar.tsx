'use client'
import { motion } from "framer-motion";
import { House, FolderCode, BriefcaseBusiness, CodeXml, PencilLine, Folder } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <motion.nav
    className="flex flex-row bg-gray-400 rounded-lg shadow-md font p-2 sticky space-x-6 "
    initial={{ opacity: 0, }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <NavBarButton icon={<House/>} route="/" />
      <NavBarButton icon={<FolderCode />} route="/" />
      <NavBarButton icon={<BriefcaseBusiness />} route="/" />
      <NavBarButton icon={<CodeXml />} route="/" />
      <NavBarButton icon={<PencilLine />} route="/" />
      
    </motion.nav>
  );
}

interface NavBarButtonProps {
  icon: React.ReactNode,
  route: string
}

const NavBarButton = ({ icon, route}: NavBarButtonProps) => {
return (
  <button className="text-white text-center">
    <Link href={route}>
    {icon}
    </Link>
  </button>
)
}

export { NavBar };
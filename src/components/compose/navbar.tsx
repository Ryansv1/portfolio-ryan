"use client";
import { motion } from "framer-motion";
import {
  House,
  FolderCode,
  BriefcaseBusiness,
  CodeXml,
  PencilLine,
  ChevronUp,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <motion.nav
      className="flex flex-row  bg-gray-400 rounded-lg h-14 shadow-md font p-2 max-w-max space-x-6 fixed top-2"
      initial={{ opacity: 0, origin: "center" }}
      animate={{ opacity: 1, origin: "left" }}
      exit={{ opacity: 0 }}
      transition={{ staggerChildren: 0.1, staggerDirection: 1 }}
    >
      <NavBarButton icon={<House />} route="/" />
      <NavBarButton icon={<FolderCode />} route="/" />
      <NavBarButton icon={<BriefcaseBusiness />} route="/" />
      <NavBarButton icon={<CodeXml />} route="/" />
      <NavBarButton icon={<PencilLine />} route="/" />
    </motion.nav>
  );
};

interface NavBarButtonProps {
  icon: React.ReactNode;
  route: string;
}

const NavBarButton = ({ icon, route }: NavBarButtonProps) => {
  return (
    <motion.button
      className="text-white text-center ring-white rounded-lg p-2 "
      initial={{
        translateY: -10,
        opacity: 0,
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        boxShadow: "0 0 3px 0 #ffffff",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // Added delay to the animation
    >
      <Link href={route}>{icon}</Link>
    </motion.button>
  );
};

const NavBarButtonToTop = () => {
  return (
    <motion.button
      initial={{
        translateY: -10,
        opacity: 0,
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        boxShadow: "0 0 10px 0 #ffffff",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // Added delay to the animation
      className="rounded-lg bg-gray-400 p-2 text-white shadow-lg fixed bottom-4 right-4"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ChevronUp />
    </motion.button>
  );
};

export { NavBar, NavBarButtonToTop };

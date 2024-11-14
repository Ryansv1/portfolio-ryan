"use client";
import { Mail } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const ContainerButton = ({
  icon,
  text,
  url,
}: {
  icon: React.ReactNode;
  text: string;
  url: string;
}) => {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1.0 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.15 },
      }}
      className="flex flex-row gap-2 justify-center items-center text-white ring-white rounded-lg p-2 ring-2"
      href={url}
    >
      {icon}

      {text}
    </motion.a>
  );
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-svh">
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.25 }}
        exit={{ opacity: 0 }}
        className="bg-gray-900 shadow-lg p-6 min-h-72 flex flex-col rounded-md"
      >
        <h1 className="text-white text-2xl font-primary">
          Me mande uma mensagem!
        </h1>
        <section className="flex flex-row space-x-4 my-auto mx-auto">
          <ContainerButton
            icon={<Mail />}
            text="Email"
            url="mailto:ryaan.gs2020@gmail.com"
          />
          <ContainerButton
            icon={<GitHubLogoIcon />}
            text="GitHub"
            url="https://github.com/Ryansv1"
          />
        </section>
      </motion.section>
    </main>
  );
}

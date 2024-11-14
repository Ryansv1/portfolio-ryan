"use client";
import Image from "next/image";
import me from "../_public/images/ryan.jpg";

import { ChevronUp } from "lucide-react";

import { Container } from "@/components/compose/container";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const section2 = useRef(null);
  const isInView = useInView(section2);
  return (
    <>
      <main className="min-h-svh">
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25 }}
          exit={{ opacity: 0 }}
          className="container mx-auto p-4 flex flex-col sm:flex-row w-full items-center space-y-4 md:space-y-0 gap-4"
        >
          <Image
            className="ring-2 rounded-lg ring-black object-fill w-5/6 sm:w-2/4 md:w-3/5 lg:w-2/6"
            src={me}
            alt="Ryan"
          />
          <div className="font-primary text-white text-center lg:text-center text-wrap text-break break-normal w-full">
            <h1 className="leading-none text-4xl">Ryan da Silva</h1>
            <h4 className="text-lg font-normal mt-3">
              I am a software developer with a passion for learning and
              creating.
            </h4>
          </div>
        </motion.section>
        <motion.section>
          <motion.div
            ref={section2}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1.25, delay: 0.15 }}
            exit={{ opacity: 0, x: 100 }}
            className="flex flex-col items-center justify-center space-y-4 p-4 min-h-72 container mx-auto"
          >
            <h1 className="text-3xl font-primary text-white">About me</h1>
            <p className="text-white text-center text-base font-primary">
              Me chamo Ryan.
              <br />
              Sou desenvolvedor fullstack desde 2022, com uma base sólida em
              tecnologia da informação. Meu foco é criar soluções bem
              estruturadas e eficientes, sempre buscando atender às necessidades
              reais dos projetos. Acredito que cada linha de código deve
              contribuir para um produto final útil, de qualidade, e que seja
              vendável.
            </p>
          </motion.div>
        </motion.section>
      </main>
      <motion.footer
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center text-white bottom-0 min-h-48 bg-gray-900"
      >
        <h1>Ryan©dev</h1>
      </motion.footer>
    </>
  );
}

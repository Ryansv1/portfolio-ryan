import Image from "next/image";
import me from "../_public/images/ryan.jpg";
import { NavBar, NavBarButtonToTop } from "@/components/compose/navbar";
import { ChevronUp } from "lucide-react";
import { LayoutGroup } from "framer-motion";
import { Container } from "@/components/compose/container";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center p-4 h-16">
        <LayoutGroup>
          <NavBar />
          <NavBarButtonToTop />
        </LayoutGroup>
      </header>
      <main>
        <section className="container mx-auto p-4 flex flex-col sm:flex-row w-full items-center space-y-4 md:space-y-0 gap-4">
          <Image
            className="ring-2 rounded-lg ring-black object-fill w-5/6 sm:w-2/4 md:3/5"
            src={me}
            alt="Ryan"
          />
          <div className="font-primary text-white text-center lg:text-left text-wrap text-break break-normal">
            <h1 className="leading-none text-4xl ">Ryan da Silva</h1>
            <h4 className="text-lg font-normal mt-3">
              I am a software developer with a passion for learning and
              creating.
            </h4>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

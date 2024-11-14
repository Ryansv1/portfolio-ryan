"use client";

import { LayoutGroup } from "framer-motion";
import { NavBar, NavBarButtonToTop } from "./navbar";

export const Header = () => {
  return (
    <header className="flex items-center justify-center p-4 h-16">
      <LayoutGroup>
        <NavBar />
        <NavBarButtonToTop />
      </LayoutGroup>
    </header>
  );
};

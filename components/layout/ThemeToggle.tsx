"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Light / dark switch. Both icons are rendered; CSS shows the right one,
 * so there is no flash and no mismatch between server and browser.
 * The choice is saved in localStorage. If it matches the device setting,
 * the saved value is cleared so the site follows the device again.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") ?? (systemDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    try {
      if ((next === "dark") === systemDark) {
        root.removeAttribute("data-theme");
        localStorage.removeItem("theme");
      } else {
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      }
    } catch {
      root.setAttribute("data-theme", next);
    }
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Switch between light and dark mode" title="Light / dark mode">
      <Moon size={20} aria-hidden="true" className="icon-moon" />
      <Sun size={20} aria-hidden="true" className="icon-sun" />
    </button>
  );
}

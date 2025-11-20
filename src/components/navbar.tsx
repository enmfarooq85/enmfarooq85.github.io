import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, NotepadTextDashed } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

// Import separate data
import { menuItems, cvData } from "@/data/navbar";

export default function NavbarSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`sticky top-0 z-50 border-b bg-indigo-50/80 p-4 
        backdrop-blur-md transition ${
          isScrolled ? "shadow-sm" : ""
        } dark:bg-indigo-900/70`}
    >
      <nav className="mx-auto hidden max-w-7xl lg:flex lg:items-center lg:justify-between">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-indigo-900 dark:text-white"
        >
          Maha Zainab
        </Link>
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.url}
                    className="inline-flex h-10 items-center px-3 text-lg font-medium
                    text-indigo-800 hover:text-indigo-950 transition
                    dark:text-indigo-200 dark:hover:text-white"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Link to={cvData.url}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border border-indigo-900 px-6 py-3 text-lg font-semibold text-indigo-900
              hover:bg-indigo-900 hover:text-white transition
              dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {cvData.title}
              <NotepadTextDashed className="ml-2" />
            </Button>
          </Link>
        </div>
      </nav>
      <div className="flex items-center justify-between lg:hidden">
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-indigo-900 dark:text-white"
        >
          Maha Zainab
        </Link>
        <button
          className="p-2 rounded-md border border-indigo-500 dark:border-indigo-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={24} className="text-indigo-700 dark:text-indigo-200" />
          ) : (
            <Menu size={24} className="text-indigo-700 dark:text-indigo-200" />
          )}
        </button>
      </div>
      {mobileOpen && (
        <div className="mt-4 flex flex-col gap-4 lg:hidden animate-in fade-in slide-in-from-top-2">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-indigo-800 hover:text-indigo-950
              dark:text-indigo-200 dark:hover:text-white transition"
            >
              {item.title}
            </Link>
          ))}

          <Link to={cvData.url} onClick={() => setMobileOpen(false)}>
            <Button
              variant="outline"
              className="w-full rounded-full border border-indigo-900 py-3 text-lg font-semibold text-indigo-900
              hover:bg-indigo-900 hover:text-white transition
              dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {cvData.title}
              <NotepadTextDashed className="ml-2" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

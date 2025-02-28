
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-subtle dark:bg-neutral-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-bazaar-600 to-bazaar-800">
                Creatix Bazaar
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              Explore
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              Submit
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-sm"
            >
              Sign In
            </Button>
            <Button size="sm" className="text-sm bg-bazaar-600 hover:bg-bazaar-700">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

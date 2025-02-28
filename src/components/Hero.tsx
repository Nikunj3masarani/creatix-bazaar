
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-bazaar-200/40 filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-bazaar-300/30 filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
            }`}
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium bg-bazaar-100 text-bazaar-800 dark:bg-bazaar-900 dark:text-bazaar-200">
              Discover the perfect prompts for your projects
            </span>
          </div>
          
          <h1 
            className={`mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white transition-all duration-1000 delay-100 ease-out ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
            }`}
          >
            <span className="text-balance">Unleash your creativity with</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-bazaar-600 to-bazaar-800">
              hand-crafted prompts
            </span>
          </h1>
          
          <p 
            className={`mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-300 transition-all duration-1000 delay-200 ease-out ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
            }`}
          >
            Browse our curated marketplace of prompts designed to inspire, assist, and elevate your creative and professional projects.
          </p>
          
          <div 
            className={`mt-8 max-w-md mx-auto transition-all duration-1000 delay-300 ease-out ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
            }`}
          >
            <div className="relative rounded-lg shadow-sm">
              <Input
                type="text"
                placeholder="Search for prompts..."
                className="pr-12 h-12 w-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
            </div>
          </div>
          
          <div 
            className={`mt-6 transition-all duration-1000 delay-400 ease-out ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
            }`}
          >
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Popular: 
              <button className="ml-2 mr-1 px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                writing
              </button>
              <button className="mx-1 px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                business
              </button>
              <button className="mx-1 px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                technology
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

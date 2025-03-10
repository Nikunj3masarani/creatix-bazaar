
import { useEffect, useState } from "react";

const Footer = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            className={`col-span-1 md:col-span-1 transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-bazaar-600 to-bazaar-800 mb-4">
              Creatix Bazaar
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Discover and share the best prompts for your creative and professional projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-bazaar-600 dark:hover:text-bazaar-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-bazaar-600 dark:hover:text-bazaar-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Discover</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Browse Prompts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Featured Prompts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  New Additions
                </a>
              </li>
            </ul>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-400 ${
              loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors">
                  Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          className={`mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          }`}
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500 text-center">
            &copy; {new Date().getFullYear()} Creatix Bazaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

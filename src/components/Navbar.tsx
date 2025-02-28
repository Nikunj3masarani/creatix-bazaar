
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, UserCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check if user is authenticated from localStorage
    const checkAuth = () => {
      const user = localStorage.getItem("user");
      if (user) {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignIn = () => {
    setIsSignInOpen(true);
  };

  const handleSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
      duration: 3000,
    });
  };

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

            {!isAuthenticated ? (
              <>
                <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden md:inline-flex text-sm"
                      onClick={handleSignIn}
                    >
                      Sign In
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <SignIn onSuccess={() => {
                      setIsSignInOpen(false);
                      setIsAuthenticated(true);
                    }} />
                  </DialogContent>
                </Dialog>

                <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm" 
                      className="text-sm bg-bazaar-600 hover:bg-bazaar-700"
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <SignUp onSuccess={() => {
                      setIsSignUpOpen(false);
                      setIsAuthenticated(true);
                    }} />
                  </DialogContent>
                </Dialog>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <UserCircle className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">My Prompts</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Settings</a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

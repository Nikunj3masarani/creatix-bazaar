
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [userProfile, setUserProfile] = useState<{ name?: string, email?: string } | null>(null);
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

    // Check the current auth session and subscribe to auth changes
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setIsAuthenticated(!!session);
      
      if (session?.user) {
        const { data } = await supabase
          .from('profiles')
          .select('name, email')
          .eq('id', session.user.id)
          .single();
        
        setUserProfile(data);
      }
    };

    checkAuth();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsAuthenticated(!!session);
      
      // Fetch user profile when auth state changes
      if (session?.user) {
        supabase
          .from('profiles')
          .select('name, email')
          .eq('id', session.user.id)
          .single()
          .then(({ data }) => {
            setUserProfile(data);
          });
      } else {
        setUserProfile(null);
      }
    });

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = () => {
    setIsSignInOpen(true);
  };

  const handleSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
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
            <Link to="/" className="flex items-center">
              <span className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-bazaar-600 to-bazaar-800">
                Creatix Bazaar
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/explore"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              Explore
            </Link>
            <Link
              to="/categories"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              Categories
            </Link>
            <Link
              to="/submit"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              Submit
            </Link>
            <Link
              to="/about"
              className="text-neutral-600 hover:text-bazaar-600 text-sm font-medium transition-colors duration-200 dark:text-neutral-300 dark:hover:text-bazaar-400"
            >
              About
            </Link>
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
                  <DropdownMenuLabel>
                    {userProfile?.name || session?.user?.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/my-prompts" className="w-full">My Prompts</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings" className="w-full">Settings</Link>
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

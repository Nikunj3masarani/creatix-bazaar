
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface SignInProps {
  onSuccess: () => void;
}

const SignIn = ({ onSuccess }: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Success notification
      toast({
        title: "Success",
        description: "You have been signed in successfully",
        duration: 3000,
      });
      
      onSuccess();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to sign in",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4 py-2 pb-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        <p className="text-muted-foreground text-sm mt-1">Sign in to your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <a href="#" className="text-sm text-bazaar-600 hover:text-bazaar-700">
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-bazaar-600 hover:bg-bazaar-700" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
      
      <div className="mt-4 text-center text-sm">
        <span className="text-muted-foreground">Don't have an account?</span>{" "}
        <a href="#" className="text-bazaar-600 hover:text-bazaar-700 font-medium">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default SignIn;

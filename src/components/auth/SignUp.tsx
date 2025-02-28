
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface SignUpProps {
  onSuccess: () => void;
}

const SignUp = ({ onSuccess }: SignUpProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Register the user with Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        throw error;
      }

      // Success notification
      toast({
        title: "Account Created",
        description: "Your account has been created successfully",
        duration: 3000,
      });
      
      onSuccess();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create account",
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
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <p className="text-muted-foreground text-sm mt-1">Join our community of prompt creators</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">
            Full Name
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        
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
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-bazaar-600 hover:bg-bazaar-700" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "Sign Up"}
        </Button>
      </form>
      
      <div className="mt-4 text-center text-sm">
        <span className="text-muted-foreground">Already have an account?</span>{" "}
        <a href="#" className="text-bazaar-600 hover:text-bazaar-700 font-medium">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default SignUp;

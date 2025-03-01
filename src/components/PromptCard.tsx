
import { useState, useRef } from "react";
import { Prompt } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Copy, Heart, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";

interface PromptCardProps {
  prompt: Prompt;
  featured?: boolean;
}

const PromptCard = ({ prompt, featured = false }: PromptCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [stats, setStats] = useState(prompt.stats);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.content);
    setStats(prev => ({
      ...prev,
      copies: prev.copies + 1
    }));
    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard.",
      variant: "default",
    });
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
    setStats(prev => ({
      ...prev,
      likes: isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };
  
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };
  
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className={`group ${featured ? 'md:col-span-2' : ''}`}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className={`card-hover h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-subtle transition-all duration-300 ${
          isHovered ? 'shadow-elevated border-neutral-300 dark:border-neutral-700' : ''
        }`}
      >
        <CardHeader className="p-5 pb-3">
          <div className="flex justify-between items-start">
            <div>
              <div className="inline-flex mb-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-bazaar-100 text-bazaar-700 dark:bg-bazaar-900 dark:text-bazaar-300">
                  {prompt.category}
                </span>
              </div>
              <CardTitle className="text-lg font-semibold text-neutral-800 dark:text-white">
                {prompt.title}
              </CardTitle>
              <CardDescription className="mt-1 text-neutral-600 dark:text-neutral-400">
                {truncateText(prompt.description, 120)}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-5 pt-2">
          <div className="mt-2 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 font-mono">
            {truncateText(prompt.content, featured ? 200 : 120)}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {prompt.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="p-5 pt-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden flex-shrink-0 flex items-center justify-center">
              {!imageError && prompt.author.avatar ? (
                <img 
                  src={prompt.author.avatar} 
                  alt={prompt.author.name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <User className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400" />
              )}
            </div>
            <span className="text-xs text-neutral-600 dark:text-neutral-400">
              {prompt.author.name}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      onClick={toggleLike}
                      className="flex items-center space-x-1 text-xs text-neutral-500 hover:text-bazaar-600 dark:text-neutral-400 dark:hover:text-bazaar-400 transition-colors"
                    >
                      <Heart 
                        className={`h-3.5 w-3.5 ${isLiked ? 'fill-bazaar-600 text-bazaar-600 dark:fill-bazaar-400 dark:text-bazaar-400' : ''}`} 
                      />
                      <span>{formatNumber(stats.likes)}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Like this prompt</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={copyToClipboard}
                    className="h-8 bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800"
                  >
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">Copy</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy prompt to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PromptCard;

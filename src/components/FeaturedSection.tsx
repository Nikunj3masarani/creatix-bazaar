
import { useState, useEffect, useRef } from "react";
import { Prompt } from "@/lib/types";
import PromptCard from "./PromptCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedSectionProps {
  prompts: Prompt[];
}

const FeaturedSection = ({ prompts }: FeaturedSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? prompts.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-40 w-80 h-80 rounded-full bg-bazaar-200/30 filter blur-3xl opacity-30 dark:bg-bazaar-900/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div 
            className={`transition-all duration-700 ${
              loaded ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-6"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
              Featured Prompts
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Hand-picked prompts from our collection
            </p>
          </div>
          
          <div 
            className={`flex items-center space-x-2 transition-all duration-700 ${
              loaded ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-6"
            }`}
          >
            <Button 
              onClick={prevSlide} 
              size="icon" 
              variant="outline"
              className="h-9 w-9 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              onClick={nextSlide} 
              size="icon" 
              variant="outline"
              className="h-9 w-9 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              disabled={isAnimating}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className={`relative transition-all duration-700 ${
            loaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {prompts.map((prompt, index) => (
              <div 
                key={prompt.id} 
                className="w-full flex-shrink-0 px-1"
              >
                <PromptCard prompt={prompt} featured={true} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {prompts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-bazaar-600 w-6" 
                    : "bg-neutral-300 dark:bg-neutral-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;

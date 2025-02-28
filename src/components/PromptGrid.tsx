
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { Prompt, SearchFilters } from "@/lib/types";

interface PromptGridProps {
  prompts: Prompt[];
  filters: SearchFilters;
  searchQuery?: string;
}

const PromptGrid = ({ prompts, filters, searchQuery }: PromptGridProps) => {
  const [filteredPrompts, setFilteredPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time for visual effect
    const timer = setTimeout(() => {
      let results = [...prompts];
      
      // Apply category filter
      if (filters.category && filters.category !== "All") {
        results = results.filter(
          (prompt) => prompt.category === filters.category
        );
      }
      
      // Apply search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        results = results.filter(
          (prompt) =>
            prompt.title.toLowerCase().includes(query) ||
            prompt.description.toLowerCase().includes(query) ||
            prompt.content.toLowerCase().includes(query) ||
            prompt.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }
      
      // Apply sorting
      if (filters.sortBy === "popular") {
        results.sort((a, b) => b.stats.views - a.stats.views);
      } else if (filters.sortBy === "newest") {
        results.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (filters.sortBy === "most copied") {
        results.sort((a, b) => b.stats.copies - a.stats.copies);
      }
      
      setFilteredPrompts(results);
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [prompts, filters, searchQuery]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-neutral-100 dark:bg-neutral-800 rounded-xl h-80 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (filteredPrompts.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-300">
          No prompts found
        </h3>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPrompts.map((prompt, index) => (
        <PromptCard 
          key={prompt.id} 
          prompt={prompt} 
          featured={index === 0} 
        />
      ))}
    </div>
  );
};

export default PromptGrid;

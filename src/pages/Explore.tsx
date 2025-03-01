
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FilterMenu from "@/components/FilterMenu";
import PromptGrid from "@/components/PromptGrid";
import { Prompt, SearchFilters, Category } from "@/lib/types";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<SearchFilters>({
    category: "All",
    sortBy: "newest"
  });

  // Fetch prompts from Supabase
  const { data: prompts, isLoading, error } = useQuery({
    queryKey: ["prompts", filters],
    queryFn: async () => {
      let query = supabase
        .from("prompts")
        .select(`
          id,
          title,
          description,
          content,
          category,
          tags,
          created_at,
          stats,
          profiles (name, avatar_url)
        `);

      if (filters.category !== "All") {
        query = query.eq("category", filters.category);
      }

      if (filters.sortBy === "newest") {
        query = query.order("created_at", { ascending: false });
      } else if (filters.sortBy === "popular") {
        // For now, we'll sort by raw views value, but this could be more sophisticated
        query = query.order("stats->views", { ascending: false });
      } else if (filters.sortBy === "most copied") {
        query = query.order("stats->copies", { ascending: false });
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching prompts:", error);
        throw new Error("Failed to fetch prompts");
      }

      return data.map((item): Prompt => {
        // Parse the stats from JSON if needed
        let stats = { views: 0, copies: 0, likes: 0 };
        if (typeof item.stats === 'object' && item.stats !== null) {
          // Safely access nested properties with type checking
          const statsObj = item.stats as Record<string, any>;
          stats = {
            views: typeof statsObj.views === 'number' ? statsObj.views : 0,
            copies: typeof statsObj.copies === 'number' ? statsObj.copies : 0,
            likes: typeof statsObj.likes === 'number' ? statsObj.likes : 0
          };
        }

        return {
          id: item.id,
          title: item.title,
          description: item.description,
          content: item.content,
          category: item.category as Category,
          tags: item.tags || [],
          author: {
            name: item.profiles?.name || "Anonymous",
            avatar: item.profiles?.avatar_url
          },
          stats: stats,
          createdAt: item.created_at
        };
      });
    }
  });

  // Filter prompts by search query
  const filteredPrompts = prompts?.filter(prompt => {
    if (!searchQuery) return true;
    
    const searchLower = searchQuery.toLowerCase();
    return (
      prompt.title.toLowerCase().includes(searchLower) ||
      prompt.description.toLowerCase().includes(searchLower) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Explore Prompts
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Discover the best prompts created by our community. Find inspiration for your next project.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search prompts by title, description, or tags..."
              />
            </div>
            <div>
              <FilterMenu filters={filters} onChange={setFilters} />
            </div>
          </div>
          
          {error ? (
            <div className="p-8 text-center rounded-lg bg-red-50 dark:bg-red-900/10">
              <p className="text-red-600 dark:text-red-400">
                Failed to load prompts. Please try again later.
              </p>
            </div>
          ) : (
            <PromptGrid 
              prompts={filteredPrompts || []} 
              isLoading={isLoading} 
              emptyMessage="No prompts found. Try adjusting your search or filters."
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;

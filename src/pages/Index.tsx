
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FilterMenu from "@/components/FilterMenu";
import PromptGrid from "@/components/PromptGrid";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import { prompts, featuredPrompts } from "@/lib/data";
import { SearchFilters } from "@/lib/types";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<SearchFilters>({
    category: "All",
    sortBy: "popular",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Section */}
        <FeaturedSection prompts={featuredPrompts} />
        
        {/* Browse Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div 
              className={`transition-all duration-700 ${
                isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-6"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                Browse All Prompts
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 mb-8">
                Discover prompts from our community
              </p>
            </div>
            
            <div 
              className={`mb-8 transition-all duration-700 delay-100 ${
                isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-6"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <SearchBar onSearch={handleSearch} />
                <FilterMenu filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </div>
            
            <div 
              className={`transition-all duration-700 delay-200 ${
                isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-6"
              }`}
            >
              <PromptGrid 
                prompts={prompts} 
                filters={filters} 
                searchQuery={searchQuery} 
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

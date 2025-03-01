
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Filter } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Category, SearchFilters } from "@/lib/types";
import { categories } from "@/lib/data";

interface FilterMenuProps {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
}

const FilterMenu = ({ filters, onChange }: FilterMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (value: string) => {
    onChange({ 
      ...filters, 
      category: value as Category 
    });
  };

  const handleSortChange = (value: string) => {
    onChange({ 
      ...filters, 
      sortBy: value as "popular" | "newest" | "most copied" 
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center space-x-1 h-10 px-3 border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 transition-colors"
          >
            <Filter className="h-4 w-4 text-neutral-500" />
            <span className="text-sm font-medium">Filters</span>
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white dark:bg-neutral-900 shadow-elevated border border-neutral-200 dark:border-neutral-800 rounded-lg p-1 animate-in fade-in-80">
          <DropdownMenuLabel className="text-neutral-500 dark:text-neutral-400 px-2 py-1.5 text-sm font-normal">Categories</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-neutral-100 dark:bg-neutral-800" />
          <DropdownMenuRadioGroup value={filters.category} onValueChange={handleCategoryChange}>
            {categories.map((category) => (
              <DropdownMenuRadioItem 
                key={category} 
                value={category}
                className="px-2 py-1.5 text-sm cursor-pointer rounded-md data-[highlighted]:bg-neutral-100 data-[highlighted]:dark:bg-neutral-800 flex items-center justify-between text-neutral-700 dark:text-neutral-300"
              >
                {category}
                {filters.category === category && (
                  <Check className="h-4 w-4 text-bazaar-600" />
                )}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          
          <DropdownMenuSeparator className="bg-neutral-100 dark:bg-neutral-800 my-1" />
          
          <DropdownMenuLabel className="text-neutral-500 dark:text-neutral-400 px-2 py-1.5 text-sm font-normal">Sort By</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-neutral-100 dark:bg-neutral-800" />
          <DropdownMenuRadioGroup value={filters.sortBy} onValueChange={handleSortChange}>
            <DropdownMenuRadioItem 
              value="popular" 
              className="px-2 py-1.5 text-sm cursor-pointer rounded-md data-[highlighted]:bg-neutral-100 data-[highlighted]:dark:bg-neutral-800 flex items-center justify-between text-neutral-700 dark:text-neutral-300"
            >
              Most Popular
              {filters.sortBy === "popular" && (
                <Check className="h-4 w-4 text-bazaar-600" />
              )}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem 
              value="newest" 
              className="px-2 py-1.5 text-sm cursor-pointer rounded-md data-[highlighted]:bg-neutral-100 data-[highlighted]:dark:bg-neutral-800 flex items-center justify-between text-neutral-700 dark:text-neutral-300"
            >
              Newest
              {filters.sortBy === "newest" && (
                <Check className="h-4 w-4 text-bazaar-600" />
              )}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem 
              value="most copied" 
              className="px-2 py-1.5 text-sm cursor-pointer rounded-md data-[highlighted]:bg-neutral-100 data-[highlighted]:dark:bg-neutral-800 flex items-center justify-between text-neutral-700 dark:text-neutral-300"
            >
              Most Copied
              {filters.sortBy === "most copied" && (
                <Check className="h-4 w-4 text-bazaar-600" />
              )}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center space-x-1 h-10 px-3 border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 transition-colors"
          >
            <span className="text-sm font-medium">{filters.category}</span>
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-white dark:bg-neutral-900 shadow-elevated border border-neutral-200 dark:border-neutral-800 rounded-lg p-1 animate-in fade-in-80">
          <DropdownMenuRadioGroup value={filters.category} onValueChange={handleCategoryChange}>
            {categories.map((category) => (
              <DropdownMenuRadioItem 
                key={category} 
                value={category}
                className="px-2 py-1.5 text-sm cursor-pointer rounded-md data-[highlighted]:bg-neutral-100 data-[highlighted]:dark:bg-neutral-800 flex items-center justify-between text-neutral-700 dark:text-neutral-300"
              >
                {category}
                {filters.category === category && (
                  <Check className="h-4 w-4 text-bazaar-600" />
                )}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterMenu;

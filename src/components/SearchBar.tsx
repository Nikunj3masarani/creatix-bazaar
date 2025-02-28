
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="relative w-full max-w-xl mx-auto transition-all duration-300 hover:shadow-sm focus-within:shadow-sm rounded-full"
    >
      <Input
        type="text"
        placeholder="Search for prompts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-12 pr-12 pl-5 rounded-full border-neutral-200 focus:border-bazaar-400 transition-all"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bazaar-600 hover:bg-bazaar-700 text-white transition-colors duration-200"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
};

export default SearchBar;

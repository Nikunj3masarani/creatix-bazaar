
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search..." }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative w-full max-w-xl mx-auto transition-all duration-300 hover:shadow-sm focus-within:shadow-sm rounded-full"
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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

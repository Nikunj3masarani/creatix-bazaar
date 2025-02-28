
export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  stats: {
    views: number;
    copies: number;
    likes: number;
  };
  createdAt: string;
}

export type Category = 
  | "All"
  | "Creative Writing"
  | "Business"
  | "Technology"
  | "Education"
  | "Personal Development"
  | "Marketing"
  | "Design";

export interface SearchFilters {
  category: Category;
  sortBy: "popular" | "newest" | "most copied";
}

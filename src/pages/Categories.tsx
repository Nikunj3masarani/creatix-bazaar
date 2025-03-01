
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Category } from "@/lib/types";

const categoryData: {
  name: Category;
  description: string;
  icon: string;
  count?: number;
}[] = [
  {
    name: "Creative Writing",
    description: "Prompts for stories, poetry, scripts, and other creative content",
    icon: "✍️",
    count: 42
  },
  {
    name: "Business",
    description: "Email templates, business plans, proposals, and marketing ideas",
    icon: "💼",
    count: 38
  },
  {
    name: "Technology",
    description: "Programming assistance, explanations, and technical documentation",
    icon: "💻",
    count: 27
  },
  {
    name: "Education",
    description: "Learning materials, lesson plans, and educational content",
    icon: "🎓",
    count: 31
  },
  {
    name: "Personal Development",
    description: "Self-improvement, motivation, and life advice",
    icon: "🌱",
    count: 22
  },
  {
    name: "Marketing",
    description: "Ad copy, social media content, and marketing strategies",
    icon: "📈",
    count: 35
  },
  {
    name: "Design",
    description: "Design ideas, image generation, and visual content",
    icon: "🎨",
    count: 29
  }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: Category) => {
    navigate(`/explore?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Prompt Categories
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Browse prompts by category to find exactly what you're looking for.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryData.map((category) => (
              <div 
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all hover:shadow-md hover:scale-[1.01] cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                      {category.description}
                    </p>
                    {category.count !== undefined && (
                      <p className="text-sm text-neutral-500 dark:text-neutral-500">
                        {category.count} prompts available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;

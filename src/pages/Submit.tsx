
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/lib/types";

const Submit = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "Creative Writing" as Category,
    tags: ""
  });

  const categories: Category[] = [
    "Creative Writing",
    "Business",
    "Technology",
    "Education",
    "Personal Development",
    "Marketing",
    "Design"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check authentication
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast.error("You must be logged in to submit a prompt");
      navigate("/auth");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const tagsArray = formData.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag !== "");

      const { error } = await supabase.from("prompts").insert({
        title: formData.title,
        description: formData.description,
        content: formData.content,
        category: formData.category,
        tags: tagsArray,
        user_id: session.user.id
      });

      if (error) {
        console.error("Error submitting prompt:", error);
        toast.error("Failed to submit prompt. Please try again.");
      } else {
        toast.success("Prompt submitted successfully!");
        navigate("/explore");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Submit Your Prompt
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Share your best prompts with our community and help others create amazing content.
          </p>
          
          <Card className="border border-neutral-200 dark:border-neutral-800">
            <CardHeader className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 rounded-t-lg">
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                Prompt Details
              </h2>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Title
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter a catchy title for your prompt"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide a short description of what this prompt does"
                    required
                    className="w-full resize-none min-h-[80px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="content" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Prompt Content
                  </label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Paste your full prompt here"
                    required
                    className="w-full min-h-[160px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="tags" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Tags
                  </label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Enter tags separated by commas (e.g., chatgpt, marketing, seo)"
                    className="w-full"
                  />
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    Tags help others discover your prompt. Separate with commas.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Prompt"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Submit;

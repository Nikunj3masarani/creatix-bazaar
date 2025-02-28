
import { Prompt, Category } from "./types";
import { v4 as uuidv4 } from 'uuid';

// Helper function to generate a random date within the last 30 days
const randomDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  return date.toISOString();
};

// Helper function to generate random stats
const randomStats = () => {
  return {
    views: Math.floor(Math.random() * 10000),
    copies: Math.floor(Math.random() * 1000),
    likes: Math.floor(Math.random() * 500),
  };
};

export const categories: Category[] = [
  "All",
  "Creative Writing",
  "Business",
  "Technology",
  "Education",
  "Personal Development",
  "Marketing",
  "Design"
];

export const prompts: Prompt[] = [
  {
    id: uuidv4(),
    title: "Comprehensive Business Plan Creator",
    description: "Generate a detailed business plan for your startup or new venture.",
    content: "Create a comprehensive business plan for [business type] including executive summary, company description, market analysis, organization structure, product line, marketing strategy, funding request, and financial projections. The business operates in [industry] and targets [target market].",
    category: "Business",
    tags: ["Business Plan", "Startup", "Strategy"],
    author: {
      name: "Alex Morgan",
      avatar: "/images/avatar-1.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Technical Interview Preparation",
    description: "Prepare for coding interviews with custom problem scenarios.",
    content: "Act as a technical interviewer for a [position] role. Create a realistic coding challenge about [topic] that would be asked in an interview. After I solve it, critique my solution for time/space complexity and suggest optimizations.",
    category: "Technology",
    tags: ["Interviews", "Coding", "Career"],
    author: {
      name: "Taylor Chen",
      avatar: "/images/avatar-2.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Educational Content Simplifier",
    description: "Transform complex topics into easy-to-understand explanations.",
    content: "Explain [complex topic] in simple terms as if you're teaching a 10-year-old. Use analogies, simple examples, and avoid jargon. Include 3-5 key points that are essential to understanding the basic concept.",
    category: "Education",
    tags: ["Learning", "Simplification", "Teaching"],
    author: {
      name: "Jordan Lee",
      avatar: "/images/avatar-3.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Creative Story Generator",
    description: "Generate unique fictional stories based on your inputs.",
    content: "Write a short story in the style of [author] about [character] who discovers [unusual item/ability] and must [goal/challenge]. Set the story in [setting] and include themes of [theme1] and [theme2].",
    category: "Creative Writing",
    tags: ["Fiction", "Storytelling", "Creativity"],
    author: {
      name: "Riley Smith",
      avatar: "/images/avatar-4.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Personal Development Plan",
    description: "Create a customized self-improvement plan for any skill.",
    content: "Create a 30-day development plan to improve [skill/area]. Include daily actions, weekly milestones, resources to utilize, potential obstacles, and how to measure progress. The plan should be realistic for someone with [current level] experience who can dedicate [time available] per day.",
    category: "Personal Development",
    tags: ["Self Improvement", "Productivity", "Goals"],
    author: {
      name: "Jamie Wilson",
      avatar: "/images/avatar-5.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Social Media Content Calendar",
    description: "Generate a month of engaging social media content ideas.",
    content: "Create a 4-week social media content calendar for a [business type] with [specific goals]. Include post ideas for [platforms], content themes, optimal posting times, hashtag suggestions, and engagement strategies. Mix promotional content with educational and entertaining posts.",
    category: "Marketing",
    tags: ["Social Media", "Content Strategy", "Digital Marketing"],
    author: {
      name: "Casey Reynolds",
      avatar: "/images/avatar-6.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "UX/UI Design Brief Creator",
    description: "Generate comprehensive UI/UX design specifications.",
    content: "Create a detailed UX/UI design brief for a [application type] app targeting [user demographic]. Include user personas, key user flows, design requirements, visual style preferences, accessibility considerations, and success metrics. The app should solve [specific problem].",
    category: "Design",
    tags: ["UX", "UI", "Design Brief"],
    author: {
      name: "Avery Jackson",
      avatar: "/images/avatar-7.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Product Launch Press Release",
    description: "Create a compelling press release for your new product or service.",
    content: "Write a press release for the launch of [product/service name], a new [product category] by [company]. The product solves [problem] for [target audience] through [key features/innovations]. Include an attention-grabbing headline, product details, a quote from the CEO, pricing information, availability date, and company boilerplate.",
    category: "Marketing",
    tags: ["Press Release", "Product Launch", "PR"],
    author: {
      name: "Morgan Zhang",
      avatar: "/images/avatar-8.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Data Analysis Approach",
    description: "Generate a structured approach for analyzing specific datasets.",
    content: "Outline a comprehensive data analysis approach for a dataset about [topic/domain] with the goal of [analysis objective]. Include data cleaning steps, exploratory analysis techniques, statistical methods to apply, visualization suggestions, and how to interpret potential findings. Consider challenges like [potential data issues].",
    category: "Technology",
    tags: ["Data Analysis", "Statistics", "Research"],
    author: {
      name: "Drew Parker",
      avatar: "/images/avatar-9.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "AI Ethics Discussion Framework",
    description: "Structure thoughtful discussions on AI ethical considerations.",
    content: "Create a framework for discussing the ethical implications of implementing [AI technology] in [specific context/industry]. Include key stakeholders to consider, potential benefits, possible harms, relevant ethical principles, regulatory considerations, and questions that should be addressed before implementation.",
    category: "Technology",
    tags: ["AI Ethics", "Technology Ethics", "Discussion Framework"],
    author: {
      name: "Taylor Reed",
      avatar: "/images/avatar-10.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Nutrition Meal Plan Generator",
    description: "Create personalized meal plans based on dietary needs.",
    content: "Design a 7-day meal plan for someone with [dietary restrictions/goals] who wants to [health objective]. Include breakfast, lunch, dinner, and snacks with simple recipes, a shopping list, meal prep tips, and nutritional information. The plan should be realistic for someone with [cooking skill level] and [time constraints].",
    category: "Personal Development",
    tags: ["Nutrition", "Meal Planning", "Health"],
    author: {
      name: "Jordan Quinn",
      avatar: "/images/avatar-11.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  },
  {
    id: uuidv4(),
    title: "Effective Email Templates",
    description: "Professional email templates for various business scenarios.",
    content: "Create a set of professional email templates for [business context] including: 1) Following up after a meeting, 2) Requesting information, 3) Delivering difficult news, 4) Making a proposal, and 5) Expressing gratitude. Each template should be adaptable, professional in tone, and include effective subject line suggestions.",
    category: "Business",
    tags: ["Email", "Communication", "Templates"],
    author: {
      name: "Quinn Jordan",
      avatar: "/images/avatar-12.png"
    },
    stats: randomStats(),
    createdAt: randomDate()
  }
];

export const featuredPrompts = prompts.slice(0, 3);


import { Category, Prompt } from "./types";

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

// Sample prompt data for development and testing
export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Creative Story Generator",
    description: "Generate captivating short stories with unique characters and plots",
    content: "Write a short story about [character] who discovers [object] that has the power to [ability]. The story should have a twist ending that surprises the reader.",
    category: "Creative Writing",
    tags: ["fiction", "storytelling", "creative"],
    author: {
      name: "Emma Johnson",
      avatar: "https://source.unsplash.com/random/100x100/?portrait"
    },
    stats: {
      views: 1542,
      copies: 423,
      likes: 287
    },
    createdAt: "2023-09-15T10:20:30Z"
  },
  {
    id: "2",
    title: "Business Plan Outline",
    description: "Create a comprehensive business plan in minutes",
    content: "Generate a detailed business plan for a [business type] targeting [audience]. Include sections for executive summary, market analysis, financial projections, and implementation strategy.",
    category: "Business",
    tags: ["entrepreneur", "startup", "business"],
    author: {
      name: "Michael Chen",
      avatar: "https://source.unsplash.com/random/100x100/?man"
    },
    stats: {
      views: 2134,
      copies: 756,
      likes: 432
    },
    createdAt: "2023-08-22T14:45:10Z"
  },
  {
    id: "3",
    title: "Technical Documentation Template",
    description: "Create clear and comprehensive technical documentation",
    content: "Write technical documentation for [product/feature] that explains how it works, its architecture, API endpoints, and provides usage examples for developers.",
    category: "Technology",
    tags: ["documentation", "developer", "technical"],
    author: {
      name: "Alex Rivera",
      avatar: "https://source.unsplash.com/random/100x100/?developer"
    },
    stats: {
      views: 1823,
      copies: 542,
      likes: 326
    },
    createdAt: "2023-09-05T09:30:15Z"
  }
];

// Featured prompts that will be highlighted on the homepage
export const featuredPrompts: Prompt[] = [
  {
    id: "4",
    title: "Educational Course Outline",
    description: "Create structured educational content that engages students",
    content: "Design a comprehensive course outline for teaching [subject] to [audience]. Include learning objectives, lesson breakdowns, activities, assessments, and resources needed.",
    category: "Education",
    tags: ["teaching", "curriculum", "learning"],
    author: {
      name: "Sarah Williams",
      avatar: "https://source.unsplash.com/random/100x100/?teacher"
    },
    stats: {
      views: 3245,
      copies: 987,
      likes: 645
    },
    createdAt: "2023-07-18T11:25:40Z"
  },
  {
    id: "5",
    title: "Personal Growth Reflection",
    description: "Guide for meaningful self-reflection and personal development",
    content: "Create a structured reflection exercise that helps identify strengths, weaknesses, opportunities for growth, and actionable steps to improve in [area of life].",
    category: "Personal Development",
    tags: ["growth", "reflection", "mindfulness"],
    author: {
      name: "David Brown",
      avatar: "https://source.unsplash.com/random/100x100/?coach"
    },
    stats: {
      views: 2876,
      copies: 765,
      likes: 521
    },
    createdAt: "2023-08-10T16:15:20Z"
  }
];

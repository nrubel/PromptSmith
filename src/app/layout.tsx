import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt Smith",
  description:
    "Discover PromptSmith: Your AI-powered co-pilot for generating high-quality prompts across various applications, including blogs, marketing, and more. Enhance your AI interactions with tailored, intelligent suggestions.",
  keywords:
    "AI, AI prompt, prompt generation, AI-powered tools, content creation, intelligent prompts, prompt management, AI co-pilot, promptsmith, AI promptsmith, text generation, natural language processing, NLP, machine learning, AI assistant, content optimization, intelligent suggestions, AI-driven tools, creative writing, blog prompts, marketing prompts, social media prompts, chatbot prompts, customer service prompts, AI content creator, prompt builder, AI solutions, custom prompts, GPT-powered tools, AI templates, smart prompts, automated writing, prompt repository, AI integration, advanced NLP, personalized AI, text-based AI, content strategies, AI utilities, generative AI, AI writing assistant, AI-driven creativity, language models, conversational AI, AI marketing, AI-enhanced creativity, SEO prompts, digital content, intelligent systems, AI automation, language generation, AI-powered content, smart systems, AI innovation, prompt ideas, productivity tools, digital marketing, AI-driven content, smart AI, AI applications, AI technology, automated prompts, AI frameworks, natural language models, AI prompt creation, next-gen AI, prompt innovation, creative AI, writing tools, AI platforms, AI-based tools, AI-powered applications, AI for writing, intelligent content, AI tools for creators, content generation, productivity boosters, intelligent automation, AI assistant tools, writing automation, AI technology tools, prompt generation tools, content writing AI, AI-enhanced tools, AI writing solutions, AI for content, innovative prompts, AI-driven marketing, smart writing tools, automated content, AI creative writing, AI systems, AI-enabled solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}

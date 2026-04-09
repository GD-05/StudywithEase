"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Flashcard } from "@/components/Flashcard";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";

const mockFlashcards = [
  { front: "What is CSS?", back: "Cascading Style Sheets, used for styling web pages." },
  { front: "What is JS?", back: "JavaScript, a programming language for the web." },
  { front: "Next.js", back: "The React Framework for the Web." },
  { front: "Tailwind CSS", back: "A utility-first CSS framework." },
  { front: "shadcn/ui", back: "Beautifully designed components built with Radix and Tailwind." },
];

export default function FlashcardPage() {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="min-h-screen bg-background flex flex-col p-6 md:p-12">
      <div className="max-w-4xl w-full mx-auto flex flex-col h-[calc(100vh-6rem)]">
        {/* Header Tabs */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {mockFlashcards.map((_, idx) => (
              <Button
                key={idx}
                variant={currentIdx === idx ? "default" : "outline"}
                size="sm"
                className="w-10 h-10 rounded-full shrink-0"
                onClick={() => setCurrentIdx(idx)}
              >
                {idx + 1}
              </Button>
            ))}
          </div>
          <Link href="/quiz">
            <Button variant="outline" size="sm" className="rounded-full gap-2 shrink-0">
              <GraduationCap className="w-4 h-4" />
              Switch Quiz
            </Button>
          </Link>
        </div>

        {/* Central Card Area */}
        <div className="flex-1 flex items-center justify-center gap-12 -mt-12">
          {/* Side Peek (Prev) */}
          <div className="hidden lg:block opacity-20 scale-75 transform -rotate-6 transition-all grayscale blur-[2px]">
            <div className="w-64 h-80 bg-card rounded-2xl border" />
          </div>

          <Flashcard 
            key={currentIdx}
            front={mockFlashcards[currentIdx].front}
            back={mockFlashcards[currentIdx].back}
          />

          {/* Side Peek (Next) */}
          <div className="hidden lg:block opacity-20 scale-75 transform rotate-6 transition-all grayscale blur-[2px]">
            <div className="w-64 h-80 bg-card rounded-2xl border" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-auto">
          <Button
            variant="ghost"
            className="gap-2 text-lg px-6"
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
          >
            <ChevronLeft className="w-5 h-5" />
            Prev
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-lg px-10 h-14 rounded-xl border-2 hover:bg-muted"
            onClick={() => setCurrentIdx(Math.min(mockFlashcards.length - 1, currentIdx + 1))}
            disabled={currentIdx === mockFlashcards.length - 1}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

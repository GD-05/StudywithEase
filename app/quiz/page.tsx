"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QuizQuestion } from "@/components/QuizQuestion";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const mockQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
];

export default function QuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selections, setSelections] = useState<Record<number, number>>({});
  const router = useRouter();

  const handleNext = () => {
    if (currentIdx < mockQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      router.push("/results");
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const progress = ((currentIdx + 1) / mockQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col p-6 md:p-12">
      <div className="max-w-4xl w-full mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <span>Question {currentIdx + 1} of {mockQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
          <Link href="/flashcard">
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <Zap className="w-3 h-3 text-orange-500 fill-orange-500" />
              Switch Flash
            </Button>
          </Link>
        </div>

        {/* Question Area */}
        <div className="py-8">
          <QuizQuestion
            question={mockQuestions[currentIdx].question}
            options={mockQuestions[currentIdx].options}
            selectedOption={selections[currentIdx]}
            onSelect={(idx) => setSelections({ ...selections, [currentIdx]: idx })}
          />
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-auto">
          <Button
            variant="ghost"
            className="gap-2 text-lg px-6"
            onClick={handlePrev}
            disabled={currentIdx === 0}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>
          <Button
            className="gap-2 text-lg px-10 h-14 rounded-xl shadow-lg"
            onClick={handleNext}
          >
            {currentIdx === mockQuestions.length - 1 ? "Finish" : "Next"}
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

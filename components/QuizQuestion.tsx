"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedOption?: number;
  onSelect: (index: number) => void;
}

export function QuizQuestion({ question, options, selectedOption, onSelect }: QuizQuestionProps) {
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <Card className="p-8 md:p-12 shadow-sm border-none bg-card/60 backdrop-blur-md">
        <h2 className="text-2xl md:text-3xl font-medium text-center leading-relaxed">
          {question}
        </h2>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, idx) => (
          <Button
            key={idx}
            variant={selectedOption === idx ? "default" : "outline"}
            className={`h-auto py-6 px-6 justify-start text-lg font-normal transition-all duration-200 border-2 ${
              selectedOption === idx ? "border-primary" : "border-border/50 hover:border-border"
            }`}
            onClick={() => onSelect(idx)}
          >
            <span className="font-bold mr-4 opacity-50">{letters[idx]}.</span>
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}

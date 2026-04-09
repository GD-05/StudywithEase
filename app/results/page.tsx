"use client";

import { ScoreCircle } from "@/components/ScoreCircle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Home, RotateCcw } from "lucide-react";
import Link from "next/link";

const mockReview = [
  { question: "What is the capital of France?", correct: true, answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", correct: true, answer: "Mars" },
  { question: "What is 2 + 2?", correct: false, answer: "4 (You: 5)", suggestion: "Basic arithmetic review" },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col p-6 md:p-12">
      <div className="max-w-3xl w-full mx-auto space-y-12">
        {/* Top Header */}
        <div className="flex">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>
        </div>

        {/* Score Display */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <ScoreCircle score={8} total={10} />
          <h2 className="text-3xl font-bold tracking-tight mt-4">Great job, Gaurav!</h2>
          <p className="text-muted-foreground text-center max-w-sm">
            You've mastered these concepts. Ready to take on something more challenging?
          </p>
        </div>

        {/* Review List */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground px-4">Review</h3>
          <div className="space-y-3">
            {mockReview.map((item, idx) => (
              <Card key={idx} className="p-6 border-none shadow-sm bg-card/50 backdrop-blur-sm flex items-start gap-4">
                {item.correct ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                )}
                <div className="space-y-1">
                  <p className="font-medium text-lg leading-snug">{item.question}</p>
                  <div className="py-2 px-3 bg-muted/50 rounded-lg inline-block text-sm">
                    <span className="text-muted-foreground">Review: </span>
                    <span className="font-semibold">Correct answer is {item.answer}</span>
                  </div>
                  {item.suggestion && (
                    <p className="text-xs text-muted-foreground italic">💡 {item.suggestion}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-4 pt-8">
          <Link href="/quiz" className="w-full">
            <Button className="w-full h-16 text-xl font-bold rounded-2xl shadow-xl gap-3">
              <RotateCcw className="w-6 h-6" />
              Retry Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

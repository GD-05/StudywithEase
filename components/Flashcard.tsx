"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

interface FlashcardProps {
  front: string;
  back: string;
}

export function Flashcard({ front, back }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 w-full max-w-md aspect-[3/4] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <Card className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 text-center bg-card shadow-lg border-none">
          <p className="text-2xl font-medium">{front}</p>
          <p className="absolute bottom-8 text-xs text-muted-foreground uppercase tracking-widest">Tap to flip</p>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center p-8 text-center bg-primary text-primary-foreground shadow-lg border-none">
          <p className="text-2xl font-medium">{back}</p>
        </Card>
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
